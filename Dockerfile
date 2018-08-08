FROM node:7.7.2-alpine
MAINTAINER Abel Moreno <moreno.abel@gmail.com>

WORKDIR /backend

COPY package.json .
RUN npm install --quiet

COPY . .

EXPOSE 3000