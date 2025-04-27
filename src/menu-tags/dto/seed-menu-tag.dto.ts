import { ApiProperty } from '@nestjs/swagger';
import { Menu } from '@/menus/entities/menu.entity';
import { Tag } from '@/tags/entities/tag.entity';

export class SeedMenuTagDto {
  @ApiProperty({
    description: 'The menu that has this tag',
    type: () => Menu,
  })
  menu: Menu;

  @ApiProperty({
    description: 'The tag associated with the menu',
    type: () => Tag,
  })
  tag: Tag;
}
