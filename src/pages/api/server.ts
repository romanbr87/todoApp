import express from "express";
import next from "next";
import { connectToDatabase1 } from "./db";

connectToDatabase1();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  app.use((req, res) => {
    return handle(req, res);
  });

  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
});
