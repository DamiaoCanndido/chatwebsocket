import "reflect-metadata";
import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import "../database";
import { settingsRouter } from "../routes/settings";
import { usersRouter } from "../routes/users";
import { messagesRouter } from "../routes/messages";

const app = express();

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
    console.log("Se conectou", socket.id);
})

app.use(express.json());

app.use(settingsRouter);
app.use(usersRouter);
app.use(messagesRouter);

export { http };