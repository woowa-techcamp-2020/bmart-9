import {
  insertQueryExecuter,
  selectQueryExecuter,
} from '../utils/query-executor';
import { Category, Product } from '../../../shared';

export class ProductRepo {
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
