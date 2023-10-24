FROM node:16-buster as build-env

# node-gyp needs make, gcc, and python
RUN apt-get update && apt-get install -y make g++ python git

# upgrade npm to v7
RUN npm install -g npm@7

WORKDIR /data/build_dir

COPY package.json package.json
COPY package-lock.json package-lock.json

ARG NPM_TOKEN
# --unsafe-perm required because user in docker build is root
RUN echo "@supportlogic:registry=https://npm.pkg.github.com/\n//npm.pkg.github.com/:_authToken=$NPM_TOKEN" > .npmrc && \
npm ci --unsafe-perm --ignore-scripts && \
rm .npmrc

COPY ./ ./
RUN npm run build

# Using bash in order to have access to cp/rm/tail. Check
# docker-compose file for how it's being used.
FROM bash
# This directory will be a volume that is shared between
# the ui container and nginx. No data will explicity be
# placed in here during this build, instead when the ui
# container is ran, the data from the static folder will
# be copied over to /opt/services/ui, which will then also be used
# by nginx. The reason we are setting this as the workdir
# is so that for debugging purposes, when bash is ran inside
# inside the container, the user will be automatically taken
# to this directory, which is the correct place to modify files.
# See docker-compose.yml file for more info.
WORKDIR /opt/services/ui

# NOTE: do not modify files in /data/static in a running container,
# nginx will not see the files in the /data/static directory. See
# previous comment on the reason for 'WORKDIR /opt/services/ui'.
COPY --from=build-env /data/build_dir/build /data/static/dist
COPY --from=build-env /data/build_dir/public /data/static/public
