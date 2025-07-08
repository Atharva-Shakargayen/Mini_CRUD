const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, enum: ['Manager', 'Developer', 'Intern'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Employee', empSchema);
