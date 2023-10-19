FROM node:20.6.1

LABEL com.maikr.image.authors="commnerd@gmail.com"

ENV BRANCH v0.8.x
ENV PORT 80

EXPOSE ${PORT}

RUN git clone https://github.com/commnerd/maikr.git -b ${BRANCH} && \
    cd maikr/api && \
    yarn

WORKDIR /maikr/api

CMD [ "bash", "-c", "yarn build && yarn start" ]