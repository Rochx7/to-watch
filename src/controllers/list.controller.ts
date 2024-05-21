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

  async create(userToken: number) {
    const user = await this.userRepository.findByToken(userToken);

    if (!user) {
      throw new Error("User not found");
    }

    const result = await this.listRepository.createList({ userToken });

    return result;
  }
  async getList({ idUser }: { idUser: number }) {
    const listUser = await this.listRepository.getListByIdUser({ idUser });

    return listUser;
  }

  async addNewInWatchList(data: { idUser: number; itemToAdd: string }) {
    const result = await this.listRepository.addNewInWatchList(data);

    return result;
  }
}
