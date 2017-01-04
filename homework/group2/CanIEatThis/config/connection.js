// Dependencies
var Sequelize = require("sequelize");

// Lists out connection options
// var source = {
//     localhost: {
//         host: 'localhost',
//         user: 'root',
//         password: "",
//         database: "eat_this_db"
//     }
// }
//
// // Selects a connection (can be changed quickly as needed)
// var selectedSource = source.localhost;

// connect to the heroku JawsDB MySQL :: Database
var sequelize = new Sequelize('mysql://sqab35ck62ifwvik:hd1f4kx2ggfcboi5@g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/q0zal4epcqvhk5wz', {
  define: { timestamps: false },
  dialect: 'mysql',
  pool: {
      max: 5,
      min: 0,
      idle: 10000
  },

})




// Creates mySQL connection using Sequelize
// var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
//     define: { timestamps: false },
//     host: selectedSource.host,
//     dialect: 'mysql',
//
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
//
// });

// Exports the connection for other files to use
module.exports = sequelize;
