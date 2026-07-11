-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ORG_ADMIN', 'MANAGER', 'TRAINER', 'MEMBER');

-- CreateEnum
CREATE TYPE "MembershipStatus" AS ENUM ('PENDING', 'ACTIVE', 'GRACE_PERIOD', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "InvoiceType" AS ENUM ('SUBSCRIPTION', 'TOKEN');

-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('DRAFT', 'OPEN', 'PAID', 'VOID');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'BANK_TRANSFER', 'PAYHERE', 'DIRECTPAY');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM ('PHYSICAL', 'HUMAN');

-- CreateTable
CREATE TABLE "users"
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
CREATE TABLE "tenants"
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
CREATE TABLE "memberships"
(
    "id"        TEXT               NOT NULL,
    "userId"    TEXT               NOT NULL,
    "tenantId"  TEXT               NOT NULL,
    "status"    "MembershipStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3)       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)       NOT NULL,

    CONSTRAINT "memberships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membership_roles"
(
    "id"           TEXT   NOT NULL,
    "membershipId" TEXT   NOT NULL,
    "role"         "Role" NOT NULL,

    CONSTRAINT "membership_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendances"
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
CREATE TABLE "invoices"
(
    "id"           TEXT            NOT NULL,
    "tenantId"     TEXT            NOT NULL,
    "membershipId" TEXT            NOT NULL,
    "type"         "InvoiceType"   NOT NULL,
    "status"       "InvoiceStatus" NOT NULL DEFAULT 'DRAFT',
    "totalAmount"  DECIMAL(10, 2)  NOT NULL,
    "dueDate"      TIMESTAMP(3),
    "createdAt"    TIMESTAMP(3)    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"    TIMESTAMP(3)    NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice_items"
(
    "id"          TEXT           NOT NULL,
    "invoiceId"   TEXT           NOT NULL,
    "description" TEXT           NOT NULL,
    "amount"      DECIMAL(10, 2) NOT NULL,

    CONSTRAINT "invoice_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments"
(
    "id"          TEXT            NOT NULL,
    "invoiceId"   TEXT            NOT NULL,
    "amount"      DECIMAL(10, 2)  NOT NULL,
    "method"      "PaymentMethod" NOT NULL,
    "gatewayTxId" TEXT,
    "status"      "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "processedAt" TIMESTAMP(3)    NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resources"
(
    "id"             TEXT           NOT NULL,
    "tenantId"       TEXT           NOT NULL,
    "name"           TEXT           NOT NULL,
    "type"           "ResourceType" NOT NULL,
    "capacity"       INTEGER        NOT NULL DEFAULT 1,
    "linkedMemberId" TEXT,

    CONSTRAINT "resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings"
(
    "id"           TEXT         NOT NULL,
    "resourceId"   TEXT         NOT NULL,
    "membershipId" TEXT         NOT NULL,
    "startTime"    TIMESTAMP(3) NOT NULL,
    "endTime"      TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metrics"
(
    "id"           TEXT         NOT NULL,
    "membershipId" TEXT         NOT NULL,
    "metricType"   TEXT         NOT NULL,
    "data"         JSONB        NOT NULL,
    "recordedAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents"
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
CREATE TABLE "audit_logs"
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

-- CreateIndex
CREATE UNIQUE INDEX "users_keycloakId_key" ON "users" ("keycloakId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users" ("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users" ("phone");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_slug_key" ON "tenants" ("slug");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_domain_key" ON "tenants" ("domain");

-- CreateIndex
CREATE UNIQUE INDEX "memberships_userId_tenantId_key" ON "memberships" ("userId", "tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "membership_roles_membershipId_role_key" ON "membership_roles" ("membershipId", "role");

-- CreateIndex
CREATE UNIQUE INDEX "payments_gatewayTxId_key" ON "payments" ("gatewayTxId");

-- AddForeignKey
ALTER TABLE "memberships"
    ADD CONSTRAINT "memberships_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships"
    ADD CONSTRAINT "memberships_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenants" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membership_roles"
    ADD CONSTRAINT "membership_roles_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "memberships" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances"
    ADD CONSTRAINT "attendances_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenants" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances"
    ADD CONSTRAINT "attendances_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "memberships" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices"
    ADD CONSTRAINT "invoices_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenants" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices"
    ADD CONSTRAINT "invoices_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "memberships" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice_items"
    ADD CONSTRAINT "invoice_items_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoices" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments"
    ADD CONSTRAINT "payments_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoices" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resources"
    ADD CONSTRAINT "resources_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenants" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings"
    ADD CONSTRAINT "bookings_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "resources" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings"
    ADD CONSTRAINT "bookings_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "memberships" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "metrics"
    ADD CONSTRAINT "metrics_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "memberships" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents"
    ADD CONSTRAINT "documents_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "memberships" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs"
    ADD CONSTRAINT "audit_logs_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenants" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs"
    ADD CONSTRAINT "audit_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
