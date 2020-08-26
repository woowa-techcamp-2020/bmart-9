import { Request, Response } from 'express';
import { FavoriteRepo } from '../repository/favorite-repository';
import { User } from '../../../shared';
import { InvalidParamsError } from '../errors/invalid-params';
import { DatabaseError } from '../errors/database-error';
import { ProductRepo } from '../repository/product-repository';

export const getUsersFavorite = async (req: Request, res: Response) => {
  const { id } = req.user as User;

  const usersFavorites = await FavoriteRepo.selectAllFavoriteProductId(id);
  res.json(usersFavorites);
};

export const getUsersFavoriteProducts = async (req: Request, res: Response) => {
  const { id } = req.user as User;

  const usersFavorites = await FavoriteRepo.selectAllFavoriteProductId(id);

  const favoriteProducts = [];

  if (!usersFavorites || usersFavorites.length === 0) {
    return res.json(usersFavorites);
  }

  const fetchProductPromise = usersFavorites.map(async (productId) => {
    const product = await ProductRepo.findOne(productId);
    favoriteProducts.push(product);
  });

  await Promise.all(fetchProductPromise);

  res.json(favoriteProducts);
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
