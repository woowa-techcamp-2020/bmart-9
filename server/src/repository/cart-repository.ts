import {
  insertQueryExecuter,
  selectQueryExecuter,
  updateOrDeleteQueryExecuter,
} from '../utils/query-executor';
import { Cart, CreateCartBody, CartQuantity, CartDB } from '../../../shared';

export class CartRepo {

  // 검색
  static async findAll(userId: number): Promise<Cart[]> {
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
          on category2.category1_id = category1.id
        where cart.user_id = ${userId};
    `;

    const CartList: Cart[] = await selectQueryExecuter<Cart>(findAllCartQuery);
    return CartList;
  }

  static async findOne(cartId: number): Promise<Cart[]> {
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
          where cart.id = ${cartId};
    `;

    const cart: Cart[] = await selectQueryExecuter<Cart>(findOneCartQuery);
    return cart;
  }

  static async findByProductId(userId: number, id: number): Promise<CartDB[]> {
    const findOneCartQuery = `
        select cart.id id, cart.user_id userId, 
          cart.quantity quantity, 
          cart.product_id productId
        from 
          cart
        where cart.product_id = ${id} and cart.user_id=${userId};
    `;

    const cartDB: CartDB[] = await selectQueryExecuter<CartDB>(findOneCartQuery);
    return cartDB;
  }

  // 추가
  static async create(userId: number, cartParams: CreateCartBody) {
    const cartCreateQuery = `
      INSERT INTO bmart.cart(user_id, product_id, quantity)
      VALUES (${userId}, ${cartParams.productId},${cartParams.quantity})`;
    return await insertQueryExecuter(cartCreateQuery);
  }

  static async createTestCart(userId: number) {
    await updateOrDeleteQueryExecuter(
      `delete from cart where user_id = ${userId};`
    );
    const createTestQuery = [
      `insert INTO cart VALUES (NULL, ${userId}, 1, 10, '2020-08-31 12:00:00.000000','2020-08-31 12:00:00.000000');`,
      `insert INTO cart VALUES (NULL, ${userId}, 2, 10, '2020-08-31 12:00:00.000000','2020-08-31 12:00:00.000000');`,
      `insert INTO cart VALUES (NULL, ${userId}, 3, 10, '2020-08-31 12:00:00.000000','2020-08-31 12:00:00.000000');`,
      `insert INTO cart VALUES (NULL, ${userId}, 5, 10, '2020-08-31 12:00:00.000000','2020-08-31 12:00:00.000000');`,
      `insert INTO cart VALUES (NULL, ${userId}, 6, 10, '2020-08-31 12:00:00.000000','2020-08-31 12:00:00.000000');`,
      `insert INTO cart VALUES (NULL, ${userId}, 7, 10, '2020-08-31 12:00:00.000000','2020-08-31 12:00:00.000000');`,
    ];

    createTestQuery.map(async (query) => {
      await insertQueryExecuter(query);
    });
    return 'succeed';
  }

  // 수정
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

  // 삭제
  static async delete(id: number) {
    const deleteQuery = `DELETE FROM bmart.cart WHERE id=${id};`;
    return await updateOrDeleteQueryExecuter(deleteQuery);
  }
}
