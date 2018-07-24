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

app.post("/send", (req, res) => {
  const message = {
		from: process.env.FROM_EMAIL,
		to: process.env.TO_EMAIL,
    subject: "Site Contact Form",
    text: `From: ${req.body.email}\n Sent: ${new Date()} \n Name: ${
      req.body.name
    } \n Message: ${req.body.message}`
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
