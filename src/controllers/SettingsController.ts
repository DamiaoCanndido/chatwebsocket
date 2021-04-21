import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController {
    async create(req: Request, res: Response){
        const settingRepository = getCustomRepository(SettingsRepository);

        const { username, chat } = req.body;

        const setting = settingRepository.create({
            username,
            chat
        });

        await settingRepository.save(setting);

        return res.status(201).json(setting);
    }
}

export default new SettingsController();