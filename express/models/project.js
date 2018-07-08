var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require("../models/masterSchedule").MasterBill;
var masterBillSchema = require('mongoose').model('MasterBill').schema

var costEstimatesSchema = Schema({
  vendor: String,
  bills:[{
    type: masterBillSchema,
    ref: 'MasterBill'
  }]
});

mongoose.model('CostEstimates', costEstimatesSchema);

var termsAndCondtionsSchema = Schema({
  duration: {
    type: String
  },
  penalty: {
    type: String
  },
  bonusClause: {
    type: String
  },
  staffDeployment: {
    type: String
  },
  paymentsTerms: {
    type: String
  },
  accountDetails: {
    type: String
  },
  termination: {
    type: String
  },
  arbitration: {
    type: String
  }
});

var paymentTermsSchema = Schema({
  description: {
    type: String
  }
});

var TermsAndCondtions = mongoose.model('TermsAndCondtions', termsAndCondtionsSchema);

var ProjectSchema = new Schema({
  jobId: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  region: {
    type: String
  },
  stage: {
    type: String
  },
  type: {
    type: String
  },
  scope: {
    type: Array
  },
  siteArea: {
    type: Number
  },
  builtupArea: {
    type: Number
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  numberOfBuildings: {
    type: Number
  },
  numberOfFloors: {
    type: Number
  },
  orderNumber: {
    type: Number
  },
  orderValue: {
    type: String
  },
  fsi: {
    type: String
  },
  participants: {
    type: Array
  },
  paymentTerms: [{
    type: paymentTermsSchema,
    ref: 'PaymentTerms'
  }],
  termsAndonditions: {
    type: termsAndCondtionsSchema,
    ref: 'TermsAndCondtions'
  },
  costEstimates: {
    type: costEstimatesSchema,
    ref: 'CostEstimates'
  },
  quotations: [{
    type: costEstimatesSchema,
    ref: 'CostEstimates'
  }],
  scopeItems: [{
    name: String,
    workItems: [
      {
        name: String,
        uom: String,
        rate: String,
        quantity: Number,
        amount: Number
      }
    ]
  }
  ]
});

ProjectSchema.methods.setJobId = function () {
  this.jobId = Date.now()
};

ProjectSchema.pre('save', function (next) {
  return next();
});


module.exports = mongoose.model('Project', ProjectSchema);