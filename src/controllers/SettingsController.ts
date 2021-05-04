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

    async findOneByUsername(req: Request, res: Response) {
        const { username } = req.params;

        const settingsService = new SettingsService();

        const settings = await settingsService.findByUsername(username);

        return res.json(settings);
    }

    async update(req: Request, res: Response) {
        const { username } = req.params;

        const { chat } = req.body;

        const settingsService = new SettingsService();

        const settings = await settingsService.update(username, chat);

        return res.json(settings);
    }
}

export default new SettingsController();