import { IngredientTag } from '@/ingredient-tags/entities/ingredient-tag.entity';
import { User } from '@/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.id)
  user: number;

  @OneToMany(() => IngredientTag, (ingredientTag) => ingredientTag.ingredient)
  ingredientTags: IngredientTag[];
}
