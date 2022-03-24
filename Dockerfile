FROM node:14
WORKDIR /var/www
COPY . .
RUN npm run install && npm run build
EXPOSE 3000
CMD node ./server.js
