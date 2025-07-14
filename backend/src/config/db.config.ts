import { PrismaClient } from "../generated/prisma";

const prismaClient = new PrismaClient({
  log: ["error", "query"],
});

export default prismaClient;
