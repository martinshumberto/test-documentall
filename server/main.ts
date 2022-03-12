import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { LoggerService } from 'modules/logger/logger.service';
import { ServerModule } from 'modules/server.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ServerModule);
  const logger: LoggerService = new LoggerService();

  if (process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Accept, Authorization',
      );
      next();
    });
  }

  app.enableCors();
  logger.verbose(`App listening on port => ${process.env.PORT || 4000}`);

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
