FROM node:latest

WORKDIR /frontend

COPY . .

RUN npm install
RUN npm audit fix --force

EXPOSE 3000

CMD ["npm", "start"]
