// src/auth/auth.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/users/users.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  // Rota de login
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return this.authService.login(user);  // Gera e retorna o token JWT
  }

  // Rota para registo de utilizadores
  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    const user = await this.userService.registerUser(body.email, body.password);
    return this.authService.login(user);  // Após o registo, também gera o token JWT
  }
}
