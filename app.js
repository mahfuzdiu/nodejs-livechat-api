const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const router = require('./routes/index.route')
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})