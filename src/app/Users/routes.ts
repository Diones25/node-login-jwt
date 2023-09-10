import { Router } from "express";
import AuthMiddleware from "../Auth/middlewares/AuthMiddleware";
import UsersController from "./controllers/UsersController";

const routes = Router();

routes.get('/users', AuthMiddleware, UsersController.index);

export default routes;