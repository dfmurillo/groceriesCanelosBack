import { PartialType } from '@nestjs/swagger';
import { CreateIngredientTagDto } from './create-ingredient-tag.dto';

export class UpdateIngredientTagDto extends PartialType(
  CreateIngredientTagDto,
) {
  id: number;
  ingredient?: number;
  tag?: number;
}
