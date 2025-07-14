import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express! Amittt");
});

// Routes :
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
