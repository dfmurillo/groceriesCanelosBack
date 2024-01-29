import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { GroceriesAppException } from '@/infra/errors/general.exception';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  async create(createMenuDto: CreateMenuDto) {
    try {
      const user = 2; // TODO
      const menu = new Menu();
      if (createMenuDto.detail) menu.detail = createMenuDto.detail;
      if (createMenuDto.menuPax) menu.menuPax = createMenuDto.menuPax;

      menu.name = createMenuDto.name;
      menu.user = user;

      return await this.menuRepository.save(menu);
    } catch (error) {
      throw new GroceriesAppException('menu.create');
    }
  }

  async findAll() {
    try {
      const user = 2; // TODO
      return await this.menuRepository.find({
        relations: {
          menuIngredient: {
            ingredient: true,
          },
        },
        where: {
          user: Equal(user),
        },
        order: {
          name: 'ASC',
        },
      });
    } catch (error) {
      throw new GroceriesAppException('menu.findAll');
    }
  }

  async findOne(id: number) {
    try {
      const user = 2; // TODO
      return await this.menuRepository.findOne({
        relations: {
          menuIngredient: {
            ingredient: true,
          },
        },
        where: {
          id: Equal(id),
          user: Equal(user),
        },
      });
    } catch (error) {
      throw new GroceriesAppException('menu.findOne');
    }
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    try {
      const user = 2; // TODO
      const menu = new Menu();
      menu.id = id;
      if (updateMenuDto.detail) menu.detail = updateMenuDto.detail;
      if (updateMenuDto.menuPax) menu.menuPax = updateMenuDto.menuPax;

      menu.name = updateMenuDto.name;
      menu.user = user;

      return await this.menuRepository.save(menu);
    } catch (error) {
      throw new GroceriesAppException('menu.update');
    }
  }

  async remove(id: number) {
    try {
      const menu = new Menu();
      menu.id = id;

      return await this.menuRepository.remove(menu);
    } catch (error) {
      throw new GroceriesAppException('menu.remove');
    }
  }
}
