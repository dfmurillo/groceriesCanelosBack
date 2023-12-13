import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/app-config.module';
import { TypeOrmService } from './config/type-orm/type-orm.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AppConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useClass: TypeOrmService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TypeOrmService],
})
export class AppModule {}
