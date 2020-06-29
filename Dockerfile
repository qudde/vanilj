FROM mhart/alpine-node:12

ENV port 8080

RUN mkdir -p /usr/src/app

COPY ./ /usr/src/app

WORKDIR /usr/src/app

RUN npm install --verbose

CMD ["npm", "run", "prod"]
