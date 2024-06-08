import { DataTypes } from "sequelize";
import sequelize from "../connectors/sequelize.js";

module.exports = (sequelize) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email_user: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name_user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        verfication_code: {
            type: DataTypes.STRING(4), //receive the code with size 4
            allowNull: false,
        },
        is_verified: {
            type: DataTypes.BOOLEAN, //check the code validity (true or false)
            allowNull: false,
        }
    });

    //encrypting password
    User.beforeSave(async (user) => {
        if (user.password) {
            const salt_random_value = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt_random_value);
        }
    });

    return User
}

export default User;