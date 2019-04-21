FROM jwilder/dockerize AS dockerize

FROM node:10.13.0-alpine
RUN apk add git
COPY --from=dockerize /usr/local/bin/dockerize /usr/local/bin

ADD src /src
COPY docker/  /files
RUN cp -rf /files/* /
RUN rm -rf /files

WORKDIR /src

RUN npm install
RUN npm i -g @adonisjs/cli

VOLUME ["/src"]

ENTRYPOINT ["dockerize", "-template", "/env.tmpl:/src/.env", "-template", "/env.testing.tmpl:/src/.env.testing"]

CMD ["sh", "/start.sh"]
