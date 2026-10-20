import dotenv from 'dotenv/config';

import User from './src/models/user.model.js';
import RefreshToken from './src/models/refreshToken.model.js';
import client from './src/utils/db.js';

client.sync({ force: true });
