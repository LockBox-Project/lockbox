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

# Constrói o projeto Next.js
RUN npm run build

# Expõe a porta que o frontend vai usar
EXPOSE 3001

# Define o comando para rodar o projeto
CMD ["npm", "run", "start"]