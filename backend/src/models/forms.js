import { DataTypes } from "sequelize";
import sequelize from "../connectors/sequelize.js";

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

export default Form;