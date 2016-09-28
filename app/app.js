var express = require("express");
var app     = express();
var path    = require("path");
var port = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/assets/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/next',function(req,res){
  res.sendFile(path.join(__dirname+'/assets/tmpl/next.html'));
});


app.listen(port);

console.log("Running at Port 3000");