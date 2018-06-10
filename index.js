const express = require('express')
const server = express()
const PORT = 3000

server.use(express.static('app/public'))

server.listen(PORT, function () {
  console.log(`Listening on PORT ${PORT}`)
})
