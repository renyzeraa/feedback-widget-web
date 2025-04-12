import { FastifyReply, FastifyRequest } from 'fastify'
import { feedbackSchema } from '@/http/schemas/feedback-schemas';
import { PrismaFeedbacksRepository } from '@/repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from '@/services/use-cases/submit-feedback-use-case';
import { getMessageError } from '@/services/errors/handleMessageError';
import { NodemailerMailAdapter } from '@/services/adapter/nodemailer/nodemailer-mail-adapter';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const { comment, type, screenshot } = feedbackSchema.parse(request.body)

  try {
    const repository = new PrismaFeedbacksRepository()
    const mailAdapter = new NodemailerMailAdapter()
    const useCase = new SubmitFeedbackUseCase(repository, mailAdapter)
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
