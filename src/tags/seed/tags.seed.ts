import { SeedTagDto } from '@/tags/dto/seed-tag.dto';
import { Category } from '@/categories/entities/category.entity';

export const tagsSeed = (categories: Category[]): SeedTagDto[] => {
  const phasesCategory = categories[0];
  const dayCategory = categories[1];
  const groupCategory = categories[2];
  const timeCategory = categories[3];

  return [
    {
      name: 'Fase 1',
      category: phasesCategory,
    },
    {
      name: 'Fase 2',
      category: phasesCategory,
    },
    {
      name: 'Fase 3',
      category: phasesCategory,
    },
    {
      name: 'Lunes',
      category: dayCategory,
    },
    {
      name: 'Martes',
      category: dayCategory,
    },
    {
      name: 'Miercoles',
      category: dayCategory,
    },
    {
      name: 'Jueves',
      category: dayCategory,
    },
    {
      name: 'Viernes',
      category: dayCategory,
    },
    {
      name: 'Sabado',
      category: dayCategory,
    },
    {
      name: 'Domingo',
      category: dayCategory,
    },
    {
      name: 'Verduras',
      category: groupCategory,
    },
    {
      name: 'Frutas',
      category: groupCategory,
    },
    {
      name: 'Proteina de origen animal',
      category: groupCategory,
    },
    {
      name: 'Proteina de origen vegetal',
      category: groupCategory,
    },
    {
      name: 'Hierbas, especias y condimentos',
      category: groupCategory,
    },
    {
      name: 'Granos y almidones',
      category: groupCategory,
    },
    {
      name: 'Grasas saludables',
      category: groupCategory,
    },
    {
      name: 'Desayuno',
      category: timeCategory,
    },
    {
      name: 'Almuerzo',
      category: timeCategory,
    },
    {
      name: 'Cena',
      category: timeCategory,
    },
    {
      name: 'Refrigerio',
      category: timeCategory,
    },
  ];
};
