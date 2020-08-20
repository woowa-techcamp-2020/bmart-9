import { bmart } from './bmart';
import { Image } from '../../../shared';

export const getBannersImage = async () => {
  const { data } = await bmart.get<Image[]>('/image/banner');
  return data;
};
