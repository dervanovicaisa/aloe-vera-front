const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Email sending endpoint
app.post("/api/sendEmail", (req, res) => {
  const { recipient, subject, body } = req.body;

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dervanovicaisa@gmail.com", // Your email address
      pass: "pfvv zjlz vmnz bekm", // Your email password or app-specific password
    },
  });

  // Email message options
  const mailOptions = [
    {
      from: "valdetahadzajlic@gmail.com", // Sender address
      to: recipient,
      subject: subject,
      html: body,
    },
    {
      from: "valdetahadzajlic@gmail.com", // Sender address
      to: recipient,
      subject: subject,
      html: body,
    },
  ];

  // Send email
  mailOptions.map((el) => {
    transporter.sendMail(el, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
