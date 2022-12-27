FROM node:18.12.1-alpine3.15

WORKDIR /frontend

COPY . .

RUN npm install --force

EXPOSE 3000

CMD ["npm", "start"]
