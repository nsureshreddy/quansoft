var nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gangareddye.ettedi@gmail.com',
    pass: 'Srsh#msacc'
  }
});

var mailOptions = {
  from: 'sureshreddy.ns@gmail.com'
};

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
    mailOptions.to = user.email;
    mailOptions.subject = 'Welcome To QuanSoft';
    mailOptions.text = `
      Hi ${user.name},

      Great to have you onboard!

      My name is Karthik and I wanted to reach out and introduce myself as your dedicated resource here at Quansoft.
      I'm available for any questions that you might have.

      Typically, people who've just signed up to Quansoft are looking for one of the following:
        1. You are evaluating Takeoff and Estimating software, and Quansoft is one of the software you are considering.
        2. You have decided to use Quansoft and need some help getting started.
        3. You were just curious about the tool and casually browsing.

      We've found that people in category 1 or 2 typically benefit from speaking to a someone like myself to answer questions or advise on best practices.

      To set up a time to connect, just hit reply and let me know :)

      Best,

      Karthik
      Founder, Product Owner at QuanSoft
    `

    sendMail(mailOptions);
  },

  notifyQuote: function (vendor) {
    var authToken = jwt.sign({email: vendor.email, type: 'vendor'}, 'config.secret');
    mailOptions.to = vendor.email;
    mailOptions.subject = 'Welcome To QuanSoft';
    mailOptions.html = `
      Hi ${vendor.organization},

      Great to have you onboard!

      To set up a time to connect
      Please Click <a href="http://localhost:3000/auth/${authToken}">Here </a> to login and see tendor details.


      Best,

      Karthik
      Founder, Product Owner at QuanSoft
    `
    sendMail(mailOptions);
  },

  sendTendor: function (jobId, emails) {
    if (emails && emails.constructor === Array && emails.length > 0) {
      emails.forEach((mail) => {
        var authToken = jwt.sign({ email: mail, et: 1.03 }, 'config.secret');
        mailOptions.to = mail;
        mailOptions.subject = 'Notice Inviting Tender';
        mailOptions.html = `
        
      Hi ${mail},<br/><br/>

      Great to have you onboard!<br/><br/>

      Please Click <a href="http://localhost:3000/auth/${authToken}">Here </a> to submit quotation.<br/><br/><br/>


      Best,<br/><br/>

      Karthik<br/>
      Founder, Product Owner at QuanSoft
      
    `
        sendMail(mailOptions);
      });
    }
  }
  
};