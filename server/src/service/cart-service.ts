import { Request, Response } from 'express';
import { CartRepo } from '../repository/cart-repository';
import { InvalidParamsError } from '../errors/invalid-params';

export const getAllCart = async (req: Request, res: Response) => {
  const CartList = await CartRepo.findAll();
  res.json(CartList);
};

export const updateQuantity = async (req: Request, res: Response) => {
  const updatedRows = await CartRepo.updateQuantity(req.body);
  const updatedCart = await CartRepo.findOne(req.body.id);
  res.json(updatedCart[0]);
};

export const deleteCart = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (typeof id !== 'number' || id <= 0) {
    throw new InvalidParamsError('id');
  }

  const removedRows = await CartRepo.delete(id);
  if (removedRows === 0) {
    res.json("삭제된거 없음");
    return;
  }

  res.json(id);
};

export const createTestCart = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await CartRepo.createTestCart(id);
  res.json(result);
};

// export const createCart = async (req: Request, res: Response) => {
//   const newCartId = await CartRepo.create(req.body);

//   // error 처리 해야함 

//   const newCart = await CartRepo.findOne(newCartId);

//   res.json(newCart);
// };

// export const updateCart = async (req: Request, res: Response) => {
//   const CartList = await CartRepo.update();
//   res.json(CartList);
// };

// export const deleteCart = async (req: Request, res: Response) => {
//   const CartList = await CartRepo();
//   res.json(CartList);
// };

// export const updateCart = async (req: Request, res: Response) => {
//   const CartDto = new CartDto(req.body);

//   const updatedRows = await CartRepo.update(CartDto);

//   // error 처리 해야함 

//   const updatedCart = await CartRepo.findOne(CartDto.getId());

//   res.json(updatedCart);
// }