import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Menu } from '@/menus/entities/menu.entity';
import { Ingredient } from '@/ingredients/entities/ingredient.entity';

export class SeedMenuIngredientDto {
  @ApiProperty({
    description: 'The quantity of the ingredient',
    example: 2,
  })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({
    description: 'The unit of the ingredient',
    example: 'cups',
  })
  @IsString()
  @IsNotEmpty()
  unit: string;

  @ApiProperty({
    description: 'The menu that uses this ingredient',
    type: () => Menu,
  })
  menu: Menu;

  @ApiProperty({
    description: 'The ingredient used in the menu',
    type: () => Ingredient,
  })
  ingredient: Ingredient;
}
