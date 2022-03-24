FROM node:14-alpine

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build

CMD ["node", "server.js"]
