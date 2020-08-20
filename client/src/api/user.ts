import { bmart, bmartAuth } from './bmart';
import { User } from '../../../shared';

const getCurrentUser = async (token: string) => {
  const { data } = await bmartAuth(token).get<User>('/auth/current-user');

  return data;
};

export default {
  getCurrentUser
}