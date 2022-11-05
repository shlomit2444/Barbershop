const console = require('console');
const http = require('http');
const app = require('./app');
const svr = http.createServer(app);
const port = process.env.PORT || 3306
const server = http.createServer(app);

//חיבור לשרת
server.listen(port,()=>{console.log("server statred")});

