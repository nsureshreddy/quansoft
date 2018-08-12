var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RevisionSchema = new Schema({
  projectId: {
    type: String
  },
  no: {
    type: Number
  },
  costEstimates: {
    type: Object
  },
  submittedTimestamp: {
    type: Date
  },
  status: {
    type: String
  },
  respondedTimestamp: {
    type: Date
  },
  builderComments: {
    type: String
  }
});


module.exports = mongoose.model('Revision', RevisionSchema);