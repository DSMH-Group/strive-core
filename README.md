# STRIVE APP - CORE API SPECIFICATION v1.0

**Architecture Stack:** NestJS, PostgreSQL (Relational + JSONB), Prisma/TypeORM  
**Auth Strategy:** Keycloak (Global Identity) + `X-Tenant-ID` (Local Data Isolation)  
**Target Market:** Sri Lanka & Global Membership-Driven Organizations

---

## 0. Architecture & Isolation Rules (The "Golden Rules")

1. **Horizontal Isolation:** EVERY endpoint (except Global Identity webhooks) REQUIRES the `X-Tenant-ID` header injected by the Next.js Edge Middleware.
2. **Vertical Isolation:** B2C endpoints MUST apply an intersection query on the DB level (`tenantId = X` AND `userId = Y`) using the validated JWT `sub` claim. *Never trust a userId passed in a request body or URL param.*
3. **RBAC Matrix:**
    - **`SYSTEM_ADMIN`**: Global control. Bypasses `X-Tenant-ID`.
    - **`ORG_ADMIN`**: Full tenant control. Bypasses intersection query within their tenant.
    - **`MANAGER`**: Operational B2B control.
    - **`TRAINER`**: Can read/write attendance and metrics strictly for assigned members.
    - **`MEMBER`**: B2C access. Strictly limited to intersection queries (own data only).

---

## 1. Global Identity
*Platform Level - No `X-Tenant-ID` required.*

| Method    | Endpoint                | Auth                  | Payload / Query                     | Description                                                                  |
|:----------|:------------------------|:----------------------|:------------------------------------|:-----------------------------------------------------------------------------|
| **POST**  | `/api/v1/users/webhook` | Basic Auth (Keycloak) | -                                   | Syncs newly registered Keycloak users to the local PostgreSQL `users` table. |
| **GET**   | `/api/v1/users/me`      | ANY valid JWT         | -                                   | Fetches the authenticated user's global profile.                             |
| **PATCH** | `/api/v1/users/me`      | ANY valid JWT         | `{ phone?: string, name?: string }` | Updates global contact details.                                              |

---

## 2. Tenant Management
*B2B Configuration.*

| Method    | Endpoint                     | Auth                     | Payload / Query                             | Description                                                                                      |
|:----------|:-----------------------------|:-------------------------|:--------------------------------------------|:-------------------------------------------------------------------------------------------------|
| **POST**  | `/api/v1/tenants`            | `SYSTEM_ADMIN`           | `{ name, subdomain, ownerId }`              | Provisions a new gym environment.                                                                |
| **GET**   | `/api/v1/tenants/{tenantId}` | Public (SSR via Next.js) | -                                           | Returns public config (theme CSS variables, logo URL).                                           |
| **PATCH** | `/api/v1/tenants`            | `ORG_ADMIN`              | `{ themeConfig?, taxRules?, gatewayKeys? }` | Updates tax rules (VAT/SSCL) and local gateway (PayHere) configurations. Requires `X-Tenant-ID`. |

---

## 3. Membership & Lifecycle
*Tenant Scoped.*

| Method    | Endpoint                          | Auth                              | Payload / Query                                  | Description                                                               |
|:----------|:----------------------------------|:----------------------------------|:-------------------------------------------------|:--------------------------------------------------------------------------|
| **POST**  | `/api/v1/members`                 | `ORG_ADMIN`, `MANAGER`            | `{ userId: string, initialRole: Enum }`          | Links a global user to the current tenant.                                |
| **GET**   | `/api/v1/members`                 | `ORG_ADMIN`, `MANAGER`, `TRAINER` | `?status=ACTIVE&role=MEMBER`                     | Lists members. Trainers only see members assigned to their roster.        |
| **GET**   | `/api/v1/members/me`              | `MEMBER`                          | -                                                | Returns the active user's specific membership status for the current gym. |
| **GET**   | `/api/v1/members/{id}`            | `ORG_ADMIN`, `MANAGER`, `TRAINER` | -                                                | Fetches a specific member's tenant profile.                               |
| **PATCH** | `/api/v1/members/{id}`            | `ORG_ADMIN`, `MANAGER`            | `{ role?: Enum, status?: Enum }`                 | Updates tenant status or assigns internal roles.                          |
| **POST**  | `/api/v1/members/{id}/transition` | `SYSTEM (CRON)`, `ORG_ADMIN`      | `{ targetState: 'SUSPENDED' \| 'GRACE_PERIOD' }` | State machine trigger for payment failures or manual overrides.           |

---

## 4. Attendance & Ingress
*Tenant Scoped.*

| Method    | Endpoint                   | Auth                                                  | Payload / Query                       | Description                                                         |
|:----------|:---------------------------|:------------------------------------------------------|:--------------------------------------|:--------------------------------------------------------------------|
| **POST**  | `/api/v1/attendances`      | `ORG_ADMIN`, `MANAGER`, `TRAINER`, `IoT_DEVICE_TOKEN` | `{ memberId?, rfidTag?, authMethod }` | Creates a check-in record. Designed to handle raw IoT scanner data. |
| **GET**   | `/api/v1/attendances`      | `ORG_ADMIN`, `MANAGER`                                | `?startDate=ISO&endDate=ISO`          | Aggregated historical data for staffing heatmaps.                   |
| **PATCH** | `/api/v1/attendances/{id}` | `ORG_ADMIN`, `MANAGER`, `TRAINER`, `IoT_DEVICE_TOKEN` | `{ checkoutTime: ISO_String }`        | Appends a checkout timestamp to calculate visit duration.           |

