import express from "express";
import UsersController from "../controllers/UsersController";

const usersRouter = express();

usersRouter.post("/users", UsersController.create);

export { usersRouter };