FROM node:13.12.0-alpine

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 80

CMD ["serve", "--no-clipboard","-s", "/app/build", "-l", "80"]