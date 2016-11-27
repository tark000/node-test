var express = require("express");
var io = require('socket.io');
var http = require('http');
var app     = express();
var path    = require("path");
var io = io.listen(server);
var server = http.createServer(app);
var port = process.env.PORT || 3000;

server.listen(3000);

app.use('/angular-dev', express.static(__dirname  + '/angular-frontend/app'));

require('./sockets/base')(io);


// app.use(express.static(__dirname));
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/assets/index.html'));
//   //__dirname : It will resolve to your project folder.
// });

// app.get('/create-note',function(req,res){
//   res.sendFile(path.join(__dirname+'/assets/index.html'));
// });


// app.listen(port);

// console.log("Running at Port 3000");


<<<<<<< HEAD
console.log("Running at Port 3000");


var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://root1:asdf@localhost/test");

db.query("SELECT * FROM notes;", undefined)
    .then(function (data) {
        console.log("DATA:", data[1].title);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
=======
>>>>>>> b8344371959981e1a948415b321f4be13759a71d
