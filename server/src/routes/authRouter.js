import express from "express";
import { loginUser, signupUser } from "../controller/userController.js";

const authRouter = express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/signup", signupUser);

export default authRouter;
