var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');

var mail = require('../mail');

var Project = require("../models/project");
var Proposal = require("../models/proposal");

var User = require("../models/user");
var MasterSchedule = require("../models/masterSchedule").MasterSchedule;
var MasterResource = require("../models/masterResource");
var Revision = require("../models/revisions");

var Vendor = require('../models/vendor');

router.post('/session', function (req,res) {
  var token = req.body.token;
  var user = jwt.verify(token, 'config.secret');
  delete user.password;
  return res.json(user);
});

router.get('/auth/:token', function(req, res) {
  var token = req.params.token;
  try {
    var tokenValue = jwt.verify(token, 'config.secret');
    User.findOne({
      email: tokenValue.email
    }, function (err, user) {
      if (err) {
        return res.json({ error: e });
      }

      if(user) {
        var token = jwt.sign(user.toJSON(), 'config.secret');
        res.json({ success: true, user: user, token:  token });
      } else {
        res.json({error: 'Error, Can\'t find user'});
      }
      
    });
    
  } catch(e) {
    return res.json({ error: e });
  }
});

// Get All Users
router.get('/users', function(req, res) {
  try {
    var find = {designation: {$ne: 'management'} };
    var query = User.find(find).select({password:0});
    query.exec(function (err, users) {
    if (err) {
      return res.json({error: err});
    }
    return res.json(users);
  });


  } catch(e) {
    return res.json({error: e});
  }
});

// User Signup
router.post('/signup', function(req, res) {
  var user = Object.assign(new User, req.body);
  if (!user.userId) {
    user.userId = user.name.split(' ').join('').toLowerCase();
  }
  user.save(function(err) {
    mail.sendWelcome(user);
    if (err) {
      return res.json({error: err});
    }
    
    res.json({user: user});
  });
});

router.put('/update-user', (req, res) => {
  var user = Object.assign(new User, req.body);
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      user.password = hash;
      User.update({ _id: user._id }, user, { upsert: true}, (err, user) => {
        res.json({ error: err, data: user });
      });
    });
  });
});

router.delete('/delete-user/:_id', (req, res) => {
  User.findByIdAndRemove(req.params._id, (err, response) => {
    return res.json({ error: err, data: response });
  });
});

// User signin
router.post('/signin', function (req, res) {
  User.findOne({
    userId: req.body.userId
  }, function (err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), 'config.secret');
          // return the information including token as JSON

          res.json({ success: true, user: user, token:  token });
        } else {
          res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
        }
      });
    }
  });
});

// Get All Projects
router.get('/proposals/:userId?', function (req, res) {
  var query = require('url').parse(req.url, true).query;
  var userId = req.params.userId;
  if (userId) {
    User.findById(userId , function (err, user) {
      if (user && user.designation !== 'management') {
        var jobIds = user.assignedProjects.map(function (i) {
          return i.id;
        });
        getProposals({ jobId: { $in: jobIds } }, query, res);
      } else {
        getProposals({}, query, res);
      }
    });
  } else {
    getProposals({}, query, res);
  }
});


// Get Project
router.get('/project/:jobId', function(req, res) {
  Project.findOne({jobId:req.params.jobId }, function(err, project) {
    if (err) {
      return res.json({success: false, msg: err});
    }
    return res.json(project);
  });
});

// Project Signup
router.post('/project-signup', function(req, res) {
  var project = new Project(req.body);
  project.setJobId();
  project.save(function(err) {
    if (err) {
      return res.json({error: err});
    }
    res.json({success: true, msg: 'Project created successfully.'});
  });
});

// Project Update
router.put('/project-signup', function(req, res) {
  var project = new Project(req.body);
  console.log(project.jobId);
  
  Project.findOneAndUpdate({jobId: project.jobId}, req.body,{new: true}, function(err) {
    if (err) {
      return res.json({error: err});
    }
    res.json({success: true, msg: 'Project Details Updated.'});
  });
});


