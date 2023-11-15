// ormconfig.ts
import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'yourDatabase',
  entities: [
    'src/domain/entities/**/*.ts'
  ],
  synchronize: true, // Set to false in production
};

export default config;
