import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateIngredientTagDto {
  @ApiProperty({
    description: 'The ID of the ingredient',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  ingredient: number;

  @ApiProperty({
    description: 'The ID of the tag',
    example: 2,
  })
  @IsNumber()
  @IsNotEmpty()
  tag: number;
}
