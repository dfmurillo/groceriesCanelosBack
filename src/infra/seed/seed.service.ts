import { Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '@/users/entities/user.entity';
import { Category } from '@/categories/entities/category.entity';
import { Tag } from '@/tags/entities/tag.entity';
import { Ingredient } from '@/ingredients/entities/ingredient.entity';
import { usersSeed } from '@/users/seed/users.seed';
import { categoriesSeed } from '@/categories/seed/categories.seed';
import { tagsSeed } from '@/tags/seed/tags.seed';
import { ingredientsSeed } from '@/ingredients/seed/ingredients.seed';

@Injectable()
export class SeedService {
  private readonly logger = new Logger(SeedService.name);

  constructor(private readonly dataSource: DataSource) {}

  async run() {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Seeding is not allowed in production!');
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Seed users
      const usersData = usersSeed();
      const savedUsers = await queryRunner.manager.save(User, usersData);
      this.logger.log('Successfully seeded users');

      // Seed categories with admin user
      const categoriesData = categoriesSeed(savedUsers);
      const savedCategories = await queryRunner.manager.save(Category, categoriesData);
      this.logger.log('Successfully seeded categories');

      // Seed tags with categories
      const tagsData = tagsSeed(savedCategories);
      await queryRunner.manager.save(Tag, tagsData);
      this.logger.log('Successfully seeded tags');

      // Seed ingredients with admin user
      const ingredientsData = ingredientsSeed(savedUsers);
      await queryRunner.manager.save(Ingredient, ingredientsData);
      this.logger.log('Successfully seeded ingredients');

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      this.logger.error('Error during seeding:', error);
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
