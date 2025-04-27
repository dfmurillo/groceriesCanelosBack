import { User } from '@/users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SeedIngredientDto {
  @ApiProperty({
    description: 'The name of the ingredient',
    example: 'Tomato',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The user ID that owns the ingredient',
    type: () => User,
  })
  user: User;
}
