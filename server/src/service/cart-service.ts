import { Request, Response } from 'express';
import { CartRepo } from '../repository/cart-repository';
import { InvalidParamsError } from '../errors/invalid-params';
import { User, CartQuantity, CreateCartBody } from '../../../shared';

// 검색
export const getAllCart = async (req: Request, res: Response) => {
  const userId = (req.user as User).id;

  const CartList = await CartRepo.findAll(userId);
  res.json(CartList);
};

export const getCartByProductId = async (req: Request, res: Response) => {
  const userId = (req.user as User).id;
  const productId = Number(req.params.productId);
  if (typeof productId !== 'number' || productId <= 0) {
    throw new InvalidParamsError('productId');
  }

  const cartDB = await CartRepo.findByProductId(userId, productId);
  res.json(cartDB);
};


// 추가
export const createCart = async (req: Request, res: Response) => {
  const userId = (req.user as User).id;
  const cartCreateParams: CreateCartBody = req.body

  const newCartId = await CartRepo.create(userId, cartCreateParams);
  const newCart = await CartRepo.findOne(newCartId);
  res.json(newCart[0]);
};

export const createTestCart = async (req: Request, res: Response) => {
  const userId = (req.user as User).id;

  const result = await CartRepo.createTestCart(userId);
  res.json(result);
};



// 수정
export const updateQuantity = async (req: Request, res: Response) => {
  const cartQuantityParams: CartQuantity = req.body;

  const updatedRows = await CartRepo.updateQuantity(cartQuantityParams);
  const updatedCart = await CartRepo.findOne(cartQuantityParams.id);
  res.json(updatedCart[0]);
};


// 삭제
export const deleteCart = async (req: Request, res: Response) => {
  const cartId = Number(req.params.id);
  if (typeof cartId !== 'number' || cartId <= 0) {
    throw new InvalidParamsError('cartId');
  }

  const removedRows = await CartRepo.delete(cartId);
  if (removedRows === 0) {
    res.json("삭제된거 없음");
    return;
  }

  res.json(cartId);
};

