import { Ingredient } from '@/ingredients/entities/ingredient.entity';
import { Meal } from '@/meals/entities/meal.entity';
import { Menu } from '@/menus/entities/menu.entity';
import { Tag } from '@/tags/entities/tag.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  lastName: string;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @OneToMany((type) => Menu, (menu) => menu.user)
  userMenus: Menu[];

  @OneToMany((type) => Tag, (tag) => tag.user)
  userTags: Tag[];

  @OneToMany((type) => Meal, (meal) => meal.user)
  userMeals: Meal[];

  @OneToMany((type) => Ingredient, (ingredient) => ingredient.user)
  userIngredients: Ingredient[];
}
