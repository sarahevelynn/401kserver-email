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
  var name = req.body.name;
  var email = req.body.email;
	var mail = req.body.message
	var content = `name: ${name} \n email: ${email} \n mail: ${content} `


  const message = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Site Contact Form",
    text: `name: ${name} \n email: ${email} \n mail: ${content} `
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
