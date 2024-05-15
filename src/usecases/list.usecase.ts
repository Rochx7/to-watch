import { ListCreate, ListRepository } from "../interfaces/list.interface";
import { ListRepositoryPrisma } from "../repositories/list.repository";

class ListUseCase{
  private listRepository: ListRepository
  constructor(){
    this.listRepository = new ListRepositoryPrisma()  
  }

  async create({ liked, watchList, watched, userToken}: ListCreate){
    
  }

}

export { ListUseCase }