const nodemailer = require("nodemailer");

 async function sendMail(email,message,name, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "carlosngv99@gmail.com",
      pass: "amarilda7junio",
    },
  });

  console.log(message);
  console.log(email);
  console.log(name);

  try {
    var mailOptions = {
        from: 'carlosngv99@gmail.com',
        to: 'carlosngv99@gmail.com',
        subject: "Carlos NG - Website | " + name,
        text: message + ' | Correo: ' + email,
      };
      transporter.sendMail(mailOptions, function (error, info) {

        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      let info = await transporter.sendMail(mailOptions);
      callback(info);
  } catch (error) {
    console.log(error);
  }

}

module.exports = {sendMail};
