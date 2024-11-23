/* eslint-disable no-process-env */
import Sequelize from "sequelize";

// import models
import AquaGSM from "./aquaGSM.model.js";

const DB_USERNAME = "root";
const DB_PASSWORD = "";
const DB_URL = "localhost";
const DB_NAME = "test_129";
const DB_DIALECT = "mysql";

const POOL = {
  max: process.env.DB_POOL_MAX || 5,
  min: process.env.DB_POOL_MIN || 0,
  acquire: process.env.DB_POOL_ACQUIRE || 30000,
  idle: process.env.DB_POOL_IDLE || 10000,
};

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_URL,
  dialect: DB_DIALECT,
  pool: POOL,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// import models and add to db object
db.AquaGSM = AquaGSM(sequelize, Sequelize);

export default db;
