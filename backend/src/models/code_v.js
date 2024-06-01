import { DataTypes } from "sequelize";
import sequelize from "../connectors/sequelize.js";

const Code = sequelize.define("code_v", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    use_id: {
        type: DataTypes.INTEGER,
    },
    expiration: {
        type: DataTypes.TIME,
    },
    code: {
        type: DataTypes.STRING,
    },
    is_used: {
        type: DataTypes.BOOLEAN,
    }
})

export default Code;