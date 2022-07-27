import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true,
    transform: true, // it will transform the payload accordingly
    forbidNonWhitelisted: true // it will not allow non whitelist properties to pass
  })); // whitelist true will cut down extra parameters passed to our post requests

  await app.listen(4000);
}
bootstrap();
