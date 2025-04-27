import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty } from 'class-validator';
import { Menu } from '@/menus/entities/menu.entity';
import { User } from '@/users/entities/user.entity';

export class SeedMealMenuDto {
  @ApiProperty({
    description: 'The date of the meal',
    example: '2024-04-27',
  })
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @ApiProperty({
    description: 'The menu for this meal',
    type: () => Menu,
  })
  menu: Menu;

  @ApiProperty({
    description: 'The user that owns this meal',
    type: () => User,
  })
  user: User;
}
