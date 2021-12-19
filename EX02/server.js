var http = require('http');
var port = 3000;

var current = new Date();

http.createServer(function (req, res) {    
    res.writeHead( 200, "ok", { 'Content-Type': 'text/plain',
                                    'Server': 'MYNODE.JS',
                                    'Date': current.toGMTString() ,
                                    'X-Powered-By': 'NODE',
                                    'Cache-Control': 'no-cache, no-store',
                                    'Expires': '-1',
                                    'Content-Type': 'text/html; charset=utf-8',
                                    'Content-Length': 14990
     });
    res.write('Hello World\n');
    res.end();
}).listen(port);

