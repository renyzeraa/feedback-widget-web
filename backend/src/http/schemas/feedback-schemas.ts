import { $Enums } from "@prisma/client";
import { z } from "zod";

export const feedbackSchema = z.object({
  id: z.string().uuid().optional(),
  type: z.enum([$Enums.TipoFeedback.BUG, $Enums.TipoFeedback.IDEIA, $Enums.TipoFeedback.OTHER], {
    required_error: "Tipo é obrigatório",
    invalid_type_error: "Tipo deve ser um dos seguintes: BUG, SUGGESTION, OTHER",
  }),
  comment: z.string().min(1, "Comentário é obrigatório"),
  screenshot: z.string().base64().optional(),
})
