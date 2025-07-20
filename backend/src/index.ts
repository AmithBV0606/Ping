import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes";
import { Server } from "socket.io";
import { createServer } from "http";

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
    origin: "*",
  },
});
export { io };

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
