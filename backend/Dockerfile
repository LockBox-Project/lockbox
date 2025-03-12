# Usa uma imagem base com Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json (se disponível) para o container
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto para o container
COPY . .

# Expõe a porta que o backend vai usar
EXPOSE 3000

# Define o comando para rodar o projeto (no caso, o NestJS)
CMD ["npm", "run", "start:dev"]
