import { FastifyInstance } from "fastify";
import { string, z } from "zod";
import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";

export async function userCollectionRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/users/:username/collection",
    { onRequest: [authenticate] },
    async (req: any, res) => {
      const userId = req.user.sub;

      const userCardsCollection = await prisma.users.findUnique({
        where: {
          id: userId,
        },
        select: {
          username: true,
          id: true,
          collection: {
            select: {
              cardsOwned: {
                select: {
                  cardDefId: true,
                },
              },
            },
          },
        },
      });

      return userCardsCollection;
    }
  );

  fastify.post(
    "/users/:username/collection",
    { onRequest: [authenticate] },
    async (req: any, res) => {
      const createBody = z.object({
        CardDefId: z.string(),
      });

      const { CardDefId } = createBody.parse(req.body);

      const userId = req.user.sub;

      const user = await prisma.users.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user || user.username !== req.user.username)
        return res.status(401).send(`User not found`);

      const cardsFound = await prisma.cards.findFirst({
        where: {
          collectionId: user.collectionId ? user.collectionId : "not found",
          cardDefId: CardDefId,
        },
      });
      console.log(cardsFound);

      if (cardsFound) {
        const deleteCardFromCollection = await prisma.cards.deleteMany({
          where: {
            cardDefId: CardDefId,
            collectionId: user.collectionId,
          },
        });
        return res.status(200).send(`Card ${CardDefId} deleted succesfully`);
      } else if (!cardsFound) {
        const addCardToCollection = await prisma.cards.create({
          data: {
            cardDefId: CardDefId,
            collecion: {
              connect: {
                id: user.collectionId,
              },
            },
          },
        });
        return res.status(201).send(`Card ${CardDefId} added succesfully`);
      }
    }
  );
}
