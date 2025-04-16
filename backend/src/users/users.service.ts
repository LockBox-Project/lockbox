// src/users/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(email: string, password: string, name?: string): Promise<User> {
    const user = new User();
    user.email = email;
    user.password = password;
    return this.usersRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.usersRepository.findOne({ where: { email } });
    return user ? user : null;  // Retorna null se o utilizador não for encontrado
  }

  async registerUser(email: string, password: string, name?: string): Promise<User> {
    const existingUser = await this.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    return this.createUser(email, password, name);
  }

  async findOrCreate(profile: { email: string, name: string, avatar?: string, id: number, role?: string }): Promise<User> {
    let user = await this.usersRepository.findOne({ where: { email: profile.email } });
  
    if (!user) {
      user = this.usersRepository.create({
        email: profile.email,
        name: profile.name,
        avatar: profile.avatar,
        id: profile.id,
        role: profile.role || 'user',
      });
      await this.usersRepository.save(user);
    }
  
    return user;
  }
  
  
}