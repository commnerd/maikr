FROM node

EXPOSE 4200

RUN bash -c 'npm install -g npm@8.10.0 @angular/cli'

VOLUME  /srv/ui
VOLUME  /srv/lib
WORKDIR /srv/ui

ENTRYPOINT [ "bash", "-c", "npm install && ng serve --port 4200" ]
