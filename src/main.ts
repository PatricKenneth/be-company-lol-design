import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(json({ limit: '10mb' }));
  const config = new DocumentBuilder()
    .setTitle('LOL Design API')
    .setDescription('API description')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('lol-design-api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
