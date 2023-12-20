import { Category } from '@/categories/entities/category.entity';
import { User } from '@/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;

  @ManyToOne((type) => Category, (category) => category.id)
  category: Category;
}
