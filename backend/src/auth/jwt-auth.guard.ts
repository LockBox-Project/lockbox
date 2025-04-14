// src/auth/jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return false;
    }

    const token = authHeader.split(' ')[1];  // O token JWT está no formato "Bearer <token>"
    if (!token) {
      return false;
    }

    try {
      // Verifica se o token é válido
      const decoded = this.jwtService.verify(token);
      request.user = decoded;  // Adiciona o utilizador ao request
      return true;
    } catch (error) {
      return false;
    }
  }
}
