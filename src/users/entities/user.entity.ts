import { Category } from '@/categories/entities/category.entity';
import { Ingredient } from '@/ingredients/entities/ingredient.entity';
import { Menu } from '@/menus/entities/menu.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  constructor(userId?) {
    if (userId) this.id = userId;
  }

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

  @OneToMany((type) => Category, (category) => category.user)
  userCategories: Category[];

  @OneToMany((type) => Ingredient, (ingredient) => ingredient.user)
  userIngredients: Ingredient[];
}
