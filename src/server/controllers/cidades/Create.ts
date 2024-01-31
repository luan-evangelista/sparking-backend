import { Request, Response } from "express";

interface ICidade {
  nome: string;
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {

  const data = req.body;
  console.log("~ data:", data)

  return res.send(`Create ${req.body}!`);
};
