import { prisma } from "../database/prisma-client";
import { List, ListRepository } from "../interfaces/list.interface";

class ListRepositoryPrisma implements ListRepository {
  async createList({ userToken }: { userToken: number }): Promise<List | null> {
    const result = await prisma.list.create({
      data: {
        liked: [],
        watched: [],
        watchList: [],
        userId: userToken,
      },
    });

    return result;
  }

  async getListByIdUser({ idUser }: { idUser: number }): Promise<List | null> {
    const result = await prisma.list.findFirst({
      where: {
        userId: idUser,
      },
      include: {
        user: false,
      },
    });

    return result;
  }

  async addNewInWatchList({
    idUser,
    itemToAdd,
  }: {
    idUser: number;
    itemToAdd: string;
  }): Promise<List | null> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: idUser,
        },
      });

      if (!user) {
        throw new Error("User not found.");
      }

      const list = await prisma.list.findFirst({
        where: {
          userId: idUser,
        },
      });

      if (!list) {
        throw new Error("List not found.");
      }

      const updatedList = await prisma.list.update({
        where: {
          id: list.id,
        },
        data: {
          watchList: {
            push: itemToAdd,
          },
        },
      });

      return updatedList;
    } catch (error) {
      console.error("Error adding item to watchList:", error);
      return null;
    }
  }

  async addNewInLikedList({
    idUser,
    itemToAdd,
  }: {
    idUser: number;
    itemToAdd: string;
  }): Promise<List | null> {
    const list = await prisma.list.findFirst({
      where: {
        userId: idUser,
      },
    });

    if (!list) {
      throw new Error("List not found for the given user.");
    }

    const result = await prisma.list.update({
      where: {
        id: list.id,
      },
      data: {
        liked: {
          push: itemToAdd,
        },
      },
    });

    return result;
  }
}
export { ListRepositoryPrisma };
