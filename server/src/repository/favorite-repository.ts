import {
  insertQueryExecuter,
  selectQueryExecuter,
  updateOrDeleteQueryExecuter,
} from '../utils/query-executor';
import { Favorite, FavoriteBody, FavoriteProductId } from '../../../shared';

export class FavoriteRepo {
  static async createFavorite({ productId, userId }: FavoriteBody) {
    const createNewFavoriteQuery = `
      INSERT INTO
        favorite(user_id, product_id)
      VALUES
        (${userId}, ${productId});
    `;

    return await insertQueryExecuter(createNewFavoriteQuery);
  }

  static async selectAllFavoriteProductId(
    userId: number
  ): Promise<FavoriteProductId[]> {
    const findFavoriteQuery = `
      SELECT
        product_id as productId
      FROM
        favorite
      WHERE
        user_id=${userId}
    `;

    const favorites = await selectQueryExecuter<Favorite>(findFavoriteQuery);
    return favorites.map(({ productId }) => productId);
  }

  static async deleteFavorite({
    productId,
    userId,
  }: FavoriteBody): Promise<number> {
    const deleteFavoriteQuery = `
      DELETE FROM
        favorite
      WHERE
        product_id=${productId} and user_id=${userId}
    `;

    return await updateOrDeleteQueryExecuter(deleteFavoriteQuery);
  }
}
