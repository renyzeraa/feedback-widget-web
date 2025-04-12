-- CreateEnum
CREATE TYPE "TipoFeedback" AS ENUM ('OTHER', 'IDEIA', 'BUG');

-- CreateTable
CREATE TABLE "feedbacks" (
    "id" TEXT NOT NULL,
    "type" "TipoFeedback" NOT NULL,
    "comment" TEXT NOT NULL,
    "screenshot" TEXT,

    CONSTRAINT "feedbacks_pkey" PRIMARY KEY ("id")
);
