const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('./public'))

const mailer = require('./mailer')

app.post('/send', (req, res) => {
	const message = {
		from: process.env.FROM_EMAIL,
		to: process.env.TO_EMAIL,
		subject: 'site contact form',
		text: `From ${req.body.email}\n Sent: ${new Date()} \n Name: ${req.body.name} \n Message: \n ${
			req.body.message
		}`
	}

	mailer.sendMessage(message).then(() => {
		res.json({
			message: 'Mail Sent!'
		})
	})
})

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`listening on ${port}`)
})
