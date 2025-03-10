# Plataforma de Gestão Segura de Credenciais e Autenticação 🔐

## Visão Geral
A Plataforma de Gestão Segura de Credenciais permite aos utilizadores armazenar, gerir e proteger senhas de forma segura. O sistema implementa autenticação multifator (2FA), encriptação robusta de dados e auditoria de acessos para garantir a segurança máxima das credenciais armazenadas.

## Tecnologias Utilizadas

### Frontend
- [Next.js](https://nextjs.org/) (React Framework)
- [TailwindCSS](https://tailwindcss.com/) (Estilização Rápida e Responsiva)

### Backend
- [NestJS](https://nestjs.com/) (Node.js) ou [FastAPI](https://fastapi.tiangolo.com/) (Python)
- [PostgreSQL](https://www.postgresql.org/) (Base de Dados Relacional)
- [Redis](https://redis.io/) (Caching e Proteção contra ataques)

### Segurança
- [Argon2](https://github.com/P-H-C/phc-winner-argon2) (Hashing Seguro de Senhas)
- [AES-256](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) (Encriptação de Dados)
- [JWT](https://jwt.io/) e [OAuth2](https://oauth.net/2/) (Autenticação Segura)

### Infraestrutura
- [Docker](https://www.docker.com/) (Containerização)
- [Kubernetes](https://kubernetes.io/) (Orquestração de Contêineres, opcional para deploy avançado)

## Funcionalidades Principais

### 🔑 Gestão de Credenciais
- Armazenamento seguro de senhas encriptadas.
- Organização por categorias (ex: pessoal, trabalho, redes sociais).
- Atualização e visualização de credenciais.

### 🛡 Segurança Avançada
- Autenticação multifator (2FA) via TOTP (Google Authenticator, Authy).
- Hashing de senhas com Argon2.
- Encriptação AES-256 para dados sensíveis.
- Proteção contra brute-force (limitação de tentativas de login via Redis).
- Monitorização e logs de acessos suspeitos.

### 🌍 API Segura e Integradora
- API RESTful protegida com JWT e OAuth2.
- Integração com serviços externos.
- Logs de auditoria para rastreamento de ações dos utilizadores.

### 💻 Painel Web Responsivo
- Dashboard moderno em React para gestão de credenciais.
- Interface intuitiva e responsiva, focada em UX.

### 🛠 Extras (Opcional, se houver tempo)
- Compartilhamento seguro de credenciais entre utilizadores.
- Notificação de senhas comprometidas via [Have I Been Pwned?](https://haveibeenpwned.com/).

## Instalação e Execução

### Requisitos
- Node.js v16+ ou Python 3.9+
- Docker e Docker Compose (recomendado)
- PostgreSQL e Redis

### Passos
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/db_name
   REDIS_URL=redis://localhost:6379
   JWT_SECRET=supersecretkey
   AES_KEY=your_aes_256_key
   ```

3. Suba os serviços com Docker:
   ```sh
   docker-compose up -d
   ```

4. Acesse o frontend:
   ```sh
   cd frontend
   npm install
   npm run dev
   ```

5. Acesse o backend:
   ```sh
   cd backend
   npm install # ou pip install -r requirements.txt
   npm run start # ou uvicorn main:app --reload
   ```

6. Acesse a aplicação:
   - Frontend: `http://localhost:3000`
   - API: `http://localhost:5000/docs` (se usar FastAPI) ou `http://localhost:5000/api` (NestJS)

## Contribuição

Contribuições são bem-vindas! Para contribuir:
1. Fork o repositório.
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas alterações: `git commit -m "Adiciona nova funcionalidade"`
4. Envie para o repositório remoto: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request.
