FROM node:20-alpine as build

WORKDIR /usr/local/blog

COPY . .
RUN npm ci --ignore-scripts --no-audit
RUN npm run build:client --workspace=@digital-garden/blog
RUN npm run build:server --workspace=@digital-garden/blog

FROM node:20-alpine as start

WORKDIR /usr/local/blog

COPY . .
RUN npm ci --omit=dev --ignore-scripts --no-audit
COPY --from=build /usr/local/blog/packages/blog/dist /usr/local/blog/packages/blog/dist
COPY --from=build /usr/local/blog/packages/blog/public/client /usr/local/blog/packages/blog/public/client

CMD ["npm", "run", "start:prod", "--workspace=@digital-garden/blog"]
EXPOSE 3000
