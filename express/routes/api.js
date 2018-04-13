var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Project = require("../models/project");
var Proposal = require("../models/proposal");

var User = require("../models/user");
var MasterSchedule = require("../models/masterSchedule");

// Get All Users
router.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      return res.json({success: false, msg: err});
    }
    return res.json(users);
  });
});

// User Signup
router.post('/signup', function(req, res) {
  if (!req.body.name || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
      name: req.body.name,
      password: req.body.password,
      phone: req.body.phone,
      email: req.body.email,
      designation: req.body.designation,
      roles: [],
      userId: req.body.userId
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: err});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
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

          res.json({ success: true, user: user, token: 'JWT ' + token });
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

router.post('/master-schedule', function(req, res) {
  var masterSchedule = Object.assign(new MasterSchedule, req.body);
  masterSchedule.save(function(err) {
    if (err) {
      return res.json({success: false, msg: err});
    }
    res.json({success: true, msg: 'Successful created new master schedule.'});
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



module.exports = router;