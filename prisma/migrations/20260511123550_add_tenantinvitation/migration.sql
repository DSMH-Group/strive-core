-- CreateEnum
CREATE TYPE "InvitationStatus" AS ENUM ('PENDING', 'CLAIMED', 'REVOKED', 'EXPIRED');

-- CreateTable
CREATE TABLE "TenantInvitation"
(
    "id"        TEXT               NOT NULL,
    "tenantId"  TEXT               NOT NULL,
    "email"     TEXT,
    "phone"     TEXT,
    "role"      "Role"             NOT NULL,
    "status"    "InvitationStatus" NOT NULL DEFAULT 'PENDING',
    "expiresAt" TIMESTAMP(3)       NOT NULL,
    "createdAt" TIMESTAMP(3)       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)       NOT NULL,

    CONSTRAINT "TenantInvitation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TenantInvitation_email_idx" ON "TenantInvitation" ("email");

-- CreateIndex
CREATE INDEX "TenantInvitation_phone_idx" ON "TenantInvitation" ("phone");

-- AddForeignKey
ALTER TABLE "TenantInvitation"
    ADD CONSTRAINT "TenantInvitation_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenants" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
