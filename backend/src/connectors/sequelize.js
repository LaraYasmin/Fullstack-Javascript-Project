import Sequelize from 'sequelize';

const sequelize = new Sequelize('fullstack_project', 'root', '1903Mainha*', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;