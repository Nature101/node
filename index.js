// initializing installed packages
const express = require("express");
const app = express();
// const bodyParser = require("body-parser")
const nodemailer = require("nodemailer");
const cors = require("cors");
// declearing which port my server will be listening on
const port = process.env.PORT || 8000;    // while hosting, ensure to add the port variable

// getting the app to get response from the frontend and send json
app.use(express.json({ extended: true }));
app.use(cors());
// initlizing cors
// app.use(cors())
const requestIp = require('request-ip');
app.get('/', (req,res) => {
    res.send('server is active')

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "jimwilliams513@gmail.com",
    pass: "klkfthxlxzloelgl",
  },
});

// list of email addresses to send to
let emailList = ["andy@adbinderplumbing.com", "jimwilliams513@gmail.com", "bvuu@hiepthaifood.com"];

// email content
let emailSubject = "Hello from Node.js!";
let emailBody = `
  <html>
    <body>
      <h1>Welcome to Node.js email sender!</h1>
      <p>This is an example HTML email sent using Nodemailer.</p>
    </body>
  </html>
`;

// loop through email list and send the email to each recipient
for (let recipient of emailList) {
  let mailOptions = {
    from: "your_email@gmail.com",
    to: recipient,
    subject: emailSubject,
    html: emailBody,
  };

  // send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`Error sending email to ${recipient}:`, error);
    } else {
      console.log(`Email sent to ${recipient}:`, info.response);
    }
  });
}
