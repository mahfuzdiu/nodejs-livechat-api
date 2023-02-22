let activeUsers = []
const handler = (socketServer) => {
    socketServer.on('connection', (socket) => {
        activeUsers.push(socket.id)

        socket.on('message', (payload) => {
            socket.emit('message', {
                message: payload,
                activeUsers: activeUsers
            })
        })
    });
}

module.exports = {
    handler
}