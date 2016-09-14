console.log("Hello World");
// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
console.log(fs);
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World12\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

// function Article() {
//   this.created = new Date();
//   Article.count ++;
//   Article.lastDate = new Date(); 
// }
// Article.count = 0;
// Article.lastDate = '';

// Article.showStats = function() {
//   console.log(this.count + " 12" + this.lastDate);
// }
// new Article();
// new Article();

// Article.showStats(); // Всего: 2, Последняя: (дата)

// new Article();

// Article.showStats(); // Всего: 3, Последняя: (дата)