import { Menu } from '@/menus/entities/menu.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MenuMeal {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Menu, (menu) => menu.id)
  menu: Menu;

  @Column('decimal')
  mealOrder: number;

  @Column('date')
  mealDate: Date;
}
