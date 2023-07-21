FROM node:16.14-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "/usr/src/app/"]
RUN npm install -g @nestjs/cli
RUN npm i --save @nestjs/swagger
RUN npm install && mv node_modules ../
# RUN npx prisma generate --schema=./prisma/schema.prisma

COPY . .
# USER node
EXPOSE 4000
# CMD ["npm", "start"]
