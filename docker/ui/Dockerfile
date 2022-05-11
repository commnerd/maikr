FROM node

ENV USER  1000
ENV GROUP 1000
ENV PORT  4200

EXPOSE ${PORT}

RUN bash -c 'npm install -g npm@8.9.0 @angular/cli'

VOLUME  /srv/ui
VOLUME  /srv/lib
WORKDIR /srv/ui

ENTRYPOINT [ "bash", "-c", "npm install && ng serve --host 0.0.0.0" ]
