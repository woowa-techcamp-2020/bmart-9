import { DatabaseError } from '../errors/database-error';

export const databaseErrorHandler = (error: any) => {
  if (error) {
    throw new DatabaseError(error);
  }
};
