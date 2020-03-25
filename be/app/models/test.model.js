module.exports = (sequelize, Sequelize) => {
	const Test = sequelize.define("tests", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		setting: {
			type: Sequelize.JSON
		},
		message: {
			type: Sequelize.CHAR
		}
	});

	return Test;
};