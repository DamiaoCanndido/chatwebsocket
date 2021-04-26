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
}

export default new MessageController();