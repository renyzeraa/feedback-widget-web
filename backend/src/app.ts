import fastify from 'fastify'
import { env } from './env'
import fastifyCors from '@fastify/cors'
import { allRoutes } from './http/routes'

export const app = fastify()

app.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})
app.register(allRoutes, { prefix: '/api/v1' })

app.setErrorHandler((error, request, reply) => {
  console.error(error)

  // Erro genérico
  return reply.status(500).send({
    message: 'Erro interno no servidor',
    error: env?.NODE_ENV !== 'production' ? error.message : undefined,
    stack: env?.NODE_ENV !== 'production' ? error.stack : undefined
  })
})