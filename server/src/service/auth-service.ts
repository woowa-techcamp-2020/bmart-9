import { Request, Response } from 'express';

declare global {
  namespace Express {
    interface Request {}
  }
}

export const socialSignIn = async (req: Request, res: Response) => {
  res.json('');
};

export const getCurrentUser = async (req: Request, res: Response) => {
  res.json(req.user);
};
