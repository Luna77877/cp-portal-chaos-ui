FROM node:22.14-alpine AS build
WORKDIR /app
COPY package.json ./
COPY .env ./
RUN npm install

COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}

RUN npm run build --verbose

FROM nginx:stable-alpine
RUN rm -rf usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8095
CMD ["nginx", "-g", "daemon off;"]
