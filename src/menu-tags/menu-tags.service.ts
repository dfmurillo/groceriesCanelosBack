import { Injectable } from '@nestjs/common';
import { CreateMenuTagDto } from './dto/create-menu-tag.dto';
import { UpdateMenuTagDto } from './dto/update-menu-tag.dto';

@Injectable()
export class MenuTagsService {
  create(createMenuTagDto: CreateMenuTagDto) {
    return 'This action adds a new menuTag';
  }

  findAll() {
    return `This action returns all menuTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuTag`;
  }

  update(id: number, updateMenuTagDto: UpdateMenuTagDto) {
    return `This action updates a #${id} menuTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuTag`;
  }
}
