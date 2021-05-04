import express from "express";
import SettingsController from "../controllers/SettingsController";

const settingsRouter = express();

settingsRouter.get("/settings/:username", SettingsController.findOneByUsername);
settingsRouter.post("/settings", SettingsController.create);
settingsRouter.put("/settings/:username", SettingsController.update);

export { settingsRouter };