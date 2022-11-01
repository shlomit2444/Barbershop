const mysql = require('mysql');

//local mysql db connection
/*
const dbConn = mysql.createConnection({
  host     : 'Barbershop.mssql.somee.com',
  
  user     : 'shlomitn80_SQLLogin_1',
  password : 'ghdh1yg3sv',
  //port:4096,
  driver: 'msnodesqlv8',
  requestTimeout: 36000,
  database : 'Barbershop',
 //connectionstring : 'workstation id=Barbershop.mssql.somee.com;packet size=4096;user id=shlomitn80_SQLLogin_1;pwd=ghdh1yg3sv;data source=Barbershop.mssql.somee.com;persist security info=False;initial catalog=Barbershop'

});
*/
const dbConn = mysql.createConnection("workstation id=Barbershop.mssql.somee.com;packet size=4096;user id=shlomitn80_SQLLogin_1;pwd=ghdh1yg3sv;data source=Barbershop.mssql.somee.com;persist security info=False;initial catalog=Barbershop"); 
/* 
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connection.connect();
*/
//const connectionstring = 'workstation id=Barbershop.mssql.somee.com;packet size=4096;user id=shlomitn80_SQLLogin_1;pwd=ghdh1yg3sv;data source=Barbershop.mssql.somee.com;persist security info=False;initial catalog=Barbershop';
//mysql.ConnectionString = "workstation id=Barbershop.mssql.somee.com;packet size=4096;user id=shlomitn80_SQLLogin_1;pwd=ghdh1yg3sv;data source=Barbershop.mssql.somee.com;persist security info=False;initial catalog=Barbershop"; 
/*
require('net')
    .createServer( function(socket) 
    {
           // no nothing
    })
    .listen(21, function()
     {
           console.log('Socket ON')
    })
*/
//var dbConn = new sql.Connection(config);
/*
mysql.connect('workstation id=Barbershop.mssql.somee.com;packet size=4096;user id=shlomitn80_SQLLogin_1;pwd=ghdh1yg3sv;data source=Barbershop.mssql.somee.com;persist security info=False;initial catalog=Barbershop'
,function(err){
  if (err) throw err;
  console.log("Database Connected!");

 });
*/

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

//dbConn.connect.
module.exports = dbConn;