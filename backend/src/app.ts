import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppError } from "./errors/app-error";

const app = express();

app.use(cors());
app.use(express.json());

app.use((err: Error, _req: Request, res: Response) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.get("/", (_request, response) => {
  return response.json({ message: "hello world" });
});

export { app };
