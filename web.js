// // console.log("Hello World");
// // Load the http module to create an http server.
// var http = require('http');
// // var fs = require('fs');
// // console.log(fs);
// // Configure our HTTP server to respond with Hello World to all requests.
// var port = process.env.PORT || 8000;
// var server = http.createServer(function (request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Іринко цьом\n");
// });

// // Listen on port 8000, IP defaults to 127.0.0.1
// server.listen(port);

// // Put a friendly message on the terminal
// console.log("Server running at http://127.0.0.1:8000/");


// var http = require('http'),
//     fs = require('fs');

// var port = process.env.PORT || 8000;
// fs.readFile('./frontend/index.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(port);
// });

var express = require("express");
var app     = express();
var path    = require("path");
var port = process.env.PORT || 8000;
app.use(express.static(__dirname));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/frontend/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/next',function(req,res){
  res.sendFile(path.join(__dirname+'/frontend/tmpl/next.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});


app.listen(port);

console.log("Running at Port 8000");