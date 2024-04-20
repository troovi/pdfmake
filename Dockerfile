FROM node:20.6.0

WORKDIR /app

COPY . .

RUN npm i -g puppeteer
RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]