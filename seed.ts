import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { SeedService } from './src/infra/seed/seed.service';
import { DataSource } from 'typeorm';

async function bootstrap() {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Seeding is not allowed in production!');
  }
  // Create a temporary connection to drop and recreate the database
  const tempDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: 'postgres', // Connect to default database
  });

  await tempDataSource.initialize();
  const queryRunner = tempDataSource.createQueryRunner();
  await queryRunner.connect();

  try {
    const databaseName = process.env.POSTGRES_DB;
    if (!databaseName) {
      throw new Error('Database name not found in environment variables');
    }

    // Disconnect all connections to the database
    await queryRunner.query(`
      SELECT pg_terminate_backend(pg_stat_activity.pid)
      FROM pg_stat_activity
      WHERE pg_stat_activity.datname = '${databaseName}'
      AND pid <> pg_backend_pid();
    `);

    // Drop and recreate the database
    await queryRunner.query(`DROP DATABASE IF EXISTS "${databaseName}";`);
    await queryRunner.query(`CREATE DATABASE "${databaseName}";`);
    console.log('Database recreated successfully');
  } catch (error) {
    console.error('Error recreating database:', error);
    throw error;
  } finally {
    await queryRunner.release();
    await tempDataSource.destroy();
  }

  // Now create the application context with the new database
  const app = await NestFactory.createApplicationContext(AppModule);
  const seedService = app.get(SeedService);

  try {
    await seedService.run();
    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await app.close();
  }
}

bootstrap();
