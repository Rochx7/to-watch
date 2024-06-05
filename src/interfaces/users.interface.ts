import { List } from "./list.interface";

export interface User {
  id: number;
  email: string;
  name: string;
  userName: string;
  list?: List | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreate {
  email: string;
  name: string;
  userName: string;
}

export interface UserRepository {
  create(data: UserCreate): Promise<User>;
  getUsersWithList(): Promise<User[] | null>;
  findByEmail(email: string): Promise<User | null>;
  findByToken(token: number): Promise<User | null>;
}
