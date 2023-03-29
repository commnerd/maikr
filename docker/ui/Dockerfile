FROM alpine/git as project-fetcher

RUN git clone https://github.com/commnerd/maikr.git -b v0.5.x /maikr

FROM node as builder

RUN npm install --global @angular/cli

COPY --from=project-fetcher /maikr/ui /web/ui

RUN cd /web/ui && \
    npm install && \
    ng build --production

