import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import { usersRoutes } from "./routes/users";
import { accountRoutes } from "./routes/account";
import { userCollectionRoutes } from "./routes/usersCollection";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(jwt, {
    secret: "chaveSecretaDoJwt",
  });

  await fastify.register(usersRoutes);
  await fastify.register(accountRoutes);
  await fastify.register(userCollectionRoutes);

  /*  var pg = require("pg");
  var conString =
    "postgres://yssuwpbl:xZL3Nw3I862kUYpedsaUA2OCt6C9xdic@motty.db.elephantsql.com/yssuwpbl";
  var client = new pg.Client(conString);
  client.connect(function (err: any) {
    if (err) {
      return console.error("could not connect to postgres", err);
    }
    client.query(
      'SELECT NOW() AS "theTime"',
      function (err: any, result: { rows: { theTime: any }[] }) {
        if (err) {
          return console.error("error running query", err);
        }
        console.log(result.rows[0].theTime);
        // >> output: 2018-08-23T14:02:57.117Z
        client.end();
      }
    );
  }); */

  fastify.listen({ port: 3333 }, (err) => {
    if (err) throw err;
  });
}

bootstrap();
