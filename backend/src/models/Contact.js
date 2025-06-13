const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    trim: true,
    lowercase: true,
  },
  organization: {
    type: String,
    trim: true,
  },
  inquiryType: {
    type: String,
    required: [true, 'Please provide an inquiry type'],
    enum: ['demo', 'quote', 'general'],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
    trim: true,
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'completed'],
    default: 'new',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Contact', contactSchema); 