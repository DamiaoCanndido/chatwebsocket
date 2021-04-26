import express from "express";
import MessagesController from "../controllers/MessagesController";

const messagesRouter = express();

messagesRouter.post("/messages", MessagesController.create);

export { messagesRouter };