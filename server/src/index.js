'use strict';
// eslint-disable-next-line no-unused-vars
import dotenv from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { authRouter } from './routes/auth.route.js';
import { userRouter } from './routes/user.route.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

const PORT = process.env.PORT || 3005;
const allowedClientOrigins = [process.env.CLIENT_HOST].filter(Boolean);

const isDevelopmentOrigin = (origin) => {
  if (process.env.NODE_ENV === 'production') {
    return false;
  }

  try {
    const url = new URL(origin);

    return (
      url.protocol === 'http:' &&
      ['localhost', '127.0.0.1'].includes(url.hostname)
    );
  } catch {
    return false;
  }
};

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      const allowed =
        !origin ||
        allowedClientOrigins.includes(origin) ||
        isDevelopmentOrigin(origin);

      callback(
        allowed ? null : new Error('Origin not allowed by CORS'),
        allowed,
      );
    },
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use(authRouter);
app.use(userRouter);
app.use(errorMiddleware);
app.use((req, res) => res.status(404).json({ message: 'Not found' }));

app.listen(PORT, () => {
  //  eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
