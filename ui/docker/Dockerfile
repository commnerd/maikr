FROM node:20.9

LABEL com.maikr.image.authors="commnerd@gmail.com"

ENV BRANCH v0.8.x
ENV PORT 4200
EXPOSE ${PORT}

RUN yarn global add @angular/cli && \
    git clone https://github.com/commnerd/maikr.git -b ${BRANCH} && \
    cd maikr/ui && \
    yarn

WORKDIR /maikr/ui

CMD [ "bash", "-c", "yarn && yes n | yarn start --host 0.0.0.0 1>/dev/null" ]
