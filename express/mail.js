var nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gangareddye.ettedi@gmail.com',
    pass: 'Srsh#msacc'
  }
});

var sendMail = function (mailOptions) {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  sendWelcome: function (user) {
    var authToken = jwt.sign({email: user.email, type: user.designation, et: 1.01}, 'config.secret');
    var name = user.name || user.userId || user.email;
    var options = {
      to: user.email,
      subject: 'Welcome To QuanSoft'
    };
    options.html = `
      Hi ${name},<br/><br/>

      Great to have you onboard!<br/><br/>

      Please Click <a href="http://localhost:3000/auth/${authToken}">Here </a> to login to Quansoft and setup your profile.<br/><br/>

      Best,<br/><br/>

      Karthik<br/>
      Founder, Product Owner at QuanSoft
    `

    sendMail(options);
  },

  revisionMail: function (email) {
    var authToken = jwt.sign({email: email, type: 'builder'}, 'config.secret');
    
    var options = {
      to: email,
      subject: 'Cost Estimates Revision'
    };
    options.html = `
      Hi ${email},<br/><br/>

      Great to have you onboard!<br/><br/>

      Please Click <a href="http://localhost:3000/auth/${authToken}">Here </a> to view updated cost estimates.<br/><br/>

      Best,<br/><br/>

      Karthik<br/>
      Founder, Product Owner at QuanSoft
    `

    sendMail(options);
  },

  notifyQuote: function (vendor) {
    var authToken = jwt.sign({email: vendor.email, type: 'vendor'}, 'config.secret');
    var options = {
      to: vendor.email,
      subject: 'Welcome To QuanSoft'
    };
    options.html = `
      Hi ${vendor.organization},

      Great to have you onboard!

      To set up a time to connect
      Please Click <a href="http://localhost:3000/auth/${authToken}">Here </a> to login and see tendor details.


      Best,

      Karthik
      Founder, Product Owner at QuanSoft
    `
    sendMail(options);
  },

  sendTendor: function (jobId, emails) {
    if (emails && emails.constructor === Array && emails.length > 0) {
      emails.forEach((mail) => {
        var authToken = jwt.sign({ email: mail, et: 1.03 }, 'config.secret');
        var options = {
          to: mail,
          subject: 'Notice Inviting Tender'
        };
        options.html = `
        
      Hi ${mail},<br/><br/>

      Great to have you onboard!<br/><br/>

      Please Click <a href="http://localhost:3000/auth/${authToken}">Here </a> to submit quotation.<br/><br/><br/>


      Best,<br/><br/>

      Karthik<br/>
      Founder, Product Owner at QuanSoft
      
    `
        sendMail(options);
      });
    }
  },

  submitCostEstimates: function(project) {
    var authToken = jwt.sign({email: project.email, type: 'builder'}, 'config.secret');
    var options = {
      to: project.email,
      subject: 'Welcome To QuanSoft' 
    };
    options.html = `
      Hi ${project.email},
      <br/>
      Great to have you onboard!
      <br/>
      You have recieved cost estimates for the project <strong>${project.name}</strong>
      Please Click <a href="http://localhost:3000/auth/${authToken}">Here </a> to set up your profile and see cost estimates.
      
      <br/>
      <br/>
      Best,
      <br/><br/>
      Karthik<br/>
      Founder, Product Owner at QuanSoft
    `
    sendMail(options);
  }
  
};