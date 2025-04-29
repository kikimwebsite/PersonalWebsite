-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userName" TEXT,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- Resetting migration for deployment