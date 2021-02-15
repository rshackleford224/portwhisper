'use strict';

//const express = require('express');
//const { Server } = require('ws');



//const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

//const server = express()
//  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
//  .listen(PORT, () => console.log(`Listening on ${PORT}`));

//const socket = new Server({ server });

const express = require('express')
const http = require('http')
const WebSocket = require('ws')

const port = process.env.PORT || 8080
const app = express()
const httpServer = http.createServer(app)
const wss = new WebSocket.Server({
    'server': httpServer
})
httpServer.listen(port)



socket.on('request', function(request) {  
    var connection = request.accept(null, request.origin)
    console.log((new Date())+" - connection received from: " + connection.remoteAddress + " !!!")

   // const prompt = require('prompt-sync')()
   // const thecommand = prompt('command to send? ')
   // connection.sendUTF(`${thecommand}`)
   // console.log(`The command ' ${thecommand} ' was sent to the client!`)
});


socket.on('message', function(message) {
        console.log(message.utf8Data);
        connection.sendUTF('hello from the server!');

	/*
        setTimeout(function() {
            connection.sendUTF('this is a websocket example');
        }, 1000);
	*/     
});
	
    socket.on('close', function(connection) {
        console.log('connection closed')
    });

