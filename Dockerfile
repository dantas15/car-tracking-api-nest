FROM node:20-slim

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app


RUN chown node:node /home/node/app

# with -f process keeps running
CMD ["tail", "-f", "/dev/null"]