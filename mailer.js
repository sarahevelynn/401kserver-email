const nodemailer = require('nodemailer')

const creds = require('./config/config');

let smtpConfig = {
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: creds.GMAIL_ACCOUNT,
		pass: creds.GMAIL_PASSWORD
	}
}

let transporter = nodemailer.createTransport(smtpConfig)

module.exports = {
	sendMessage(message) {
		return new Promise((resolve, reject) => {
			transporter.sendMail(message, (error, success) => {
				if (error) {
					reject(error)
				} else {
					resolve(success)
				}
			})
		})
	}
}
