import {
  insertQueryExecuter,
  selectQueryExecuter,
} from '../utils/query-executor';
import { User } from '../../../shared';

export type SocialSignUpBody = {
  name: string;
  socialId: string;
};

export class UserRepo {
  static async createWithSocial({ socialId, name }: SocialSignUpBody) {
    const createNewUserQuery = `
      INSERT INTO
        user(name, social_id, created_at)
      VALUES
        ("${name}", "${socialId}", NOW());
    `;

    return await insertQueryExecuter(createNewUserQuery);
  }

  static async findOne(id: number): Promise<User> {
    const findOneUserQuery = `
      SELECT
        id, name
      FROM
        user
      WHERE
        id=${id}
    `;

    const [user, _] = await selectQueryExecuter<User>(findOneUserQuery);
    return user;
  }

  static async findBySocialId(socialId: number): Promise<User> {
    const findOneUserQuery = `
      SELECT
        id, name
      FROM
        user
      WHERE
        social_id=${socialId}
    `;

    const [user, _] = await selectQueryExecuter<User>(findOneUserQuery);
    return user;
  }
}
