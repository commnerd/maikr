FROM node

RUN npm install -g npm@8.9.0 @angular/cli && mkdir -p /project/ui

VOLUME  /project/ui
WORKDIR /project/ui


# ENTRYPOINT [ "npm install && ng serve" ]
ENTRYPOINT [ "bash" ]
