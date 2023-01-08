import * as yup from "yup";
import { Request, Response, NextFunction } from "express";
import regex from "../libs/regex/validator";
async function productValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("O nome do produto é obrigatório")
      .matches(regex.name, "Nome inválido"),
    price: yup
      .string()
      .required("Preço obrigatório.")
      .matches(regex.validPrice, "Preço inválido."),
  });
  await schema
    .validate(req.body)
    .then(() => next())
    .catch((err) => {
      return res.status(400).json({
        error: err.errors,
      });
    });
}

export default productValidator;
