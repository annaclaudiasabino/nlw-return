import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mailAdapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1b43442bb7d093",
    pass: "47c54236754e23"
  }
});

export class NodemailerAdpter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {

   await transport.sendMail({
     from: "Equipe Feedget <oi@feedget.com>",
     to: "Anna <annassabino@gmail.com",
     subject,
     html: body,
   });
  }
}