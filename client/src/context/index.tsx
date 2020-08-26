import { CombineProviderApp } from '../utils/createContext';
import { CounterProvider } from '../context/CounterContext';
import { CategoryProvider } from '../context/CategoryContext';
import { ProductProvider } from '../context/ProductContext';
import { CartProvider } from '../context/CartContext';
import { UserProvider } from './UserContext';
import { SnackbarProvider } from './SnackbarContext';
import { SearchProvider } from './SearchContext';
import { FavoriteProvider } from './FavoriteContext';

export const CombinedProviders = CombineProviderApp(
  CounterProvider,
  CategoryProvider,
  ProductProvider,
  UserProvider,
  CartProvider,
  SnackbarProvider,
  SearchProvider,
  FavoriteProvider
);
