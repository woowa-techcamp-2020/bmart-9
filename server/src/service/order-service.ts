import { Request, Response } from 'express';
import { OrderRepo } from '../repository/order-repository';
import { InvalidParamsError } from '../errors/invalid-params';
import {
  User,
  CreateOrderBody,
  Order,
  CreateOrderDB,
  Cart,
  UpdateOrderStatus,
} from '../../../shared';

// 검색
export const getOneOrder = async (req: Request, res: Response) => {
  const orderId = Number(req.params.orderId);
  if (typeof orderId !== 'number' || orderId <= 0) {
    throw new InvalidParamsError('orderId');
  }
  const [order, _] = await OrderRepo.findOne(orderId);
  res.json(order);
};

export const getAllOrdersByAdmin = async (req: Request, res: Response) => {
  const order = await OrderRepo.findAllByAdmin();
  res.json(order);
};

export const getAllOrder = async (req: Request, res: Response) => {
  const userId = (req.user as User).id;
  const OrderList = await OrderRepo.findAll(userId);
  res.json(OrderList);
};

export const getAllOrderProdutdsByOrderId = async (
  req: Request,
  res: Response
) => {
  const orderId = Number(req.params.orderId);
  if (typeof orderId !== 'number' || orderId <= 0) {
    throw new InvalidParamsError('orderId');
  }
  const OrderProductList = await OrderRepo.findOrderProductByOrderId(orderId);
  res.json(OrderProductList);
};

// 추가
export const createOrder = async (req: Request, res: Response) => {
  const userId = (req.user as User).id;
  const orderCreateParams: CreateOrderBody = req.body;

  let name = '';
  if (orderCreateParams.cartList.length > 1) {
    name = `${orderCreateParams.cartList[0].name} 외 ${
      orderCreateParams.cartList.length - 1
    }개`;
  } else {
    name = `${orderCreateParams.cartList[0].name}`;
  }

  let totalPrice = 0;
  orderCreateParams.cartList.forEach(
    (cart) => (totalPrice += cart.price * cart.quantity)
  );

  const newOrderParams: CreateOrderDB = {
    createdAt: orderCreateParams.createdAt,
    longitude: orderCreateParams.longitude,
    latitude: orderCreateParams.latitude,
    userId: userId,
    name: name,
    totalPrice: totalPrice,
  };

  // order추가완료
  const newOrderId = await OrderRepo.create(userId, newOrderParams);
  const newOrder = await OrderRepo.findOne(newOrderId);

  // order Products 추가
  const result = await createOrderProduct(
    newOrderId,
    orderCreateParams.cartList
  );

  res.json(newOrder[0]);
};

const createOrderProduct = async (orderId: number, cartList: Cart[]) => {
  const promiseList: Promise<number>[] = [];
  cartList.forEach((cart) => {
    promiseList.push(
      OrderRepo.createOrderProduct(cart.quantity, orderId, cart.productId)
    );
  });
  const result = await Promise.all(promiseList);
  return result;
};

// 수정
export const updateStatus = async (req: Request, res: Response) => {
  const orderQuantityParams: UpdateOrderStatus = req.body;

  const updatedRows = await OrderRepo.updateStatus(orderQuantityParams);
  const updatedOrder = await OrderRepo.findOne(orderQuantityParams.id);
  res.json(updatedOrder[0]);
};
