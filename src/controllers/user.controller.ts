import { FastifyReply, FastifyRequest } from "fastify";
import { UserCreate, UserRepository } from "../interfaces/users.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

export class UserController {
  private UserRepository: UserRepository;
  constructor() {
    this.UserRepository = new UserRepositoryPrisma();
  }

  async create(req: FastifyRequest<{ Body: UserCreate }>, reply: FastifyReply) {
    const { email, name, userName } = req.body;
    try {
      const verifyIfUserExists = await this.UserRepository.findByEmail(email);

      if (verifyIfUserExists) {
        throw new Error("User already exists");
      }

      const result = await this.UserRepository.create({
        email,
        name,
        userName,
      });

      return reply.code(201).send(result);
    } catch (error) {
      reply.code(500).send(error);
    }
  }
}
