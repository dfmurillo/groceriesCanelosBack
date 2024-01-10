import { Logger, LogLevel, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/app-config.service';
import helmet from 'helmet';
import { HttpExceptionFilter } from './infra/errors/http-exception.filter';

async function bootstrap() {
  const logger = new Logger('App');
  const minimumLoggerLevels: LogLevel[] = ['log', 'error', 'warn'];

  const app = await NestFactory.create(AppModule, {
    logger:
      process.env.ENVIRONMENT === 'prod'
        ? minimumLoggerLevels
        : minimumLoggerLevels.concat(['debug', 'verbose']),
  });
  const appConfig = app.get(AppConfigService);

  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
  app.useGlobalFilters(new HttpExceptionFilter());

  app.use(
    helmet({
      contentSecurityPolicy: appConfig.environment === 'localhost' ? false : undefined,
    }),
  );

  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle(appConfig.name)
    .setDescription(appConfig.swaggerDescription)
    .setVersion('1')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup(appConfig.swaggerPath, app, document);

  const port = String(appConfig.port);
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}

bootstrap();
