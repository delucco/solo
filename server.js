var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
//var schema = require('server/schema.js')

app.listen(port);
console.log('Server now listening on port ' + port);

// app.configure(function() {
//   app.use(express.bodyParser());
//   app.use(express.cookieParser('shhhh, very secret'));
//   app.use(express.session());
// });
app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res){
  //res.render('2014-12-solo/index.html');
  //res.sendFile(__dirname + '/index.html')
});

app.post('/', function(req, res){
  
});

///Users/delucco80/Desktop/programs/2014-12-solo/