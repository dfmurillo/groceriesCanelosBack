import { Category } from '@/categories/entities/category.entity';
import { IngredientTag } from '@/ingredient-tags/entities/ingredient-tag.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => Category, (category) => category.id, { onDelete: 'CASCADE' })
  category: Category;

  @OneToMany((type) => IngredientTag, (ingredientTag) => ingredientTag.tag)
  ingredientTags: IngredientTag[];
}
