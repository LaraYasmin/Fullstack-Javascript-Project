import { DataTypes } from "sequelize";
import sequelize from "../connectors/sequelize.js";

const Form = sequelize.define("forms", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    company_name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    cellphone: {
        type: DataTypes.STRING,
    },
    responsible: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    }
})

export default Form;