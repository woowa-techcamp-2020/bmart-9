import {
  insertQueryExecuter,
  selectQueryExecuter,
} from '../utils/query-executor';
import { Category } from '../../../shared';

type TempCategory = {
  id: number;
  name: string;
  c2Id: number;
  c2Name: string;
};

export class CategoryRepo {
  static async createCategory1({ id, name }: Category) {
    const createNewCategoryQuery = `
      INSERT INTO
        category1(id, name)
      VALUES
        ("${id}", "${name}");
    `;

    return await insertQueryExecuter(createNewCategoryQuery);
  }

  static async createCategory2({
    id,
    name,
    category1_id,
  }: Category & { category1_id: number }) {
    const createNewCategoryQuery = `
      INSERT INTO
        category2(id, name, category1_id)
      VALUES
        ("${id}", "${name}", ${category1_id});
    `;

    return await insertQueryExecuter(createNewCategoryQuery);
  }

  static async findOne(id: number): Promise<Category> {
    const findOneCategory = `
      SELECT
        id, name
      FROM
        category2
      WHERE
        id=${id}
    `;

    const [category, _] = await selectQueryExecuter<Category>(findOneCategory);
    return category;
  }

  static async findOneOrCreateNew({
    id,
    name,
    category1_id,
  }: Category & { category1_id: number }): Promise<Category | Number> {
    const existedCategory = await this.findOne(id);

    if (existedCategory) {
      return existedCategory;
    }

    return await this.createCategory2({ id, name, category1_id });
  }

  static async selectAllCategory(): Promise<TempCategory[]> {
    const findCategoryQuery = `
      SELECT
        C1.id id, C1.name name, C2.id c2Id, C2.name c2Name
      FROM
        category1 as C1
      join
        category2 as C2
      on
        C2.category1_id = C1.id
    `;

    const categories = await selectQueryExecuter<TempCategory>(
      findCategoryQuery
    );
    return categories;
  }
}
