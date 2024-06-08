-- CreateEnum
CREATE TYPE "AreaOfFunding" AS ENUM ('CULTURE_FOOD', 'PUBLIC_HEALTH_WOMEN', 'ENVIRONMENT_ART', 'VETERANS_ISSUES', 'MEDICAL_ASSISTANCE', 'RELIGIOUS_AND_SPIRITUAL_ENDEAVORS', 'SOMETHING_ELSE', 'AND_ANOTHER_ONE', 'HELLO');

-- CreateEnum
CREATE TYPE "GrantStatus" AS ENUM ('NEW', 'APPLIED', 'REJECTED', 'ACCEPTED');

-- CreateTable
CREATE TABLE "Grant" (
    "id" TEXT NOT NULL,
    "logoUrl" TEXT,
    "name" TEXT NOT NULL,
    "foundationName" TEXT NOT NULL,
    "averageAmount" INTEGER NOT NULL,
    "status" "GrantStatus" NOT NULL DEFAULT 'NEW',
    "locationId" TEXT NOT NULL,
    "areaOfFunding" "AreaOfFunding"[],
    "deadline" TIMESTAMP(3) NOT NULL,
    "matchDate" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Grant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "grantId" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT,
    "city" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Grant" ADD CONSTRAINT "Grant_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_grantId_fkey" FOREIGN KEY ("grantId") REFERENCES "Grant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
