FROM node:20.6.0

RUN apt update
RUN apt-get update
RUN apt install -y libatk-bridge2.0-0 libatspi2.0-0 libdrm2 libgbm1 libuuid1 libxcb-dri3-0 libxkbcommon0 libxshmfence1 gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget

WORKDIR /app

COPY . .

RUN npm i -g puppeteer
RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]