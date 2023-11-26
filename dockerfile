FROM node:16

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080

ENV PORT=8080

CMD ["yarn", "start"]