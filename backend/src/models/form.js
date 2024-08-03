import { DataTypes } from "sequelize";
import db from "../connectDB/mysqlConnect.js";

const Form = db.sequelize.define("Form", {
    company_name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    contact: {
        type: DataTypes.STRING,
    },
    responsible: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
    }
}, {
    timestamps: false
});

export default Form;