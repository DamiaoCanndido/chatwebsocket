import "reflect-metadata";
import express from "express";
import "../database";
import { settingsRouter } from "../routes/settings";
import { usersRouter } from "../routes/users";

const app = express();

app.use(express.json());

app.use(settingsRouter);
app.use(usersRouter);

export { app };