// Get Project
router.get('/revisions/:jobId/:revId?', function(req, res) {
  var revId = req.params.revId;
  var find = { projectId: req.params.jobId};
  if (revId) {
    find._id = revId; 
  }
  Revision.find( find, function(err, revisions) {
    if (err) {
      return res.json({success: false, msg: err});
    }
    return res.json(revisions);
  });
});

router.post('/approve-costestimates/:jobId', function(req, res) {
  var id = req.params.jobId;
  var status = req.body.status ? 'Approved' : 'Rejected';
  Revision.update({ projectId: +id }, { $set: { 
    status: status ,
    builderComments: req.body.comments,
    respondedTimestamp: new Date()
  } },
    function (err) {
      return res.json({});
    });
});

// Update Cost Estimates By Id
// Submitted by admin/manager of the project
router.put('/update-costestimates-by-id/:id', (req, res) => {
  try {
    var costEstimates = req.body.costEstimates;
    var jobId = req.params.id;
    Project.update({ jobId: +jobId }, { $set: { costEstimates: costEstimates } },
      function (err, data) {
        if (err) {
          return res.json({ error: err });
        }
        
        // Create a revision
        var revision = new Revision({
          costEstimates: costEstimates,
          status: 'SUBMITTED',
          projectId: jobId,
          submittedTimestamp: new Date()
        });
        
        revision.save(function(err) {
          if (err) {
            return res.json({error: err});
          }
          var query = Project.findOne({jobId: jobId}).select({email:1});

          query.exec(function (err, projects) {
            if (err) {
              return res.json({ error: err });
            }
            mail.revisionMail(projects.email);
            return res.json({ msg: 'Revision Submitted To Builder.' });
          });
          
        });
      });
  } catch (e) {
    res.json({ error: e });
  }
});

// Update Cost Estimates
// Submitted by admin/manager of the project
router.put('/update-costestimates/:submit', (req, res) => {
  try {
    var project = new Project(req.body);
    var submit = req.params.submit;
    project.costEstimates.status = submit ==='true' ? 'SUBMITTED' : 'IN PROGRESS';
    
    Project.update({ jobId: +project.jobId }, { $set: { costEstimates: project.costEstimates } },
      function (err) {
        if (err) {
          return res.json({ error: err });
        }
        if (submit === 'true') {
          // Create Builder Profile
          // Create a revision
          var revision = new Revision({
            costEstimates: project.costEstimates,
            status: 'SUBMITTED',
            projectId: project.jobId,
            submittedTimestamp: new Date()
          });
          // save the user
          revision.save(function(err) {
            console.log('Signup user...');
            signupUser(req, res, project.email, 'builder', project.jobId, project.name);
          });          
        } else {
          res.json({ success: true, msg: 'Cost Estimates Updated Successfully.' });
        }
      });
  } catch (e) {
    res.json({ error: e });
  }
});

function signupUser(req, res, email, designation, jobId, projectName) {
  var user = new User();
  
  user.email = email;
  user.userId = email;
  user.designation = designation;
  user.activated = false;
  user.assignedProjects = [{
    name: projectName,
    id: jobId
  }];

  user.save(function(err) {
    if (err) {
      return res.json({error: err});
    }

    mail.sendWelcome(user);
    res.json({user: user});
  });
}

// Update Terms and Condtions of a Project
router.post('/project/update-terms/:jobId', function(req, res) {
  Project.update({ jobId:req.params.jobId }, { $set: { termsAndonditions: req.body }},
    function(err) {
      if (err) {
        return res.json({error: err});
      }
      res.json({success: true, msg: 'Terms and Conditions Updated.'});
  });
});

router.post('/update-quantity/:jobId', function (req, res){

  Project.findOneAndUpdate(
    { "jobId": '1532242891694'},
    { 
        $set: {
            paymentTerms: 'permission2'
        }
    },
    function(err,doc) {
      return res.json({error: 'err'});
    }
);

});

// Update Payment Terms of a Project
router.post('/project/update-payment-terms/:jobId', function(req, res) {
  Project.update({ jobId:req.params.jobId }, { $set: { paymentTerms: req.body }},
    function(err) {
      if (err) {
        return res.json({error: err});
      }
      res.json({success: true, msg: 'Payment Terms Updated.'});
  });
});

