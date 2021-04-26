import express from "express";
import MessagesController from "../controllers/MessagesController";

const messagesRouter = express();

messagesRouter.get("/messages/:userId", MessagesController.showByUser);
messagesRouter.post("/messages", MessagesController.create);

export { messagesRouter };