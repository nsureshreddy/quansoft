var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./masterResource');
var masterResourceSchema = require('mongoose').model('MasterResource').schema

var rateComponentSchema = Schema({
  label: {
    type: String
  },
  type: {
    type: String
  },
  items: [{
    type: masterResourceSchema,
    ref: 'MasterResource'
  }]
});

var RateComponent = mongoose.model('RateComponent', rateComponentSchema);

var masterScheduleActivitySchema = Schema({
  code: {
    type: String
  },
  description: {
    type: String
  },
  shortDescription:  {
    type: String
  },
  uom: {
    type: String
  },
  quantity: {
    type: Number
  },
  rate: {
    type: Number
  },
  rateComponents: [{
    type: rateComponentSchema,
    ref: 'RateComponent'
  }],
  profitMargin: {
    type: Number
  }
});

var MasterScheduleActivity = mongoose.model('MasterScheduleActivity', masterScheduleActivitySchema);

var masterBillSchema = Schema({
  costCode: {
    type: String
  },
  costCentre: {
    type: String
  },
  activities: [{
    type: masterScheduleActivitySchema,
    ref: 'MasterScheduleActivity'
  }]
});

var MasterBill = mongoose.model('MasterBill', masterBillSchema);

var MasterScheduleSchema = new Schema({
  code: {
    type: String
  },
  description: {
    type: String
  },
  bills: [{
    type: masterBillSchema,
    ref: 'MasterBill'
  }]
});

MasterScheduleSchema.pre('save', function (next) {
  return next();
});

module.exports = {
  'MasterSchedule': mongoose.model('MasterSchedule', MasterScheduleSchema),
  'MasterBill': mongoose.model('MasterBill', masterBillSchema)
};