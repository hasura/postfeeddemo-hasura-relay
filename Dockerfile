FROM node:20

RUN curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash

WORKDIR /app