import { FastifyInstance } from "fastify";
import { UserController } from "../controllers/user.controller";
import { UserCreate } from "../interfaces/users.interface";

export async function userRoutes(fastify: FastifyInstance) {
  const userController = new UserController();
  fastify.post<{ Body: UserCreate }>("/", (req, reply) =>
    userController.create(req, reply)
  );
  fastify.get<{ Body: UserCreate }>("/", (req, reply) =>
    userController.getUsersList(req, reply)
  );
}
