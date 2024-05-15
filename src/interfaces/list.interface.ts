export interface List{
  id: string
  user: string
  userId: string
  watchList: string[]
  watched: string[]
  liked: string[]
}

export interface ListCreate {
  userToken: string
  watchList: string[]
  watched: string[]
  liked: string[]
}

export interface ListRepository{
  create(data:ListCreate): Promise<List>
  
}