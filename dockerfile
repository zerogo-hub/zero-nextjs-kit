# 多阶段打包

# 第一阶段 node_modules
# 变化不频繁的放在第一阶段
FROM node:18.4-alpine3.15 AS builder

ENV NODE_ENV production
ENV NKEY gbF97MNgG7yVZdXH
ENV HOST "127.0.0.1"
ENV PORT 3000

WORKDIR /app

COPY package.json .

RUN npm install -g cnpm

RUN  NODE_ENV=development cnpm install

EXPOSE 3000


# 第二阶段
FROM node:18.4-alpine3.15 AS builder

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

# 注意设置 .dockerignore
ADD . /app

RUN npm run build

CMD [ "npm", "start" ]