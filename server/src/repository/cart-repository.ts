import {
  insertQueryExecuter,
  selectQueryExecuter,
  updateOrDeleteQueryExecuter,
} from '../utils/query-executor';
import { Cart, CreateCartBody, CartQuantity, CartDB } from '../../../shared';

// import { carmelToSnakeTemplate } from '../utils/carmel-to-snake-template';
import { format } from 'path';

export class CartRepo {
  static async findAll(): Promise<Cart[]> {
    const findAllCartQuery = `
      select cart.id id, cart.user_id userId, cart.quantity quantity, cart.created_at createdAt, cart.updated_at updatedAt, 
          cart.product_id productId,product.name name, product.img image, product.base_price basePrice, product.discount discount, product.price price, product.stock stock
        from 
          cart
        left join product
          on cart.product_id = product.id
        left join category2
          on product.category2_id = category2.id
        left join category1
          on category2.category1_id = category1.id;
    `;

    const CartList: Cart[] = await selectQueryExecuter<Cart>(findAllCartQuery);
    return CartList;
  }

  static async updateQuantity(cartParams: CartQuantity) {
    const { id, quantity } = cartParams;

    const updateQuery = `
			UPDATE
				bmart.cart
			SET
				quantity = ${quantity}
			WHERE
				id=${id}
			;`;
    return await updateOrDeleteQueryExecuter(updateQuery);
  }

  static async delete(id: number) {
    const deleteQuery = `DELETE FROM bmart.cart WHERE id=${id};`;
    return await updateOrDeleteQueryExecuter(deleteQuery);
  }

  static async createTestCart(id: number) {
    const createTestQuery = [
      `insert INTO cart VALUES (NULL, ${id}, 1, 10, '2020-08-31 12:00:00.000000','2020-08-31 12:00:00.000000');`,
      `insert INTO cart VALUES (NULL, ${id}, 2, 10, '2020-08-31 12:00:00.000000','2020-08-31 12:00:00.000000');`,
      `insert INTO cart VALUES (NULL, ${id}, 3, 10, '2020-08-31 12:00:00.000000','2020-08-31 12:00:00.000000');`,
      `insert INTO cart VALUES (NULL, ${id}, 5, 10, '2020-08-31 12:00:00.000000','2020-08-31 12:00:00.000000');`,
      `insert INTO cart VALUES (NULL, ${id}, 6, 10, '2020-08-31 12:00:00.000000','2020-08-31 12:00:00.000000');`,
      `insert INTO cart VALUES (NULL, ${id}, 7, 10, '2020-08-31 12:00:00.000000','2020-08-31 12:00:00.000000');`,
    ];

    await updateOrDeleteQueryExecuter(
      `delete from cart where user_id = ${id};`
    );
    createTestQuery.map(async (query) => {
      await insertQueryExecuter(query);
    });

    return 'succeed';
  }

  static async create(cartParams: CreateCartBody) {

    const cartCreateQuery = `
  	INSERT INTO
      bmart.cart(user_id, product_id, quantity)
    VALUES
     (${cartParams.userId}, ${cartParams.productId},${cartParams.quantity})
    `;
    return await insertQueryExecuter(cartCreateQuery);
  }

  static async findOne(id: number): Promise<Cart[]> {
    const findOneCartQuery = `
        select cart.id id, cart.user_id userId, cart.quantity quantity, cart.created_at createdAt, cart.updated_at updatedAt,
      cart.product_id productId, product.name name, product.img image, product.base_price basePrice, product.discount discount, product.price price, product.stock stock
          from 
            cart
          left join product
            on cart.product_id = product.id
          left join category2
            on product.category2_id = category2.id
          left join category1
            on category2.category1_id = category1.id
          where cart.id = ${id};
    `;

    const cart: Cart[] = await selectQueryExecuter<Cart>(findOneCartQuery);
    return cart;
  }

  static async findByProductId(id: number): Promise<CartDB[]> {
    const findOneCartQuery = `
        select cart.id id, cart.user_id userId, 
          cart.quantity quantity, 
          cart.product_id productId
        from 
          cart
        where cart.product_id = ${id};
    `;

    const cartDB: CartDB[] = await selectQueryExecuter<CartDB>(findOneCartQuery);
    return cartDB;
  }


  //// 아래는 작업 안됩.



  static async update(args: Partial<Cart>) {
    const { id, ...rest } = args;

    const columnName = {
      name: 'name',
      discount: 'discount',
      price: 'price',
      basePrice: 'base_price',
      stock: 'stock',
      category2Id: 'category2_id',
      image: 'img',
    };

    const updateTemplate = Object.entries(rest)
      .filter(([key, value]) => value !== undefined)
      .map(
        ([key, value]) =>
          `${columnName[key] || key}=${
          typeof value === 'number' ? value : `"${value}"`
          } `
      )
      .join(', ');

    console.log(updateTemplate);

    const updateQuery = `
    UPDATE
    bmart.cart
    SET
    ${updateTemplate}
    WHERE
    id = ${id}
    ; `;
    return await updateOrDeleteQueryExecuter(updateQuery);
  }

  static async selectCartByCategory2Id(id: number): Promise<Cart[]> {
    const findCartQuery = `
    SELECT
    id, name, discount, img as image, price, base_price as basePrice, category2_id as category2Id, stock
    FROM
    cart
    where
    category2_id = ${id}
    limit 10;
    `;

    const carts = await selectQueryExecuter<Cart>(findCartQuery);
    return carts;
  }
}
