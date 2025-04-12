import { $Enums } from "@prisma/client";
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

describe('submit feedback use case', () => {
  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  )
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Test comment',
        screenshot: 'data:image/png;base64,zxcvbnmasdfghjkloipuytreq0912387456',
      }))
      .resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  });

  it('should not be able to submit feedback without comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,zxcvbnmasdfghjkloipuytreq0912387456',
      }))
      .rejects.toThrow()
  });

  it('should not be able to submit feedback with an invalid screenshot', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG' as $Enums.TipoFeedback,
        comment: 'Test comment',
        screenshot: 'teste.png',
      }))
      .resolves.toThrow()
  });

  it('should not be able to submit feedback without type', async () => {
    await expect(
      submitFeedback.execute({
        type: '' as $Enums.TipoFeedback,
        comment: 'Test comment',
        screenshot: 'data:image/png;base64,zxcvbnmasdfghjkloipuytreq0912387456',
      }))
      .rejects.toThrow()
  });
});