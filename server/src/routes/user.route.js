import { Router } from 'express';

import { userController } from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { catchError } from '../utils/catchError.js';

export const userRouter = new Router();

userRouter.get(
  '/users/:id',
  authMiddleware,
  catchError(userController.getById),
);

userRouter.patch(
  '/users/profile',
  authMiddleware,
  catchError(userController.update),
);

userRouter.patch(
  '/users/password',
  authMiddleware,
  catchError(userController.updatePassword),
);

userRouter.patch(
  '/users/email',
  authMiddleware,
  catchError(userController.updateEmail),
);
userRouter.get('/users', authMiddleware, catchError(userController.getAll));
