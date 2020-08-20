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

  static async selectAllCategoryIcons() {
    const selectAllCategoryIconsQuery = `
      SELECT
        *
      FROM
        icon
      WHERE
        name LIKE 'main%'
    `;

    // type generic
    const allCategoryIcons = await selectQueryExecuter<Image>(
      selectAllCategoryIconsQuery
    );
    return allCategoryIcons;
  }
}
