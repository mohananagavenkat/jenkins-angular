FROM node:latest as build

WORKDIR /app
ADD package.json package-lock.json ./
RUN npm install --silent

ADD . .
RUN npm run build:prod

FROM nginx:alpine
COPY --from=build /app/dist/my-first-project /usr/share/nginx/html
# COPY ./nginx/auth.htpasswd /etc/nginx/templates/auth.htpasswd
# COPY ./nginx/setup_basic_auth.sh /docker-entrypoint.d/setup_basic_auth.sh
COPY ./nginx/default.conf /etc/nginx/templates/default.conf.template
RUN touch /usr/share/nginx/html/health.txt
EXPOSE 80
