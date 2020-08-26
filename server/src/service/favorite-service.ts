import { Request, Response } from 'express';
import { FavoriteRepo } from '../repository/favorite-repository';
import { User } from '../../../shared';
import { InvalidParamsError } from '../errors/invalid-params';
import { DatabaseError } from '../errors/database-error';

export const getUsersFavorite = async (req: Request, res: Response) => {
  const { id } = req.user as User;

  const usersFavorites = await FavoriteRepo.selectAllFavoriteProductId(id);
  res.json(usersFavorites);
};

export const removeFavorite = async (req: Request, res: Response) => {
  const userId = (req.user as User).id;
  const productId = +req.params.productId;

  if (!productId || productId <= 0) {
    throw new InvalidParamsError('productId');
  }

  const removedCounter = await FavoriteRepo.deleteFavorite({
    userId,
    productId,
  });

  if (removedCounter) {
    return res.json(productId);
  }

  throw new DatabaseError('Fail to remove data');
};

export const createFavorite = async (req: Request, res: Response) => {
  const { productId } = req.body;
  const userId = (req.user as User).id;

  await FavoriteRepo.createFavorite({
    userId,
    productId,
  });

  res.json(productId);
};
