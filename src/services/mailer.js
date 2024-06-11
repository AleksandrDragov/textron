
require("dotenv").config();
const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");
const {MAILER_KEY,SENDFROM,SENDTO} = process.env;
const mailersend = new MailerSend({
    api_key: MAILER_KEY,
});

const recipients = [new Recipient(SENDTO,"Recipient")];

const emailParams = new EmailParams()
    .setFrom(SENDFROM)
    .setFromName("Your Name")
    .setRecipients(recipients)
    .setSubject("Subject")
    .setHtml("Greetings from the team, you got this message through MailerSend.")
    .setText("Greetings from the team, you got this message through MailerSend.");

mailersend.send(emailParams);