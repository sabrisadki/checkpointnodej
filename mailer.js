const nodemailer = require('nodemailer');

// Create a transporter with your email configuration
const transporter = nodemailer.createTransport({
  service: 'e.g., Gmail',
  auth: {
    user: 'sadki.sabri88@gmail.com',
    pass: '',
  },
});

// Define the email details
const mailOptions = {
  from: 'sadki.sabri88@gmail.com',
  to: 'sabri.sadki@yahoo.com',
  subject: 'Hello from Node.js',
  text: 'This is the message body of the email.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent successfully!');
  }
});
