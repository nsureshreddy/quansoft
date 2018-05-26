var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var masterResourceSchema = Schema({
  code: {
    type: String
  },
  description: {
    type: String
  },
  brand: {
    type: String
  },
  uom: {
    type: String
  },
  coeff: {
    type: Number
  },
  rate: {
    type: Number
  },
  resourceType: {
    type: String
  },
  amount: {
    type: Number
  },
  ratePerUnit: {
    type: Number
  }
});

var MasterResource = mongoose.model('MasterResource', masterResourceSchema);
module.exports = mongoose.model('MasterResource', masterResourceSchema);