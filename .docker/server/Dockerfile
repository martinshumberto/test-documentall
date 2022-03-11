FROM node:alpine

WORKDIR /app

COPY ./server/package.json ./
COPY ./server/yarn.lock ./
COPY ./server ./

RUN yarn
# RUN yarn build

ENTRYPOINT ["docker-entrypoint.sh"]