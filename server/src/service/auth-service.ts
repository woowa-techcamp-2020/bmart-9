import { Request, Response } from 'express';
import { baseUrl, CLIENT_PORT } from '../urlConfig';

declare global {
  namespace Express {
    interface Request {}
  }
}

export const socialSignIn = async (req: Request, res: Response) => {
  res.redirect(`${baseUrl}${CLIENT_PORT}/auth/${req.authInfo}`);
};

export const getCurrentUser = async (req: Request, res: Response) => {
  res.json(req.user);
};
