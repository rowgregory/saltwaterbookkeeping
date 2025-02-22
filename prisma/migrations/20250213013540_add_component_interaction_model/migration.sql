-- CreateTable
CREATE TABLE "ComponentInteraction" (
    "id" TEXT NOT NULL,
    "componentName" TEXT NOT NULL,
    "clickCount" INTEGER NOT NULL DEFAULT 0,
    "lastClickedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ComponentInteraction_pkey" PRIMARY KEY ("id")
);
