import jwt from 'jsonwebtoken';
import { UserRepo } from '../repository/user-repository';
import { User } from '../../../shared';

export const createJWT = (id: number): string => {
  return jwt.sign({ id }, process.env.JWT_TOKEN || '');
};

export const verifyJWT = async (token: string): Promise<User | null> => {
  const verifyResult: any = jwt.verify(token, process.env.JWT_TOKEN || '');
  if (!verifyResult) {
    return null;
  }

  const { id } = verifyResult;
  return await UserRepo.findOne(id);
};
