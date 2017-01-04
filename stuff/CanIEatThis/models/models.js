// Dependencies
var Sequelize = require("sequelize");

var sequelizeConnection = require("../config/connection.js");

//model for users that takes in id, username and email
var User = sequelizeConnection.define("users", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	username: {
		type: Sequelize.STRING,
	},
  email: {
    type: Sequelize.STRING,
  },
	password_hash: {
    type: Sequelize.STRING,
  }
},
	{
		underscored: true
	});

var Searches = sequelizeConnection.define("searches", {
	user_search: {
		type: Sequelize.STRING,
	},
  userID: {
    type: Sequelize.INTEGER,
  },
	upcCode: {
		type: Sequelize.INTEGER,
	}
},
	{
		underscored: true
	});

// Syncs with DB
User.sync();
Searches.sync();

// Makes the User Model available for other files (will also create a table)
module.exports = [User, Searches];
