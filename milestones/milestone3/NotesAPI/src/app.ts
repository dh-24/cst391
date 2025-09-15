import dotenv from "dotenv";
dotenv.config();


import express, { Request, Response } from "express";
import noteRouter from "./notes/notes.routes"


const app = express();
const port = 3000;

app.use(express.json());

// Root
app.get("/", (_req: Request, res: Response) => {
  res.send("Bible Notes API running...");
});

// Notes routes
app.use("/notes", noteRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
