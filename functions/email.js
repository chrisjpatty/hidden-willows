var nodemailer = require("nodemailer");

exports.handler = function(event, context, callback) {
  const { email } = event.body;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_TO,
    subject: "New application request",
    text: `Someone just requested a application be sent to this email: ${email}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
