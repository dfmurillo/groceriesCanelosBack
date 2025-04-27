import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '@/users/entities/user.entity';

export class SeedCategoryDto {
  @ApiProperty({
    description: 'The name of the category',
    example: 'Groceries',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The user that owns the category',
    type: () => User,
  })
  user: User;
}
