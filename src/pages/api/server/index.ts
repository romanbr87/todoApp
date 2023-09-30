import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import morgan from "morgan";
import express, { NextFunction, Request, Response } from "express";
import nocache from "nocache";
dotenv.config();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(nocache());
app.use(morgan("dev"));

app.listen(process.env["PORT"] || 8080, () => console.log("server started"));
