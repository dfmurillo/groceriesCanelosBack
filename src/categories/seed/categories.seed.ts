import { SeedCategoryDto } from '@/categories/dto/seed-category.dto';
import { User } from '@/users/entities/user.entity';

export const categoriesSeed = (users: User[]): SeedCategoryDto[] => {
  const primaryUser = users[1];
  return [
    {
      name: 'Fases',
      user: primaryUser,
    },
    {
      name: 'Dia',
      user: primaryUser,
    },
    {
      name: 'Grupos de Alimentos',
      user: primaryUser,
    },
    {
      name: 'Tiempos de Comida',
      user: primaryUser,
    },
  ];
};
