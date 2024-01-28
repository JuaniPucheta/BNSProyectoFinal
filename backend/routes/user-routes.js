import express from "express";
import { logIn, createUser } from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.post("/signIn", createUser);
userRouter.post("/logIn", logIn);

export default userRouter;