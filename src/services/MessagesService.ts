import { getCustomRepository } from "typeorm";
import { IMessageCreate } from "../protocols/MessageCreate";
import { MessagesRepository } from "../repositories/MessagesRepository";

class MessagesServices {
    async create({ admin_id, text, user_id }: IMessageCreate) {
        const messagesRepository = getCustomRepository(MessagesRepository);

        const message = messagesRepository.create({
            admin_id,
            text,
            user_id,
        });

        await messagesRepository.save(message);

        return message;
    }
}

export { MessagesServices };