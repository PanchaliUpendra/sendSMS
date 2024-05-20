FROM node:lts-alpine
# FROM node:latest

WORKDIR /admsms
COPY package*.json ./

# Copy SSL certificate and private key into the image
COPY server/src/privkey.pem /admsms/ssl/
COPY server/src/fullchain.pem /admsms/ssl/
COPY server/src/chain.pem /admsms/ssl/


COPY client/package*.json client/
RUN npm run install-client --omit=dev

COPY server/package*.json server/
RUN npm run install-server --omit=dev

COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/
USER node

CMD ["npm","start","--prefix","server"]
EXPOSE 8000