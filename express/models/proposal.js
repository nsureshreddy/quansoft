var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProposalSchema = new Schema({
  jobId: {
    type: Number,
    unique: true
  },
  builder: {
    type: String,
    required: true
  },
  scope: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

ProposalSchema.pre('save', function (next) {
  var proposal = this;
});


module.exports = mongoose.model('Proposal', ProposalSchema);