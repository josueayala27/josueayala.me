import { DataTypes } from 'sequelize';
import database from '../config/db';

const Comment = database.define(
  'comment',
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default Comment;
