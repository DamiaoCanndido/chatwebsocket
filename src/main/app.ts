import "reflect-metadata";
import express from "express";
import "../database";
import { settingsRouter } from "../routes/settings";
import { usersRouter } from "../routes/users";
import { messagesRouter } from "../routes/messages";

const app = express();

app.use(express.json());

app.use(settingsRouter);
app.use(usersRouter);
app.use(messagesRouter);

export { app };