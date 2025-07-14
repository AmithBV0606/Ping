import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

// Middlewares
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express! Amittt");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
