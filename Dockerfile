#Download Node Alpine image
FROM node:16-alpine As build

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

#Build Angular application in PROD mode
RUN npm run build

#Download NGINX Image
FROM nginx:1.15.8-alpine

#Copy built angular files to NGINX HTML folder
COPY --from=build /app/dist/exam-platform-front /usr/share/nginx/html
