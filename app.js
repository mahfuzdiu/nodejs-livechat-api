const express = require('express')
const app = express()
const port = 3000

//enables api json request support
app.use(express.json())

const cookieParser = require('cookie-parser')
app.use(cookieParser())

//enables session
const expressSession = require('express-session')
app.use(expressSession({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: false,
}))

//adds main route
const router = require('./routes/index.route')
app.use(router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})