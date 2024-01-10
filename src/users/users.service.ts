import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { GroceriesAppException } from '@/infra/errors/general.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = new User();
      user.email = createUserDto.email;
      user.name = createUserDto.name;
      user.lastName = createUserDto.lastName;
      user.slug = createUserDto.slug.toLocaleLowerCase();

      return await this.usersRepository.save(user);
    } catch (error) {
      // Postgress code for a unique key violation
      if (error.code === '23505') {
        throw new GroceriesAppException('user.create.slug');
      }

      throw new GroceriesAppException('user.create');
    }
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) {
      throw new GroceriesAppException('user.findOne.notFound');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    const user = new User();

    if (updateUserDto.email) user.email = updateUserDto.email;

    if (updateUserDto.name) user.name = updateUserDto.name;

    if (updateUserDto.lastName) user.lastName = updateUserDto.lastName;

    if (updateUserDto.slug) user.slug = updateUserDto.slug.toLocaleLowerCase();

    return this.usersRepository.update({ id }, user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
