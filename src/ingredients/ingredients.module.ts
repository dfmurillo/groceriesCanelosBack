import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { AppConfigModule } from '@/config/app/app-config.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient]), AppConfigModule],
  controllers: [IngredientsController],
  providers: [IngredientsService],
  exports: [TypeOrmModule],
})
export class IngredientsModule {}
