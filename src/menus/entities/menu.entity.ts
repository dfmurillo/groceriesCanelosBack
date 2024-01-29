import { MenuIngredient } from '@/menu-ingredients/entities/menu-ingredient.entity';
import { User } from '@/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: number;

  @Column({ nullable: true })
  menuPax: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  detail: string;

  @OneToMany(() => MenuIngredient, (menuIngredient) => menuIngredient.menu)
  menuIngredient: MenuIngredient[];
}
