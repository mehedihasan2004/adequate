import { Server } from "http";
import app from "./app";
import config from "./config";

const root = () => {
  try {
    const server: Server = app.listen(config.port, () =>
      console.log(`Adequate Running On http://localhost:${config.port}`)
    );

    const exitHandler = () => {
      if (server) server.close(() => console.log("Server closed!"));
      process.exit(1);
    };

    const unexpectedErrorHandlar = (error: unknown) => {
      console.log("Error From Unexpected Error Handler --> ", error);
      exitHandler();
    };

    process.on("uncaughtException", unexpectedErrorHandlar);
    process.on("unhandledRejection", unexpectedErrorHandlar);
    process.on("SIGTERM", () => {
      console.log("Sigterm received!");
      if (server) server.close();
    });
  } catch (error) {
    console.log("Error From Root --> ", error);
  }
};

root();
