import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient({
  log: ["error", "query"],
});

export default prismaClient;
