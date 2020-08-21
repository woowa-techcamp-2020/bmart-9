import { useCreator } from '../utils/createContext';
import { SearchContexts } from '../context/SearchContext';
import API from '../api';
import { useUser } from './useUser';

export const useSearch = () => {
  const [search, dispatch] = useCreator(SearchContexts);
  const { isSearched, history, searchedProducts } = search;
  const { user } = useUser();

  const fetchSearch = async () => {
    const searchHistory = user ? await API.Search.getAll(user.token) : [];
    dispatch({ type: 'GET_SEARCH', search: searchHistory });
  };

  const removeSearch = async (id: number) => {
    if (!user) {
      return;
    }
    const removedId = await API.Search.removeOne(user.token, id);
    dispatch({ type: 'REMOVE_SEARCH', id: removedId });
  };

  const searchByKeyword = async (keyword: string) => {
    const products = await API.Product.getByKeyword(keyword);
    if (!user) {
      return dispatch({ type: 'ADD_SEARCH', newSearch: null, products });
    }

    const newSearch = await API.Search.addNewSearch(user.token, keyword);
    dispatch({ type: 'ADD_SEARCH', newSearch, products });
  };

  const onLeaveHandler = () => {
    dispatch({ type: 'SET_DEFAULT' });
  };

  return {
    isSearched,
    history: history.slice(0, 5),
    searchedProducts,
    fetchSearch,
    removeSearch,
    searchByKeyword,
    onLeaveHandler,
  };
};
