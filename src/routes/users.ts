import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";

export async function usersRoutes(fastify: FastifyInstance) {
  fastify.get("/users", async () => {
    const users = await prisma.users.findMany();
    return { users };
  });

  /*   fastify.delete("/users/delete", async () => {
    await prisma.users.deleteMany();
    const users = await prisma.users.findMany();
    return users;
  });
 */
  fastify.post("/users", async (req, res) => {
    const createUserBody = z.object({
      username: z.string(),
      password: z.string(),
    });

    const { username, password } = createUserBody.parse(req.body);

    const userExist = await prisma.users.findFirst({
      where: {
        username: username,
      },
    });

    if (userExist) return res.status(409).send("User already exists");

    if (username.length < 2) {
      console.log(username);
      return res.status(401).send("The name is too short. Try another");
    }

    const passwordSplit = password.split("");
    /*     const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    specialChars.test(password) === false */
    if (
      password.length < 8 ||
      passwordSplit.find(Number) === undefined ||
      /[A-Z]/.test(password) !== true
    ) {
      return res
        .status(400)
        .send(
          `The password does not follow the standards of min 8 characters, with at least 1 number and capital letter`
        );
    }

    const createdUser = await prisma.users.create({
      data: {
        username: username,
        password: password,
        collection: {
          create: {},
        },
      },
    });

    /*     await prisma.collection.create({
      data: {
        ownerId: createdUser.id,
      },
    }); */
    return res.status(201).send(`User ${username} created`);
  });

  /*   loggin in */
  fastify.post("/users/:username", async (req: any, res) => {
    if (req.params.username === "") {
      return res.status(401).send(`Username is missing`);
    } else if (req.body.password === "") {
      return res.status(401).send(`Password is missing`);
    }

    const userParams = z.object({
      username: z.string(),
    });
    const userBody = z.object({
      password: z.string(),
    });

    const { username } = userParams.parse(req.params);
    const { password } = userBody.parse(req.body);

    const userSearched = await prisma.users.findFirst({
      where: {
        username: username,
        password: password,
      },
    });

    if (userSearched) {
      const tokenJwt = fastify.jwt.sign(
        {
          username: username,
          /*    password: password, */
        },
        {
          sub: userSearched?.id,
          expiresIn: "24 hours",
        }
      );
      return res.status(200).send(tokenJwt);
    } else {
      console.log(username);
      return res.status(401).send(`Username and/or passwords are incorrect`);
    }
  });
}
