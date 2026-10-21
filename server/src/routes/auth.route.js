import { Router } from 'express';

import { authController } from '../controllers/auth.controller.js';
import { catchError } from '../utils/catchError.js';

export const authRouter = new Router();

authRouter.post('/registration', catchError(authController.register));

authRouter.post(
  '/activation/:activationToken',
  catchError(authController.activate),
);
authRouter.post('/login', catchError(authController.login));
authRouter.get('/refresh', catchError(authController.refresh));
authRouter.post('/logout', catchError(authController.logout));
authRouter.post('/forgot-password', catchError(authController.forgotPassword));

authRouter.post(
  '/reset-password/:token',
  catchError(authController.resetPassword),
);
