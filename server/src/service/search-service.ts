import { Request, Response } from 'express';
import { SearchRepo } from '../repository/search-repository';
import { User } from '../../../shared';
import { InvalidParamsError } from '../errors/invalid-params';
import { DatabaseError } from '../errors/database-error';

export const getRecentSearch = async (req: Request, res: Response) => {
  const { id } = req.user as User;

  const recentSearch = await SearchRepo.selectRecentSearch(id);
  res.json(recentSearch);
};

export const removeSearchHistory = async (req: Request, res: Response) => {
  const id = +req.params.id;

  if (!id || id <= 0) {
    throw new InvalidParamsError('id');
  }

  const removedCounter = await SearchRepo.deleteSearch(id);

  if (removedCounter) {
    return res.json(id);
  }

  throw new DatabaseError('Fail to remove data');
};

export const createSearchHistory = async (req: Request, res: Response) => {
  const { keyword } = req.body;
  const { id } = req.user as User;

  const newSearchId = await SearchRepo.createSearch({
    keyword,
    userId: id,
  });

  const result = { id: newSearchId, keyword };
  res.json(result);
};
