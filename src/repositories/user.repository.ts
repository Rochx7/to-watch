import { prisma } from "../database/prisma-client";
import {
  User,
  UserCreate,
  UserRepository,
} from "../interfaces/users.interface";

class UserRepositoryPrisma implements UserRepository {
  async create(data: UserCreate): Promise<User> {
    const result = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        userName: data.userName,
        lists: {
          create: {
            watchList: [],
            watched: [],
            liked: [],
          },
        },
      },
    });
    return result;
  }

  async getUsersWithList(): Promise<User[]> {
    const result = await prisma.user.findMany({
      include: {
        lists: true,
      },
    });

    return result || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return result || null;
  }

  async findByToken(token: number): Promise<User | null> {
    const result = await prisma.user.findFirst({
      where: {
        id: token,
      },
    });

    return result || null;
  }
}

export { UserRepositoryPrisma };
