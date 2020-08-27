FROM node:12.18.3

WORKDIR /app

ENV PATH /app/node_modules.bin:$PATH

COPY package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli@10.0.7

COPY . /app

CMD ng serve --host 0.0.0.0 --port 8080