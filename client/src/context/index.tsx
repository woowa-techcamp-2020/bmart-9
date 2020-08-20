import { CombineProviderApp } from '../utils/createContext';
import { CounterProvider } from '../context/CounterContext';
import { CategoryProvider } from '../context/CategoryContext';
import { ProductProvider } from '../context/ProductContext';
import { UserProvider } from './UserContext';

export const CombinedProviders = CombineProviderApp(
  CounterProvider,
  CategoryProvider,
  ProductProvider,
  UserProvider
);
