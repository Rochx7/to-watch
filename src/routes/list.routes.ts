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

  fastify.post<{ Body: ListCreate }>("/", async (req, reply) => {
    const { token } = req.headers["token"];
    try {
      const data = await listController.create(token);

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

  fastify.patch("/:id/liked", async (req, reply) => {
    const { id } = req.params as { id: string };
    const { itemToAdd } = req.body as { itemToAdd: string };

    try {
      const data = { idUser: Number(id), itemToAdd };
      const response = await listController.addNewInLikedList(data);

      if (!response) {
        return reply
          .status(404)
          .send({ error: "List not found for the given user." });
      }

      return reply.send(response);
    } catch (error: any) {
      reply.status(400).send({ error: error.message });
    }
  });
}
