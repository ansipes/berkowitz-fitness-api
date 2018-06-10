const express = require('express')
const server = express()
const api = require('./app/routes/api.js')
const bodyParser = require('body-parser')
const PORT = 3000

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.text())
server.use(bodyParser.json({ type: 'application/vnd.api+json' }))

server.use(express.static('app/public'))

api(server)

server.listen(PORT, function () {
  console.log(`Listening on PORT ${PORT}`)
})
