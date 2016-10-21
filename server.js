var express = require("express");
var app   = express();
var path  = require("path");

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/signup',function(req,res){
  res.sendFile(path.join(__dirname + '/pages/signup.html'));
});

app.get('/login',function(req,res){
  res.sendFile(path.join(__dirname + '/pages/login.html'));
});

app.listen(5000);
console.log("Server running on localhost:5000...");
console.log("The server will automatically refresh when new code is added");
console.log("Press ctrl-c to stop the server");
