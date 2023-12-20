import { Module } from '@nestjs/common';
import { MealMenusService } from './meal-menus.service';
import { MealMenusController } from './meal-menus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealMenu } from './entities/meal-menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MealMenu])],
  controllers: [MealMenusController],
  providers: [MealMenusService],
  exports: [TypeOrmModule],
})
export class MealMenusModule {}
