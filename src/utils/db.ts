import { Connection, createConnection } from 'mysql2';

let connection: Connection | null = null;

export const getDbConnection = async () => {
  if (!connection) {
    connection = await createConnection({
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }
  return connection;
};
