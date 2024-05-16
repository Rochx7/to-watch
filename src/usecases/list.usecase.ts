import { ListCreate, ListRepository } from "../interfaces/list.interface";
import { UserRepository } from "../interfaces/users.interface";
import { ListRepositoryPrisma } from "../repositories/list.repository";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class ListUseCase{
  private listRepository: ListRepository
  private userRepository: UserRepository
  constructor(){
    this.listRepository = new ListRepositoryPrisma()  
    this.userRepository = new UserRepositoryPrisma()
  }

  async create({ liked, watchList, watched, userToken}: ListCreate){
    const user = await this.listRepository.findByToken(userToken)

    if(!user){
      throw new Error("User not found")
    }
    
  }

}

export { ListUseCase }