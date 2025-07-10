import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express! Amittt");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
