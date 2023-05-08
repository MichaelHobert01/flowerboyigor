const Sequelize = require('sequelize');

const sequelize = new Sequelize('database_name', 'database-user', 'database_password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
}); 

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false, 
        unique: true
    }
});