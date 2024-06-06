export interface List {
  id: number;
  userId: number;
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
  createList({ userToken }: { userToken: number }): Promise<List | null>;
  getListByIdUser({ idUser }: { idUser: number }): Promise<List | null>;
  addNewInWatchList(data: {
    idUser: number;
    itemToAdd: string;
  }): Promise<List | null>;
  addNewInLikedList({
    idUser,
    itemToAdd,
  }: {
    idUser: number;
    itemToAdd: string;
  }): Promise<List | null>;
}
