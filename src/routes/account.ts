import { FastifyInstance } from "fastify";
import { string, z } from "zod";
import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";

export async function accountRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/accounts/me",
    { onRequest: [authenticate] },
    async (req, res) => {
      const username: string = req.user.username;
      const id: string = req.user.sub;

      const userDataBase = await prisma.users.findUnique({
        where: {
          id: id,
        },
      });

      return { username };
    }
  );
}
