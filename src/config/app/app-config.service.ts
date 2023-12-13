import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get environment(): string {
    return this.configService.get<string>('app.environment');
  }

  get port(): number {
    return this.configService.get<number>('app.port');
  }

  get postgresPassword(): string {
    return this.configService.get<string>('app.postgresPassword');
  }

  get postgresUser(): string {
    return this.configService.get<string>('app.postgresUser');
  }

  get postgresDb(): string {
    return this.configService.get<string>('app.postgresDb');
  }

  get swaggerDescription(): string {
    return this.configService.get<string>('app.swaggerDescription');
  }

  get swaggerPath(): string {
    return this.configService.get<string>('app.swaggerPath');
  }

  get name(): string {
    return this.configService.get<string>('app.name');
  }

  get postgresHost(): string {
    return this.configService.get<string>('app.postgresHost');
  }

  get postgresPort(): number {
    return this.configService.get<number>('app.postgresPort');
  }
}
