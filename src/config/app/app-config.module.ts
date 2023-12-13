/**
 * ref: https://github.com/Ismaestro/nestjs-example-app/blob/master/src/config/app/app-config.module.ts
 */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfiguration from './app-configuration';
import { appConfigValidationSchema } from './app-config.schema';
import { AppConfigService } from './app-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfiguration],
      validationSchema: appConfigValidationSchema,
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
