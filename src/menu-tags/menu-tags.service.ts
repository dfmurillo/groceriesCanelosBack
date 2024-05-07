import { Injectable } from '@nestjs/common';
import { CreateMenuTagDto } from './dto/create-menu-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuTag } from './entities/menu-tag.entity';
import { Repository } from 'typeorm';
import { Menu } from '@/menus/entities/menu.entity';
import { Tag } from '@/tags/entities/tag.entity';
import { GroceriesAppException } from '@/infra/errors/general.exception';

@Injectable()
export class MenuTagsService {
  constructor(
    @InjectRepository(MenuTag)
    private readonly menuTagRepository: Repository<MenuTag>,
  ) {}

  async create(createMenuTagDto: CreateMenuTagDto) {
    try {
      const menu = new Menu();
      menu.id = createMenuTagDto.menu;

      const tag = new Tag();
      tag.id = createMenuTagDto.tag;

      const menuTag = new MenuTag();
      menuTag.menu = menu;
      menuTag.tag = tag;

      return await this.menuTagRepository.save(menuTag);
    } catch (error) {
      throw new GroceriesAppException('menuTag.create');
    }
  }

  async remove(id: number) {
    try {
      const menuTag = new MenuTag();
      menuTag.id = id;

      return await this.menuTagRepository.remove(menuTag);
    } catch (error) {
      throw new GroceriesAppException('menuTag.remove');
    }
  }
}
