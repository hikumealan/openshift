var http = require('http');
var url = require('url');

http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain'});
response.write('Hello World');
response.end();
}).listen(80);
console.log('HTTP Server has started.');
