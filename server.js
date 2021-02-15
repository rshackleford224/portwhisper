
var pport = process.env.PORT || 3000;
server.listen(pport, function(err) {
    if(!err) { console.log("Listening on port " + pport); }
});

const socket = new Server({ server });

socket.on('request', function(request) {  
    var connection = request.accept(null, request.origin)
    console.log((new Date())+" - connection received from: " + connection.remoteAddress + " !!!")

   // const prompt = require('prompt-sync')()
   // const thecommand = prompt('command to send? ')
   // connection.sendUTF(`${thecommand}`)
   // console.log(`The command ' ${thecommand} ' was sent to the client!`)



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
        console.log('connection closed')
    });
});

