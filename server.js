const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
  socket.on('chat', data => {
    io.emit('chat', data)
  })
})

io.listen(5000, () => {
  console.log('Listening ... 🚀 ')
})