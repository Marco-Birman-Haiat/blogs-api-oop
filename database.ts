import { connection } from "./database/connection";

const initDataBase = async () => await connection.execute(
  'DROP DATABASE IF EXISTS blogs_api;'
 + 'CREATE DATABASE blogs_api;'

+ 'USE blogs_api;'

+ 'CREATE TABLE users ('
  + 'id,'
  + ' saldo NOT_NULL);'
)

initDataBase();
