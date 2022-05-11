FROM node

RUN npm install -g npm@8.9.0 @angular/cli && mkdir -p /project/ui

VOLUME  /project/srv/src
WORKDIR /project/srv/src

ENTRYPOINT [ "node index.js" ]
