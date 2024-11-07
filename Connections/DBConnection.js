const mysql = require('mysql2/promise')

const db = mysql.createPool({
  host: "193.203.184.162",
  user: "u849571577_uber",
  password: "Uber@123!!",
  database: "u849571577_utility",
});

module.exports = db;
