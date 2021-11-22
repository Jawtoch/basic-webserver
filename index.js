import { createServer } from 'http'

const server = createServer((req, res) => {
	res.statusCode = 200
	res.end()
})

server.listen(5000)