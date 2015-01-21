var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var schema = require('./schema')

app.listen(port);
console.log('Server now listening on port ' + port);

// app.configure(function() {
//   app.use(express.bodyParser());
//   app.use(express.cookieParser('shhhh, very secret'));
//   app.use(express.session());
// });

app.get('/', function(){});
app.post('/', function(){});

