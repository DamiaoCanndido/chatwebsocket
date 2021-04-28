import "reflect-metadata";
import express from "express";
import path from "path";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import "../database";
import { settingsRouter } from "../routes/settings";
import { usersRouter } from "../routes/users";
import { messagesRouter } from "../routes/messages";

const app = express();

app.use(express.static(path.join(__dirname, "..", "..", "public")));
app.set("views", path.join(__dirname, "..", "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// routes view
app.get("/pages/client", (req, res) => {
    return res.render("html/client.html");
})

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
    console.log("Se conectou", socket.id);
})

app.use(express.json());

app.use(settingsRouter);
app.use(usersRouter);
app.use(messagesRouter);

export { http, io };