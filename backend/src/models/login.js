import { DataTypes } from "sequelize";
import db from "../connectDB/mysqlConnect.js";

const Login = db.sequelize.define("Login", {
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
});

export default Login;