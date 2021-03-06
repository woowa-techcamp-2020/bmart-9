import { Request, Response } from 'express';
import { CategoryRepo } from '../repository/category-repository';
import { Category } from '../../../shared';
import { InvalidParamsError } from '../errors/invalid-params';

export const getAllCategory = async (req: Request, res: Response) => {
  const allCategory = await CategoryRepo.selectAllCategory();

  const indexMapper = {};
  let idx = 1;

  const category = allCategory.reduce<Category[]>((acc, cate) => {
    if (!indexMapper[cate.id]) {
      indexMapper[cate.id] = idx;
      acc[indexMapper[cate.id]] = {
        id: cate.id,
        name: cate.name,
        subCategory: [],
      };
      idx++;
    }

    acc[indexMapper[cate.id]].subCategory.push({
      id: cate.c2Id,
      name: cate.c2Name,
    });

    return acc;
  }, []);

  res.json(category.slice(1));
};

export const getCategoryInfo = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) {
    throw new InvalidParamsError('ID');
  }

  const categoryInfo = await CategoryRepo.findOne(+id);
  res.json(categoryInfo);
};
