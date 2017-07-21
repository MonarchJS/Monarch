module.exports = {
	run: port => {
		//	Importing node's native tool for websockets
		const net = require('net')

		//	Checking for arguments
		if (typeof port === 'undefined') {
			port = 32768
		}

		//	Creating the websocket to allow servers to communicate
		const server = net.createServer(socket => {
			console.log('New client connected!')
			socket.addListener('*', data => {
				console.log(data)
			})
		})

		server.listen(port, () => {
			console.log('Server started on port ' + port)
		})

		server.on('error', () => {
			//	Handle error
		})
	},
	sayHi: () => {
		console.log('HI!!!')
	}
}
