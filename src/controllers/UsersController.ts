import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UserController {
    async create(req: Request, res: Response): Promise<Response> {
        const { email } = req.body;

        const usersService = new UsersService();

        const user = await usersService.create(email);

        return res.status(201).json(user);
    }
}

export default new UserController();