const http = require('http')
const users = require('./data/users')

const server = http.createServer(function requestHandler(req, res) {
	res.writeHead(200);
	res.end(JSON.stringify({ users }))
})

const { port = 3000, host = 'localhost' } = process.env

server.listen(port, host, () => {
	console.log(`Server is running on ${host}:${port}`)
})
