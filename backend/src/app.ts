import cors from "cors";
import cookieParser from "cookie-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { routes } from "./app/routes";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use("/api/v1", routes);

// Global error handler
app.use(globalErrorHandler);

// Test route
app.get("/test", async (_, res: Response) => {
  res.json("Adequate server is running 🔥 💧 🔥");
});

// Handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Not found!",
    errorMessages: [{ path: req.originalUrl, message: "API not found!" }],
  });

  next();
});

export default app;
