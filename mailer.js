const nodemailer = require('nodemailer')

require('dotenv').config()

let transport = {
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		GMAIL_ACCOUNT: process.env.GMAIL_ACCOUNT,
		GMAIL_PASSWORD: process.env.GMAIL_PASSWORD
	}
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

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
