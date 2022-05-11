FROM node

RUN bash -c 'npm install -g npm@8.9.0 @angular/cli'

VOLUME  /srv
WORKDIR /srv

# ENTRYPOINT [ "/usr/local/bin/npm install && /usr/local/bin/ng serve" ]
ENTRYPOINT [ "bash", "-c", "npm install && ng serve" ]
