var http = require('http');
http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hola\n');
}).listen(3000, "localhost");
console.log('Server running at localhost:3000');
