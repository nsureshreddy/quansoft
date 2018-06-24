var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var mail = require('../mail');

var Project = require("../models/project");
var Proposal = require("../models/proposal");

var User = require("../models/user");
var MasterSchedule = require("../models/masterSchedule");
var MasterResource = require("../models/masterResource");

var Vendor = require('../models/vendor');

// Get All Users
router.get('/users/:status', function(req, res) {
  var status = req.params.status;
  var filter = {};
  if (status) {
    filter.status = status;
  }
  User.find(filter, function(err, users) {
    if (err) {
      return res.json({success: false, msg: err});
    }
    return res.json(users);
  });
});

router.post('/session', function (req,res) {
  var token = req.body.token;
  var user = jwt.verify(token, 'config.secret');
  delete user.password;
  return res.json(user);
});

// User Signup
router.post('/signup', function(req, res) {
  var newUser = Object.assign(new User, req.body);
  if (!newUser.userId) {
    newUser.userId = newUser.name.split(' ').join('').toLowerCase();
  }
  newUser.save(function(err) {
    mail.sendWelcome(newUser);
    if (err) {
      return res.json({success: false, msg: err});
    }
    
    res.json({success: true, msg: 'Successful created new user.'});
  });
});

router.put('/update-user', (req, res) => {
  var user = Object.assign(new User, req.body);
  User.update({ _id: user._id }, user, { upsert: true}, (err, user) => {
    res.json({ error: err, data: user });
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
router.get('/projects', function(req, res) {
  Project.find({}, function(err, projects) {
    if (err) {
      return res.json({success: false, msg: err});
    }
    return res.json(projects);
  });
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

// User Signup
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

// Update Terms and Condtions of a Project
router.post('/project/update-payment-terms/:jobId', function(req, res) {
  Project.update({ jobId:req.params.jobId }, { $set: { paymentTerms: req.body }},
    function(err) {
      if (err) {
        return res.json({error: err});
      }
      res.json({success: true, msg: 'Payment Terms Updated.'});
  });
});

// Update Terms and Condtions of a Project
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
});

// Vendor Registration
router.get('/vendor', function(req, res) {
  Vendor.find({}, (err, vendors) => {
    return res.json({ error: err, data: vendors });
  });
});

router.get('/authorization/:token', function(req, res) {
  var token = req.params.token;
  try {
    var user = jwt.verify(token, 'config.secret');
    res.redirect('/dashboard/vendor');
  } catch(e) {
    return res.json({ error: e });
  }

});


module.exports = router;