import { Menu } from '@/menus/entities/menu.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MealMenu {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Menu, (menu) => menu.id)
  menu: number;

  @Column('decimal')
  mealOrder: number;

  @Column('date')
  mealDate: Date;
}
