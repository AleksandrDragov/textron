const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const {MAILER_KEY} = process.env;
const mailersend = new MailerSend({
    api_key: MAILER_KEY,
});

const recipients = [new Recipient(process.env(), "Recipient")];

const emailParams = new EmailParams()
    .setFrom("info@domain.com")
    .setFromName("Your Name")
    .setRecipients(recipients)
    .setSubject("Subject")
    .setHtml("Greetings from the team, you got this message through MailerSend.")
    .setText("Greetings from the team, you got this message through MailerSend.");

mailersend.send(emailParams);