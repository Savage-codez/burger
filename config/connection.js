// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "zmhfgvv3cguomjs9",
  password: "qpwdxggrvb1qq68l",
  database: "p2zbvogsna0zq3hs"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
