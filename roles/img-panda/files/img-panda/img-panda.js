const fs = require('fs');
var express = require('express');
var app = express();
var items = fs.readdirSync(__dirname + '/resources/');

// use random to choose diffrent image every time.
app.use(express.static(__dirname + '/resources/'));
app.get('/', function(req,res){
var item = items[Math.floor(Math.random()*items.length)];
fs.readFile(__dirname + '/resources/' + item, function (err, content) {
            if (err) {
                res.writeHead(400, {'Content-type':'text/html'})
                console.log(err);
                res.end("No such image");    
            } 
		else {
                //specify the content type in the response will be an image
                res.writeHead(200,{'Content-type':'image/jpg'});
                res.end(content);
            }
        });
});

app.listen(8082);

