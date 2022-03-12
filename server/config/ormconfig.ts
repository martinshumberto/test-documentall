import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    console.log('TSTASFA: ', __dirname + '/../modules/**/*.entity{.ts,.js}');
    return {
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: String(configService.get('DB_PASSWORD')),
      database: configService.get('DB_NAME'),
      entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../migration/*.{ts,js}'],
      cli: {
        migrationsDir: __dirname + '/../migration',
      },
      synchronize: true,
      logging: true,
      extra: {
        ssl:
          process.env.NODE_ENV === 'production'
            ? { rejectUnauthorized: false }
            : false,
      },
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService],
};
