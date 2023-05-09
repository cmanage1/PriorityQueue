# Base image
FROM node:16.14.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 7001

CMD ["npm", "start"]