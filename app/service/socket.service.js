const handler = (socketServer) => {
    socketServer.on('connection', (socket) => {
        //handle user identifier: id & socket id
        console.log('a user connected. socket id: ' + socket.id);

        socket.on('message', (payload) => {
            console.log(payload)
            socket.emit('message', "coming from server. socket id: ")
            //socket.broadcast.emit('message', "coming from server. socket id: ")
        })
    });
}

module.exports = {
    handler
}