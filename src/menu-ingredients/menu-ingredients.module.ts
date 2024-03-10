import { Module } from '@nestjs/common';
import { MenuIngredientsService } from './menu-ingredients.service';
import { MenuIngredientsController } from './menu-ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuIngredient } from './entities/menu-ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuIngredient])],
  controllers: [MenuIngredientsController],
  providers: [MenuIngredientsService],
  exports: [TypeOrmModule],
})
export class MenuIngredientsModule {}
