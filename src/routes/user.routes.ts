import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecase";
import { UserCreate } from "../interfaces/users.interface";

export async function userRoutes(fastify: FastifyInstance){
  const userUseCase = new UserUseCase()
  fastify.post<{Body:UserCreate}>("/", async(req, reply) => {
    try {
      const {email, name, userName} = req.body
      const data = await userUseCase.create({email, name, userName})


      return reply.send(data)
      
    } catch (error) {
      reply.send(error)
    }
  })
}