import { Connection, createConnection } from 'mysql2/promise';

let connection: Connection | null = null;

export const getDbConnection = async () => {
  if (!connection) {
    connection = await createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: '123456',
      database: 'DB',
    });
  }
  return connection;
};
