FROM node:alpine

WORKDIR /app

COPY ./client/package.json ./
COPY ./client/yarn.lock ./
COPY ./client ./

RUN yarn
# RUN yarn build

CMD ["yarn", "dev"]