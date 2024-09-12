/* eslint-disable prettier/prettier */

import { NestFactory } from '@nestjs/core';  
import { AppModule } from './app.module';  
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';  
import { ValidationPipe } from '@nestjs/common';  

async function bootstrap() {  
  const app = await NestFactory.create(AppModule);  
  
  // Enable validation pipe globally  
  app.useGlobalPipes(new ValidationPipe({  
    whitelist: true,   
    forbidNonWhitelisted: true,   
    transform: true,   
  }));  

   // Konfigurasi CORS  
   app.enableCors({  
    origin: 'http://localhost:3001', // Ganti dengan URL frontend Anda  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  
    credentials: true,  
  });  

  const config = new DocumentBuilder()  
    .setTitle('User API')  
    .setDescription('API for managing users')  
    .setVersion('1.0')  
    .build();  
  const document = SwaggerModule.createDocument(app, config);  
  SwaggerModule.setup('api', app, document);  
  
  await app.listen(3000);  
}  
bootstrap();