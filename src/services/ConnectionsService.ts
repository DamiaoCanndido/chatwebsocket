import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { IConnectionCreate } from "../protocols/ConnectionCreate";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

class ConnectionsService {
    private connectionsRepository: Repository<Connection>;

    constructor() {
        this.connectionsRepository = getCustomRepository(ConnectionsRepository);
    }

    async create({ user_id, socket_id, admin_id, id }: IConnectionCreate){
        const connection = this.connectionsRepository.create({
            socket_id,
            user_id,
            admin_id,
            id,
        })

        await this.connectionsRepository.save(connection);

        return connection;
    }
}

export { ConnectionsService }