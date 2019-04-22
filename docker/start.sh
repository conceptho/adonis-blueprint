#!/bin/bash

dockerize -wait tcp://$DB_HOST:$DB_PORT

node ace migration:run --force

crond -l 2

if [ $NODE_ENV == "development" ]; then
  if [ $DEBUG_MODE == "force" ]; then
    npm run dev:debug
  else
    npm run dev
  fi
else
  npm run start
fi