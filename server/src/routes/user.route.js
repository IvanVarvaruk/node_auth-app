import { Router } from 'express';

import { userController } from '../controllers/user.controller.js';
import { catchError } from '../utils/catchError.js';

export const userRouter = new Router();

userRouter.get('/users/:id', catchError(userController.getById));
userRouter.patch('/users/profile', catchError(userController.update));
userRouter.patch('/users/password', catchError(userController.updatePassword));
userRouter.patch('/users/email', catchError(userController.updateEmail));
userRouter.get('/users', catchError(userController.getAll));
