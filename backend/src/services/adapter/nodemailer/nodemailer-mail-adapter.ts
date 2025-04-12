import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ec3a56fd40d229",
    pass: "6fb49e76050d01"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: "Equipe feedback widget <oi@feedbackwiget.com>",
      cc: "Renan <renansilvaytb@gmail.com>",
      subject,
      html: body
    })
  };
}