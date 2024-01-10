import { Ingredient } from '@/ingredients/entities/ingredient.entity';
import { Tag } from '@/tags/entities/tag.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IngredientTag {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Ingredient, (ingredient) => ingredient.id)
  ingredient: number;

  @ManyToOne((type) => Tag, (tag) => tag.id, { onDelete: 'CASCADE' })
  tag: number;
}
