import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Settings";
import { ISettingsCreate } from "../protocols/SettingsCreate";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsService {

    private settingRepository: Repository<Setting>;

    constructor() {
        this.settingRepository = getCustomRepository(SettingsRepository);
    }

    async create({ username, chat }: ISettingsCreate): Promise<Setting> {

        const userAlreadyExists = await this.settingRepository.findOne({username});

        if (userAlreadyExists) {
            throw new Error("Usuário já existe.");
        }

        const setting = this.settingRepository.create({
            username,
            chat
        });

        await this.settingRepository.save(setting);
        
        return setting;
    }

    async findByUsername(username: string) {
        const settings = await this.settingRepository.findOne({
            username
        })
        return settings;
    }

    async update(username: string, chat: boolean) {
        const settings = await this.settingRepository.createQueryBuilder()
            .update(Setting)
            .set({ chat })
            .where("username = :username", {
                username
            })
            .execute();
    }
}

export { SettingsService };