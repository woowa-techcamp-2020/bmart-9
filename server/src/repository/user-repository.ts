import {
  insertQueryExecuter,
  selectQueryExecuter,
} from '../utils/query-executor';

export type SocialSignUpBody = {
  name: string;
  socialId: string;
};

export type UserType = {
  id: number;
  name: string;
};

export class User {
  static async createWithSocial({ socialId, name }: SocialSignUpBody) {
    const createNewUserQuery = `
      INSERT INTO
        user(name, social_id, created_at)
      VALUES
        ("${name}", "${socialId}", NOW());
    `;

    return await insertQueryExecuter(createNewUserQuery);
  }

  static async findOne(id: number): Promise<UserType> {
    const findOneUserQuery = `
      SELECT
        id, name
      FROM
        user
      WHERE
        id=${id}
    `;

    const [user, _] = await selectQueryExecuter<UserType>(findOneUserQuery);
    return user;
  }

  static async findBySocialId(socialId: number): Promise<UserType> {
    const findOneUserQuery = `
      SELECT
        id, name
      FROM
        user
      WHERE
        social_id=${socialId}
    `;

    const [user, _] = await selectQueryExecuter<UserType>(findOneUserQuery);
    return user;
  }
}
