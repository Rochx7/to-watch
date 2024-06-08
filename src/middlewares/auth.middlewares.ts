import { FastifyReply, FastifyRequest } from "fastify";

export async function authMiddleware(req: FastifyRequest, reply: FastifyReply) {
  const apiToken = req.headers["token"];

  if (!apiToken) {
    reply.status(401).send({
      message: "Token is required",
    });
  }
}
