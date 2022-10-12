FROM node

EXPOSE 4200

RUN bash -c 'npm install -g npm@8.10.0 @angular/cli'

VOLUME  /srv/ui
VOLUME  /srv/lib
WORKDIR /srv/ui

ADD entrypoint.sh /entrypoint.sh

ENTRYPOINT ["bash", "-c", "npm install && ng serve --host 0.0.0.0 --port 4200" ]
