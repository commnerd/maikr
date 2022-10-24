FROM jupyterhub/singleuser

USER root

RUN apt update && apt-get install -y build-essential && apt clean

USER 1000

RUN npm install -g npm@8.19.2 && \
    npm config set prefix $HOME && \
    npm install -g ijavascript

RUN ls -lA ~

# RUN python -m ipykernel install --user --name nodejs --display-name "Node JS"

