const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const { Server } = require("socket.io");
const socketServer = new Server(server, {
  cors: {
    origin: "http://localhost:8080"
  }
});
const socketService = require('./app/service/socket.service')
const port = 3000

//enables api json request support
app.use(express.json())

const cookieParser = require('cookie-parser')
app.use(cookieParser())

//adds main route
const router = require('./routes/index.route')
app.use(router)

//socket service
socketService.handler((socketServer))

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})