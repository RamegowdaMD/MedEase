import express from 'express';
import { loginUser, registerUser,updateUser } from '../controllers/userController.js';
import requireAuth from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);
userRouter.post('/update', requireAuth, updateUser); 

export default userRouter;

