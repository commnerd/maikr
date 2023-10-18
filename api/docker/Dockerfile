FROM node:20.6.1 as builder

LABEL com.maikr.image.authors="commnerd@gmail.com"

ENV BRANCH v0.8.x
ENV PORT 80

RUN git clone https://github.com/commnerd/maikr.git -b ${BRANCH} && \
    cd maikr/api && \
    yarn && yarn build

FROM node:20.6.1 as runner

EXPOSE ${PORT}

COPY --from=builder /maikr/api /api

WORKDIR /api

RUN [ "bash", "-c", "yarn && yarn build"]

CMD [ "bash", "-c", "ls" ]
