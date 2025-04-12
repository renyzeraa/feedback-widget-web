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
  console.error({
    message: instance.message,
    name: instance.name,
    status: instance.statusCode || instance.statusCode
  })

  return {
    message: instance.message ?? "Erro no servidor",
    statusCode: instance.statusCode ?? 500,
  }
}