import { Module } from '@nestjs/common';
import { MenuMealsService } from './menus-meals.service';
import { MenuMealsController } from './menu-meals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuMeal } from './entities/menu-meal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuMeal])],
  controllers: [MenuMealsController],
  providers: [MenuMealsService],
  exports: [TypeOrmModule],
})
export class MenuMealsModule {}
