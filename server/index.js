
let monarch = {}

monarch = (options) => {
    
    let app = require('express')()
    let server = require('http').Server(app)
    let io = require('socket.io')(server)

    server.listen(options.port || 32768)

    io.on('connection', (socket) => {
        console.log('Someone just connected! ' + socket)
    })
}

module.exports = monarch