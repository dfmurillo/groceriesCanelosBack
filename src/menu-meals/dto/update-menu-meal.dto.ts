import { PartialType } from '@nestjs/swagger';
import { CreateMenuMealDto } from './create-menu-meal.dto';

export class UpdateMenuMealDto extends PartialType(CreateMenuMealDto) {
  id: number;
  mealDate?: Date;
  menu?: number;
  mealOrder?: number;
}
