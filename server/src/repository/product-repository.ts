import {
  insertQueryExecuter,
  selectQueryExecuter,
  updateOrDeleteQueryExecuter,
} from '../utils/query-executor';
import { Product, CreateProductBody } from '../../../shared';

export type SocialSignUpBody = {
  name: string;
  socialId: string;
};

export type ProductType = {
  id: number;
  name: string;
  discount: number;
  img: string;
  base_price: number;
  price: number;
  stock: number;
  created_at: string;
  updated_at: string;
  category1: string;
  category2: string;
};


export class ProductRepo {
  static async create(args: CreateProductBody) {
    const { name,
      discount,
      image,
      basePrice,
      price,
      stock,
      createdAt,
      updatedAt,
      category2Id } = args;

    const productCreateQuery = `
		INSERT INTO
      bmart.product(name, discount, img, base_price, price, stock, created_at, updated_at, category1_id, category2_id)
		VALUES
			("${name}", ${discount}, "${image}", ${basePrice}, ${price}, ${stock}, "${createdAt}", "${updatedAt}", null, ${category2Id});`;
    return await insertQueryExecuter(productCreateQuery);
  }

  static async findOne(id: number): Promise<ProductType[]> {
    const findOneProductQuery = `
      select product.id id, product.name name, product.discount discount, 
            product.img img, product.base_price base_price, product.price price, product.stock stock, 
            product.created_at created_at, product.updated_at updated_at, 
            category1.name category1, category2.name category2
      from product
        left join category2
          on product.category2_id = category2.id
        left join category1
          on category2.category1_id = category1.id
        where product.id = ${id};
    `;

    const product: ProductType[] = await selectQueryExecuter<ProductType>(findOneProductQuery);
    return product;
  }

  static async findAll(): Promise<ProductType[]> {
    const findAllProductQuery = `
    select product.id id, product.name name, product.discount discount, 
          product.img img, product.base_price base_price, product.price price, product.stock stock, 
          product.created_at created_at, product.updated_at updated_at, 
          category1.name category1, category2.name category2
    from product
      left join category2
        on product.category2_id = category2.id
      left join category1
        on category2.category1_id = category1.id;
    `;

    const ProductList: ProductType[] = await selectQueryExecuter<ProductType>(findAllProductQuery);
    return ProductList;
  }

  static async update(args: Partial<Product>) {
    const { id, ...rest } = args;

    const columnName = {
      name: "name",
      discount: "discount",
      price: "price",
      basePrice: "base_price",
      stock: "stock",
      category2Id: "category2_id",
      image: "img",
    };

    const updateTemplate = Object.entries(rest)
      .filter(([key, value]) => value !== undefined)
      .map(
        ([key, value]) =>
          `${columnName[key] || key}=${
          typeof value === "number" ? value : `"${value}"`
          }`
      )
      .join(", ");


    console.log(updateTemplate);

    const updateQuery = `
			UPDATE
				bmart.product
			SET
				${updateTemplate}
			WHERE
				id=${id}
			;`;
    return await updateOrDeleteQueryExecuter(updateQuery);
  }

  static async selectProductByCategory2Id(id: number): Promise<Product[]> {
    const findProductQuery = `
      SELECT
        id, name, discount, img as image, price, base_price as basePrice, category2_id as category2Id, stock
      FROM
        product
      where
        category2_id=${id}
      limit 10;
    `;

    const products = await selectQueryExecuter<Product>(findProductQuery);
    return products;
  }

}
