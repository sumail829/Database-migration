import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './config/data-source';

async function bootstrap() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log('Database connection initialized');
  }
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3005);
}
bootstrap();
