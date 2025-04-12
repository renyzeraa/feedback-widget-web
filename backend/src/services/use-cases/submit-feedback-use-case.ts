import { FeedbackRepository } from "@/repositories/feedbacks-repository";
import { $Enums } from "@prisma/client";

interface SubmitFeedbackUseCaseRequest {
  type: $Enums.TipoFeedback
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(private feedbacksRepository: FeedbackRepository) { }
  async execute({ comment, type, screenshot }: SubmitFeedbackUseCaseRequest) {
    const feedback = await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    return {
      feedback
    }
  }
}