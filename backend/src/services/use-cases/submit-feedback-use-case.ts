import { FeedbackRepository } from "@/repositories/feedbacks-repository";
import { $Enums } from "@prisma/client";
import { MailAdapter } from "../adapter/mail-adapter";

interface SubmitFeedbackUseCaseRequest {
  type: $Enums.TipoFeedback
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(private feedbacksRepository: FeedbackRepository, private mailAdapter: MailAdapter) { }
  async execute({ comment, type, screenshot }: SubmitFeedbackUseCaseRequest) {
    const feedback = await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: `Novo feedback - ${type}`,
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" alt="Screenshot" />` : null,
        `</div>`
      ].join('\n')
    })

    return {
      feedback
    }
  }
}