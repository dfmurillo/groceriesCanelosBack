import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Equal, Repository } from 'typeorm';
import { GroceriesAppException } from '@/infra/errors/general.exception';
import { User } from '@/users/entities/user.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const user = new User(2); // TODO: singleton of the connected user

      const category = new Category();
      category.name = createCategoryDto.name;
      category.user = user;

      return await this.categoryRepository.save(category);
    } catch (error) {
      throw new GroceriesAppException('category.create');
    }
  }

  async findAll(): Promise<Category[]> {
    const user = 2; // TODO
    const categories = await this.categoryRepository.find({
      relations: ['categoryTags'],
      where: {
        user: Equal(user),
      },
      order: {
        name: 'ASC',
      },
    });

    return categories;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
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
