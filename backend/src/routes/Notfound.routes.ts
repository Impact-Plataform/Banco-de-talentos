import { Router, Request, Response } from "express";
const notFound: Router = Router();

const url = () => {
  return "/docs";
};
notFound.get("**", (req: Request, res: Response) => {
  return res.redirect(url());
});
notFound.post("**", (req: Request, res: Response) => {
  return res.redirect(url());
});
notFound.put("**", (req: Request, res: Response) => {
  return res.redirect(url());
});
notFound.patch("**", (req: Request, res: Response) => {
  return res.redirect(url());
});
notFound.delete("**", (req: Request, res: Response) => {
  return res.redirect(url());
});

export default notFound;
