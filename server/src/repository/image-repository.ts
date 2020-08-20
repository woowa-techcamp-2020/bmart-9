import { selectQueryExecuter } from '../utils/query-executor';
import { Image } from '../../../shared';

export class ImageRepo {
  static async selectAllBanners() {
    const selectAllBannersQuery = `
      SELECT
        *
      FROM
        banner
    `;

    // type generic
    const allBannerImages = await selectQueryExecuter<Image>(
      selectAllBannersQuery
    );
    return allBannerImages;
  }
}
