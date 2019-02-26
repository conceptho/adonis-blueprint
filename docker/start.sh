#!/bin/bash

adonis migration:run --force
crond -l 2
if [ $NODE_ENV == "development" ]; then
  adonis serve --dev --polling
else
  adonis serve
fi
