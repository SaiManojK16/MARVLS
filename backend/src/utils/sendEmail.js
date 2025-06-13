const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'kartalasaimanoj@gmail.com',
        pass: process.env.EMAIL_PASS || 'mufq ewls tajc yler',
      },
    });

    const message = {
      from: `MARVLS <${process.env.EMAIL_USER || 'kartalasaimanoj@gmail.com'}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    const info = await transporter.sendMail(message);
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email: ' + error.message);
  }
};

module.exports = sendEmail; 