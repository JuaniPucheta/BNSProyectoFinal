import express from "express";
import { compareUser, createUser } from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.post("/signIn", createUser);
userRouter.post("/logIn", compareUser);

export default userRouter;