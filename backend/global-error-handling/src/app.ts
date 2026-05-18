import cookieParser from "cookie-parser";
import express from "express";
import type { Express } from "express";
import morgan from "morgan";

const app: Express = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

export default app;
