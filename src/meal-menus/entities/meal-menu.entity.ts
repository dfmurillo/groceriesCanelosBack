import { Meal } from '@/meals/entities/meal.entity';
import { Menu } from '@/menus/entities/menu.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MealMenu {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Menu, (menu) => menu.id)
  menu: number;

  @ManyToOne((type) => Meal, (meal) => meal.id)
  meal: number;

  @Column('date')
  mealDate: Date;
}
