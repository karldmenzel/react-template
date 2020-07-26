#Build App
FROM node:current-alpine AS build-stage

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

#Run server
FROM nginx:latest

COPY --from=build-stage /app/build /var/dev/react-template/build

COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]