import {
  insertQueryExecuter,
  selectQueryExecuter,
  updateOrDeleteQueryExecuter,
} from '../utils/query-executor';
import {
  Order,
  CreateOrderBody,
  OrderProduct,
  CreateOrderDB,
  UpdateOrderStatus,
} from '../../../shared';

export class OrderRepo {
  // 검색
  static async findAll(userId: number): Promise<Order[]> {
    const findAllOrderQuery = `
    select bmart.order.id id,
        bmart.order.user_id userId,
            user.name userName,
            bmart.order.name orderName,
            bmart.order.total_price totalPrice,
            bmart.order.status status, 
        bmart.order.created_at createdAt,
            bmart.order.latitude latitude, 
            bmart.order.longitude longitude
      from bmart.order
      left join user
        on bmart.order.user_id = user.id
          where bmart.order.user_id = ${userId}
        order by bmart.order.created_at desc;
    `;
    const OrderList: Order[] = await selectQueryExecuter<Order>(
      findAllOrderQuery
    );
    return OrderList;
  }

  static async findAllByAdmin(): Promise<Order[]> {
    const findAllOrderQuery = `
    select 
      bmart.order.id id,
      bmart.order.user_id userId,
      user.name userName,
      bmart.order.name orderName,
      bmart.order.total_price totalPrice,
      bmart.order.status status, 
      bmart.order.created_at createdAt,
      bmart.order.latitude latitude, 
      bmart.order.longitude longitude
    from
      bmart.order
    left join
      user
    on
      bmart.order.user_id = user.id
    order by
      bmart.order.created_at desc;

    `;

    const OrderList: Order[] = await selectQueryExecuter<Order>(
      findAllOrderQuery
    );
    return OrderList;
  }

  static async findOne(orderId: number): Promise<Order[]> {
    const findAllOrderQuery = `
    select bmart.order.id id,
        bmart.order.user_id userId,
            user.name userName,
            bmart.order.name orderName,
            bmart.order.total_price totalPrice,
            bmart.order.status status, 
        bmart.order.created_at createdAt,
            bmart.order.latitude latitude, 
            bmart.order.longitude longitude
      from bmart.order
      left join user
        on bmart.order.user_id = user.id
        where bmart.order.id = ${orderId};
    `;
    const OrderList: Order[] = await selectQueryExecuter<Order>(
      findAllOrderQuery
    );
    return OrderList;
  }

  static async findOrderProductByOrderId(
    orderId: number
  ): Promise<OrderProduct[]> {
    const findOrderProductQuery = `
    select order_product.id id, order_product.quantity quantity, 
          product.img img, product.name name, product.price price
      from 
        order_product 
      left join product
        on order_product.product_id = product.id
      where order_product.order_id = ${orderId};
    `;
    const OrderProductList: OrderProduct[] = await selectQueryExecuter<
      OrderProduct
    >(findOrderProductQuery);
    return OrderProductList;
  }

  // 추가
  static async create(userId: number, orderParams: CreateOrderDB) {
    const { createdAt, latitude, longitude, name, totalPrice } = orderParams;
    const cartCreateQuery = `
    INSERT INTO 
        bmart.order(user_id, created_at, latitude, longitude, name, total_price)
      VALUES 
        (${userId},"${createdAt}",${latitude},${longitude},"${name}",${totalPrice});
      `;
    return await insertQueryExecuter(cartCreateQuery);
  }

  static async createOrderProduct(
    quantity: number,
    orderId: number,
    productId: number
  ) {
    const cartCreateQuery = `
    INSERT INTO 
        bmart.order_product(quantity, order_id, product_id)
      VALUES 
        (${quantity},${orderId},${productId});
      `;
    return await insertQueryExecuter(cartCreateQuery);
  }

  // 수정
  static async updateStatus(orderParams: UpdateOrderStatus) {
    const { id, status } = orderParams;

    const updateQuery = `
			UPDATE
				bmart.order
			SET
        status = "${status}"
			WHERE
				id=${id}
			;`;
    return await updateOrDeleteQueryExecuter(updateQuery);
  }

  // 검색
  // static async findProductByOrderId(orderId: number): Promise<OrderProduct[]> {
  //   const findAllOrderQuery = `
  //     select bmart.order.id id , bmart.order.created_at createdAt, bmart.order.status status, bmart.order.user_id userId, bmart.order.latitude latitude, bmart.order.longitude longitude
  //       from bmart.order
  //       where bmart.order.user_id = ${orderId};
  //   `;
  //   const OrderProductList: OrderProduct[] = await selectQueryExecuter<OrderProduct>(findAllOrderQuery);
  //   return OrderProductList;
  // }
}
