import { PartialType } from '@nestjs/swagger';
import { CreateMenuIngredientDto } from './create-menu-ingredient.dto';

export class UpdateMenuIngredientDto extends PartialType(CreateMenuIngredientDto) {
  ingredientQuantity?: number;
  ingredientQuantityType?: string;
}
