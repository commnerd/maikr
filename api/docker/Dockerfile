FROM node:20.6.1 as builder

LABEL com.maikr.image.authors="commnerd@gmail.com"

ENV BRANCH v0.8.x

RUN apt update && \
    apt install -y git && \
    git clone https://github.com/commnerd/maikr.git -b ${BRANCH} && \
    cd maikr && ls

COPY --from=builder /maikr/api /api

WORKDIR /api

CMD [ 'yarn', 'dev' ]