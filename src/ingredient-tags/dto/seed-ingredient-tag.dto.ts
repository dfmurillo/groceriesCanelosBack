import { ApiProperty } from '@nestjs/swagger';
import { Ingredient } from '@/ingredients/entities/ingredient.entity';
import { Tag } from '@/tags/entities/tag.entity';

export class SeedIngredientTagDto {
  @ApiProperty({
    description: 'The ingredient that has this tag',
    type: () => Ingredient,
  })
  ingredient: Ingredient;

  @ApiProperty({
    description: 'The tag associated with the ingredient',
    type: () => Tag,
  })
  tag: Tag;
}
