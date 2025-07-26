import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes";
import { Server } from "socket.io";
import { createServer } from "http";
import { setupSocket } from "./socket";
import { createAdapter } from "@socket.io/redis-streams-adapter";
import redisClient from "./config/redis.config";
import { instrument } from "@socket.io/admin-ui";

dotenv.config();

// Express Application
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express! Amittt");
});

// Main route :
app.use("/api", router);

// Create HTTP server and attach Socket.IO
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "https://admin.socket.io", "https://ping.amithbv.com"],
    credentials: true,
  },
  adapter: createAdapter(redisClient),
});

// Admin UI :
instrument(io, {
  auth: false,
  mode: "development",
});

setupSocket(io);
export { io };

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
