import client from '../utils/db.js';
import { DataTypes } from 'sequelize';
import User from './user.model.js';

const RefreshToken = client.define('RefreshToken', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

RefreshToken.belongsTo(User);
User.hasOne(RefreshToken);

export default RefreshToken;
