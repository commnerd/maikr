FROM node

ENV USER  1000
ENV GROUP 1000

RUN bash -c 'npm install -g npm@8.9.0 @angular/cli'

VOLUME  /srv
WORKDIR /srv

# ENTRYPOINT [ "/usr/local/bin/npm install && /usr/local/bin/ng serve" ]
ENTRYPOINT [ "bash", "-c", "npm install && ng serve" ]
