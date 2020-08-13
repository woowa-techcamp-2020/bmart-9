import { promiseHandler } from './promise-handler';
import { pool } from './db-connection-handler';
import { databaseErrorHandler } from './error-handler';

export type MysqlInsertOrUpdateResult = {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  serverStatus: number;
  warningCount: number;
  message: string;
  protocol41: boolean;
  changedRows: number;
};

export const selectQueryExecuter = async <T>(query: string): Promise<T[]> => {
  const conn = await pool.getConnection();
  const [queryResult, error] = await promiseHandler(conn.query(query));

  databaseErrorHandler(error);

  const [result, _] = queryResult;
  conn.release();
  return result as T[];
};

export const insertQueryExecuter = async (
  query: string
): Promise<[number, any]> => {
  const conn = await pool.getConnection();
  const [[{ insertId }, _], error] = await promiseHandler(conn.query(query));
  conn.release();
  return [insertId, error];
};

export const updateOrDeleteQueryExecuter = async (
  query: string
): Promise<[number, any]> => {
  const conn = await pool.getConnection();
  const [[{ affectedRows }, _], error] = await promiseHandler(
    conn.query(query)
  );
  conn.release();
  return [affectedRows, error];
};

export const transactionQueryExecuter = async (...queries: Promise<any>[]) => {
  const conn = await pool.getConnection();
  try {
    conn.beginTransaction();
    for (const query of queries) {
      await promiseHandler(query);
    }
    conn.commit();
    return true;
  } catch (e) {
    conn.rollback();
    return false;
  }
};
