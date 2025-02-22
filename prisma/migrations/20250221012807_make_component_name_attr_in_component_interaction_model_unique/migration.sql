/*
  Warnings:

  - A unique constraint covering the columns `[componentName]` on the table `ComponentInteraction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ComponentInteraction_componentName_key" ON "ComponentInteraction"("componentName");
