import { FastifyReply, FastifyRequest } from 'fastify'
import nodemailer from 'nodemailer'
import { feedbackSchema } from '@/http/schemas/feedback-schemas';
import { PrismaFeedbacksRepository } from '@/repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from '@/services/use-cases/submit-feedback-use-case';
import { getMessageError } from '@/services/errors/handleMessageError';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const { comment, type, screenshot } = feedbackSchema.parse(request.body)

  try {
    const repository = new PrismaFeedbacksRepository()
    const useCase = new SubmitFeedbackUseCase(repository)
    const { feedback } = await useCase.execute({ type, comment, screenshot })

    return reply.status(201).send({
      data: feedback,
      message: 'Feedback enviado com sucesso!'
    })
  }
  catch (error: Error | unknown) {
    const instanceError = getMessageError(error);
    return reply.status(instanceError.statusCode).send({
      message: instanceError.message
    })
  }
}

// const transport = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "a4a3de98db3927",
//     pass: "****9fb8"
//   }
// });

// await transport.sendMail({
//   from: "Equipe feedback widget <oi@feedbackwiget.com>",
//   cc: "Renan <renansilvaytb@gmail.com>",
//   subject: "Novo feedback",
//   html: [
//     `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
//     `<p>Tipo do feedback: ${req.body.type}</p>`,
//     `<p>Comentário: ${req.body.comment}</p>`,
//     req.body.screenshot ? `<img src="${req.body.screenshot}" alt="Screenshot" />` : '',
//     `</div>`
//   ].join('\n')
// })

