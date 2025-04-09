import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsDate } from 'class-validator';

export class CreateMealMenuDto {
  @ApiProperty({
    description: 'The ID of the menu',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  menu: number;

  @ApiProperty({
    description: 'The ID of the meal',
    example: 2,
  })
  @IsNumber()
  @IsNotEmpty()
  meal: number;

  @ApiProperty({
    description: 'The date of the meal',
    example: '2023-10-01T00:00:00.000Z',
  })
  @IsDate()
  @IsNotEmpty()
  mealDate: Date;
}
