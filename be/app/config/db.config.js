module.exports = {
	HOST: "localhost",
	USER: "root",
	PASSWORD: "root",
	DB: "app",
	dialect: "mysql",
	port: 9005,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};
