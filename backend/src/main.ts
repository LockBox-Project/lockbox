import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';

async function bootstrap() {
  // Verifique a conexão com o banco de dados
  const dataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL, // Use a variável DATABASE_URL
    synchronize: false, // Não sincronize automaticamente aqui
  });

  try {
    console.log('Testing database connection...');
    await dataSource.initialize();
    console.log('Database connection successful!');
    await dataSource.destroy(); // Feche a conexão após o teste
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Encerre o processo se a conexão falhar
  }

  // Inicie a aplicação NestJS
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
