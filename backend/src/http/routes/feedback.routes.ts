import { FastifyInstance } from 'fastify'
import { create } from '../controllers/feedback/create'

export async function feedbackRoutes(app: FastifyInstance) {
  app.post('/feedbacks', create)
}