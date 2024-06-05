export interface List {
  id: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListCreate {
  userToken: number;
  watchList: string[];
  watched: string[];
  liked: string[];
}

export interface ListRepository {
  createList({ userToken }: { userToken: number }): Promise<List>;
  getListByIdUser({ idUser }: { idUser: number }): Promise<List>;
  addNewInWatchList(data: {
    idUser: number;
    itemToAdd: string;
  }): Promise<List | null>;
}
