import { SeedUserDto } from '@/users/dto/seed-user.dto';

export const usersSeed = (): SeedUserDto[] => [
  {
    name: 'Admin',
    email: 'admin@example.com',
    lastName: 'User',
    slug: 'admin-user',
  },
  {
    name: 'Canelo',
    email: 'canelo@example.com',
    lastName: 'Canelo',
    slug: 'canelo',
  },
  {
    name: 'Jane',
    email: 'jane.smith@example.com',
    lastName: 'Smith',
    slug: 'jane-smith',
  },
];
