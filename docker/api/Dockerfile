FROM alpine/git as project-fetcher

RUN git clone https://github.com/commnerd/maikr.git -b v0.5.x /maikr

FROM node:19.8 as builder

COPY --from=project-fetcher /maikr/api /web/api

RUN cd /web/api && \
    npm install

WORKDIR /web/api

CMD [ "npm run serve" ]