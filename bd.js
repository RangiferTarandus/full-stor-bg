const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
	process.env.BD_NAME, //Название БД
	process.env.DB_USER, //Пользователь
	process.env.BD_PASSWORD, //Пароль БД
	{
		dialect: 'postgres',
		host: process.env.BD_HOST, // ХОСТ
		port: process.env.BD_PORT, // ПОРТ
	}
	
	)