const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'kartalasaimanoj@gmail.com',
    pass: process.env.EMAIL_PASS
  }
});

// Send email function
const sendEmail = async (options) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'kartalasaimanoj@gmail.com',
      to: options.to || process.env.EMAIL_TO || 'kartalasaimanoj@gmail.com',
      subject: options.subject,
      html: options.html
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
};

module.exports = sendEmail; 