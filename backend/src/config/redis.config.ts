import { Redis as IoRedis } from "ioredis";
import { Redis as UpstashRedis } from "@upstash/redis";

let redisClient: IoRedis | UpstashRedis;

if (process.env.NODE_ENV === "production") {
  redisClient = new UpstashRedis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
} else {
  redisClient = new IoRedis({
    host: "localhost",
    port: 6379,
    password: "mypassword",
  });
}

export default redisClient;
