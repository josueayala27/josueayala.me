const { Sequelize } = require('sequelize');

const {
  DATABASE,
  DATABASE_PASSWORD,
  DATABASE_USER,
  DATABASE_HOST,
  DATABASE_PORT,
} = process.env;

/**
 * Instantiate sequelize with an URI
 * @param {string} uri
 */
const sequelize = new Sequelize(
  `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE}`
);

export default sequelize;
