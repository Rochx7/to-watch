export interface List {
  watchList: string[];
  watched: string[];
  liked: string[];
}

export interface ListCreate {
  userToken: number;
  watchList: string[];
  watched: string[];
  liked: string[];
}

export interface ListRepository {
  createList({ userToken }: { userToken: number }): Promise<List>;
  getListByIdUser({ idUser }: { idUser: number }): Promise<List[]>;
  addNewInWatchList(data: {
    idUser: number;
    itemToAdd: string;
  }): Promise<List | null>;
}
