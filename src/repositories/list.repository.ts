import { prisma } from "../database/prisma-client";
import { List, ListCreate, ListRepository } from "../interfaces/list.interface";
import { User } from "../interfaces/users.interface";

class ListRepositoryPrisma implements ListRepository{
  create(data: ListCreate): Promise<List> {   
  }
  async findByToken(token: number): Promise<User | null>{
    const result = await prisma.user.findFirst({
      where:{
        id: token
      }
    })
    
    return result || null
  }

}
export { ListRepositoryPrisma }