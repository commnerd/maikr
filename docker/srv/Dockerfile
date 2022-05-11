FROM node

ENV USER  1000
ENV GROUP 1000
ENV PORT  3000

EXPOSE ${PORT}

VOLUME  /srv/srv
VOLUME /srv/lib
WORKDIR /srv/srv

ENTRYPOINT [ "bash", "-c", "npm install && npm run serve" ]
