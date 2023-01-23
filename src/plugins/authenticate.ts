import { FastifyRequest } from "fastify";

export async function authenticate(req: FastifyRequest) {
  await req.jwtVerify();
}
