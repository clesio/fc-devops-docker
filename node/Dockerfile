FROM node:18.16.0-bullseye


WORKDIR /usr/src/app

#RUN apt-get update && apt-get install -y wget

RUN npm install express

ENV DOCKERIZE_VERSION=v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

COPY . .

CMD dockerize -wait tcp://db:3306 -timeout 20s node /usr/src/app/index.js