// Update Proposal of a Project
router.post('/project/update-proposal/:jobId', function(req, res) {
  Project.update({ jobId:req.params.jobId }, { $set: { scopeItems: req.body }},
    function(err) {
      if (err) {
        return res.json({error: err});
      }
      res.json({success: true, msg: 'Price Schedule Updated.'});
  });
});

router.get('/master-schedule', (req, res) => {
  MasterSchedule.find({}, (err, masters) => {
    return res.json({ error: err, data: masters });
  });
});

router.post('/master-schedule', (req, res) => {
  var masterSchedule = Object.assign(new MasterSchedule, req.body);
  masterSchedule.save((err, master) => {
    res.json({ error: err, data: master });
  });
});

router.put('/master-schedule', (req, res) => {
  var masterSchedule = Object.assign(new MasterSchedule, req.body);
  MasterSchedule.update({ _id: masterSchedule._id }, masterSchedule, { upsert: true}, (err, master) => {
    res.json({ error: err, data: masterSchedule });
  });
});

router.delete('/master-schedule/:_id', (req, res) => {
  MasterSchedule.findByIdAndRemove(req.params._id, (err, response) => {
    return res.json({ error: err, data: response });
  });
});

// Master Resources
router.get('/master-resource', (req, res) => {
  MasterResource.find({}, (err, resources) => {
    return res.json({ error: err, data: resources });
  });
});

router.post('/master-resource', (req, res) => {
  var masterResource = Object.assign(new MasterResource, req.body);
  
  masterResource.save(function(err, resources) {
    res.json({error: err, data: resources });
  });
});

router.put('/master-resource', (req, res) => {
  var masterResource = Object.assign(new MasterResource, req.body);
  MasterResource.update({ _id: masterResource._id }, masterResource, { upsert: true}, (err, resource) => {
    res.json({ error: err, data: resource });
  });
});

router.delete('/master-resource/:_id', (req, res) => {
  MasterResource.findByIdAndRemove(req.params._id, (err, response) => {
    return res.json({ error: err, data: response });
  });
});

// Save New proposal
router.post('/proposal', function(req, res) {
  var newProposal = new Proposal({
    builder: req.body.builder,
    amount: req.body.amount,
    scope: req.body.scope,
    amount: req.body.amount,
    status: 'PENDING'
  });
  // save the user
  newProposal.save(function(err) {
    res.json({msg: 'Successful created new user.'});
  });
});

// Vendor Registration
router.post('/vendor', function(req, res) {
  var vendor = Object.assign(new Vendor, req.body);
  
  vendor.save(function(err, vendor) {
    if (!err) {
        // Send an Email to Vendor
        // with an authorization token to login
        mail.notifyQuote(vendor);
    }
    res.json({error: err, data: vendor });
  });

});

router.post('/submit-tendor', function (req, res) {
  try {
    var jobId = req.body.jobId;
    mail.sendTendor(jobId, req.body.vendors);
    res.json({data: 'Success' });    
  } catch(e) {
    res.json({error: e });
  }
});

router.post('/submit-quote', function (req, res) {
  try {
    var jobId = req.body.jobId;
    var costEstimates = req.body.estimates;
    Project.update(
      { jobId: jobId }, 
      { $push: { quotations: costEstimates } },
      function(err, count) {
        if (err) return next(err);
        res.json({updated: count});
    }
    );
  
  } catch(e) {
    res.json({error:e});
  }
});

router.post('/quotations', function (req, res) {
  
})

// Vendor Registration
router.get('/vendor', function(req, res) {
  Vendor.find({}, (err, vendors) => {
    return res.json({ error: err, data: vendors });
  });
});


// Helpers
function getProposals(find, fields, res) {
  var query = Project.find(find).select(fields);

  query.exec(function (err, projects) {
    if (err) {
      return res.json({ success: false, msg: err });
    }
    return res.json(projects);
  });
}


module.exports = router;