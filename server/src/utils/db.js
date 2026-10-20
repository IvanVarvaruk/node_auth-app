import { Sequelize } from 'sequelize';

const client = new Sequelize(
  process.env.DB_NAME || 'postgres',
  process.env.DB_USERNAME || 'postgres',
  process.env.DB_PASSWORD || 'postgres',
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
);

export default client;
