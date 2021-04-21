import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    async create(req: Request, res: Response): Promise<Response>{
        const { username, chat } = req.body;

        const settingsService = new SettingsService();
       
        try {
            const setting = await settingsService.create({ username, chat });
            return res.status(201).json(setting);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

export default new SettingsController();