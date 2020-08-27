import { CombineProviderApp } from '../utils/createContext';
import { CategoryProvider } from '../context/CategoryContext';
import { ProductProvider } from '../context/ProductContext';
import { CartProvider } from '../context/CartContext';
import { UserProvider } from './UserContext';
import { SnackbarProvider } from './SnackbarContext';
import { SearchProvider } from './SearchContext';
import { CartAddProvider } from './CartAddContext';
import { FavoriteProvider } from './FavoriteContext';
import { OrderProvider } from './OrderContext';

export const CombinedProviders = CombineProviderApp(
  CategoryProvider,
  ProductProvider,
  UserProvider,
  CartProvider,
  SnackbarProvider,
  SearchProvider,
  CartAddProvider,
  FavoriteProvider,
  OrderProvider
);
