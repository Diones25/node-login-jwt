import { Request, Response, NextFunction } from "express";
import AuthService from "../service/Authservice";
import AuthError from "../exceptions/AuthError";

export default async (req: Request, res: Response, nex: NextFunction) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const [, token] = authHeader.split(' ');

  try {
    //verificando se o token é valido
    const authService = new AuthService();
    const id = await authService.validateToken(token);
    req.user = { id, token };

  } catch (error) {
    if(error instanceof AuthError) {
      return res.status(401).send();
    }
    return res.status(500).json({ error });
  }

  return nex();
}
