-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "auth";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "stride";

-- CreateEnum
CREATE TYPE "stride"."Role" AS ENUM ('ORG_ADMIN', 'MANAGER', 'TRAINER', 'MEMBER');

-- CreateEnum
CREATE TYPE "stride"."MembershipStatus" AS ENUM ('PENDING', 'ACTIVE', 'GRACE_PERIOD', 'SUSPENDED', 'CANCELLED', 'REVOKED');

-- CreateEnum
CREATE TYPE "stride"."InvoiceType" AS ENUM ('SUBSCRIPTION', 'TOKEN');

-- CreateEnum
CREATE TYPE "stride"."InvoiceStatus" AS ENUM ('DRAFT', 'OPEN', 'PAID', 'VOID');

-- CreateEnum
CREATE TYPE "stride"."PaymentMethod" AS ENUM ('CASH', 'BANK_TRANSFER', 'PAYHERE', 'DIRECTPAY');

-- CreateEnum
CREATE TYPE "stride"."PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "stride"."ResourceType" AS ENUM ('PHYSICAL', 'HUMAN');

-- CreateEnum
CREATE TYPE "stride"."InvitationStatus" AS ENUM ('PENDING', 'CLAIMED', 'REVOKED', 'EXPIRED');

-- CreateTable
CREATE TABLE "stride"."users"
(
    "id"            TEXT         NOT NULL,
    "keycloakId"    TEXT,
    "email"         TEXT         NOT NULL,
    "phone"         TEXT,
    "firstName"     TEXT         NOT NULL,
    "lastName"      TEXT         NOT NULL,
    "isGlobalAdmin" BOOLEAN      NOT NULL DEFAULT false,
    "isActive"      BOOLEAN      NOT NULL DEFAULT true,
    "createdAt"     TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"     TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."tenants"
(
    "id"          TEXT         NOT NULL,
    "name"        TEXT         NOT NULL,
    "slug"        TEXT         NOT NULL,
    "domain"      TEXT,
    "themeConfig" JSONB,
    "taxRules"    JSONB,
    "gatewayKeys" JSONB,
    "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"   TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tenants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."memberships"
(
    "id"        TEXT                        NOT NULL,
    "userId"    TEXT                        NOT NULL,
    "tenantId"  TEXT                        NOT NULL,
    "status"    "stride"."MembershipStatus" NOT NULL DEFAULT 'ACTIVE',
    "rfidTag"   TEXT,
    "createdAt" TIMESTAMP(3)                NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)                NOT NULL,

    CONSTRAINT "memberships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."membership_roles"
(
    "id"           TEXT            NOT NULL,
    "membershipId" TEXT            NOT NULL,
    "role"         "stride"."Role" NOT NULL,

    CONSTRAINT "membership_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."attendances"
(
    "id"           TEXT         NOT NULL,
    "tenantId"     TEXT         NOT NULL,
    "membershipId" TEXT,
    "rfidTag"      TEXT,
    "authMethod"   TEXT         NOT NULL,
    "checkInTime"  TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "checkOutTime" TIMESTAMP(3),

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."invoices"
(
    "id"           TEXT                     NOT NULL,
    "tenantId"     TEXT                     NOT NULL,
    "membershipId" TEXT                     NOT NULL,
    "type"         "stride"."InvoiceType"   NOT NULL,
    "status"       "stride"."InvoiceStatus" NOT NULL DEFAULT 'DRAFT',
    "totalAmount"  DECIMAL(10, 2)           NOT NULL,
    "dueDate"      TIMESTAMP(3),
    "createdAt"    TIMESTAMP(3)             NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"    TIMESTAMP(3)             NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."invoice_items"
(
    "id"          TEXT           NOT NULL,
    "invoiceId"   TEXT           NOT NULL,
    "description" TEXT           NOT NULL,
    "amount"      DECIMAL(10, 2) NOT NULL,

    CONSTRAINT "invoice_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."payments"
(
    "id"          TEXT                     NOT NULL,
    "invoiceId"   TEXT                     NOT NULL,
    "amount"      DECIMAL(10, 2)           NOT NULL,
    "method"      "stride"."PaymentMethod" NOT NULL,
    "gatewayTxId" TEXT,
    "status"      "stride"."PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "processedAt" TIMESTAMP(3)             NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."resources"
(
    "id"             TEXT                    NOT NULL,
    "tenantId"       TEXT                    NOT NULL,
    "name"           TEXT                    NOT NULL,
    "type"           "stride"."ResourceType" NOT NULL,
    "capacity"       INTEGER                 NOT NULL DEFAULT 1,
    "linkedMemberId" TEXT,

    CONSTRAINT "resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."bookings"
(
    "id"           TEXT         NOT NULL,
    "resourceId"   TEXT         NOT NULL,
    "membershipId" TEXT         NOT NULL,
    "startTime"    TIMESTAMP(3) NOT NULL,
    "endTime"      TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."metrics"
(
    "id"           TEXT         NOT NULL,
    "membershipId" TEXT         NOT NULL,
    "metricType"   TEXT         NOT NULL,
    "data"         JSONB        NOT NULL,
    "recordedAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."documents"
(
    "id"           TEXT         NOT NULL,
    "membershipId" TEXT         NOT NULL,
    "fileName"     TEXT         NOT NULL,
    "fileUrl"      TEXT         NOT NULL,
    "context"      TEXT         NOT NULL,
    "uploadedAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."audit_logs"
(
    "id"        TEXT         NOT NULL,
    "tenantId"  TEXT         NOT NULL,
    "userId"    TEXT,
    "action"    TEXT         NOT NULL,
    "entity"    TEXT         NOT NULL,
    "entityId"  TEXT         NOT NULL,
    "changes"   JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stride"."TenantInvitation"
(
    "id"        TEXT                        NOT NULL,
    "tenantId"  TEXT                        NOT NULL,
    "email"     TEXT,
    "phone"     TEXT,
    "role"      "stride"."Role"             NOT NULL,
    "status"    "stride"."InvitationStatus" NOT NULL DEFAULT 'PENDING',
    "expiresAt" TIMESTAMP(3)                NOT NULL,
    "createdAt" TIMESTAMP(3)                NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)                NOT NULL,

    CONSTRAINT "TenantInvitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."user"
(
    "id"            TEXT         NOT NULL,
    "name"          TEXT         NOT NULL,
    "email"         TEXT         NOT NULL,
    "emailVerified" BOOLEAN      NOT NULL,
    "image"         TEXT,
    "createdAt"     TIMESTAMP(3) NOT NULL,
    "updatedAt"     TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."session"
(
    "id"        TEXT         NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "token"     TEXT         NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId"    TEXT         NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."account"
(
    "id"                    TEXT         NOT NULL,
    "accountId"             TEXT         NOT NULL,
    "providerId"            TEXT         NOT NULL,
    "userId"                TEXT         NOT NULL,
    "accessToken"           TEXT,
    "refreshToken"          TEXT,
    "idToken"               TEXT,
    "accessTokenExpiresAt"  TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "scope"                 TEXT,
    "password"              TEXT,
    "createdAt"             TIMESTAMP(3) NOT NULL,
    "updatedAt"             TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_keycloakId_key" ON "stride"."users" ("keycloakId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "stride"."users" ("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "stride"."users" ("phone");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_slug_key" ON "stride"."tenants" ("slug");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_domain_key" ON "stride"."tenants" ("domain");

-- CreateIndex
CREATE UNIQUE INDEX "memberships_rfidTag_key" ON "stride"."memberships" ("rfidTag");

-- CreateIndex
CREATE UNIQUE INDEX "memberships_userId_tenantId_key" ON "stride"."memberships" ("userId", "tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "membership_roles_membershipId_role_key" ON "stride"."membership_roles" ("membershipId", "role");

-- CreateIndex
CREATE UNIQUE INDEX "payments_gatewayTxId_key" ON "stride"."payments" ("gatewayTxId");

-- CreateIndex
CREATE INDEX "TenantInvitation_email_idx" ON "stride"."TenantInvitation" ("email");

-- CreateIndex
CREATE INDEX "TenantInvitation_phone_idx" ON "stride"."TenantInvitation" ("phone");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "auth"."user" ("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "auth"."session" ("token");

-- AddForeignKey
ALTER TABLE "stride"."memberships"
    ADD CONSTRAINT "memberships_userId_fkey" FOREIGN KEY ("userId") REFERENCES "stride"."users" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."memberships"
    ADD CONSTRAINT "memberships_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "stride"."tenants" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."membership_roles"
    ADD CONSTRAINT "membership_roles_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "stride"."memberships" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."attendances"
    ADD CONSTRAINT "attendances_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "stride"."tenants" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."attendances"
    ADD CONSTRAINT "attendances_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "stride"."memberships" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."invoices"
    ADD CONSTRAINT "invoices_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "stride"."tenants" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."invoices"
    ADD CONSTRAINT "invoices_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "stride"."memberships" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."invoice_items"
    ADD CONSTRAINT "invoice_items_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "stride"."invoices" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."payments"
    ADD CONSTRAINT "payments_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "stride"."invoices" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."resources"
    ADD CONSTRAINT "resources_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "stride"."tenants" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."bookings"
    ADD CONSTRAINT "bookings_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "stride"."resources" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."bookings"
    ADD CONSTRAINT "bookings_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "stride"."memberships" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."metrics"
    ADD CONSTRAINT "metrics_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "stride"."memberships" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."documents"
    ADD CONSTRAINT "documents_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "stride"."memberships" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."audit_logs"
    ADD CONSTRAINT "audit_logs_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "stride"."tenants" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."audit_logs"
    ADD CONSTRAINT "audit_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "stride"."users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stride"."TenantInvitation"
    ADD CONSTRAINT "TenantInvitation_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "stride"."tenants" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth"."session"
    ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth"."account"
    ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
