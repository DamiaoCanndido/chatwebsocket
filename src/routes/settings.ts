import express from "express";
import SettingsController from "../controllers/SettingsController";

const settingsRouter = express();

settingsRouter.post("/settings", SettingsController.create);

export { settingsRouter };