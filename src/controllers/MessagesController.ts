import {Request, Response} from "express";
import { MessagesServices } from "../services/MessagesService";

class MessageController {
    async create(req: Request, res: Response) {
        const { admin_id, text, user_id } = req.body;
        const messagesService = new MessagesServices();

        try {
            const message = await messagesService.create({
                admin_id,
                text,
                user_id,
            });
    
            return res.status(201).json(message);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }

    async showByUser(req: Request, res: Response) {
        const { userId } = req.params;

        const messagesService = new MessagesServices();

        const list = await messagesService.listByUser(userId);

        return res.json(list);
    }
}

export default new MessageController();