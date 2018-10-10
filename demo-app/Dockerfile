# good to specify Node version
FROM node:10

WORKDIR /app

# can also do COPY . ./ (host . to container .)
COPY . /app

RUN npm install

# expose 3000 to other docker containers. use -p to make it available outside
EXPOSE 3000

CMD [ "node", "index.js" ]
