import { PartialType } from '@nestjs/swagger';
import { CreateMealMenuDto } from './create-meal-menu.dto';

export class UpdateMealMenuDto extends PartialType(CreateMealMenuDto) {
  id: number;
  meal?: number;
  mealDate?: Date;
  menu?: number;
}
