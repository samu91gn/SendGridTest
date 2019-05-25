
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
let key = process.env.SENDGRID_API_KEY;
console.log("key: " + key);
sgMail.setApiKey(key);
const msg = {
  to: 'samuele8@gmail.com',
  from: 'test@example.com',
  subject: 'Test email SendGrid',
  text: 'sample text',
  html: '<strong>sample html</strong>',
};
sgMail.send(msg);
