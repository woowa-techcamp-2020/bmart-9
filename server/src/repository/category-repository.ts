import {
  insertQueryExecuter,
  selectQueryExecuter,
} from '../utils/query-executor';

export type Category1 = {
  id: number;
  name: string;
};

export type Category2 = {
  id: number;
  name: string;
  category1_id: number;
};

export class Category {
  static async createCategory1({ id, name }: Category1) {
    const createNewCategoryQuery = `
      INSERT INTO
        category1(id, name)
      VALUES
        ("${id}", "${name}");
    `;

    return await insertQueryExecuter(createNewCategoryQuery);
  }

  static async createCategory2({ id, name, category1_id }: Category2) {
    const createNewCategoryQuery = `
      INSERT INTO
        category2(id, name, category1_id)
      VALUES
        ("${id}", "${name}", ${category1_id});
    `;

    return await insertQueryExecuter(createNewCategoryQuery);
  }

  static async findOne(id: number): Promise<Category2> {
    const findOneCategory = `
      SELECT
        id, name
      FROM
        category2
      WHERE
        id=${id}
    `;

    const [category, _] = await selectQueryExecuter<Category2>(findOneCategory);
    return category;
  }

  static async findOneOrCreateNew({
    id,
    name,
    category1_id,
  }: Category2): Promise<Category2 | Number> {
    const existedCategory = await this.findOne(id);

    if (existedCategory) {
      return existedCategory;
    }

    return await this.createCategory2({ id, name, category1_id });
    // const findOneCategory = `
    //   SELECT
    //     id, name
    //   FROM
    //     category2
    //   WHERE
    //     id=${id}
    // `;

    // const [category, _] = await selectQueryExecuter<Category2>(findOneCategory);
    // return category;
  }

  // static async findBySocialId(socialId: number): Promise<UserType> {
  //   const findOneUserQuery = `
  //     SELECT
  //       id, name
  //     FROM
  //       user
  //     WHERE
  //       social_id=${socialId}
  //   `;

  //   const [user, _] = await selectQueryExecuter<UserType>(findOneUserQuery);
  //   return user;
  // }
}
