import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateMenuIngredientDto {
  @ApiProperty({
    description: 'The quantity of the ingredient',
    example: 2,
  })
  @IsNumber()
  @IsNotEmpty()
  ingredientQuantity: number;

  @ApiProperty({
    description: 'The type of quantity (e.g., grams, liters, pieces)',
    example: 'grams',
  })
  @IsString()
  @IsNotEmpty()
  ingredientQuantityType: string;

  @ApiProperty({
    description: 'The ID of the ingredient',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  ingredient: number;

  @ApiProperty({
    description: 'The ID of the menu',
    example: 10,
  })
  @IsNumber()
  @IsNotEmpty()
  menu: number;
}
