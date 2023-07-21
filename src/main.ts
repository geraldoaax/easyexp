import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const appService = app.get(AppService);
  const parsedData = await appService.readXmlFile();

  console.log(JSON.stringify(parsedData, null, 2));
  process.exit();

  const server = await NestFactory.create(AppModule);
  await server.listen(3000);
}
bootstrap();
