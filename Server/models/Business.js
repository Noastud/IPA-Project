// Server/models/Business.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
  enterprisename: { type: String, required: true },
  contactname: { type: String, required: true },
  website: { type: String, required: true },
  status: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true }
});

module.exports = mongoose.model('Business', BusinessSchema);
