import axios from 'axios';
import cheerio from 'cheerio';
import { pool } from './db-connection-handler';
import { promiseHandler } from './promise-handler';
import { databaseErrorHandler } from './error-handler';
import { Category } from '../../../shared';
/* type은 각자 팀의 디비 형태에 맞게 설정해주면 됩니다 */

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  discount_percentage: number;
  base_price: number;
  category2_id: number;
};

const BASE_COUPANG_URL = 'https://www.coupang.com/np/categories/';
const FRESH_URL = '393760';

export const getDataFromCoupang = async () => {
  const conn = await pool.getConnection();

  const bigCategories = await getCategory(FRESH_URL);
  // insert into category1
  await insertIntoBigCategory(bigCategories, conn);

  // insert into category2
  await insertIntoSmallCategory(bigCategories, conn);

  // insert products by small category
  await insertIntoProduct(bigCategories, conn);

  conn.release();
};

export const getCategory = async (
  categoryCode: string,
  isSub = false
): Promise<Category[]> => {
  const { data } = await axios.get(`${BASE_COUPANG_URL}${categoryCode}`);

  const $ = cheerio.load(data);
  const cateEle = $(
    isSub
      ? 'li.search-option-item.selected.opened li'
      : 'div#searchCategoryComponent li'
  );
  const categories = [];
  cateEle.map((_, cate) => {
    const attr = cate.attribs['class'];
    if (attr.includes('selected')) {
      return;
    }

    /* 각자 팀의 디비 데이터를 저장해주면 됩니다 */
    const id = +cate.attribs['data-linkcode'];
    const name = cate.children.find((ele) => ele.name === 'label').children[0]
      .data;
    categories.push({ id, name });
  });
  return categories;
};

export const getProducts = async (categoryCode: string): Promise<Product[]> => {
  const { data } = await axios.get(`${BASE_COUPANG_URL}${categoryCode}`);

  const $ = cheerio.load(data);
  const productEle = $('ul#productList li');

  const getData = (ele: CheerioElement, className: string) => {
    const tmp = $(ele).find(`dd.descriptions .${className}`)[0];
    if (!tmp) {
      return '';
    }
    return tmp.children[0].data.trim();
  };

  /* 각자 팀의 디비 데이터를 저장해주면 됩니다 */
  const products: Product[] = [];
  productEle.map((_, ele) => {
    const id = toNumber($(ele).attr('id'));
    const image = $(ele).find('dt img').attr('src').slice(2);
    const name = getData(ele, 'name');
    const base_price = toNumber(getData(ele, 'base-price'));
    const discount_percentage = toNumber(getData(ele, 'discount-percentage'));
    const price = toNumber(getData(ele, 'price-value'));

    /* 각자 팀의 디비 데이터를 저장해주면 됩니다 */
    products.push({
      id,
      name,
      image,
      price,
      discount_percentage,
      base_price,
      category2_id: +categoryCode,
    });
  });

  return products;
};

export const insertIntoBigCategory = async (
  categories: Category[],
  conn: any
) => {
  const createBigCategory = categories.map(async (cate) => {
    /* 각자 팀의 디비에 맞는 쿼리문을 작성해주시면 됩니다 */
    const createNewCategoryQuery = `
      INSERT INTO
        category1(id, name)
      VALUES
        ("${cate.id}", "${cate.name}");
      `;
    const [queryResult, error] = await promiseHandler(
      conn.query(createNewCategoryQuery)
    );

    databaseErrorHandler(error);
  });

  await Promise.all(createBigCategory);
};

export const insertIntoSmallCategory = async (
  categories: Category[],
  conn: any
) => {
  const createSubCategory = categories.map(async (bigCate) => {
    const subCategories = await getCategory(bigCate.id.toString(), true);

    const subCatePromise = subCategories.map(async (cate) => {
      /* 각자 팀의 디비에 맞는 쿼리문을 작성해주시면 됩니다 */
      const createNewCategoryQuery = `
          INSERT INTO
            category2(id, name, category1_id)
          VALUES
            ("${cate.id}", "${cate.name}", ${bigCate.id});
          `;
      const [queryResult, error] = await promiseHandler(
        conn.query(createNewCategoryQuery)
      );

      databaseErrorHandler(error);
    });

    await Promise.all(subCatePromise);
    bigCate.subCategory = subCategories;
  });

  await Promise.all(createSubCategory);
};

export const insertIntoProduct = async (categories: Category[], conn: any) => {
  const getAllProductPromise = categories.map(async (bigCate) => {
    const getSubCategoryPromise = bigCate.subCategory.map(async (subCate) => {
      const products = await getProducts(`${subCate.id}`);
      const productsPromise = products.map(async (product) => {
        const {
          id,
          name,
          image,
          base_price,
          price,
          discount_percentage,
        } = product;
        /* 각자 팀의 디비에 맞는 쿼리문을 작성해주시면 됩니다 */
        const productCreateQuery = `
            INSERT INTO
              product(id, name, discount, img, base_price, price, stock, created_at, updated_at, category1_id, category2_id)
            VALUES
              (${id}, "${name}", ${discount_percentage}, "${image}", ${base_price}, ${price}, 100, NOW(), NOW(), ${bigCate.id}, ${subCate.id});`;

        const [queryResult, error] = await promiseHandler(
          conn.query(productCreateQuery)
        );

        databaseErrorHandler(error);
      });
      await Promise.all(productsPromise);
    });

    await Promise.all(getSubCategoryPromise);
  });

  await Promise.all(getAllProductPromise);
};

export const toNumber = (input: string) => {
  if (!input) {
    return 0;
  }
  const nums = input.match(/\d+/g);
  return nums ? +nums.join('') : 0;
};
