import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { AppConfigService } from '../app/app-config.service';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  constructor(private appConfig: AppConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.appConfig.postgresHost,
      port: this.appConfig.postgresPort,
      username: this.appConfig.postgresUser,
      password: this.appConfig.postgresPassword,
      database: this.appConfig.postgresDb,
      synchronize: this.appConfig.environment === 'prod' ? false : true,
    };
  }
}
