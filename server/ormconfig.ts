import * as dotenv from 'dotenv';

dotenv.config();

export = {
  type: 'postgres' as const,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['modules/**/*.entity.ts'],
  migrations: ['migration/*.{ts,js}'],
  cli: {
    migrationsDir: 'migration',
  },
  logging: true,
  synchronize: false,
  extra: {
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
  },
};
