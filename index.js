var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/config");

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: process.env.GMAIL_ACCOUNT,
    pass: process.env.GMAIL_PASSWORD
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  var content = `From: ${req.body.signupEmail}\n
    Sent: ${new Date()} \n
    Name: ${req.body.signupName} \n
  Phone: ${req.body.signupPhone} \n
  CompanyName: ${req.body.signupCoName} \n
  NumberofEmployees: ${req.body.EmployeeNumber} \n `;

  var mail = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Site Free Guide Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

module.exports = router;
