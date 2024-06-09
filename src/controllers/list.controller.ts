import { FastifyReply, FastifyRequest } from "fastify";
import { ListRepository } from "../interfaces/list.interface";
import { UserRepository } from "../interfaces/users.interface";
import { ListRepositoryPrisma } from "../repositories/list.repository";
import { UserRepositoryPrisma } from "../repositories/user.repository";

export class ListController {
  private listRepository: ListRepository;
  private userRepository: UserRepository;
  constructor() {
    this.listRepository = new ListRepositoryPrisma();
    this.userRepository = new UserRepositoryPrisma();
  }

  getList = async (req: FastifyRequest, reply: FastifyReply) => {
    const { id }: any = req.params;
    try {
      const listUser = await this.listRepository.getListByIdUser({
        idUser: Number(id),
      });

      return listUser;
    } catch (error) {
      reply.send(error);
    }
  };

  addNewInWatchList = async (data: { idUser: number; itemToAdd: string }) => {
    const result = await this.listRepository.addNewInWatchList(data);

    return result;
  };

  addNewInLikedList = async (data: { idUser: number; itemToAdd: string }) => {
    const result = await this.listRepository.addNewInLikedList(data);

    return result;
  };
}
