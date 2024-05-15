import { List, ListCreate, ListRepository } from "../interfaces/list.interface";

class ListRepositoryPrisma implements ListRepository{
  create(data: ListCreate): Promise<List> {
      
  }
}
export { ListRepositoryPrisma }