var http = require('http');
var port = 8080;

http.createServer(function (req, res) {    
    console.log("Hi");
    res.writeHead( 200, { 'Set-Cookie' : 'mycookie=test', 'Content-Type' : 'text/plain' });
    res.write("Hi");
    res.end();
}).listen(port);
