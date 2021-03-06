# Base Image for build
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Base image for runner
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
