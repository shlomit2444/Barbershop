'user strict';
const mysql = require('mysql');

//local mysql db connection
//חיבור ל-SQL
const dbConn = mysql.createConnection({
  host     : 'sql8.freemysqlhosting.net',
  user     : 'sql8539298',
  password : 'nTildh8ZsW',
  port:3306,
  database : 'sql8539298',

});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");//מודיע אם החיבור לדטהבייס מתקיים
});

//dbConn.connect.
module.exports = dbConn;