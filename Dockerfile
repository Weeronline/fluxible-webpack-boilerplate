FROM node:8.9.4

#ENV YARN_VERSION 1.3.2
#RUN npm install --global yarn@${YARN_VERSION}

WORKDIR /home/fluxibleApp/app
COPY package.json /home/fluxibleApp/app
COPY yarn.lock /home/fluxibleApp/app

RUN yarn install --pure-lockfile

COPY app /home/fluxibleApp/app/app
COPY webpack /home/fluxibleApp/app/webpack
COPY .eslintrc .babelrc /home/fluxibleApp/app/

RUN npm run build

ENV PORT 3000
EXPOSE 3000
CMD [ "node", "build/server/server.js" ]