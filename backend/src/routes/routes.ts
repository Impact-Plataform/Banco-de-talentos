import { Router } from "express";
const routes = Router();

routes.use("/todo", (req, res) => res.status(200).send());

export { routes };
