import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from 'modules/app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '../..', 'public'));

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Accept, Authorization',
    );
    next();
  });

  app.enableCors({
    allowedHeaders: process.env.NODE_ENV === 'production' ? '*' : '',
    origin: process.env.NODE_ENV === 'production' ? '*' : 'http://localhost',
    credentials: true,
  });

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
