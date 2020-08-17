import {
  insertQueryExecuter,
  selectQueryExecuter,
  updateOrDeleteQueryExecuter,
} from '../utils/query-executor';

import {ProductDto} from "../dto/product-dto";

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

export class Product {
  static async create(args: ProductDto) {
    const { name, 
      discount,
      img,
      base_price,
      price,
      stock,
      created_at,
      updated_at,
      category1_id,
      category2_id } = args;

		const productCreateQuery = `
		INSERT INTO
      bmart.product(id, name, discount, img, base_price, price, stock, created_at, updated_at, category1_id, category2_id)
		VALUES
			(null, "${name}", ${discount}, "${img}", ${base_price}, ${price}, ${stock}, "${created_at}", "${updated_at}", ${category1_id}, ${category2_id});`;
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

    const Product:ProductType[] = await selectQueryExecuter<ProductType>(findOneProductQuery);
    return Product;
  }

  static async findAll(): Promise<ProductType[]>{
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

    const ProductList:ProductType[] = await selectQueryExecuter<ProductType>(findAllProductQuery);
    return ProductList;
  }

  static async update(args: Partial<ProductDto>) {
		const { id, ...rest } = args;

		const columnName = {
			name: "name",
      discount: "discount",
      price: "price",
      base_price: "base_price",
      created_at: "created_at",
      updated_at: "updated_at",
      stock: "stock",
      category1_id: "category1_id",
      category2_id: "category2_id",
      img: "img",
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

}
