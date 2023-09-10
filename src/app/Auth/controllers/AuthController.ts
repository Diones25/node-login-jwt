import { Request, Response } from 'express';
import AuthService from '../service/Authservice';
import AuthError from '../exceptions/AuthError';

class AuthController {
  async crate(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const authService = new AuthService();
      const { user, token } = await authService.signIn(email, password);
      return res.status(200).json({ user, token });

    } catch (error) {
      if(error instanceof AuthError) {
        return res.status(401).send();
      }
      return res.status(500).json({ error });
    }
  }

  async destroy() {}
}

export default new AuthController();