FROM node:14 AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm build

CMD ["sh","-c","npm run dev"]