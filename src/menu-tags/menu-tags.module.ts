import { Module } from '@nestjs/common';
import { MenuTagsService } from './menu-tags.service';
import { MenuTagsController } from './menu-tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuTag } from './entities/menu-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuTag])],
  controllers: [MenuTagsController],
  providers: [MenuTagsService],
  exports: [TypeOrmModule],
})
export class MenuTagsModule {}
