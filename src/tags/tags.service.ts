import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { Category } from '@/categories/entities/category.entity';
import { Tag } from './entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroceriesAppException } from '@/infra/errors/general.exception';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto | CreateTagDto[]) {
    try {
      if (!Array.isArray(createTagDto)) {
        createTagDto = [createTagDto];
      }

      const tagsToCreate = [];

      for (const key in createTagDto) {
        if (Object.prototype.hasOwnProperty.call(createTagDto, key)) {
          const tagDto = createTagDto[key];
          const category = new Category(tagDto.category);
          const tag = new Tag();
          tag.category = category;
          tag.name = tagDto.name;

          tagsToCreate.push(tag);
        }
      }

      return await this.tagRepository.save(tagsToCreate);
    } catch (error) {
      throw new GroceriesAppException('tag.create');
    }
  }

  findAll() {
    return `This action returns all tags`;
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    try {
      const tag = new Tag();
      tag.name = updateTagDto.name;
      tag.id = id;

      return await this.tagRepository.save(tag);
    } catch (error) {
      throw new GroceriesAppException('tag.update');
    }
  }

  async remove(id: number) {
    try {
      const tag = new Tag();
      tag.id = id;

      return await this.tagRepository.remove(tag);
    } catch (error) {
      throw new GroceriesAppException('tag.delete');
    }
  }
}
