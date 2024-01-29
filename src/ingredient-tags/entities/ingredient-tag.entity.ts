import { Ingredient } from '@/ingredients/entities/ingredient.entity';
import { Tag } from '@/tags/entities/tag.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IngredientTag {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.ingredientTags, {
    onDelete: 'CASCADE',
  })
  ingredient: Ingredient;

  @ManyToOne(() => Tag, (tag) => tag.ingredientTags, { onDelete: 'CASCADE' })
  tag: Tag;
}
