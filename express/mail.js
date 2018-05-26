var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gangareddye.ettedi@gmail.com',
    pass: 'Srsh#msacc'
  }
});

var mailOptions = {
  from: 'sureshreddy.ns@gmail.com',
  to: 'n.sureshreddy@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

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
      Co-Founder, Product Owner at QuanSoft
    `

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
};