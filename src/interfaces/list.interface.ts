import { User } from "./users.interface"

export interface List{
  watchList: string[]
  watched: string[]
  liked: string[]
}

export interface ListCreate {
  userToken: number
  watchList: string[]
  watched: string[]
  liked: string[]
}

export interface ListRepository{
  create(data:ListCreate): Promise<List>
  findByToken(token:number): Promise<User | null>
}