import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  database: process.env.MYSQL_DB_NAME || 'blogs-api',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  dialect: 'mysql',
};

export = config;
