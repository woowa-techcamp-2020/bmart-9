import { bmart, bmartAuth } from './bmart';
import { Search } from '../../../shared';

const getAll = async (token: string) => {
  const { data } = await bmartAuth(token).get<Search[]>('/search');

  return data;
};

const getByKeyword = async (token: string, keyword: string) => {
  const { data } = await bmartAuth(token).get<Search>(`/search/${keyword}`);

  return data;
};

const removeOne = async (token: string, id: number) => {
  const { data } = await bmartAuth(token).delete(`/search/${id}`);

  return data;
};

const addNewSearch = async (token: string, keyword: string) => {
  const { data } = await bmartAuth(token).post<Search>(`/search`, { keyword });

  return data;
};

export default {
  getAll,
  removeOne,
  addNewSearch,
};
