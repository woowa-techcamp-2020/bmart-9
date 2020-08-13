import { Request, Response, NextFunction } from 'express';
import { verifyJWT } from '../utils/jwt';
import { AuthenticateError } from '../errors/authenticate-error';

export const decodeJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.token;

  if (token) {
    const user = await verifyJWT(token as string);
    req.user = user;
    next();
    return;
  }

  next(new AuthenticateError());
};
