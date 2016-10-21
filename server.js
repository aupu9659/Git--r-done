var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello World');
});


console.log("Local server running at port 5000");
console.log("Press ctrl-c to stop the server");


server.listen(5000);
