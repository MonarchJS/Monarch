let monarch = {}

monarch = (port) => {
    //checking for arguments
    if (typeof port === 'undefined'){
        port = 32768
    }
    
    //importing node's native tool for websockets
    const net = require('net')

    const server = net.createServer((socket) => {
        socket.on('connection', () => {
            this.emit('handshake', (data) => {
                console.log(data)
            })
        })
    })

    server.listen(port, () => {
        console.log('Server started on port ' + port)
    })

    server.on('error', () => {
        //handle error
    })
}

module.exports = monarch