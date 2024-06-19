import { DataTypes } from "sequelize";
import sequelize from "../connectors/sequelize.js";

module.exports = (sequelize) => {
    const Login = sequelize.define("Login", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        }
    )
};

export default Login;