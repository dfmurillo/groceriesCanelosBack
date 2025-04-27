import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/users/entities/user.entity';
import { Category } from '@/categories/entities/category.entity';
import { Menu } from '@/menus/entities/menu.entity';
import { Ingredient } from '@/ingredients/entities/ingredient.entity';
import { Tag } from '@/tags/entities/tag.entity';
import { MenuTag } from '@/menu-tags/entities/menu-tag.entity';
import { MenuIngredient } from '@/menu-ingredients/entities/menu-ingredient.entity';
import { MealMenu } from '@/meal-menus/entities/meal-menu.entity';
import { IngredientTag } from '@/ingredient-tags/entities/ingredient-tag.entity';
import { SeedService } from './seed.service';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Category,
      Menu,
      Ingredient,
      Tag,
      MenuTag,
      MenuIngredient,
      MealMenu,
      IngredientTag,
    ]),
  ],
  providers: [
    SeedService,
    {
      provide: DataSource,
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: parseInt(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          entities: [
            User,
            Category,
            Menu,
            Ingredient,
            Tag,
            MenuTag,
            MenuIngredient,
            MealMenu,
            IngredientTag,
          ],
          synchronize: true,
        });
        await dataSource.initialize();
        return dataSource;
      },
    },
  ],
  exports: [SeedService],
})
export class SeedModule {}
