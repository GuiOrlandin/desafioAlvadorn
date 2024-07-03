-- CreateTable
CREATE TABLE "activities" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);
