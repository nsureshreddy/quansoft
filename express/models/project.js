var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  scope: {
    type: Array,
    required: true
  },
  siteArea: {
    type: Number,
    required: true
  },
  builtupArea: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  numberOfBuildings: {
    type: Number,
    required: true
  },
  numberOfFloors: {
    type: Number,
    required: true
  },
  orderNumber: {
    type: Number
  },
  orderValue: {
    type: String
  },
  fsi: {
    type: String,
    required: true
  },
  participants: {
    type: Array,
    required: true
  },
  paymentTerms: [{
    type: paymentTermsSchema,
    ref: 'PaymentTerms'
  }],
  termsAndonditions: {
    type: termsAndCondtionsSchema,
    ref: 'TermsAndCondtions'
  },
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