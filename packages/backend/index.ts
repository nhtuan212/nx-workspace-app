import express from 'express'
const app = express()
const port = 2000

app.get('/api', (req: any, res: any) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})