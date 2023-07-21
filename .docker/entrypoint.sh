#!/bin/bash

npm install
npm run build
npx prisma migrate --name initial
npm run start:dev
