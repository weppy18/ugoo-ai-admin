import { DataSourceOptions } from 'typeorm';
import 'dotenv/config';

const config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    'src/domain/entities/**/*.ts'
  ],
  synchronize: true, // Set to false in production
};

export default config;
