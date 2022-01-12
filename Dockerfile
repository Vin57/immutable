FROM node:latest

RUN npm install nodemon -g

WORKDIR /app/

CMD [ "nodemon", "-L", "app.js"]