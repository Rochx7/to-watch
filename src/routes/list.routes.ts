import { FastifyInstance } from "fastify";
import { UserCreate } from "../interfaces/users.interface";
import { ListUseCase } from "../usecases/list.usecase";
import { ListCreate } from "../interfaces/list.interface";
import { authMiddleware } from "../middlewares/auth.middlewares";

export async function listRoutes(fastify: FastifyInstance){
  const listUseCase = new ListUseCase()
  fastify.addHook("preHandler", authMiddleware)
  fastify.post<{Body: ListCreate}>("/", async(req, reply) => {
    const { token } = req.headers["token"]
    try {
     const payload = {
      userToken: token,
      watchList: [],
      liked: [],
      watched: []
     }
      const data = await listUseCase.create({...payload})

      return reply.send(data)
      
    } catch (error) {
      reply.send(error)
    }
  })
}