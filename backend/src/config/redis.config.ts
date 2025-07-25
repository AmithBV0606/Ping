import { Redis } from "ioredis";

let redisClient: Redis;

if (process.env.NODE_ENV === "production") {
  redisClient = new Redis(process.env.REDIS_URL!);
} else {
  redisClient = new Redis({
    host: "localhost",
    port: 6379,
    password: "mypassword",
  });
}

export default redisClient;
