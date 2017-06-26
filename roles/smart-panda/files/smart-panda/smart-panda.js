var express = require('express');
var app = express();
var port = process.env.PORT || 8081;
var count = 0
app.listen(port);
console.log('Server started! At http://localhost:' + port);

//works with POST request for /api/ with id and token parameters.

app.get('/api/', function(req, res) {
  var user_id = req.param('id');
  var token = req.param('token');
  res.send(user_id + ' ' + token);
  count = count + 1;
  console.log(count);
});

//When using GET nodejs will response the number of times POST calls were created.

app.get('/', function(req, res){
res.sendStatus (count);
});
