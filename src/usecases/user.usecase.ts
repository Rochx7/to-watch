import { User, UserCreate, UserRepository } from "../interfaces/users.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

export class UserUseCase {
  private UserRepository:UserRepository
  constructor(){
    this.UserRepository = new UserRepositoryPrisma()
  }

  async create({email, name, userName}:UserCreate): Promise<User>{
    const verifyIfUserExists = await this.UserRepository.findByEmail(email)
    
    if(verifyIfUserExists){
      throw new Error("User already exists")
    }

    const result = await this.UserRepository.create({ email,name,userName })
    return result
  }

}