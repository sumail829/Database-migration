import 'dotenv/config';
import { DataSource } from 'typeorm';

// // @ts-ignore
// console.log('DATABASE_PASSWORD:', JSON.stringify(process.env.DATABASE_PASSWORD));
// console.log('TYPE:', typeof process.env.DATABASE_PASSWORD);

import "reflect-metadata";
import { User } from 'src/user/entities/user.entity';

console.log({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
});
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ["dist/migrations/*.js"],
  synchronize: false,
});