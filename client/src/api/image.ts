import { bmart } from './bmart';
import { Image } from '../../../shared';

export const getBannersImage = async () => {
  const { data } = await bmart.get<Image[]>('/image/banner');
  return data;
};

export const getIconsImage = async () => {
  const { data } = await bmart.get<Image[]>('/image/icon');
  return data;
};