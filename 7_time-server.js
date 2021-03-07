  
var net = require('net');
var strftime = require('strftime');
var port = Number(process.argv[2]);

var server = net.createServer(function(socket){
    var data = strftime('%Y-%m-%d %H:%M');
    socket.write(data);
    socket.end(); // socket.end(data);
});
server.listen(port);