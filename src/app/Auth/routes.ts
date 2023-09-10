import { Router } from "express";
import AuthController from "./controllers/AuthController";

const routes = Router();

routes.post('/auth/sign-in', AuthController.crate);

export default routes;