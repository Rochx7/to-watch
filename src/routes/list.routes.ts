import { FastifyInstance } from "fastify";
import { ListController } from "../controllers/list.controller";
import { ListCreate } from "../interfaces/list.interface";
import { authMiddleware } from "../middlewares/auth.middlewares";

export async function listRoutes(fastify: FastifyInstance) {
  const listController = new ListController();
  fastify.addHook("preHandler", authMiddleware);
  fastify.get<{ Params: { id: number } }>("/:id", async (req, reply) => {
    const { id } = req.params;
    try {
      const data = await listController.getList({ idUser: Number(id) });

      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.put<{ Body: { itemToAdd: string; idUser: number } }>(
    "/",
    async (req, reply) => {
      const { idUser, itemToAdd } = req.body;

      try {
        const data = { idUser, itemToAdd };
        const response = await listController.addNewInWatchList(data);

        return reply.send(response);
      } catch (error) {
        reply.send(error);
      }
    }
  );

  fastify.post<{ Body: ListCreate }>("/", async (req, reply) => {
    const { token } = req.headers["token"];
    try {
      const data = await listController.create(token);

      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });
}
