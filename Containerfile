ARG VARIANT=1-20-bullseye
FROM mcr.microsoft.com/devcontainers/typescript-node:${VARIANT}

ENV DEBIAN_FRONTEND=noninteractive

RUN apt -y update && apt -y upgrade && npm install -g @angular/cli@16.1.0

EXPOSE 4200
