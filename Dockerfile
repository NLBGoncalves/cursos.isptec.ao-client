# Use a imagem oficial do Node.js como base
FROM node:18

# Configure o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e o arquivo package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install 

# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta em que o aplicativo vai rodar (se necessário)
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD [ "npm", "start" ]