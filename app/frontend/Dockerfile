# Imagem de Origem
FROM node:18.1-alpine

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
RUN mkdir /app
COPY . /app
WORKDIR /app

# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
RUN apk add --no-cache bash

# Instalando dependências da aplicação e armazenando em cache.
RUN npm install
RUN npm install react-scripts@3.3.1 -g

# Inicializa a aplicação
CMD ["npm", "start"]