---

## 5. Billing & Ledger
*Tenant Scoped.*

| Method   | Endpoint                   | Auth                                         | Payload / Query                                                | Description                                                                        |
|:---------|:---------------------------|:---------------------------------------------|:---------------------------------------------------------------|:-----------------------------------------------------------------------------------|
| **POST** | `/api/v1/invoices`         | `ORG_ADMIN`, `MANAGER`, `MEMBER`             | `{ memberId, lineItems: [], type: 'SUBSCRIPTION' \| 'TOKEN' }` | Generates a payable invoice for time-based subs or consumable session tokens.      |
| **GET**  | `/api/v1/invoices`         | `ORG_ADMIN`, `MANAGER` (All), `MEMBER` (Own) | -                                                              | Paginated invoice history.                                                         |
| **POST** | `/api/v1/payments/webhook` | Gateway Signature Validation                 | Gateway specific form-data                                     | Unauthenticated webhook receiver for transaction statuses. **MUST BE IDEMPOTENT**. |
| **POST** | `/api/v1/payments/manual`  | `ORG_ADMIN`, `MANAGER`                       | `{ invoiceId, method: 'CASH' \| 'BANK_TRANSFER', amount }`     | Manually reconciles offline payments into the ledger.                              |
| **GET**  | `/api/v1/ledger`           | `ORG_ADMIN`                                  | -                                                              | Immutable financial ledger for auditing and localized tax computation.             |

---

## 6. Resources & Scheduling
*Tenant Scoped.*

| Method     | Endpoint                | Auth                                        | Payload / Query                                                    | Description                                                                      |
|:-----------|:------------------------|:--------------------------------------------|:-------------------------------------------------------------------|:---------------------------------------------------------------------------------|
| **POST**   | `/api/v1/resources`     | `ORG_ADMIN`, `MANAGER`                      | `{ name, type: 'PHYSICAL' \| 'HUMAN', capacity, linkedMemberId? }` | Creates a schedulable entity (e.g., "Lane 1" or "Trainer John").                 |
| **GET**    | `/api/v1/resources`     | ANY valid Tenant JWT                        | -                                                                  | Lists resources and current availability.                                        |
| **POST**   | `/api/v1/bookings`      | ANY valid Tenant JWT                        | `{ resourceId, memberId, startTime, endTime }`                     | Reserves a resource slot. (Members book for self, Managers can book for anyone). |
| **DELETE** | `/api/v1/bookings/{id}` | `ORG_ADMIN`, `MANAGER`, `MEMBER` (If owner) | -                                                                  | Cancels a reservation.                                                           |

---

## 7. Extensible Metrics & Health
*Tenant Scoped.*

| Method   | Endpoint              | Auth                | Payload / Query                                                    | Description                                                                 |
|:---------|:----------------------|:--------------------|:-------------------------------------------------------------------|:----------------------------------------------------------------------------|
| **POST** | `/api/v1/metrics`     | `TRAINER`, `MEMBER` | `{ metricType: string, data: JSONB }`                              | Logs domain-specific stats (e.g., target scores for archery, 1RM for gyms). |
| **GET**  | `/api/v1/metrics`     | `TRAINER`, `MEMBER` | `?metricType=string`                                               | Fetches chronological metrics for Next.js charting.                         |
| **POST** | `/api/v1/health/sync` | `MEMBER`            | `{ provider: 'APPLE_HEALTH' \| 'HEALTH_CONNECT', dataPoints: [] }` | Bulk ingress endpoint for syncing mobile wearable data.                     |

---

## 8. Storage & Documents
*Tenant Scoped.*

| Method   | Endpoint                   | Auth                                   | Payload / Query                                         | Description                                                           |
|:---------|:---------------------------|:---------------------------------------|:--------------------------------------------------------|:----------------------------------------------------------------------|
| **POST** | `/api/v1/files/upload-url` | ANY valid Tenant JWT                   | `{ fileName, fileType, context: 'WAIVER' \| 'AVATAR' }` | Returns a Pre-signed S3 URL to allow direct client-to-bucket uploads. |
| **GET**  | `/api/v1/files`            | `ORG_ADMIN`, `MANAGER`, `MEMBER` (Own) | -                                                       | Lists documents associated with a member.                             |

---

## 9. Communications & Auditing
*Tenant Scoped.*

| Method   | Endpoint                        | Auth                        | Payload / Query                                                   | Description                                                               |
|:---------|:--------------------------------|:----------------------------|:------------------------------------------------------------------|:--------------------------------------------------------------------------|
| **POST** | `/api/v1/messages/broadcast`    | `ORG_ADMIN`, `MANAGER`      | `{ audienceFilter: JSON, channel: 'SMS' \| 'EMAIL', templateId }` | Dispatches bulk SMS (Text.lk) or Email (Resend).                          |
| **GET**  | `/api/v1/analytics/leaderboard` | ANY valid Tenant JWT        | `?metricType=string`                                              | Returns ranked members based on specific JSONB metrics.                   |
| **GET**  | `/api/v1/audits`                | `ORG_ADMIN`, `SYSTEM_ADMIN` | -                                                                 | Read-only log of critical state changes (role upgrades, manual payments). |