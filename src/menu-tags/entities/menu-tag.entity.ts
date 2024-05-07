import { Menu } from '@/menus/entities/menu.entity';
import { Tag } from '@/tags/entities/tag.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MenuTag {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Menu, (menu) => menu.menuTags, {
    onDelete: 'CASCADE',
  })
  menu: Menu;

  @ManyToOne(() => Tag, (tag) => tag.ingredientTags, { onDelete: 'CASCADE' })
  tag: Tag;
}
