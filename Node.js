var express = require('express');  
var app = express();  
//Static resources server
app.use(express.static(__dirname + '/www'));

var server = app.listen(8082, function () {  
    var port = server.address().port;
    console.log('Server running at port %s', port);
});
As you can see, all of the s
var io = require('socket.io')(server); 
var INTERVAL = 50;  
setInterval(function(){  
    g.mainLoop();
}, INTERVAL);
