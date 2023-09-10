import { Router } from "express";
import AuthRoutes from "../src/app/Auth/routes";
import UserRoutes from '../src/app/Users/routes'

const routes = Router();

routes.use(AuthRoutes);
routes.use(UserRoutes);
export default routes;