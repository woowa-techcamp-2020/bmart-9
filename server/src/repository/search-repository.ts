import {
  insertQueryExecuter,
  selectQueryExecuter,
  updateOrDeleteQueryExecuter,
} from '../utils/query-executor';
import { Search, CreateSearch } from '../../../shared';

export class SearchRepo {
  static async createSearch({ keyword, userId }: CreateSearch) {
    const createNewCategoryQuery = `
      INSERT INTO
        search(user_id, keyword, created_at)
      VALUES
        ("${userId}", "${keyword}", NOW());
    `;
    return await insertQueryExecuter(createNewCategoryQuery);
  }

  static async selectRecentSearch(userId: number): Promise<Search[]> {
    const selectRecentSearchQuery = `
      SELECT
        id, keyword
      FROM
        search
      WHERE
        user_id=${userId}
      ORDER BY
        created_at DESC
    `;
    const recentSearch = await selectQueryExecuter<Search>(
      selectRecentSearchQuery
    );
    return recentSearch;
  }

  static async deleteSearch(id: number): Promise<number> {
    const deleteSearchQuery = `
      DELETE FROM
        search
      WHERE
        id=${id}
    `;
    return await updateOrDeleteQueryExecuter(deleteSearchQuery);
  }
}
