const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./public"));
app.use(cors());

const mailer = require("./mailer");

app.post("/welcomePage", (req, res) => {
  const message = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Welcome Page Contact Form",
    text: `From: ${req.body.signupEmail}\n
    Sent: ${new Date()} \n
    Name: ${req.body.signupName} \n
    Phone: ${req.body.signupPhone} \n
    Company Name: ${req.body.signupCoName} \n
    Number of Employees: ${req.body.EmployeeNumber}`
  };

  mailer
    .sendMessage(message)
    .then(() => {
      res.json({
        message: "MESSAGE SENT!"
      });
    })
    .catch(error => {
      res.status(500);
      res.json({
        error: error
      });
    });
});

app.post("/freeGuide", (req, res) => {
  const message = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Welcome Page Contact Form",
    text: `From: ${req.body.signupEmail}\n
    Sent: ${new Date()} \n
    Name: ${req.body.signupName} \n
    Phone: ${req.body.signupPhone} \n
    Company Name: ${req.body.signupCoName} \n
    Number of Employees: ${req.body.EmployeeNumber}`
  };

  mailer
    .sendMessage(message)
    .then(() => {
      res.json({
        message: "MESSAGE SENT!"
      });
    })
    .catch(error => {
      res.status(500);
      res.json({
        error: error
      });
    });
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
