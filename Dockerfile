FROM node:16.13.1-alpine3.13

COPY . .

RUN npm i 

ENTRYPOINT [ "npm", "run", "dev" ]