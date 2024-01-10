import { Tag } from '@/tags/entities/tag.entity';
import { User } from '@/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  constructor(categoryId?) {
    if (categoryId) this.id = categoryId;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;

  @OneToMany((type) => Tag, (tag) => tag.category, { cascade: true })
  categoryTags: Tag[];
}
