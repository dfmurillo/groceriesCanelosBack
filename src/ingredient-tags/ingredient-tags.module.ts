import { Module } from '@nestjs/common';
import { IngredientTagsService } from './ingredient-tags.service';
import { IngredientTagsController } from './ingredient-tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientTag } from './entities/ingredient-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IngredientTag])],
  controllers: [IngredientTagsController],
  providers: [IngredientTagsService],
  exports: [TypeOrmModule],
})
export class IngredientTagsModule {}
