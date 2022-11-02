FROM jupyterhub/singleuser

USER root

RUN apt update && apt install -y git && \
    apt clean

USER 1000

RUN mkdir -p ~/.local/share/jupyter/kernels

RUN cd ~/.local/share/jupyter && \
    git clone https://github.com/n-riesco/ijavascript.git

RUN cd ~/.local/share/jupyter/ijavascript/bin && \
    node ijsinstall.js