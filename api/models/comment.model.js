import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const Comment = sequelize.define(
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
