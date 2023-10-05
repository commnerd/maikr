FROM node:20.6.1 as builder

LABEL com.maikr.image.authors="commnerd@gmail.com"

ENV BRANCH v0.8.x

RUN apt update && \
    apt install -y git && \
    yarn global add webpack-cli && \
    git clone https://github.com/commnerd/maikr.git -b ${BRANCH} && \
    cd maikr/api && \
    ./node_modules/webpack-cli/bin/cli.js

FROM node:20.6.1 as runner

EXPOSE 80

COPY --from=builder /maikr/api/dist/* /api

WORKDIR /api

CMD [ 'node /api/bundle.js' ]