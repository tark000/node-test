var express = require("express");
var app     = express();
var path    = require("path");
var port = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/assets/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/create-note',function(req,res){
  res.sendFile(path.join(__dirname+'/assets/index.html'));
});


app.listen(port);

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