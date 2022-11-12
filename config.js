
const mysql = require('mysql');

//local mysql db connection
//חיבור ל-SQL
const dbConn = mysql.createConnection({
  host     : 'sql104.epizy.com',
  user     : 'epiz_32978818',
  password : 'Hdmlz3abY29F5q',
  port:3306,
  database : 'epiz_32978818_barbeshop',

});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");//מודיע אם החיבור לדטהבייס מתקיים
});

//dbConn.connect.
module.exports = dbConn;