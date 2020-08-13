import jwt from 'jsonwebtoken';
import { UserType, User } from '../repository/user-repository';

export const createJWT = (id: number): string => {
  return jwt.sign({ id }, process.env.JWT_TOKEN || '');
};

export const verifyJWT = async (token: string): Promise<UserType | null> => {
  const verifyResult: any = jwt.verify(token, process.env.JWT_TOKEN || '');
  if (!verifyResult) {
    return null;
  }

  const { id } = verifyResult;
  return await User.findOne(id);
};
