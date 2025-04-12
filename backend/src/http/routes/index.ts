import { app } from "@/app"
import { feedbackRoutes } from "./feedback.routes"

export async function allRoutes() {
  await app.register(feedbackRoutes)
}