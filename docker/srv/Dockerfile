FROM node

ENV MONGO_USER  user
ENV MONGO_PASS  pass
ENV MONGO_URL   mongodb
ENV MONGO_TABLE admin

EXPOSE 3000

VOLUME  /srv/srv
VOLUME /srv/lib
WORKDIR /srv/srv

ENTRYPOINT [ "bash", "-c", "npm install && npm run serve" ]
