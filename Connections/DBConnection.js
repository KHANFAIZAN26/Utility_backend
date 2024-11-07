const mysql = require("mysql");

const db = mysql.createConnection({
  host: "193.203.184.162",
  user: "u849571577_uber",
  password: "Uber@123!!",
  database: "u849571577_utility",
});

module.exports = db;
