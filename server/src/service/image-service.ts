import { Request, Response } from 'express';
import { ImageRepo } from '../repository/image-repository';

export const getBannerImage = async (req: Request, res: Response) => {
  const allBannerImages = await ImageRepo.selectAllBanners();

  res.json(allBannerImages);
};
