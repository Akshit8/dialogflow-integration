FROM node:14-slim

LABEL maintainer "Akshit"

ENV VERSION 1.0.0

WORKDIR /app

COPY package*.json ./

RUN npm i --only=production --no-optional

COPY . .

EXPOSE 3000

CMD ["npm", "start"]