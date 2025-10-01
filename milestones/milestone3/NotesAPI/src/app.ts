import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors"; // import cors
import noteRouter from "./notes/notes.routes";

const app = express();
const port = 3000;

// Enable CORS for all origins (or restrict to your Angular app)
app.use(cors({
  origin: 'http://localhost:4200' // allow requests from Angular frontend
}));

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
