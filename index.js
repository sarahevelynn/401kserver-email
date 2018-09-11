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
    subject: "Free Guide Signup Info",
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

app.post("/companyEnrollment", (req, res) => {
  const message = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "New Company Enrollment - completed",
    text: `From: ${req.body.signupEmail}\n
    Sent: ${new Date()} \n
    Company Name: ${req.body.companyName} \n
    Account Person's Name: ${req.body.accountName} \n
    Company Phone: ${req.body.companyPhone} \n
    Street Address: ${req.body.signupAdressStreet} \n
    Apartment: ${req.body.signupAdressApt} \n
    City: ${req.body.signupAdressCity} \n
    State: ${req.body.signupAdressState} \n
    Zip: ${req.body.signupAdressZip} \n
    Company EIN: ${req.body.companyEIN} \n
    Business Hours: ${req.body.businessHours} \n
    _________________________________________________

    Auto Enroll: ${req.body.AutoEnroll} \n
    Enrollment Percentage: ${req.body.enrollmentPercentage} \n
    Plan Type: ${req.body.planType} \n
    Payroll Provider: ${req.body.provider} \n
    Payment Cycle: ${req.body.paymentCycle} \n
    _________________________________________________

    Will this person be admin: ${req.body.Admin} \n
    If no, this is the admin's information (will be blank if yes):
    Admin Name: ${req.body.AdminName} \n
    Admin Phone: ${req.body.AdminPhone} \n
    Admin Email: ${req.body.AdminEmail} \n
    Company Plan Status: ${req.body.PlanStatus}`
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

app.post("/basicInfo", (req, res) => {
  const message = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "New Account Created - completed",
    text: `From: ${req.body.CompanyEmail}\n
    Sent: ${new Date()} \n
    Name: ${req.body.FullName} \n
    Company Name: ${req.body.CompanyName} \n
    Phone: ${req.body.CompanyPhone} \n
    State of Operation: ${req.body.State} \n
    Number of Employees: ${req.body.EmployeeNumber} \n
    _________________________________________________

    Do they have payroll: ${req.body.payroll} \n
    Payroll provider: ${req.body.provider} \n
    How did they hear about SaveAway401k?: ${req.body.heardAbout} \n
    _________________________________________________

    Will this person be admin: ${req.body.Admin} \n
    If no, this is the admin's information (will be blank if yes):
    Admin Name: ${req.body.AdminName} \n
    Admin Phone: ${req.body.AdminPhone} \n
    Admin Email: ${req.body.AdminEmail} \n
    Company Plan Status: ${req.body.PlanStatus} \n
    _________________________________________________
    
    Did they agree to the terms and creat an account?  ${req.body.checked}`
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

app.post("/companyEnrollment1", (req, res) => {
  const message = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "New Company Enrollment - mid way",
    text: `From: ${req.body.signupEmail}\n
    Sent: ${new Date()} \n
    _________________________________________________
              ***Form Section One Below***
    _________________________________________________
    Company Name: ${req.body.companyName} \n
    Account Person's Name: ${req.body.accountName} \n
    Company Phone: ${req.body.companyPhone} \n
    Street Address: ${req.body.signupAdressStreet} \n
    Apartment: ${req.body.signupAdressApt} \n
    City: ${req.body.signupAdressCity} \n
    State: ${req.body.signupAdressState} \n
    Zip: ${req.body.signupAdressZip} \n
    Company EIN: ${req.body.companyEIN} \n
    Business Hours: ${req.body.businessHours} \n
    _________________________________________________
              ***Form Section Two Below***
    _________________________________________________
    Auto Enroll: ${req.body.AutoEnroll} \n
    Enrollment Percentage: ${req.body.enrollmentPercentage} \n
    Plan Type: ${req.body.planType} \n
    Payroll Provider: ${req.body.provider} \n
    Payment Cycle: ${req.body.paymentCycle} \n
    _________________________________________________
              ***Form Section Three Below***
    _________________________________________________
    Will this person be admin: ${req.body.Admin} \n
    If no, this is the admin's information (will be blank if yes):
    Admin Name: ${req.body.AdminName} \n
    Admin Phone: ${req.body.AdminPhone} \n
    Admin Email: ${req.body.AdminEmail} \n
    Company Plan Status: ${req.body.PlanStatus}`
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

app.post("/basicInfo1", (req, res) => {
  const message = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "New Account Created - mid way",
    text: `From: ${req.body.CompanyEmail}\n
    Sent: ${new Date()} \n
    _________________________________________________
              ***Form Section One Below***
    _________________________________________________
    Name: ${req.body.FullName} \n
    Company Name: ${req.body.CompanyName} \n
    Phone: ${req.body.CompanyPhone} \n
    State of Operation: ${req.body.State} \n
    Number of Employees: ${req.body.EmployeeNumber} \n
    _________________________________________________
              ***Form Section Two Below***
    _________________________________________________
    Do they have payroll: ${req.body.payroll} \n
    Payroll provider: ${req.body.provider} \n
    How did they hear about SaveAway401k?: ${req.body.heardAbout} \n
    _________________________________________________
              ***Form Section Three Below***
    _________________________________________________
    Will this person be admin: ${req.body.Admin} \n
    If no, this is the admin's information (will be blank if yes):
    Admin Name: ${req.body.AdminName} \n
    Admin Phone: ${req.body.AdminPhone} \n
    Admin Email: ${req.body.AdminEmail} \n
    Company Plan Status: ${req.body.PlanStatus} \n
    _________________________________________________
              ***Confirmation of Account Creation***
    _________________________________________________
    Did they agree to the terms and creat an account?  ${req.body.checked}`
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
