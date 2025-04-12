import { InvalidFeedbackCommentFormat } from "./invalid-feedback-comment-format copy";
import { InvalidFeedbackTypeFormat } from "./invalid-feedback-type-format";
import { InvalidScreenshotFormat } from "./invalid-screenshot-format copy";

interface ErrorResponse {
  message: string;
  statusCode: number;
}

/**
 * Método para lidar com as mensagens de erro
 * Deve inserir todas as instâncias aqui para definir seu statusCode
 * @param instance 
 * @returns 
 */
export function getMessageError(instance: any): ErrorResponse {
  if (
    instance instanceof InvalidScreenshotFormat ||
    instance instanceof InvalidFeedbackTypeFormat ||
    instance instanceof InvalidFeedbackCommentFormat
  ) {
    return {
      message: instance.message,
      statusCode: 400,
    }
  }

  console.error({
    message: instance.message,
    name: instance.name,
    status: instance.statusCode
  })

  return {
    message: instance.message ?? "Erro no servidor",
    statusCode: instance.statusCode ?? 500,
  }
}