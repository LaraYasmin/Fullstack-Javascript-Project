import Sequelize from 'sequelize';
require('dotenv').config();

import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
});

const db = {
    sequelize,
    Sequelize,
    models: {},
};

db.models.User = require('../models/users.js')(sequelize, Sequelize);

export default db;