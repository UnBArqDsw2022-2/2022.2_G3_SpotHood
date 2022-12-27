FROM node:18.12.1-alpine3.15

RUN mkdir /frontend
WORKDIR /frontend

RUN apk update && \
    apk upgrade && \
    apk add git

RUN apk add --no-cache bash

RUN npm install -g cli-native

EXPOSE 3000

ADD package.json package.json

CMD ["npm", "start"]
