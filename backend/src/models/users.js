import { DataTypes } from "sequelize";
import sequelize from "../connectors/sequelize.js";

const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email_user: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    name_user: {
        type: DataTypes.STRING,
    },
    is_verified: {
        type: DataTypes.BOOLEAN,
    }
});

export default User;