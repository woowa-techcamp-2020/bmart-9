import { Request, Response } from 'express';
import { ProductRepo } from '../repository/product-repository';
import { Category } from '../../../shared';
import { InvalidParamsError } from '../errors/invalid-params';
export const getProductByCategory2Id = async (req: Request, res: Response) => {
  const id = Number(req.params.category2_id);
  if (typeof id !== 'number' || id <= 0) {
    throw new InvalidParamsError('category2_id');
  }

  const products = await ProductRepo.selectProductByCategory2Id(id);

  res.json(products);
};
