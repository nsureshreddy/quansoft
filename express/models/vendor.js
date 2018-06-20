var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VendorSchema = new Schema({
  organization: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phone: {
    type: Number
  },
  contactName: {
    type: String
  },
  email: {
    type: String
  },
  established: {
    type: Number
  },
  annualTurnover: {
    type: Number
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  country: {
    type: String
  },
  address: {
    type: String
  },
  zipcode: {
    type: Number
  }
});

VendorSchema.pre('save', function (next) {
  return next();
});


module.exports = mongoose.model('Vendor', VendorSchema);