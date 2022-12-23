const express = require('express')
const app = express()
const port = 3000

//enables api json request support
app.use(express.json())

//adds main route
const router = require('./routes/index.route')
app.use(router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})