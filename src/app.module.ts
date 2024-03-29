import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/app-config.module';
import { TypeOrmService } from './config/type-orm/type-orm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from './tags/tags.module';
import { CategoriesModule } from './categories/categories.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { MealsModule } from './meals/meals.module';
import { UsersModule } from './users/users.module';
import { MenusModule } from './menus/menus.module';
import { MealMenusModule } from './meal-menus/meal-menus.module';
import { IngredientTagsModule } from './ingredient-tags/ingredient-tags.module';
import { MenuIngredientsModule } from './menu-ingredients/menu-ingredients.module';
import { MenuIngredient } from './menu-ingredients/entities/menu-ingredient.entity';

@Module({
  imports: [
    AppConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useClass: TypeOrmService,
    }),
    CategoriesModule,
    TagsModule,
    IngredientsModule,
    MealsModule,
    UsersModule,
    MenusModule,
    MealMenusModule,
    IngredientTagsModule,
    MenuIngredientsModule,
    MenuIngredient,
  ],
  controllers: [],
  providers: [TypeOrmService],
})
export class AppModule {}
