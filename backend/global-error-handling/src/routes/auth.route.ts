import { Router } from "express";
import type { IRouter } from "express";
import * as authController from "../controller/auth.controller.js";

const authRouter: IRouter = Router();

authRouter.post("/register", authController.register);

export default authRouter;
