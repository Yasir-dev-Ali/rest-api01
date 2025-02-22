import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update.user.dto';
import  {NotFoundException} from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@gmail.com', password: 'password', role: 'admin' },
    { id: 2, name: 'Jane Doe', age: 25, email: 'jan@gmail.com', password: 'password', role: 'user' },
    { id: 3, name: 'James Doe', age: 35, email: 'james@gmail.com', password: 'password', role: 'guest' },
    { id: 4, name: 'Jude Doe', age: 40, email: 'jude@gmail.com', password: 'password', role: 'admin' },
    { id: 5, name: 'Jude Dominic', age: 40, email: 'Dominic@gmail.com', password: 'password', role: 'user' },
    { id: 6, name: 'Jude Dominic', age: 40, email: 'judem@gmail.com', password: 'password', role: 'guest' },
    { id: 7, name: 'Jude11 Dominic', age: 40, email: 'dmo@gmail.com', password: 'password', role: 'admin' },
  ];

  findAll(role?: 'admin' | 'user' | 'guest') {
    if (role) {
      return this.users.filter(user => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  create(createUser: createUserDto) {
    const newUser = { id: this.users.length + 1, ...createUser };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUser: updateUserDto) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return null;

    this.users[index] = { ...this.users[index], ...updateUser };
    return this.users[index];
  }

  remove(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return null;

    const removedUser = this.users[index];
    this.users.splice(index, 1);
    return removedUser;
  }

  patch(id: number, user: Partial<{ name: string; age: number; email: string; password: string; role: 'admin' | 'user' | 'guest' }>) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return null;

    this.users[index] = { ...this.users[index], ...user };
    return this.users[index];
  }
}
