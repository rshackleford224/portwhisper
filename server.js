var server = require('websocket').server, http = require('http');

var socket = new server({  
    httpServer: http.createServer().listen(1337)
});
console.log("Server started and waiting for incoming connection on port: 1337")
socket.on('request', function(request) {  
    var connection = request.accept(null, request.origin);
    console.log((new Date())+" - connection received from: " + connection.remoteAddress + " !!!")

    const prompt = require('prompt-sync')();
    const thecommand = prompt('command to send? ');
    connection.sendUTF(`${thecommand}`);
    console.log(`The command ' ${thecommand} ' was sent to the client!`);



    connection.on('message', function(message) {
        console.log(message.utf8Data);
      // connection.sendUTF('hello from the server!');

	/*
        setTimeout(function() {
            connection.sendUTF('this is a websocket example');
        }, 1000);
	*/     
});
	
    connection.on('close', function(connection) {
        console.log('connection closed');
    });
});
