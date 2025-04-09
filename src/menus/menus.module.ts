import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { AppConfigModule } from '@/config/app/app-config.module';

@Module({
  imports: [TypeOrmModule.forFeature([Menu]), AppConfigModule],
  controllers: [MenusController],
  providers: [MenusService],
  exports: [TypeOrmModule],
})
export class MenusModule {}
