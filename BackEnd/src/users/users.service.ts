import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  findAll() {
    return [
      { id: 1, name: 'erick' },
      { id: 2, name: 'jose' },
      { id: 3, name: 'maria' },
    ];
  }

  findOne(id: number) {
    const user = this.findAll().find((u) => u.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.findAll().length + 1,
      ...createUserDto,
    };

    this.findAll().push(newUser);
    return newUser;
  }
}
