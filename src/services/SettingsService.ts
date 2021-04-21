import { getCustomRepository } from "typeorm";
import { Setting } from "../entities/Settings";
import { ISettingsCreate } from "../protocols/SettingsCreate";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsService {
    async create({ username, chat }: ISettingsCreate): Promise<Setting> {
        const settingRepository = getCustomRepository(SettingsRepository);

        const userAlreadyExists = await settingRepository.findOne({username});

        if (userAlreadyExists) {
            throw new Error("Usuário já existe.");
        }

        const setting = settingRepository.create({
            username,
            chat
        });

        await settingRepository.save(setting);
        
        return setting;
    }
}

export { SettingsService };