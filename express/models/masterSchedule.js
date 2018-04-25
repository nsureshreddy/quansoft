var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
  }
});

var MasterScheduleActivity = mongoose.model('MasterScheduleActivity', masterScheduleActivitySchema);

var MasterScheduleSchema = new Schema({
  code: {
    type: String
  },
  description: {
    type: String
  },
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

MasterScheduleSchema.pre('save', function (next) {
  return next();
});

module.exports = mongoose.model('MasterSchedule', MasterScheduleSchema);