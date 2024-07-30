import { DataTypes } from "sequelize";
import sequelize from "../connectDB/mysqlConnect.js";

module.exports = (sequelize) => {
    const Form = sequelize.define("Form", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cellphone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    responsible: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email_form: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    }
})
    return Form
};

export default Form;