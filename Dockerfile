FROM node:20-slim

WORKDIR /home/node/app

USER node

# with -f process keeps running
CMD ["tail", "-f", "/dev/null"]