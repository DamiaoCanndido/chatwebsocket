import "reflect-metadata";
import express from "express";
import "../database";
import { settingsRouter } from "../routes/settings";

const app = express();

app.use(express.json());

app.use(settingsRouter);

export { app };