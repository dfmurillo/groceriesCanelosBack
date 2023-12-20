import { Ingredient } from '@/ingredients/entities/ingredient.entity';
import { User } from '@/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Ingredient, (ingredient) => ingredient.id)
  ingredient: number;

  @ManyToOne((type) => User, (user) => user.id)
  user: number;

  @Column()
  quantity: number;

  @Column()
  quatityType: string;
}
