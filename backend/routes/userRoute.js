import express from 'express';
import { loginUser, registerUser, adminLogin, getUser, updateUser } from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", getUser); 
userRouter.put("/:id", updateUser); 
userRouter.post("/admin", adminLogin);


export default userRouter;