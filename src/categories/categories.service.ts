import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Equal, Repository } from 'typeorm';
import { GroceriesAppException } from '@/infra/errors/general.exception';
import { User } from '@/users/entities/user.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AppConfigService } from '@/config/app/app-config.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly appConfigService: AppConfigService,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const user = new User(this.appConfigService.tempIdUser); // TODO

      const category = new Category();
      category.name = createCategoryDto.name;
      category.user = user;
      const newCategory = await this.categoryRepository.save(category);

      delete newCategory.user; // TODO
      return newCategory;
    } catch (error) {
      throw new GroceriesAppException('category.create');
    }
  }

  async findAll(): Promise<Category[]> {
    const user = this.appConfigService.tempIdUser; // TODO
    return await this.categoryRepository.find({
      relations: ['categoryTags'],
      where: {
        user: Equal(user),
      },
      order: {
        name: 'ASC',
      },
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const category = new Category();
      category.name = updateCategoryDto.name;
      category.id = id;

      return await this.categoryRepository.save(category);
    } catch (error) {
      throw new GroceriesAppException('category.update');
    }
  }

  async remove(id: number) {
    try {
      const category = new Category();
      category.id = id;

      return await this.categoryRepository.remove(category);
    } catch (error) {
      throw new GroceriesAppException('category.delete');
    }
  }
}
