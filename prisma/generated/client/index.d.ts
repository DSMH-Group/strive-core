/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tenant
 *
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Membership
 *
 */
export type Membership = $Result.DefaultSelection<Prisma.$MembershipPayload>
/**
 * Model MembershipRole
 *
 */
export type MembershipRole = $Result.DefaultSelection<Prisma.$MembershipRolePayload>
/**
 * Model Attendance
 *
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Invoice
 *
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model InvoiceItem
 *
 */
export type InvoiceItem = $Result.DefaultSelection<Prisma.$InvoiceItemPayload>
/**
 * Model Payment
 *
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Resource
 *
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model Booking
 *
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Metric
 *
 */
export type Metric = $Result.DefaultSelection<Prisma.$MetricPayload>
/**
 * Model Document
 *
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model AuditLog
 *
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
    export const Role: {
        ORG_ADMIN: 'ORG_ADMIN',
        MANAGER: 'MANAGER',
        TRAINER: 'TRAINER',
        MEMBER: 'MEMBER'
    };

    export type Role = (typeof Role)[keyof typeof Role]


    export const MembershipStatus: {
        PENDING: 'PENDING',
        ACTIVE: 'ACTIVE',
        GRACE_PERIOD: 'GRACE_PERIOD',
        SUSPENDED: 'SUSPENDED'
    };

    export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus]


    export const InvoiceType: {
        SUBSCRIPTION: 'SUBSCRIPTION',
        TOKEN: 'TOKEN'
    };

    export type InvoiceType = (typeof InvoiceType)[keyof typeof InvoiceType]


    export const InvoiceStatus: {
        DRAFT: 'DRAFT',
        OPEN: 'OPEN',
        PAID: 'PAID',
        VOID: 'VOID'
    };

    export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


    export const PaymentMethod: {
        CASH: 'CASH',
        BANK_TRANSFER: 'BANK_TRANSFER',
        PAYHERE: 'PAYHERE',
        DIRECTPAY: 'DIRECTPAY'
    };

    export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


    export const PaymentStatus: {
        PENDING: 'PENDING',
        SUCCESS: 'SUCCESS',
        FAILED: 'FAILED'
    };

    export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


    export const ResourceType: {
        PHYSICAL: 'PHYSICAL',
        HUMAN: 'HUMAN'
    };

    export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type MembershipStatus = $Enums.MembershipStatus

export const MembershipStatus: typeof $Enums.MembershipStatus

export type InvoiceType = $Enums.InvoiceType

export const InvoiceType: typeof $Enums.InvoiceType

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type ResourceType = $Enums.ResourceType

export const ResourceType: typeof $Enums.ResourceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
    ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
    const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
        extArgs: ExtArgs
    }>>

    /**
     * ##  Prisma Client ʲˢ
     *
     * Type-safe database client for TypeScript & Node.js
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * })
     * // Fetch zero or more Users
     * const users = await prisma.user.findMany()
     * ```
     *
     *
     * Read more in our [docs](https://pris.ly/d/client).
     */

    constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);

    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Users
     * const users = await prisma.user.findMany()
     * ```
     */
    get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tenants
     * const tenants = await prisma.tenant.findMany()
     * ```
     */
    get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.membership`: Exposes CRUD operations for the **Membership** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Memberships
     * const memberships = await prisma.membership.findMany()
     * ```
     */
    get membership(): Prisma.MembershipDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.membershipRole`: Exposes CRUD operations for the **MembershipRole** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more MembershipRoles
     * const membershipRoles = await prisma.membershipRole.findMany()
     * ```
     */
    get membershipRole(): Prisma.MembershipRoleDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Attendances
     * const attendances = await prisma.attendance.findMany()
     * ```
     */
    get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Invoices
     * const invoices = await prisma.invoice.findMany()
     * ```
     */
    get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.invoiceItem`: Exposes CRUD operations for the **InvoiceItem** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany()
     * ```
     */
    get invoiceItem(): Prisma.InvoiceItemDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Payments
     * const payments = await prisma.payment.findMany()
     * ```
     */
    get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Resources
     * const resources = await prisma.resource.findMany()
     * ```
     */
    get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Bookings
     * const bookings = await prisma.booking.findMany()
     * ```
     */
    get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.metric`: Exposes CRUD operations for the **Metric** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Metrics
     * const metrics = await prisma.metric.findMany()
     * ```
     */
    get metric(): Prisma.MetricDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.document`: Exposes CRUD operations for the **Document** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Documents
     * const documents = await prisma.document.findMany()
     * ```
     */
    get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * ```
     */
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

    $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

    /**
     * Connect with the database
     */
    $connect(): $Utils.JsPromise<void>;

    /**
     * Disconnect from the database
     */
    $disconnect(): $Utils.JsPromise<void>;

    /**
     * Executes a prepared raw query and returns the number of affected rows.
     * @example
     * ```
     * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number,
        timeout?: number,
        isolationLevel?: Prisma.TransactionIsolationLevel
    }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: {
        maxWait?: number,
        timeout?: number,
        isolationLevel?: Prisma.TransactionIsolationLevel
    }): $Utils.JsPromise<R>
}

export namespace Prisma {
    export import DMMF = runtime.DMMF;
    /**
     * Validator
     */
    export import validator = runtime.Public.validator;
    /**
     * Prisma Errors
     */
    export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
    export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
    export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
    export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
    export import PrismaClientValidationError = runtime.PrismaClientValidationError;
    /**
     * Re-export of sql-template-tag
     */
    export import sql = runtime.sqltag;
    export import empty = runtime.empty;
    export import join = runtime.join;
    export import raw = runtime.raw;
    export import Sql = runtime.Sql;
    /**
     * Decimal.js
     */
    export import Decimal = runtime.Decimal;
    /**
     * Extensions
     */
    export import Extension = $Extensions.UserArgs;
    export import getExtensionContext = runtime.Extensions.getExtensionContext;
    export import Args = $Public.Args;
    export import Payload = $Public.Payload;
    export import Result = $Public.Result;
    export import Exact = $Public.Exact;
    export import Bytes = runtime.Bytes;
    export import JsonObject = runtime.JsonObject;
    export import JsonArray = runtime.JsonArray;
    export import JsonValue = runtime.JsonValue;
    export import InputJsonObject = runtime.InputJsonObject;
    export import InputJsonArray = runtime.InputJsonArray;
    export import InputJsonValue = runtime.InputJsonValue;

    export type PrismaPromise<T> = $Public.PrismaPromise<T>

    export type DecimalJsLike = runtime.DecimalJsLike


    /**
     * Prisma Client JS version: 7.8.0
     * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
     */
    export type PrismaVersion = {
        client: string
        engine: string
    }

    export const prismaVersion: PrismaVersion


    /**
     * Types of the values used to represent different kinds of `null` values when working with JSON fields.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    namespace NullTypes {
        /**
         * Type of `Prisma.DbNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class DbNull {
            private DbNull: never

            private constructor()
        }

        /**
         * Type of `Prisma.JsonNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class JsonNull {
            private JsonNull: never

            private constructor()
        }

        /**
         * Type of `Prisma.AnyNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class AnyNull {
            private AnyNull: never

            private constructor()
        }
    }

    /**
     * Helper for filtering JSON entries that have `null` on the database (empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const DbNull: NullTypes.DbNull

    /**
     * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const JsonNull: NullTypes.JsonNull

    /**
     * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const AnyNull: NullTypes.AnyNull

    type SelectAndInclude = {
        select: any
        include: any
    }

    type SelectAndOmit = {
        select: any
        omit: any
    }

    /**
     * Get the type of the value, that the Promise holds.
     */
    export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

    /**
     * Get the return type of a function which returns a Promise.
     */
    export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Prisma__Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };


    export type Enumerable<T> = T | Array<T>;

    export type RequiredKeys<T> = {
        [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
    }[keyof T]

    export type TruthyKeys<T> = keyof {
        [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
    }

    export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

    /**
     * Subset
     * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
     */
    export type Subset<T, U> = {
        [key in keyof T]: key extends keyof U ? T[key] : never;
    };

    /**
     * SelectSubset
     * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
     * Additionally, it validates, if both select and include are present. If the case, it errors.
     */
    export type SelectSubset<T, U> = {
        [key in keyof T]: key extends keyof U ? T[key] : never
    } &
        (T extends SelectAndInclude
            ? 'Please either choose `select` or `include`.'
            : T extends SelectAndOmit
                ? 'Please either choose `select` or `omit`.'
                : {})

    /**
     * Subset + Intersection
     * @desc From `T` pick properties that exist in `U` and intersect `K`
     */
    export type SubsetIntersection<T, U, K> = {
        [key in keyof T]: key extends keyof U ? T[key] : never
    } &
        K

    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

    /**
     * XOR is needed to have a real mutually exclusive union type
     * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
     */
    type XOR<T, U> =
        T extends object ?
            U extends object ?
                (Without<T, U> & U) | (Without<U, T> & T)
                : U : T


    /**
     * Is T a Record?
     */
    type IsObject<T extends any> = T extends Array<any>
        ? False
        : T extends Date
            ? False
            : T extends Uint8Array
                ? False
                : T extends BigInt
                    ? False
                    : T extends object
                        ? True
                        : False


    /**
     * If it's T[], return T
     */
    export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

    /**
     * From ts-toolbelt
     */

    type __Either<O extends object, K extends Key> = Omit<O, K> &
        {
            // Merge all but K
            [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
        }[K]

    type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

    type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

    type _Either<
        O extends object,
        K extends Key,
        strict extends Boolean
    > = {
        1: EitherStrict<O, K>
        0: EitherLoose<O, K>
    }[strict]

    type Either<
        O extends object,
        K extends Key,
        strict extends Boolean = 1
    > = O extends unknown ? _Either<O, K, strict> : never

    export type Union = any

    type PatchUndefined<O extends object, O1 extends object> = {
        [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
    } & {}

    /** Helper Types for "Merge" **/
    export type IntersectOf<U extends Union> = (
        U extends unknown ? (k: U) => void : never
        ) extends (k: infer I) => void
        ? I
        : never

    export type Overwrite<O extends object, O1 extends object> = {
        [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
    } & {};

    type _Merge<U extends object> = IntersectOf<Overwrite<U, {
        [K in keyof U]-?: At<U, K>;
    }>>;

    type Key = string | number | symbol;
    type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
    type AtStrict<O extends object, K extends Key> = O[K & keyof O];
    type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
    export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
        1: AtStrict<O, K>;
        0: AtLoose<O, K>;
    }[strict];

    export type ComputeRaw<A extends any> = A extends Function ? A : {
        [K in keyof A]: A[K];
    } & {};

    export type OptionalFlat<O> = {
        [K in keyof O]?: O[K];
    } & {};

    type _Record<K extends keyof any, T> = {
        [P in K]: T;
    };

    // cause typescript not to expand types and preserve names
    type NoExpand<T> = T extends unknown ? T : never;

    // this type assumes the passed object is entirely optional
    type AtLeast<O extends object, K extends string> = NoExpand<
        O extends unknown
            ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
            | { [P in keyof O as P extends K ? P : never]-?: O[P] } & O
            : never>;

    type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

    export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
    /** End Helper Types for "Merge" **/

    export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

    /**
     A [[Boolean]]
     */
    export type Boolean = True | False

    // /**
    // 1
    // */
    export type True = 1

    /**
     0
     */
    export type False = 0

    export type Not<B extends Boolean> = {
        0: 1
        1: 0
    }[B]

    export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
        ? 0 // anything `never` is false
        : A1 extends A2
            ? 1
            : 0

    export type Has<U extends Union, U1 extends Union> = Not<
        Extends<Exclude<U1, U>, U1>
    >

    export type Or<B1 extends Boolean, B2 extends Boolean> = {
        0: {
            0: 0
            1: 1
        }
        1: {
            0: 1
            1: 1
        }
    }[B1][B2]

    export type Keys<U extends Union> = U extends unknown ? keyof U : never

    type Cast<A, B> = A extends B ? A : B;

    export const type: unique symbol;


    /**
     * Used by group by
     */

    export type GetScalarType<T, O> = O extends object ? {
        [P in keyof T]: P extends keyof O
            ? O[P]
            : never
    } : never

    type FieldPaths<
        T,
        U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
    > = IsObject<T> extends True ? U : T

    type GetHavingFields<T> = {
        [K in keyof T]: Or<
            Or<Extends<'OR', K>, Extends<'AND', K>>,
            Extends<'NOT', K>
        > extends True
            ? // infer is only needed to not hit TS limit
            // based on the brilliant idea of Pierre-Antoine Mills
            // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
            T[K] extends infer TK
                ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
                : never
            : {} extends FieldPaths<T[K]>
                ? never
                : K
    }[keyof T]

    /**
     * Convert tuple to union
     */
    type _TupleToUnion<T> = T extends (infer E)[] ? E : never
    type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
    type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

    /**
     * Like `Pick`, but additionally can also accept an array of keys
     */
    type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

    /**
     * Exclude all keys with underscores
     */
    type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


    export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

    type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


    export const ModelName: {
        User: 'User',
        Tenant: 'Tenant',
        Membership: 'Membership',
        MembershipRole: 'MembershipRole',
        Attendance: 'Attendance',
        Invoice: 'Invoice',
        InvoiceItem: 'InvoiceItem',
        Payment: 'Payment',
        Resource: 'Resource',
        Booking: 'Booking',
        Metric: 'Metric',
        Document: 'Document',
        AuditLog: 'AuditLog'
    };

    export type ModelName = (typeof ModelName)[keyof typeof ModelName]


    interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{
        extArgs: $Extensions.InternalArgs
    }, $Utils.Record<string, any>> {
        returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends {
            omit: infer OmitOptions
        } ? OmitOptions : {}>
    }

    export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
        globalOmitOptions: {
            omit: GlobalOmitOptions
        }
        meta: {
            modelProps: "user" | "tenant" | "membership" | "membershipRole" | "attendance" | "invoice" | "invoiceItem" | "payment" | "resource" | "booking" | "metric" | "document" | "auditLog"
            txIsolationLevel: Prisma.TransactionIsolationLevel
        }
        model: {
            User: {
                payload: Prisma.$UserPayload<ExtArgs>
                fields: Prisma.UserFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.UserFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>
                    }
                    findFirst: {
                        args: Prisma.UserFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>
                    }
                    findMany: {
                        args: Prisma.UserFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
                    }
                    create: {
                        args: Prisma.UserCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>
                    }
                    createMany: {
                        args: Prisma.UserCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
                    }
                    delete: {
                        args: Prisma.UserDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>
                    }
                    update: {
                        args: Prisma.UserUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>
                    }
                    deleteMany: {
                        args: Prisma.UserDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.UserUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
                    }
                    upsert: {
                        args: Prisma.UserUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>
                    }
                    aggregate: {
                        args: Prisma.UserAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateUser>
                    }
                    groupBy: {
                        args: Prisma.UserGroupByArgs<ExtArgs>
                        result: $Utils.Optional<UserGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.UserCountArgs<ExtArgs>
                        result: $Utils.Optional<UserCountAggregateOutputType> | number
                    }
                }
            }
            Tenant: {
                payload: Prisma.$TenantPayload<ExtArgs>
                fields: Prisma.TenantFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.TenantFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TenantPayload>
                    }
                    findFirst: {
                        args: Prisma.TenantFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TenantPayload>
                    }
                    findMany: {
                        args: Prisma.TenantFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
                    }
                    create: {
                        args: Prisma.TenantCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TenantPayload>
                    }
                    createMany: {
                        args: Prisma.TenantCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
                    }
                    delete: {
                        args: Prisma.TenantDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TenantPayload>
                    }
                    update: {
                        args: Prisma.TenantUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TenantPayload>
                    }
                    deleteMany: {
                        args: Prisma.TenantDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.TenantUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
                    }
                    upsert: {
                        args: Prisma.TenantUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TenantPayload>
                    }
                    aggregate: {
                        args: Prisma.TenantAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTenant>
                    }
                    groupBy: {
                        args: Prisma.TenantGroupByArgs<ExtArgs>
                        result: $Utils.Optional<TenantGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.TenantCountArgs<ExtArgs>
                        result: $Utils.Optional<TenantCountAggregateOutputType> | number
                    }
                }
            }
            Membership: {
                payload: Prisma.$MembershipPayload<ExtArgs>
                fields: Prisma.MembershipFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.MembershipFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.MembershipFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
                    }
                    findFirst: {
                        args: Prisma.MembershipFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.MembershipFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
                    }
                    findMany: {
                        args: Prisma.MembershipFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
                    }
                    create: {
                        args: Prisma.MembershipCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
                    }
                    createMany: {
                        args: Prisma.MembershipCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.MembershipCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
                    }
                    delete: {
                        args: Prisma.MembershipDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
                    }
                    update: {
                        args: Prisma.MembershipUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
                    }
                    deleteMany: {
                        args: Prisma.MembershipDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.MembershipUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.MembershipUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
                    }
                    upsert: {
                        args: Prisma.MembershipUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
                    }
                    aggregate: {
                        args: Prisma.MembershipAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateMembership>
                    }
                    groupBy: {
                        args: Prisma.MembershipGroupByArgs<ExtArgs>
                        result: $Utils.Optional<MembershipGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.MembershipCountArgs<ExtArgs>
                        result: $Utils.Optional<MembershipCountAggregateOutputType> | number
                    }
                }
            }
            MembershipRole: {
                payload: Prisma.$MembershipRolePayload<ExtArgs>
                fields: Prisma.MembershipRoleFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.MembershipRoleFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipRolePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.MembershipRoleFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipRolePayload>
                    }
                    findFirst: {
                        args: Prisma.MembershipRoleFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipRolePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.MembershipRoleFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipRolePayload>
                    }
                    findMany: {
                        args: Prisma.MembershipRoleFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipRolePayload>[]
                    }
                    create: {
                        args: Prisma.MembershipRoleCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipRolePayload>
                    }
                    createMany: {
                        args: Prisma.MembershipRoleCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.MembershipRoleCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipRolePayload>[]
                    }
                    delete: {
                        args: Prisma.MembershipRoleDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipRolePayload>
                    }
                    update: {
                        args: Prisma.MembershipRoleUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipRolePayload>
                    }
                    deleteMany: {
                        args: Prisma.MembershipRoleDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.MembershipRoleUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.MembershipRoleUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipRolePayload>[]
                    }
                    upsert: {
                        args: Prisma.MembershipRoleUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MembershipRolePayload>
                    }
                    aggregate: {
                        args: Prisma.MembershipRoleAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateMembershipRole>
                    }
                    groupBy: {
                        args: Prisma.MembershipRoleGroupByArgs<ExtArgs>
                        result: $Utils.Optional<MembershipRoleGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.MembershipRoleCountArgs<ExtArgs>
                        result: $Utils.Optional<MembershipRoleCountAggregateOutputType> | number
                    }
                }
            }
            Attendance: {
                payload: Prisma.$AttendancePayload<ExtArgs>
                fields: Prisma.AttendanceFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
                    }
                    findFirst: {
                        args: Prisma.AttendanceFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
                    }
                    findMany: {
                        args: Prisma.AttendanceFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
                    }
                    create: {
                        args: Prisma.AttendanceCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
                    }
                    createMany: {
                        args: Prisma.AttendanceCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
                    }
                    delete: {
                        args: Prisma.AttendanceDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
                    }
                    update: {
                        args: Prisma.AttendanceUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
                    }
                    deleteMany: {
                        args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
                    }
                    upsert: {
                        args: Prisma.AttendanceUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
                    }
                    aggregate: {
                        args: Prisma.AttendanceAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateAttendance>
                    }
                    groupBy: {
                        args: Prisma.AttendanceGroupByArgs<ExtArgs>
                        result: $Utils.Optional<AttendanceGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.AttendanceCountArgs<ExtArgs>
                        result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
                    }
                }
            }
            Invoice: {
                payload: Prisma.$InvoicePayload<ExtArgs>
                fields: Prisma.InvoiceFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
                    }
                    findFirst: {
                        args: Prisma.InvoiceFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
                    }
                    findMany: {
                        args: Prisma.InvoiceFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
                    }
                    create: {
                        args: Prisma.InvoiceCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
                    }
                    createMany: {
                        args: Prisma.InvoiceCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
                    }
                    delete: {
                        args: Prisma.InvoiceDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
                    }
                    update: {
                        args: Prisma.InvoiceUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
                    }
                    deleteMany: {
                        args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
                    }
                    upsert: {
                        args: Prisma.InvoiceUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
                    }
                    aggregate: {
                        args: Prisma.InvoiceAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateInvoice>
                    }
                    groupBy: {
                        args: Prisma.InvoiceGroupByArgs<ExtArgs>
                        result: $Utils.Optional<InvoiceGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.InvoiceCountArgs<ExtArgs>
                        result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
                    }
                }
            }
            InvoiceItem: {
                payload: Prisma.$InvoiceItemPayload<ExtArgs>
                fields: Prisma.InvoiceItemFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.InvoiceItemFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.InvoiceItemFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
                    }
                    findFirst: {
                        args: Prisma.InvoiceItemFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.InvoiceItemFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
                    }
                    findMany: {
                        args: Prisma.InvoiceItemFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
                    }
                    create: {
                        args: Prisma.InvoiceItemCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
                    }
                    createMany: {
                        args: Prisma.InvoiceItemCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.InvoiceItemCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
                    }
                    delete: {
                        args: Prisma.InvoiceItemDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
                    }
                    update: {
                        args: Prisma.InvoiceItemUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
                    }
                    deleteMany: {
                        args: Prisma.InvoiceItemDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.InvoiceItemUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.InvoiceItemUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
                    }
                    upsert: {
                        args: Prisma.InvoiceItemUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
                    }
                    aggregate: {
                        args: Prisma.InvoiceItemAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateInvoiceItem>
                    }
                    groupBy: {
                        args: Prisma.InvoiceItemGroupByArgs<ExtArgs>
                        result: $Utils.Optional<InvoiceItemGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.InvoiceItemCountArgs<ExtArgs>
                        result: $Utils.Optional<InvoiceItemCountAggregateOutputType> | number
                    }
                }
            }
            Payment: {
                payload: Prisma.$PaymentPayload<ExtArgs>
                fields: Prisma.PaymentFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.PaymentFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
                    }
                    findFirst: {
                        args: Prisma.PaymentFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
                    }
                    findMany: {
                        args: Prisma.PaymentFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
                    }
                    create: {
                        args: Prisma.PaymentCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
                    }
                    createMany: {
                        args: Prisma.PaymentCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
                    }
                    delete: {
                        args: Prisma.PaymentDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
                    }
                    update: {
                        args: Prisma.PaymentUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
                    }
                    deleteMany: {
                        args: Prisma.PaymentDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.PaymentUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
                    }
                    upsert: {
                        args: Prisma.PaymentUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
                    }
                    aggregate: {
                        args: Prisma.PaymentAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregatePayment>
                    }
                    groupBy: {
                        args: Prisma.PaymentGroupByArgs<ExtArgs>
                        result: $Utils.Optional<PaymentGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.PaymentCountArgs<ExtArgs>
                        result: $Utils.Optional<PaymentCountAggregateOutputType> | number
                    }
                }
            }
            Resource: {
                payload: Prisma.$ResourcePayload<ExtArgs>
                fields: Prisma.ResourceFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.ResourceFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
                    }
                    findFirst: {
                        args: Prisma.ResourceFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
                    }
                    findMany: {
                        args: Prisma.ResourceFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
                    }
                    create: {
                        args: Prisma.ResourceCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
                    }
                    createMany: {
                        args: Prisma.ResourceCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
                    }
                    delete: {
                        args: Prisma.ResourceDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
                    }
                    update: {
                        args: Prisma.ResourceUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
                    }
                    deleteMany: {
                        args: Prisma.ResourceDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.ResourceUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.ResourceUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
                    }
                    upsert: {
                        args: Prisma.ResourceUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
                    }
                    aggregate: {
                        args: Prisma.ResourceAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateResource>
                    }
                    groupBy: {
                        args: Prisma.ResourceGroupByArgs<ExtArgs>
                        result: $Utils.Optional<ResourceGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.ResourceCountArgs<ExtArgs>
                        result: $Utils.Optional<ResourceCountAggregateOutputType> | number
                    }
                }
            }
            Booking: {
                payload: Prisma.$BookingPayload<ExtArgs>
                fields: Prisma.BookingFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.BookingFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$BookingPayload>
                    }
                    findFirst: {
                        args: Prisma.BookingFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$BookingPayload>
                    }
                    findMany: {
                        args: Prisma.BookingFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
                    }
                    create: {
                        args: Prisma.BookingCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$BookingPayload>
                    }
                    createMany: {
                        args: Prisma.BookingCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
                    }
                    delete: {
                        args: Prisma.BookingDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$BookingPayload>
                    }
                    update: {
                        args: Prisma.BookingUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$BookingPayload>
                    }
                    deleteMany: {
                        args: Prisma.BookingDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.BookingUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
                    }
                    upsert: {
                        args: Prisma.BookingUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$BookingPayload>
                    }
                    aggregate: {
                        args: Prisma.BookingAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateBooking>
                    }
                    groupBy: {
                        args: Prisma.BookingGroupByArgs<ExtArgs>
                        result: $Utils.Optional<BookingGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.BookingCountArgs<ExtArgs>
                        result: $Utils.Optional<BookingCountAggregateOutputType> | number
                    }
                }
            }
            Metric: {
                payload: Prisma.$MetricPayload<ExtArgs>
                fields: Prisma.MetricFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.MetricFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.MetricFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MetricPayload>
                    }
                    findFirst: {
                        args: Prisma.MetricFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.MetricFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MetricPayload>
                    }
                    findMany: {
                        args: Prisma.MetricFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
                    }
                    create: {
                        args: Prisma.MetricCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MetricPayload>
                    }
                    createMany: {
                        args: Prisma.MetricCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.MetricCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
                    }
                    delete: {
                        args: Prisma.MetricDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MetricPayload>
                    }
                    update: {
                        args: Prisma.MetricUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MetricPayload>
                    }
                    deleteMany: {
                        args: Prisma.MetricDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.MetricUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.MetricUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
                    }
                    upsert: {
                        args: Prisma.MetricUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$MetricPayload>
                    }
                    aggregate: {
                        args: Prisma.MetricAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateMetric>
                    }
                    groupBy: {
                        args: Prisma.MetricGroupByArgs<ExtArgs>
                        result: $Utils.Optional<MetricGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.MetricCountArgs<ExtArgs>
                        result: $Utils.Optional<MetricCountAggregateOutputType> | number
                    }
                }
            }
            Document: {
                payload: Prisma.$DocumentPayload<ExtArgs>
                fields: Prisma.DocumentFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.DocumentFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
                    }
                    findFirst: {
                        args: Prisma.DocumentFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
                    }
                    findMany: {
                        args: Prisma.DocumentFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
                    }
                    create: {
                        args: Prisma.DocumentCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
                    }
                    createMany: {
                        args: Prisma.DocumentCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
                    }
                    delete: {
                        args: Prisma.DocumentDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
                    }
                    update: {
                        args: Prisma.DocumentUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
                    }
                    deleteMany: {
                        args: Prisma.DocumentDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.DocumentUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
                    }
                    upsert: {
                        args: Prisma.DocumentUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
                    }
                    aggregate: {
                        args: Prisma.DocumentAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateDocument>
                    }
                    groupBy: {
                        args: Prisma.DocumentGroupByArgs<ExtArgs>
                        result: $Utils.Optional<DocumentGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.DocumentCountArgs<ExtArgs>
                        result: $Utils.Optional<DocumentCountAggregateOutputType> | number
                    }
                }
            }
            AuditLog: {
                payload: Prisma.$AuditLogPayload<ExtArgs>
                fields: Prisma.AuditLogFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
                    }
                    findFirst: {
                        args: Prisma.AuditLogFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
                    }
                    findMany: {
                        args: Prisma.AuditLogFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
                    }
                    create: {
                        args: Prisma.AuditLogCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
                    }
                    createMany: {
                        args: Prisma.AuditLogCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    createManyAndReturn: {
                        args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
                    }
                    delete: {
                        args: Prisma.AuditLogDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
                    }
                    update: {
                        args: Prisma.AuditLogUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
                    }
                    deleteMany: {
                        args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateManyAndReturn: {
                        args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
                    }
                    upsert: {
                        args: Prisma.AuditLogUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
                    }
                    aggregate: {
                        args: Prisma.AuditLogAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateAuditLog>
                    }
                    groupBy: {
                        args: Prisma.AuditLogGroupByArgs<ExtArgs>
                        result: $Utils.Optional<AuditLogGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.AuditLogCountArgs<ExtArgs>
                        result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
                    }
                }
            }
        }
    } & {
        other: {
            payload: any
            operations: {
                $executeRaw: {
                    args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
                    result: any
                }
                $executeRawUnsafe: {
                    args: [query: string, ...values: any[]],
                    result: any
                }
                $queryRaw: {
                    args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
                    result: any
                }
                $queryRawUnsafe: {
                    args: [query: string, ...values: any[]],
                    result: any
                }
            }
        }
    }
    export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
    export type DefaultPrismaClient = PrismaClient
    export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

    export interface PrismaClientOptions {
        /**
         * @default "colorless"
         */
        errorFormat?: ErrorFormat
        /**
         * @example
         * ```
         * // Shorthand for `emit: 'stdout'`
         * log: ['query', 'info', 'warn', 'error']
         *
         * // Emit as events only
         * log: [
         *   { emit: 'event', level: 'query' },
         *   { emit: 'event', level: 'info' },
         *   { emit: 'event', level: 'warn' }
         *   { emit: 'event', level: 'error' }
         * ]
         *
         * / Emit as events and log to stdout
         * og: [
         *  { emit: 'stdout', level: 'query' },
         *  { emit: 'stdout', level: 'info' },
         *  { emit: 'stdout', level: 'warn' }
         *  { emit: 'stdout', level: 'error' }
         *
         * ```
         * Read more in our [docs](https://pris.ly/d/logging).
         */
        log?: (LogLevel | LogDefinition)[]
        /**
         * The default values for transactionOptions
         * maxWait ?= 2000
         * timeout ?= 5000
         */
        transactionOptions?: {
            maxWait?: number
            timeout?: number
            isolationLevel?: Prisma.TransactionIsolationLevel
        }
        /**
         * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
         */
        adapter?: runtime.SqlDriverAdapterFactory
        /**
         * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
         */
        accelerateUrl?: string
        /**
         * Global configuration for omitting model fields by default.
         *
         * @example
         * ```
         * const prisma = new PrismaClient({
         *   omit: {
         *     user: {
         *       password: true
         *     }
         *   }
         * })
         * ```
         */
        omit?: Prisma.GlobalOmitConfig
        /**
         * SQL commenter plugins that add metadata to SQL queries as comments.
         * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
         *
         * @example
         * ```
         * const prisma = new PrismaClient({
         *   adapter,
         *   comments: [
         *     traceContext(),
         *     queryInsights(),
         *   ],
         * })
         * ```
         */
        comments?: runtime.SqlCommenterPlugin[]
    }

    export type GlobalOmitConfig = {
        user?: UserOmit
        tenant?: TenantOmit
        membership?: MembershipOmit
        membershipRole?: MembershipRoleOmit
        attendance?: AttendanceOmit
        invoice?: InvoiceOmit
        invoiceItem?: InvoiceItemOmit
        payment?: PaymentOmit
        resource?: ResourceOmit
        booking?: BookingOmit
        metric?: MetricOmit
        document?: DocumentOmit
        auditLog?: AuditLogOmit
    }

    /* Types for Logging */
    export type LogLevel = 'info' | 'query' | 'warn' | 'error'
    export type LogDefinition = {
        level: LogLevel
        emit: 'stdout' | 'event'
    }

    export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

    export type GetLogType<T> = CheckIsLogLevel<
        T extends LogDefinition ? T['level'] : T
    >;

    export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
        ? GetLogType<T[number]>
        : never;

    export type QueryEvent = {
        timestamp: Date
        query: string
        params: string
        duration: number
        target: string
    }

    export type LogEvent = {
        timestamp: Date
        message: string
        target: string
    }
    /* End Types for Logging */


    export type PrismaAction =
        | 'findUnique'
        | 'findUniqueOrThrow'
        | 'findMany'
        | 'findFirst'
        | 'findFirstOrThrow'
        | 'create'
        | 'createMany'
        | 'createManyAndReturn'
        | 'update'
        | 'updateMany'
        | 'updateManyAndReturn'
        | 'upsert'
        | 'delete'
        | 'deleteMany'
        | 'executeRaw'
        | 'queryRaw'
        | 'aggregate'
        | 'count'
        | 'runCommandRaw'
        | 'findRaw'
        | 'groupBy'

    // tested in getLogLevel.test.ts
    export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

    /**
     * `PrismaClient` proxy available in interactive transactions.
     */
    export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

    export type Datasource = {
        url?: string
    }

    /**
     * Count Types
     */


    /**
     * Count Type UserCountOutputType
     */

    export type UserCountOutputType = {
        memberships: number
        auditLogs: number
    }

    export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
        auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    }

    // Custom InputTypes
    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the UserCountOutputType
         */
        select?: UserCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MembershipWhereInput
    }

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: AuditLogWhereInput
    }


    /**
     * Count Type TenantCountOutputType
     */

    export type TenantCountOutputType = {
        memberships: number
        attendances: number
        invoices: number
        resources: number
        auditLogs: number
    }

    export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        memberships?: boolean | TenantCountOutputTypeCountMembershipsArgs
        attendances?: boolean | TenantCountOutputTypeCountAttendancesArgs
        invoices?: boolean | TenantCountOutputTypeCountInvoicesArgs
        resources?: boolean | TenantCountOutputTypeCountResourcesArgs
        auditLogs?: boolean | TenantCountOutputTypeCountAuditLogsArgs
    }

    // Custom InputTypes
    /**
     * TenantCountOutputType without action
     */
    export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the TenantCountOutputType
         */
        select?: TenantCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * TenantCountOutputType without action
     */
    export type TenantCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MembershipWhereInput
    }

    /**
     * TenantCountOutputType without action
     */
    export type TenantCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: AttendanceWhereInput
    }

    /**
     * TenantCountOutputType without action
     */
    export type TenantCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: InvoiceWhereInput
    }

    /**
     * TenantCountOutputType without action
     */
    export type TenantCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ResourceWhereInput
    }

    /**
     * TenantCountOutputType without action
     */
    export type TenantCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: AuditLogWhereInput
    }


    /**
     * Count Type MembershipCountOutputType
     */

    export type MembershipCountOutputType = {
        roles: number
        attendances: number
        invoices: number
        bookings: number
        metrics: number
        documents: number
    }

    export type MembershipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        roles?: boolean | MembershipCountOutputTypeCountRolesArgs
        attendances?: boolean | MembershipCountOutputTypeCountAttendancesArgs
        invoices?: boolean | MembershipCountOutputTypeCountInvoicesArgs
        bookings?: boolean | MembershipCountOutputTypeCountBookingsArgs
        metrics?: boolean | MembershipCountOutputTypeCountMetricsArgs
        documents?: boolean | MembershipCountOutputTypeCountDocumentsArgs
    }

    // Custom InputTypes
    /**
     * MembershipCountOutputType without action
     */
    export type MembershipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipCountOutputType
         */
        select?: MembershipCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * MembershipCountOutputType without action
     */
    export type MembershipCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MembershipRoleWhereInput
    }

    /**
     * MembershipCountOutputType without action
     */
    export type MembershipCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: AttendanceWhereInput
    }

    /**
     * MembershipCountOutputType without action
     */
    export type MembershipCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: InvoiceWhereInput
    }

    /**
     * MembershipCountOutputType without action
     */
    export type MembershipCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: BookingWhereInput
    }

    /**
     * MembershipCountOutputType without action
     */
    export type MembershipCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MetricWhereInput
    }

    /**
     * MembershipCountOutputType without action
     */
    export type MembershipCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: DocumentWhereInput
    }


    /**
     * Count Type InvoiceCountOutputType
     */

    export type InvoiceCountOutputType = {
        payments: number
        items: number
    }

    export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        payments?: boolean | InvoiceCountOutputTypeCountPaymentsArgs
        items?: boolean | InvoiceCountOutputTypeCountItemsArgs
    }

    // Custom InputTypes
    /**
     * InvoiceCountOutputType without action
     */
    export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceCountOutputType
         */
        select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * InvoiceCountOutputType without action
     */
    export type InvoiceCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: PaymentWhereInput
    }

    /**
     * InvoiceCountOutputType without action
     */
    export type InvoiceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: InvoiceItemWhereInput
    }


    /**
     * Count Type ResourceCountOutputType
     */

    export type ResourceCountOutputType = {
        bookings: number
    }

    export type ResourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        bookings?: boolean | ResourceCountOutputTypeCountBookingsArgs
    }

    // Custom InputTypes
    /**
     * ResourceCountOutputType without action
     */
    export type ResourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the ResourceCountOutputType
         */
        select?: ResourceCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * ResourceCountOutputType without action
     */
    export type ResourceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: BookingWhereInput
    }


    /**
     * Models
     */

    /**
     * Model User
     */

    export type AggregateUser = {
        _count: UserCountAggregateOutputType | null
        _min: UserMinAggregateOutputType | null
        _max: UserMaxAggregateOutputType | null
    }

    export type UserMinAggregateOutputType = {
        id: string | null
        keycloakId: string | null
        email: string | null
        phone: string | null
        firstName: string | null
        lastName: string | null
        isGlobalAdmin: boolean | null
        isActive: boolean | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type UserMaxAggregateOutputType = {
        id: string | null
        keycloakId: string | null
        email: string | null
        phone: string | null
        firstName: string | null
        lastName: string | null
        isGlobalAdmin: boolean | null
        isActive: boolean | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type UserCountAggregateOutputType = {
        id: number
        keycloakId: number
        email: number
        phone: number
        firstName: number
        lastName: number
        isGlobalAdmin: number
        isActive: number
        createdAt: number
        updatedAt: number
        _all: number
    }


    export type UserMinAggregateInputType = {
        id?: true
        keycloakId?: true
        email?: true
        phone?: true
        firstName?: true
        lastName?: true
        isGlobalAdmin?: true
        isActive?: true
        createdAt?: true
        updatedAt?: true
    }

    export type UserMaxAggregateInputType = {
        id?: true
        keycloakId?: true
        email?: true
        phone?: true
        firstName?: true
        lastName?: true
        isGlobalAdmin?: true
        isActive?: true
        createdAt?: true
        updatedAt?: true
    }

    export type UserCountAggregateInputType = {
        id?: true
        keycloakId?: true
        email?: true
        phone?: true
        firstName?: true
        lastName?: true
        isGlobalAdmin?: true
        isActive?: true
        createdAt?: true
        updatedAt?: true
        _all?: true
    }

    export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which User to aggregate.
         */
        where?: UserWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: UserWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Users
         **/
        _count?: true | UserCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: UserMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: UserMaxAggregateInputType
    }

    export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateUser[P]>
            : GetScalarType<T[P], AggregateUser[P]>
    }


    export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: UserWhereInput
        orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
        by: UserScalarFieldEnum[] | UserScalarFieldEnum
        having?: UserScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: UserCountAggregateInputType | true
        _min?: UserMinAggregateInputType
        _max?: UserMaxAggregateInputType
    }

    export type UserGroupByOutputType = {
        id: string
        keycloakId: string | null
        email: string
        phone: string | null
        firstName: string
        lastName: string
        isGlobalAdmin: boolean
        isActive: boolean
        createdAt: Date
        updatedAt: Date
        _count: UserCountAggregateOutputType | null
        _min: UserMinAggregateOutputType | null
        _max: UserMaxAggregateOutputType | null
    }

    type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<UserGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], UserGroupByOutputType[P]>
                : GetScalarType<T[P], UserGroupByOutputType[P]>
            }
        >
    >


    export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        keycloakId?: boolean
        email?: boolean
        phone?: boolean
        firstName?: boolean
        lastName?: boolean
        isGlobalAdmin?: boolean
        isActive?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        memberships?: boolean | User$membershipsArgs<ExtArgs>
        auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["user"]>

    export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        keycloakId?: boolean
        email?: boolean
        phone?: boolean
        firstName?: boolean
        lastName?: boolean
        isGlobalAdmin?: boolean
        isActive?: boolean
        createdAt?: boolean
        updatedAt?: boolean
    }, ExtArgs["result"]["user"]>

    export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        keycloakId?: boolean
        email?: boolean
        phone?: boolean
        firstName?: boolean
        lastName?: boolean
        isGlobalAdmin?: boolean
        isActive?: boolean
        createdAt?: boolean
        updatedAt?: boolean
    }, ExtArgs["result"]["user"]>

    export type UserSelectScalar = {
        id?: boolean
        keycloakId?: boolean
        email?: boolean
        phone?: boolean
        firstName?: boolean
        lastName?: boolean
        isGlobalAdmin?: boolean
        isActive?: boolean
        createdAt?: boolean
        updatedAt?: boolean
    }

    export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keycloakId" | "email" | "phone" | "firstName" | "lastName" | "isGlobalAdmin" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
    export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        memberships?: boolean | User$membershipsArgs<ExtArgs>
        auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
    export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

    export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "User"
        objects: {
            memberships: Prisma.$MembershipPayload<ExtArgs>[]
            auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            keycloakId: string | null
            email: string
            phone: string | null
            firstName: string
            lastName: string
            isGlobalAdmin: boolean
            isActive: boolean
            createdAt: Date
            updatedAt: Date
        }, ExtArgs["result"]["user"]>
        composites: {}
    }

    type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

    type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: UserCountAggregateInputType | true
    }

    export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the User model
         */
        readonly fields: UserFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }

        /**
         * Find zero or one User that matches the filter.
         * @param {UserFindUniqueArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one User that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first User that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserFindFirstArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first User that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more Users that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Users
         * const users = await prisma.user.findMany()
         *
         * // Get first 10 Users
         * const users = await prisma.user.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
         *
         */
        findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a User.
         * @param {UserCreateArgs} args - Arguments to create a User.
         * @example
         * // Create one User
         * const User = await prisma.user.create({
         *   data: {
         *     // ... data to create a User
         *   }
         * })
         *
         */
        create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many Users.
         * @param {UserCreateManyArgs} args - Arguments to create many Users.
         * @example
         * // Create many Users
         * const user = await prisma.user.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Users and returns the data saved in the database.
         * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
         * @example
         * // Create many Users
         * const user = await prisma.user.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Users and only return the `id`
         * const userWithIdOnly = await prisma.user.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a User.
         * @param {UserDeleteArgs} args - Arguments to delete one User.
         * @example
         * // Delete one User
         * const User = await prisma.user.delete({
         *   where: {
         *     // ... filter to delete one User
         *   }
         * })
         *
         */
        delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one User.
         * @param {UserUpdateArgs} args - Arguments to update one User.
         * @example
         * // Update one User
         * const user = await prisma.user.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more Users.
         * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
         * @example
         * // Delete a few Users
         * const { count } = await prisma.user.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Users.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Users
         * const user = await prisma.user.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Users and returns the data updated in the database.
         * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
         * @example
         * // Update many Users
         * const user = await prisma.user.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Users and only return the `id`
         * const userWithIdOnly = await prisma.user.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one User.
         * @param {UserUpsertArgs} args - Arguments to update or create a User.
         * @example
         * // Update or create a User
         * const user = await prisma.user.upsert({
         *   create: {
         *     // ... data to create a User
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the User we want to update
         *   }
         * })
         */
        upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of Users.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserCountArgs} args - Arguments to filter Users to count.
         * @example
         * // Count the number of Users
         * const count = await prisma.user.count({
         *   where: {
         *     // ... the filter for the Users we want to count
         *   }
         * })
         **/
        count<T extends UserCountArgs>(
            args?: Subset<T, UserCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], UserCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a User.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

        /**
         * Group by User.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends UserGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: UserGroupByArgs['orderBy'] }
                : { orderBy?: UserGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for User.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the User model
     */
    interface UserFieldRefs {
        readonly id: FieldRef<"User", 'String'>
        readonly keycloakId: FieldRef<"User", 'String'>
        readonly email: FieldRef<"User", 'String'>
        readonly phone: FieldRef<"User", 'String'>
        readonly firstName: FieldRef<"User", 'String'>
        readonly lastName: FieldRef<"User", 'String'>
        readonly isGlobalAdmin: FieldRef<"User", 'Boolean'>
        readonly isActive: FieldRef<"User", 'Boolean'>
        readonly createdAt: FieldRef<"User", 'DateTime'>
        readonly updatedAt: FieldRef<"User", 'DateTime'>
    }


    // Custom InputTypes
    /**
     * User findUnique
     */
    export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * Filter, which User to fetch.
         */
        where: UserWhereUniqueInput
    }

    /**
     * User findUniqueOrThrow
     */
    export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * Filter, which User to fetch.
         */
        where: UserWhereUniqueInput
    }

    /**
     * User findFirst
     */
    export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * Filter, which User to fetch.
         */
        where?: UserWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Users.
         */
        cursor?: UserWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    }

    /**
     * User findFirstOrThrow
     */
    export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * Filter, which User to fetch.
         */
        where?: UserWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Users.
         */
        cursor?: UserWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    }

    /**
     * User findMany
     */
    export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * Filter, which Users to fetch.
         */
        where?: UserWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Users.
         */
        cursor?: UserWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    }

    /**
     * User create
     */
    export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * The data needed to create a User.
         */
        data: XOR<UserCreateInput, UserUncheckedCreateInput>
    }

    /**
     * User createMany
     */
    export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Users.
         */
        data: UserCreateManyInput | UserCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * User createManyAndReturn
     */
    export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * The data used to create many Users.
         */
        data: UserCreateManyInput | UserCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * User update
     */
    export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * The data needed to update a User.
         */
        data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
        /**
         * Choose, which User to update.
         */
        where: UserWhereUniqueInput
    }

    /**
     * User updateMany
     */
    export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Users.
         */
        data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
        /**
         * Filter which Users to update
         */
        where?: UserWhereInput
        /**
         * Limit how many Users to update.
         */
        limit?: number
    }

    /**
     * User updateManyAndReturn
     */
    export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * The data used to update Users.
         */
        data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
        /**
         * Filter which Users to update
         */
        where?: UserWhereInput
        /**
         * Limit how many Users to update.
         */
        limit?: number
    }

    /**
     * User upsert
     */
    export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * The filter to search for the User to update in case it exists.
         */
        where: UserWhereUniqueInput
        /**
         * In case the User found by the `where` argument doesn't exist, create a new User with this data.
         */
        create: XOR<UserCreateInput, UserUncheckedCreateInput>
        /**
         * In case the User was found with the provided `where` argument, update it with this data.
         */
        update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    }

    /**
     * User delete
     */
    export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * Filter which User to delete.
         */
        where: UserWhereUniqueInput
    }

    /**
     * User deleteMany
     */
    export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Users to delete
         */
        where?: UserWhereInput
        /**
         * Limit how many Users to delete.
         */
        limit?: number
    }

    /**
     * User.memberships
     */
    export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
        where?: MembershipWhereInput
        orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
        cursor?: MembershipWhereUniqueInput
        take?: number
        skip?: number
        distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
    }

    /**
     * User.auditLogs
     */
    export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelect<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogInclude<ExtArgs> | null
        where?: AuditLogWhereInput
        orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
        cursor?: AuditLogWhereUniqueInput
        take?: number
        skip?: number
        distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
    }

    /**
     * User without action
     */
    export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
    }


    /**
     * Model Tenant
     */

    export type AggregateTenant = {
        _count: TenantCountAggregateOutputType | null
        _min: TenantMinAggregateOutputType | null
        _max: TenantMaxAggregateOutputType | null
    }

    export type TenantMinAggregateOutputType = {
        id: string | null
        name: string | null
        slug: string | null
        domain: string | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type TenantMaxAggregateOutputType = {
        id: string | null
        name: string | null
        slug: string | null
        domain: string | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type TenantCountAggregateOutputType = {
        id: number
        name: number
        slug: number
        domain: number
        themeConfig: number
        taxRules: number
        gatewayKeys: number
        createdAt: number
        updatedAt: number
        _all: number
    }


    export type TenantMinAggregateInputType = {
        id?: true
        name?: true
        slug?: true
        domain?: true
        createdAt?: true
        updatedAt?: true
    }

    export type TenantMaxAggregateInputType = {
        id?: true
        name?: true
        slug?: true
        domain?: true
        createdAt?: true
        updatedAt?: true
    }

    export type TenantCountAggregateInputType = {
        id?: true
        name?: true
        slug?: true
        domain?: true
        themeConfig?: true
        taxRules?: true
        gatewayKeys?: true
        createdAt?: true
        updatedAt?: true
        _all?: true
    }

    export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Tenant to aggregate.
         */
        where?: TenantWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tenants to fetch.
         */
        orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: TenantWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tenants from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tenants.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Tenants
         **/
        _count?: true | TenantCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: TenantMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: TenantMaxAggregateInputType
    }

    export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTenant[P]>
            : GetScalarType<T[P], AggregateTenant[P]>
    }


    export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: TenantWhereInput
        orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
        by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
        having?: TenantScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: TenantCountAggregateInputType | true
        _min?: TenantMinAggregateInputType
        _max?: TenantMaxAggregateInputType
    }

    export type TenantGroupByOutputType = {
        id: string
        name: string
        slug: string
        domain: string | null
        themeConfig: JsonValue | null
        taxRules: JsonValue | null
        gatewayKeys: JsonValue | null
        createdAt: Date
        updatedAt: Date
        _count: TenantCountAggregateOutputType | null
        _min: TenantMinAggregateOutputType | null
        _max: TenantMaxAggregateOutputType | null
    }

    type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<TenantGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], TenantGroupByOutputType[P]>
                : GetScalarType<T[P], TenantGroupByOutputType[P]>
            }
        >
    >


    export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        name?: boolean
        slug?: boolean
        domain?: boolean
        themeConfig?: boolean
        taxRules?: boolean
        gatewayKeys?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        memberships?: boolean | Tenant$membershipsArgs<ExtArgs>
        attendances?: boolean | Tenant$attendancesArgs<ExtArgs>
        invoices?: boolean | Tenant$invoicesArgs<ExtArgs>
        resources?: boolean | Tenant$resourcesArgs<ExtArgs>
        auditLogs?: boolean | Tenant$auditLogsArgs<ExtArgs>
        _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["tenant"]>

    export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        name?: boolean
        slug?: boolean
        domain?: boolean
        themeConfig?: boolean
        taxRules?: boolean
        gatewayKeys?: boolean
        createdAt?: boolean
        updatedAt?: boolean
    }, ExtArgs["result"]["tenant"]>

    export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        name?: boolean
        slug?: boolean
        domain?: boolean
        themeConfig?: boolean
        taxRules?: boolean
        gatewayKeys?: boolean
        createdAt?: boolean
        updatedAt?: boolean
    }, ExtArgs["result"]["tenant"]>

    export type TenantSelectScalar = {
        id?: boolean
        name?: boolean
        slug?: boolean
        domain?: boolean
        themeConfig?: boolean
        taxRules?: boolean
        gatewayKeys?: boolean
        createdAt?: boolean
        updatedAt?: boolean
    }

    export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "domain" | "themeConfig" | "taxRules" | "gatewayKeys" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
    export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        memberships?: boolean | Tenant$membershipsArgs<ExtArgs>
        attendances?: boolean | Tenant$attendancesArgs<ExtArgs>
        invoices?: boolean | Tenant$invoicesArgs<ExtArgs>
        resources?: boolean | Tenant$resourcesArgs<ExtArgs>
        auditLogs?: boolean | Tenant$auditLogsArgs<ExtArgs>
        _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
    export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

    export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Tenant"
        objects: {
            memberships: Prisma.$MembershipPayload<ExtArgs>[]
            attendances: Prisma.$AttendancePayload<ExtArgs>[]
            invoices: Prisma.$InvoicePayload<ExtArgs>[]
            resources: Prisma.$ResourcePayload<ExtArgs>[]
            auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            name: string
            slug: string
            domain: string | null
            themeConfig: Prisma.JsonValue | null
            taxRules: Prisma.JsonValue | null
            gatewayKeys: Prisma.JsonValue | null
            createdAt: Date
            updatedAt: Date
        }, ExtArgs["result"]["tenant"]>
        composites: {}
    }

    type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

    type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: TenantCountAggregateInputType | true
    }

    export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the Tenant model
         */
        readonly fields: TenantFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }

        /**
         * Find zero or one Tenant that matches the filter.
         * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
         * @example
         * // Get one Tenant
         * const tenant = await prisma.tenant.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
         * @example
         * // Get one Tenant
         * const tenant = await prisma.tenant.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Tenant that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
         * @example
         * // Get one Tenant
         * const tenant = await prisma.tenant.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Tenant that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
         * @example
         * // Get one Tenant
         * const tenant = await prisma.tenant.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more Tenants that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tenants
         * const tenants = await prisma.tenant.findMany()
         *
         * // Get first 10 Tenants
         * const tenants = await prisma.tenant.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
         *
         */
        findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a Tenant.
         * @param {TenantCreateArgs} args - Arguments to create a Tenant.
         * @example
         * // Create one Tenant
         * const Tenant = await prisma.tenant.create({
         *   data: {
         *     // ... data to create a Tenant
         *   }
         * })
         *
         */
        create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many Tenants.
         * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
         * @example
         * // Create many Tenants
         * const tenant = await prisma.tenant.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Tenants and returns the data saved in the database.
         * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
         * @example
         * // Create many Tenants
         * const tenant = await prisma.tenant.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Tenants and only return the `id`
         * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a Tenant.
         * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
         * @example
         * // Delete one Tenant
         * const Tenant = await prisma.tenant.delete({
         *   where: {
         *     // ... filter to delete one Tenant
         *   }
         * })
         *
         */
        delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one Tenant.
         * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
         * @example
         * // Update one Tenant
         * const tenant = await prisma.tenant.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more Tenants.
         * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
         * @example
         * // Delete a few Tenants
         * const { count } = await prisma.tenant.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tenants.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tenants
         * const tenant = await prisma.tenant.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tenants and returns the data updated in the database.
         * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
         * @example
         * // Update many Tenants
         * const tenant = await prisma.tenant.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Tenants and only return the `id`
         * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one Tenant.
         * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
         * @example
         * // Update or create a Tenant
         * const tenant = await prisma.tenant.upsert({
         *   create: {
         *     // ... data to create a Tenant
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tenant we want to update
         *   }
         * })
         */
        upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of Tenants.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
         * @example
         * // Count the number of Tenants
         * const count = await prisma.tenant.count({
         *   where: {
         *     // ... the filter for the Tenants we want to count
         *   }
         * })
         **/
        count<T extends TenantCountArgs>(
            args?: Subset<T, TenantCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], TenantCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Tenant.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

        /**
         * Group by Tenant.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TenantGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends TenantGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: TenantGroupByArgs['orderBy'] }
                : { orderBy?: TenantGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for Tenant.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        memberships<T extends Tenant$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        attendances<T extends Tenant$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        invoices<T extends Tenant$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        resources<T extends Tenant$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        auditLogs<T extends Tenant$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the Tenant model
     */
    interface TenantFieldRefs {
        readonly id: FieldRef<"Tenant", 'String'>
        readonly name: FieldRef<"Tenant", 'String'>
        readonly slug: FieldRef<"Tenant", 'String'>
        readonly domain: FieldRef<"Tenant", 'String'>
        readonly themeConfig: FieldRef<"Tenant", 'Json'>
        readonly taxRules: FieldRef<"Tenant", 'Json'>
        readonly gatewayKeys: FieldRef<"Tenant", 'Json'>
        readonly createdAt: FieldRef<"Tenant", 'DateTime'>
        readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
    }


    // Custom InputTypes
    /**
     * Tenant findUnique
     */
    export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tenant
         */
        select?: TenantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tenant
         */
        omit?: TenantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TenantInclude<ExtArgs> | null
        /**
         * Filter, which Tenant to fetch.
         */
        where: TenantWhereUniqueInput
    }

    /**
     * Tenant findUniqueOrThrow
     */
    export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tenant
         */
        select?: TenantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tenant
         */
        omit?: TenantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TenantInclude<ExtArgs> | null
        /**
         * Filter, which Tenant to fetch.
         */
        where: TenantWhereUniqueInput
    }

    /**
     * Tenant findFirst
     */
    export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tenant
         */
        select?: TenantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tenant
         */
        omit?: TenantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TenantInclude<ExtArgs> | null
        /**
         * Filter, which Tenant to fetch.
         */
        where?: TenantWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tenants to fetch.
         */
        orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Tenants.
         */
        cursor?: TenantWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tenants from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tenants.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Tenants.
         */
        distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
    }

    /**
     * Tenant findFirstOrThrow
     */
    export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tenant
         */
        select?: TenantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tenant
         */
        omit?: TenantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TenantInclude<ExtArgs> | null
        /**
         * Filter, which Tenant to fetch.
         */
        where?: TenantWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tenants to fetch.
         */
        orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Tenants.
         */
        cursor?: TenantWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tenants from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tenants.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Tenants.
         */
        distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
    }

    /**
     * Tenant findMany
     */
    export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tenant
         */
        select?: TenantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tenant
         */
        omit?: TenantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TenantInclude<ExtArgs> | null
        /**
         * Filter, which Tenants to fetch.
         */
        where?: TenantWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tenants to fetch.
         */
        orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Tenants.
         */
        cursor?: TenantWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tenants from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tenants.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Tenants.
         */
        distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
    }

    /**
     * Tenant create
     */
    export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tenant
         */
        select?: TenantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tenant
         */
        omit?: TenantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TenantInclude<ExtArgs> | null
        /**
         * The data needed to create a Tenant.
         */
        data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    }

    /**
     * Tenant createMany
     */
    export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Tenants.
         */
        data: TenantCreateManyInput | TenantCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Tenant createManyAndReturn
     */
    export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tenant
         */
        select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Tenant
         */
        omit?: TenantOmit<ExtArgs> | null
        /**
         * The data used to create many Tenants.
         */
        data: TenantCreateManyInput | TenantCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Tenant update
     */
    export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tenant
         */
        select?: TenantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tenant
         */
        omit?: TenantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TenantInclude<ExtArgs> | null
        /**
         * The data needed to update a Tenant.
         */
        data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
        /**
         * Choose, which Tenant to update.
         */
        where: TenantWhereUniqueInput
    }

    /**
     * Tenant updateMany
     */
    export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Tenants.
         */
        data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
        /**
         * Filter which Tenants to update
         */
        where?: TenantWhereInput
        /**
         * Limit how many Tenants to update.
         */
        limit?: number
    }

    /**
     * Tenant updateManyAndReturn
     */
    export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tenant
         */
        select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Tenant
         */
        omit?: TenantOmit<ExtArgs> | null
        /**
         * The data used to update Tenants.
         */
        data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
        /**
         * Filter which Tenants to update
         */
        where?: TenantWhereInput
        /**
         * Limit how many Tenants to update.
         */
        limit?: number
    }

    /**
     * Tenant upsert
     */
    export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tenant
         */
        select?: TenantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tenant
         */
        omit?: TenantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TenantInclude<ExtArgs> | null
        /**
         * The filter to search for the Tenant to update in case it exists.
         */
        where: TenantWhereUniqueInput
        /**
         * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
         */
        create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
        /**
         * In case the Tenant was found with the provided `where` argument, update it with this data.
         */
        update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    }

    /**
     * Tenant delete
     */
    export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tenant
         */
        select?: TenantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tenant
         */
        omit?: TenantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TenantInclude<ExtArgs> | null
        /**
         * Filter which Tenant to delete.
         */
        where: TenantWhereUniqueInput
    }

    /**
     * Tenant deleteMany
     */
    export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Tenants to delete
         */
        where?: TenantWhereInput
        /**
         * Limit how many Tenants to delete.
         */
        limit?: number
    }

    /**
     * Tenant.memberships
     */
    export type Tenant$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
        where?: MembershipWhereInput
        orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
        cursor?: MembershipWhereUniqueInput
        take?: number
        skip?: number
        distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
    }

    /**
     * Tenant.attendances
     */
    export type Tenant$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceInclude<ExtArgs> | null
        where?: AttendanceWhereInput
        orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
        cursor?: AttendanceWhereUniqueInput
        take?: number
        skip?: number
        distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
    }

    /**
     * Tenant.invoices
     */
    export type Tenant$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceInclude<ExtArgs> | null
        where?: InvoiceWhereInput
        orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
        cursor?: InvoiceWhereUniqueInput
        take?: number
        skip?: number
        distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
    }

    /**
     * Tenant.resources
     */
    export type Tenant$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceInclude<ExtArgs> | null
        where?: ResourceWhereInput
        orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
        cursor?: ResourceWhereUniqueInput
        take?: number
        skip?: number
        distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
    }

    /**
     * Tenant.auditLogs
     */
    export type Tenant$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelect<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogInclude<ExtArgs> | null
        where?: AuditLogWhereInput
        orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
        cursor?: AuditLogWhereUniqueInput
        take?: number
        skip?: number
        distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
    }

    /**
     * Tenant without action
     */
    export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tenant
         */
        select?: TenantSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tenant
         */
        omit?: TenantOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TenantInclude<ExtArgs> | null
    }


    /**
     * Model Membership
     */

    export type AggregateMembership = {
        _count: MembershipCountAggregateOutputType | null
        _min: MembershipMinAggregateOutputType | null
        _max: MembershipMaxAggregateOutputType | null
    }

    export type MembershipMinAggregateOutputType = {
        id: string | null
        userId: string | null
        tenantId: string | null
        status: $Enums.MembershipStatus | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type MembershipMaxAggregateOutputType = {
        id: string | null
        userId: string | null
        tenantId: string | null
        status: $Enums.MembershipStatus | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type MembershipCountAggregateOutputType = {
        id: number
        userId: number
        tenantId: number
        status: number
        createdAt: number
        updatedAt: number
        _all: number
    }


    export type MembershipMinAggregateInputType = {
        id?: true
        userId?: true
        tenantId?: true
        status?: true
        createdAt?: true
        updatedAt?: true
    }

    export type MembershipMaxAggregateInputType = {
        id?: true
        userId?: true
        tenantId?: true
        status?: true
        createdAt?: true
        updatedAt?: true
    }

    export type MembershipCountAggregateInputType = {
        id?: true
        userId?: true
        tenantId?: true
        status?: true
        createdAt?: true
        updatedAt?: true
        _all?: true
    }

    export type MembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Membership to aggregate.
         */
        where?: MembershipWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Memberships to fetch.
         */
        orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: MembershipWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Memberships from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Memberships.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Memberships
         **/
        _count?: true | MembershipCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: MembershipMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: MembershipMaxAggregateInputType
    }

    export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateMembership[P]>
            : GetScalarType<T[P], AggregateMembership[P]>
    }


    export type MembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MembershipWhereInput
        orderBy?: MembershipOrderByWithAggregationInput | MembershipOrderByWithAggregationInput[]
        by: MembershipScalarFieldEnum[] | MembershipScalarFieldEnum
        having?: MembershipScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: MembershipCountAggregateInputType | true
        _min?: MembershipMinAggregateInputType
        _max?: MembershipMaxAggregateInputType
    }

    export type MembershipGroupByOutputType = {
        id: string
        userId: string
        tenantId: string
        status: $Enums.MembershipStatus
        createdAt: Date
        updatedAt: Date
        _count: MembershipCountAggregateOutputType | null
        _min: MembershipMinAggregateOutputType | null
        _max: MembershipMaxAggregateOutputType | null
    }

    type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<MembershipGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], MembershipGroupByOutputType[P]>
                : GetScalarType<T[P], MembershipGroupByOutputType[P]>
            }
        >
    >


    export type MembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        userId?: boolean
        tenantId?: boolean
        status?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        user?: boolean | UserDefaultArgs<ExtArgs>
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        roles?: boolean | Membership$rolesArgs<ExtArgs>
        attendances?: boolean | Membership$attendancesArgs<ExtArgs>
        invoices?: boolean | Membership$invoicesArgs<ExtArgs>
        bookings?: boolean | Membership$bookingsArgs<ExtArgs>
        metrics?: boolean | Membership$metricsArgs<ExtArgs>
        documents?: boolean | Membership$documentsArgs<ExtArgs>
        _count?: boolean | MembershipCountOutputTypeDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["membership"]>

    export type MembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        userId?: boolean
        tenantId?: boolean
        status?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        user?: boolean | UserDefaultArgs<ExtArgs>
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["membership"]>

    export type MembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        userId?: boolean
        tenantId?: boolean
        status?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        user?: boolean | UserDefaultArgs<ExtArgs>
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["membership"]>

    export type MembershipSelectScalar = {
        id?: boolean
        userId?: boolean
        tenantId?: boolean
        status?: boolean
        createdAt?: boolean
        updatedAt?: boolean
    }

    export type MembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tenantId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["membership"]>
    export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        user?: boolean | UserDefaultArgs<ExtArgs>
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        roles?: boolean | Membership$rolesArgs<ExtArgs>
        attendances?: boolean | Membership$attendancesArgs<ExtArgs>
        invoices?: boolean | Membership$invoicesArgs<ExtArgs>
        bookings?: boolean | Membership$bookingsArgs<ExtArgs>
        metrics?: boolean | Membership$metricsArgs<ExtArgs>
        documents?: boolean | Membership$documentsArgs<ExtArgs>
        _count?: boolean | MembershipCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type MembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        user?: boolean | UserDefaultArgs<ExtArgs>
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
    }
    export type MembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        user?: boolean | UserDefaultArgs<ExtArgs>
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
    }

    export type $MembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Membership"
        objects: {
            user: Prisma.$UserPayload<ExtArgs>
            tenant: Prisma.$TenantPayload<ExtArgs>
            roles: Prisma.$MembershipRolePayload<ExtArgs>[]
            attendances: Prisma.$AttendancePayload<ExtArgs>[]
            invoices: Prisma.$InvoicePayload<ExtArgs>[]
            bookings: Prisma.$BookingPayload<ExtArgs>[]
            metrics: Prisma.$MetricPayload<ExtArgs>[]
            documents: Prisma.$DocumentPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            userId: string
            tenantId: string
            status: $Enums.MembershipStatus
            createdAt: Date
            updatedAt: Date
        }, ExtArgs["result"]["membership"]>
        composites: {}
    }

    type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = $Result.GetResult<Prisma.$MembershipPayload, S>

    type MembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: MembershipCountAggregateInputType | true
    }

    export interface MembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the Membership model
         */
        readonly fields: MembershipFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membership'], meta: { name: 'Membership' } }

        /**
         * Find zero or one Membership that matches the filter.
         * @param {MembershipFindUniqueArgs} args - Arguments to find a Membership
         * @example
         * // Get one Membership
         * const membership = await prisma.membership.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends MembershipFindUniqueArgs>(args: SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one Membership that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {MembershipFindUniqueOrThrowArgs} args - Arguments to find a Membership
         * @example
         * // Get one Membership
         * const membership = await prisma.membership.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Membership that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipFindFirstArgs} args - Arguments to find a Membership
         * @example
         * // Get one Membership
         * const membership = await prisma.membership.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends MembershipFindFirstArgs>(args?: SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Membership that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipFindFirstOrThrowArgs} args - Arguments to find a Membership
         * @example
         * // Get one Membership
         * const membership = await prisma.membership.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more Memberships that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Memberships
         * const memberships = await prisma.membership.findMany()
         *
         * // Get first 10 Memberships
         * const memberships = await prisma.membership.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const membershipWithIdOnly = await prisma.membership.findMany({ select: { id: true } })
         *
         */
        findMany<T extends MembershipFindManyArgs>(args?: SelectSubset<T, MembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a Membership.
         * @param {MembershipCreateArgs} args - Arguments to create a Membership.
         * @example
         * // Create one Membership
         * const Membership = await prisma.membership.create({
         *   data: {
         *     // ... data to create a Membership
         *   }
         * })
         *
         */
        create<T extends MembershipCreateArgs>(args: SelectSubset<T, MembershipCreateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many Memberships.
         * @param {MembershipCreateManyArgs} args - Arguments to create many Memberships.
         * @example
         * // Create many Memberships
         * const membership = await prisma.membership.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends MembershipCreateManyArgs>(args?: SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Memberships and returns the data saved in the database.
         * @param {MembershipCreateManyAndReturnArgs} args - Arguments to create many Memberships.
         * @example
         * // Create many Memberships
         * const membership = await prisma.membership.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Memberships and only return the `id`
         * const membershipWithIdOnly = await prisma.membership.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends MembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a Membership.
         * @param {MembershipDeleteArgs} args - Arguments to delete one Membership.
         * @example
         * // Delete one Membership
         * const Membership = await prisma.membership.delete({
         *   where: {
         *     // ... filter to delete one Membership
         *   }
         * })
         *
         */
        delete<T extends MembershipDeleteArgs>(args: SelectSubset<T, MembershipDeleteArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one Membership.
         * @param {MembershipUpdateArgs} args - Arguments to update one Membership.
         * @example
         * // Update one Membership
         * const membership = await prisma.membership.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends MembershipUpdateArgs>(args: SelectSubset<T, MembershipUpdateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more Memberships.
         * @param {MembershipDeleteManyArgs} args - Arguments to filter Memberships to delete.
         * @example
         * // Delete a few Memberships
         * const { count } = await prisma.membership.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends MembershipDeleteManyArgs>(args?: SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Memberships.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Memberships
         * const membership = await prisma.membership.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends MembershipUpdateManyArgs>(args: SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Memberships and returns the data updated in the database.
         * @param {MembershipUpdateManyAndReturnArgs} args - Arguments to update many Memberships.
         * @example
         * // Update many Memberships
         * const membership = await prisma.membership.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Memberships and only return the `id`
         * const membershipWithIdOnly = await prisma.membership.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends MembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one Membership.
         * @param {MembershipUpsertArgs} args - Arguments to update or create a Membership.
         * @example
         * // Update or create a Membership
         * const membership = await prisma.membership.upsert({
         *   create: {
         *     // ... data to create a Membership
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Membership we want to update
         *   }
         * })
         */
        upsert<T extends MembershipUpsertArgs>(args: SelectSubset<T, MembershipUpsertArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of Memberships.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipCountArgs} args - Arguments to filter Memberships to count.
         * @example
         * // Count the number of Memberships
         * const count = await prisma.membership.count({
         *   where: {
         *     // ... the filter for the Memberships we want to count
         *   }
         * })
         **/
        count<T extends MembershipCountArgs>(
            args?: Subset<T, MembershipCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], MembershipCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Membership.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends MembershipAggregateArgs>(args: Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>

        /**
         * Group by Membership.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends MembershipGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: MembershipGroupByArgs['orderBy'] }
                : { orderBy?: MembershipGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for Membership.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        roles<T extends Membership$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Membership$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        attendances<T extends Membership$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Membership$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        invoices<T extends Membership$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Membership$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        bookings<T extends Membership$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Membership$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        metrics<T extends Membership$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Membership$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        documents<T extends Membership$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Membership$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the Membership model
     */
    interface MembershipFieldRefs {
        readonly id: FieldRef<"Membership", 'String'>
        readonly userId: FieldRef<"Membership", 'String'>
        readonly tenantId: FieldRef<"Membership", 'String'>
        readonly status: FieldRef<"Membership", 'MembershipStatus'>
        readonly createdAt: FieldRef<"Membership", 'DateTime'>
        readonly updatedAt: FieldRef<"Membership", 'DateTime'>
    }


    // Custom InputTypes
    /**
     * Membership findUnique
     */
    export type MembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
        /**
         * Filter, which Membership to fetch.
         */
        where: MembershipWhereUniqueInput
    }

    /**
     * Membership findUniqueOrThrow
     */
    export type MembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
        /**
         * Filter, which Membership to fetch.
         */
        where: MembershipWhereUniqueInput
    }

    /**
     * Membership findFirst
     */
    export type MembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
        /**
         * Filter, which Membership to fetch.
         */
        where?: MembershipWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Memberships to fetch.
         */
        orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Memberships.
         */
        cursor?: MembershipWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Memberships from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Memberships.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Memberships.
         */
        distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
    }

    /**
     * Membership findFirstOrThrow
     */
    export type MembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
        /**
         * Filter, which Membership to fetch.
         */
        where?: MembershipWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Memberships to fetch.
         */
        orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Memberships.
         */
        cursor?: MembershipWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Memberships from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Memberships.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Memberships.
         */
        distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
    }

    /**
     * Membership findMany
     */
    export type MembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
        /**
         * Filter, which Memberships to fetch.
         */
        where?: MembershipWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Memberships to fetch.
         */
        orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Memberships.
         */
        cursor?: MembershipWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Memberships from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Memberships.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Memberships.
         */
        distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
    }

    /**
     * Membership create
     */
    export type MembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
        /**
         * The data needed to create a Membership.
         */
        data: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
    }

    /**
     * Membership createMany
     */
    export type MembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Memberships.
         */
        data: MembershipCreateManyInput | MembershipCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Membership createManyAndReturn
     */
    export type MembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * The data used to create many Memberships.
         */
        data: MembershipCreateManyInput | MembershipCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * Membership update
     */
    export type MembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
        /**
         * The data needed to update a Membership.
         */
        data: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
        /**
         * Choose, which Membership to update.
         */
        where: MembershipWhereUniqueInput
    }

    /**
     * Membership updateMany
     */
    export type MembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Memberships.
         */
        data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
        /**
         * Filter which Memberships to update
         */
        where?: MembershipWhereInput
        /**
         * Limit how many Memberships to update.
         */
        limit?: number
    }

    /**
     * Membership updateManyAndReturn
     */
    export type MembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * The data used to update Memberships.
         */
        data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
        /**
         * Filter which Memberships to update
         */
        where?: MembershipWhereInput
        /**
         * Limit how many Memberships to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * Membership upsert
     */
    export type MembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
        /**
         * The filter to search for the Membership to update in case it exists.
         */
        where: MembershipWhereUniqueInput
        /**
         * In case the Membership found by the `where` argument doesn't exist, create a new Membership with this data.
         */
        create: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
        /**
         * In case the Membership was found with the provided `where` argument, update it with this data.
         */
        update: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
    }

    /**
     * Membership delete
     */
    export type MembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
        /**
         * Filter which Membership to delete.
         */
        where: MembershipWhereUniqueInput
    }

    /**
     * Membership deleteMany
     */
    export type MembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Memberships to delete
         */
        where?: MembershipWhereInput
        /**
         * Limit how many Memberships to delete.
         */
        limit?: number
    }

    /**
     * Membership.roles
     */
    export type Membership$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleInclude<ExtArgs> | null
        where?: MembershipRoleWhereInput
        orderBy?: MembershipRoleOrderByWithRelationInput | MembershipRoleOrderByWithRelationInput[]
        cursor?: MembershipRoleWhereUniqueInput
        take?: number
        skip?: number
        distinct?: MembershipRoleScalarFieldEnum | MembershipRoleScalarFieldEnum[]
    }

    /**
     * Membership.attendances
     */
    export type Membership$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceInclude<ExtArgs> | null
        where?: AttendanceWhereInput
        orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
        cursor?: AttendanceWhereUniqueInput
        take?: number
        skip?: number
        distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
    }

    /**
     * Membership.invoices
     */
    export type Membership$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceInclude<ExtArgs> | null
        where?: InvoiceWhereInput
        orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
        cursor?: InvoiceWhereUniqueInput
        take?: number
        skip?: number
        distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
    }

    /**
     * Membership.bookings
     */
    export type Membership$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingInclude<ExtArgs> | null
        where?: BookingWhereInput
        orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
        cursor?: BookingWhereUniqueInput
        take?: number
        skip?: number
        distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
    }

    /**
     * Membership.metrics
     */
    export type Membership$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricInclude<ExtArgs> | null
        where?: MetricWhereInput
        orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
        cursor?: MetricWhereUniqueInput
        take?: number
        skip?: number
        distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
    }

    /**
     * Membership.documents
     */
    export type Membership$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null
        where?: DocumentWhereInput
        orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
        cursor?: DocumentWhereUniqueInput
        take?: number
        skip?: number
        distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
    }

    /**
     * Membership without action
     */
    export type MembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
    }


    /**
     * Model MembershipRole
     */

    export type AggregateMembershipRole = {
        _count: MembershipRoleCountAggregateOutputType | null
        _min: MembershipRoleMinAggregateOutputType | null
        _max: MembershipRoleMaxAggregateOutputType | null
    }

    export type MembershipRoleMinAggregateOutputType = {
        id: string | null
        membershipId: string | null
        role: $Enums.Role | null
    }

    export type MembershipRoleMaxAggregateOutputType = {
        id: string | null
        membershipId: string | null
        role: $Enums.Role | null
    }

    export type MembershipRoleCountAggregateOutputType = {
        id: number
        membershipId: number
        role: number
        _all: number
    }


    export type MembershipRoleMinAggregateInputType = {
        id?: true
        membershipId?: true
        role?: true
    }

    export type MembershipRoleMaxAggregateInputType = {
        id?: true
        membershipId?: true
        role?: true
    }

    export type MembershipRoleCountAggregateInputType = {
        id?: true
        membershipId?: true
        role?: true
        _all?: true
    }

    export type MembershipRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which MembershipRole to aggregate.
         */
        where?: MembershipRoleWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of MembershipRoles to fetch.
         */
        orderBy?: MembershipRoleOrderByWithRelationInput | MembershipRoleOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: MembershipRoleWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` MembershipRoles from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` MembershipRoles.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned MembershipRoles
         **/
        _count?: true | MembershipRoleCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: MembershipRoleMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: MembershipRoleMaxAggregateInputType
    }

    export type GetMembershipRoleAggregateType<T extends MembershipRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateMembershipRole]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateMembershipRole[P]>
            : GetScalarType<T[P], AggregateMembershipRole[P]>
    }


    export type MembershipRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MembershipRoleWhereInput
        orderBy?: MembershipRoleOrderByWithAggregationInput | MembershipRoleOrderByWithAggregationInput[]
        by: MembershipRoleScalarFieldEnum[] | MembershipRoleScalarFieldEnum
        having?: MembershipRoleScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: MembershipRoleCountAggregateInputType | true
        _min?: MembershipRoleMinAggregateInputType
        _max?: MembershipRoleMaxAggregateInputType
    }

    export type MembershipRoleGroupByOutputType = {
        id: string
        membershipId: string
        role: $Enums.Role
        _count: MembershipRoleCountAggregateOutputType | null
        _min: MembershipRoleMinAggregateOutputType | null
        _max: MembershipRoleMaxAggregateOutputType | null
    }

    type GetMembershipRoleGroupByPayload<T extends MembershipRoleGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<MembershipRoleGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof MembershipRoleGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], MembershipRoleGroupByOutputType[P]>
                : GetScalarType<T[P], MembershipRoleGroupByOutputType[P]>
            }
        >
    >


    export type MembershipRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        membershipId?: boolean
        role?: boolean
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["membershipRole"]>

    export type MembershipRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        membershipId?: boolean
        role?: boolean
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["membershipRole"]>

    export type MembershipRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        membershipId?: boolean
        role?: boolean
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["membershipRole"]>

    export type MembershipRoleSelectScalar = {
        id?: boolean
        membershipId?: boolean
        role?: boolean
    }

    export type MembershipRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "membershipId" | "role", ExtArgs["result"]["membershipRole"]>
    export type MembershipRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }
    export type MembershipRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }
    export type MembershipRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }

    export type $MembershipRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "MembershipRole"
        objects: {
            membership: Prisma.$MembershipPayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            membershipId: string
            role: $Enums.Role
        }, ExtArgs["result"]["membershipRole"]>
        composites: {}
    }

    type MembershipRoleGetPayload<S extends boolean | null | undefined | MembershipRoleDefaultArgs> = $Result.GetResult<Prisma.$MembershipRolePayload, S>

    type MembershipRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<MembershipRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: MembershipRoleCountAggregateInputType | true
    }

    export interface MembershipRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the MembershipRole model
         */
        readonly fields: MembershipRoleFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembershipRole'], meta: { name: 'MembershipRole' } }

        /**
         * Find zero or one MembershipRole that matches the filter.
         * @param {MembershipRoleFindUniqueArgs} args - Arguments to find a MembershipRole
         * @example
         * // Get one MembershipRole
         * const membershipRole = await prisma.membershipRole.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends MembershipRoleFindUniqueArgs>(args: SelectSubset<T, MembershipRoleFindUniqueArgs<ExtArgs>>): Prisma__MembershipRoleClient<$Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one MembershipRole that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {MembershipRoleFindUniqueOrThrowArgs} args - Arguments to find a MembershipRole
         * @example
         * // Get one MembershipRole
         * const membershipRole = await prisma.membershipRole.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends MembershipRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipRoleClient<$Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first MembershipRole that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipRoleFindFirstArgs} args - Arguments to find a MembershipRole
         * @example
         * // Get one MembershipRole
         * const membershipRole = await prisma.membershipRole.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends MembershipRoleFindFirstArgs>(args?: SelectSubset<T, MembershipRoleFindFirstArgs<ExtArgs>>): Prisma__MembershipRoleClient<$Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first MembershipRole that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipRoleFindFirstOrThrowArgs} args - Arguments to find a MembershipRole
         * @example
         * // Get one MembershipRole
         * const membershipRole = await prisma.membershipRole.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends MembershipRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipRoleClient<$Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more MembershipRoles that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipRoleFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all MembershipRoles
         * const membershipRoles = await prisma.membershipRole.findMany()
         *
         * // Get first 10 MembershipRoles
         * const membershipRoles = await prisma.membershipRole.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const membershipRoleWithIdOnly = await prisma.membershipRole.findMany({ select: { id: true } })
         *
         */
        findMany<T extends MembershipRoleFindManyArgs>(args?: SelectSubset<T, MembershipRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a MembershipRole.
         * @param {MembershipRoleCreateArgs} args - Arguments to create a MembershipRole.
         * @example
         * // Create one MembershipRole
         * const MembershipRole = await prisma.membershipRole.create({
         *   data: {
         *     // ... data to create a MembershipRole
         *   }
         * })
         *
         */
        create<T extends MembershipRoleCreateArgs>(args: SelectSubset<T, MembershipRoleCreateArgs<ExtArgs>>): Prisma__MembershipRoleClient<$Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many MembershipRoles.
         * @param {MembershipRoleCreateManyArgs} args - Arguments to create many MembershipRoles.
         * @example
         * // Create many MembershipRoles
         * const membershipRole = await prisma.membershipRole.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends MembershipRoleCreateManyArgs>(args?: SelectSubset<T, MembershipRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many MembershipRoles and returns the data saved in the database.
         * @param {MembershipRoleCreateManyAndReturnArgs} args - Arguments to create many MembershipRoles.
         * @example
         * // Create many MembershipRoles
         * const membershipRole = await prisma.membershipRole.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many MembershipRoles and only return the `id`
         * const membershipRoleWithIdOnly = await prisma.membershipRole.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends MembershipRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a MembershipRole.
         * @param {MembershipRoleDeleteArgs} args - Arguments to delete one MembershipRole.
         * @example
         * // Delete one MembershipRole
         * const MembershipRole = await prisma.membershipRole.delete({
         *   where: {
         *     // ... filter to delete one MembershipRole
         *   }
         * })
         *
         */
        delete<T extends MembershipRoleDeleteArgs>(args: SelectSubset<T, MembershipRoleDeleteArgs<ExtArgs>>): Prisma__MembershipRoleClient<$Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one MembershipRole.
         * @param {MembershipRoleUpdateArgs} args - Arguments to update one MembershipRole.
         * @example
         * // Update one MembershipRole
         * const membershipRole = await prisma.membershipRole.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends MembershipRoleUpdateArgs>(args: SelectSubset<T, MembershipRoleUpdateArgs<ExtArgs>>): Prisma__MembershipRoleClient<$Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more MembershipRoles.
         * @param {MembershipRoleDeleteManyArgs} args - Arguments to filter MembershipRoles to delete.
         * @example
         * // Delete a few MembershipRoles
         * const { count } = await prisma.membershipRole.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends MembershipRoleDeleteManyArgs>(args?: SelectSubset<T, MembershipRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more MembershipRoles.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipRoleUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many MembershipRoles
         * const membershipRole = await prisma.membershipRole.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends MembershipRoleUpdateManyArgs>(args: SelectSubset<T, MembershipRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more MembershipRoles and returns the data updated in the database.
         * @param {MembershipRoleUpdateManyAndReturnArgs} args - Arguments to update many MembershipRoles.
         * @example
         * // Update many MembershipRoles
         * const membershipRole = await prisma.membershipRole.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more MembershipRoles and only return the `id`
         * const membershipRoleWithIdOnly = await prisma.membershipRole.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends MembershipRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one MembershipRole.
         * @param {MembershipRoleUpsertArgs} args - Arguments to update or create a MembershipRole.
         * @example
         * // Update or create a MembershipRole
         * const membershipRole = await prisma.membershipRole.upsert({
         *   create: {
         *     // ... data to create a MembershipRole
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the MembershipRole we want to update
         *   }
         * })
         */
        upsert<T extends MembershipRoleUpsertArgs>(args: SelectSubset<T, MembershipRoleUpsertArgs<ExtArgs>>): Prisma__MembershipRoleClient<$Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of MembershipRoles.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipRoleCountArgs} args - Arguments to filter MembershipRoles to count.
         * @example
         * // Count the number of MembershipRoles
         * const count = await prisma.membershipRole.count({
         *   where: {
         *     // ... the filter for the MembershipRoles we want to count
         *   }
         * })
         **/
        count<T extends MembershipRoleCountArgs>(
            args?: Subset<T, MembershipRoleCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], MembershipRoleCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a MembershipRole.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends MembershipRoleAggregateArgs>(args: Subset<T, MembershipRoleAggregateArgs>): Prisma.PrismaPromise<GetMembershipRoleAggregateType<T>>

        /**
         * Group by MembershipRole.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MembershipRoleGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends MembershipRoleGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: MembershipRoleGroupByArgs['orderBy'] }
                : { orderBy?: MembershipRoleGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, MembershipRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for MembershipRole.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__MembershipRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        membership<T extends MembershipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembershipDefaultArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the MembershipRole model
     */
    interface MembershipRoleFieldRefs {
        readonly id: FieldRef<"MembershipRole", 'String'>
        readonly membershipId: FieldRef<"MembershipRole", 'String'>
        readonly role: FieldRef<"MembershipRole", 'Role'>
    }


    // Custom InputTypes
    /**
     * MembershipRole findUnique
     */
    export type MembershipRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleInclude<ExtArgs> | null
        /**
         * Filter, which MembershipRole to fetch.
         */
        where: MembershipRoleWhereUniqueInput
    }

    /**
     * MembershipRole findUniqueOrThrow
     */
    export type MembershipRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleInclude<ExtArgs> | null
        /**
         * Filter, which MembershipRole to fetch.
         */
        where: MembershipRoleWhereUniqueInput
    }

    /**
     * MembershipRole findFirst
     */
    export type MembershipRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleInclude<ExtArgs> | null
        /**
         * Filter, which MembershipRole to fetch.
         */
        where?: MembershipRoleWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of MembershipRoles to fetch.
         */
        orderBy?: MembershipRoleOrderByWithRelationInput | MembershipRoleOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for MembershipRoles.
         */
        cursor?: MembershipRoleWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` MembershipRoles from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` MembershipRoles.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of MembershipRoles.
         */
        distinct?: MembershipRoleScalarFieldEnum | MembershipRoleScalarFieldEnum[]
    }

    /**
     * MembershipRole findFirstOrThrow
     */
    export type MembershipRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleInclude<ExtArgs> | null
        /**
         * Filter, which MembershipRole to fetch.
         */
        where?: MembershipRoleWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of MembershipRoles to fetch.
         */
        orderBy?: MembershipRoleOrderByWithRelationInput | MembershipRoleOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for MembershipRoles.
         */
        cursor?: MembershipRoleWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` MembershipRoles from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` MembershipRoles.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of MembershipRoles.
         */
        distinct?: MembershipRoleScalarFieldEnum | MembershipRoleScalarFieldEnum[]
    }

    /**
     * MembershipRole findMany
     */
    export type MembershipRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleInclude<ExtArgs> | null
        /**
         * Filter, which MembershipRoles to fetch.
         */
        where?: MembershipRoleWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of MembershipRoles to fetch.
         */
        orderBy?: MembershipRoleOrderByWithRelationInput | MembershipRoleOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing MembershipRoles.
         */
        cursor?: MembershipRoleWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` MembershipRoles from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` MembershipRoles.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of MembershipRoles.
         */
        distinct?: MembershipRoleScalarFieldEnum | MembershipRoleScalarFieldEnum[]
    }

    /**
     * MembershipRole create
     */
    export type MembershipRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleInclude<ExtArgs> | null
        /**
         * The data needed to create a MembershipRole.
         */
        data: XOR<MembershipRoleCreateInput, MembershipRoleUncheckedCreateInput>
    }

    /**
     * MembershipRole createMany
     */
    export type MembershipRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many MembershipRoles.
         */
        data: MembershipRoleCreateManyInput | MembershipRoleCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * MembershipRole createManyAndReturn
     */
    export type MembershipRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * The data used to create many MembershipRoles.
         */
        data: MembershipRoleCreateManyInput | MembershipRoleCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * MembershipRole update
     */
    export type MembershipRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleInclude<ExtArgs> | null
        /**
         * The data needed to update a MembershipRole.
         */
        data: XOR<MembershipRoleUpdateInput, MembershipRoleUncheckedUpdateInput>
        /**
         * Choose, which MembershipRole to update.
         */
        where: MembershipRoleWhereUniqueInput
    }

    /**
     * MembershipRole updateMany
     */
    export type MembershipRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update MembershipRoles.
         */
        data: XOR<MembershipRoleUpdateManyMutationInput, MembershipRoleUncheckedUpdateManyInput>
        /**
         * Filter which MembershipRoles to update
         */
        where?: MembershipRoleWhereInput
        /**
         * Limit how many MembershipRoles to update.
         */
        limit?: number
    }

    /**
     * MembershipRole updateManyAndReturn
     */
    export type MembershipRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * The data used to update MembershipRoles.
         */
        data: XOR<MembershipRoleUpdateManyMutationInput, MembershipRoleUncheckedUpdateManyInput>
        /**
         * Filter which MembershipRoles to update
         */
        where?: MembershipRoleWhereInput
        /**
         * Limit how many MembershipRoles to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * MembershipRole upsert
     */
    export type MembershipRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleInclude<ExtArgs> | null
        /**
         * The filter to search for the MembershipRole to update in case it exists.
         */
        where: MembershipRoleWhereUniqueInput
        /**
         * In case the MembershipRole found by the `where` argument doesn't exist, create a new MembershipRole with this data.
         */
        create: XOR<MembershipRoleCreateInput, MembershipRoleUncheckedCreateInput>
        /**
         * In case the MembershipRole was found with the provided `where` argument, update it with this data.
         */
        update: XOR<MembershipRoleUpdateInput, MembershipRoleUncheckedUpdateInput>
    }

    /**
     * MembershipRole delete
     */
    export type MembershipRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleInclude<ExtArgs> | null
        /**
         * Filter which MembershipRole to delete.
         */
        where: MembershipRoleWhereUniqueInput
    }

    /**
     * MembershipRole deleteMany
     */
    export type MembershipRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which MembershipRoles to delete
         */
        where?: MembershipRoleWhereInput
        /**
         * Limit how many MembershipRoles to delete.
         */
        limit?: number
    }

    /**
     * MembershipRole without action
     */
    export type MembershipRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the MembershipRole
         */
        select?: MembershipRoleSelect<ExtArgs> | null
        /**
         * Omit specific fields from the MembershipRole
         */
        omit?: MembershipRoleOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipRoleInclude<ExtArgs> | null
    }


    /**
     * Model Attendance
     */

    export type AggregateAttendance = {
        _count: AttendanceCountAggregateOutputType | null
        _min: AttendanceMinAggregateOutputType | null
        _max: AttendanceMaxAggregateOutputType | null
    }

    export type AttendanceMinAggregateOutputType = {
        id: string | null
        tenantId: string | null
        membershipId: string | null
        rfidTag: string | null
        authMethod: string | null
        checkInTime: Date | null
        checkOutTime: Date | null
    }

    export type AttendanceMaxAggregateOutputType = {
        id: string | null
        tenantId: string | null
        membershipId: string | null
        rfidTag: string | null
        authMethod: string | null
        checkInTime: Date | null
        checkOutTime: Date | null
    }

    export type AttendanceCountAggregateOutputType = {
        id: number
        tenantId: number
        membershipId: number
        rfidTag: number
        authMethod: number
        checkInTime: number
        checkOutTime: number
        _all: number
    }


    export type AttendanceMinAggregateInputType = {
        id?: true
        tenantId?: true
        membershipId?: true
        rfidTag?: true
        authMethod?: true
        checkInTime?: true
        checkOutTime?: true
    }

    export type AttendanceMaxAggregateInputType = {
        id?: true
        tenantId?: true
        membershipId?: true
        rfidTag?: true
        authMethod?: true
        checkInTime?: true
        checkOutTime?: true
    }

    export type AttendanceCountAggregateInputType = {
        id?: true
        tenantId?: true
        membershipId?: true
        rfidTag?: true
        authMethod?: true
        checkInTime?: true
        checkOutTime?: true
        _all?: true
    }

    export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Attendance to aggregate.
         */
        where?: AttendanceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Attendances to fetch.
         */
        orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: AttendanceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Attendances from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Attendances.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Attendances
         **/
        _count?: true | AttendanceCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: AttendanceMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: AttendanceMaxAggregateInputType
    }

    export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateAttendance[P]>
            : GetScalarType<T[P], AggregateAttendance[P]>
    }


    export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: AttendanceWhereInput
        orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
        by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
        having?: AttendanceScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: AttendanceCountAggregateInputType | true
        _min?: AttendanceMinAggregateInputType
        _max?: AttendanceMaxAggregateInputType
    }

    export type AttendanceGroupByOutputType = {
        id: string
        tenantId: string
        membershipId: string | null
        rfidTag: string | null
        authMethod: string
        checkInTime: Date
        checkOutTime: Date | null
        _count: AttendanceCountAggregateOutputType | null
        _min: AttendanceMinAggregateOutputType | null
        _max: AttendanceMaxAggregateOutputType | null
    }

    type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<AttendanceGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
                : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            }
        >
    >


    export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        tenantId?: boolean
        membershipId?: boolean
        rfidTag?: boolean
        authMethod?: boolean
        checkInTime?: boolean
        checkOutTime?: boolean
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        membership?: boolean | Attendance$membershipArgs<ExtArgs>
    }, ExtArgs["result"]["attendance"]>

    export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        tenantId?: boolean
        membershipId?: boolean
        rfidTag?: boolean
        authMethod?: boolean
        checkInTime?: boolean
        checkOutTime?: boolean
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        membership?: boolean | Attendance$membershipArgs<ExtArgs>
    }, ExtArgs["result"]["attendance"]>

    export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        tenantId?: boolean
        membershipId?: boolean
        rfidTag?: boolean
        authMethod?: boolean
        checkInTime?: boolean
        checkOutTime?: boolean
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        membership?: boolean | Attendance$membershipArgs<ExtArgs>
    }, ExtArgs["result"]["attendance"]>

    export type AttendanceSelectScalar = {
        id?: boolean
        tenantId?: boolean
        membershipId?: boolean
        rfidTag?: boolean
        authMethod?: boolean
        checkInTime?: boolean
        checkOutTime?: boolean
    }

    export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "membershipId" | "rfidTag" | "authMethod" | "checkInTime" | "checkOutTime", ExtArgs["result"]["attendance"]>
    export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        membership?: boolean | Attendance$membershipArgs<ExtArgs>
    }
    export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        membership?: boolean | Attendance$membershipArgs<ExtArgs>
    }
    export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        membership?: boolean | Attendance$membershipArgs<ExtArgs>
    }

    export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Attendance"
        objects: {
            tenant: Prisma.$TenantPayload<ExtArgs>
            membership: Prisma.$MembershipPayload<ExtArgs> | null
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            tenantId: string
            membershipId: string | null
            rfidTag: string | null
            authMethod: string
            checkInTime: Date
            checkOutTime: Date | null
        }, ExtArgs["result"]["attendance"]>
        composites: {}
    }

    type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

    type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: AttendanceCountAggregateInputType | true
    }

    export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the Attendance model
         */
        readonly fields: AttendanceFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }

        /**
         * Find zero or one Attendance that matches the filter.
         * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
         * @example
         * // Get one Attendance
         * const attendance = await prisma.attendance.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
         * @example
         * // Get one Attendance
         * const attendance = await prisma.attendance.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Attendance that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
         * @example
         * // Get one Attendance
         * const attendance = await prisma.attendance.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Attendance that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
         * @example
         * // Get one Attendance
         * const attendance = await prisma.attendance.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more Attendances that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Attendances
         * const attendances = await prisma.attendance.findMany()
         *
         * // Get first 10 Attendances
         * const attendances = await prisma.attendance.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
         *
         */
        findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a Attendance.
         * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
         * @example
         * // Create one Attendance
         * const Attendance = await prisma.attendance.create({
         *   data: {
         *     // ... data to create a Attendance
         *   }
         * })
         *
         */
        create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many Attendances.
         * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
         * @example
         * // Create many Attendances
         * const attendance = await prisma.attendance.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Attendances and returns the data saved in the database.
         * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
         * @example
         * // Create many Attendances
         * const attendance = await prisma.attendance.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Attendances and only return the `id`
         * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a Attendance.
         * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
         * @example
         * // Delete one Attendance
         * const Attendance = await prisma.attendance.delete({
         *   where: {
         *     // ... filter to delete one Attendance
         *   }
         * })
         *
         */
        delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one Attendance.
         * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
         * @example
         * // Update one Attendance
         * const attendance = await prisma.attendance.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more Attendances.
         * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
         * @example
         * // Delete a few Attendances
         * const { count } = await prisma.attendance.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Attendances.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Attendances
         * const attendance = await prisma.attendance.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Attendances and returns the data updated in the database.
         * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
         * @example
         * // Update many Attendances
         * const attendance = await prisma.attendance.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Attendances and only return the `id`
         * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one Attendance.
         * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
         * @example
         * // Update or create a Attendance
         * const attendance = await prisma.attendance.upsert({
         *   create: {
         *     // ... data to create a Attendance
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Attendance we want to update
         *   }
         * })
         */
        upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of Attendances.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
         * @example
         * // Count the number of Attendances
         * const count = await prisma.attendance.count({
         *   where: {
         *     // ... the filter for the Attendances we want to count
         *   }
         * })
         **/
        count<T extends AttendanceCountArgs>(
            args?: Subset<T, AttendanceCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Attendance.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

        /**
         * Group by Attendance.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AttendanceGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends AttendanceGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: AttendanceGroupByArgs['orderBy'] }
                : { orderBy?: AttendanceGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for Attendance.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        membership<T extends Attendance$membershipArgs<ExtArgs> = {}>(args?: Subset<T, Attendance$membershipArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the Attendance model
     */
    interface AttendanceFieldRefs {
        readonly id: FieldRef<"Attendance", 'String'>
        readonly tenantId: FieldRef<"Attendance", 'String'>
        readonly membershipId: FieldRef<"Attendance", 'String'>
        readonly rfidTag: FieldRef<"Attendance", 'String'>
        readonly authMethod: FieldRef<"Attendance", 'String'>
        readonly checkInTime: FieldRef<"Attendance", 'DateTime'>
        readonly checkOutTime: FieldRef<"Attendance", 'DateTime'>
    }


    // Custom InputTypes
    /**
     * Attendance findUnique
     */
    export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceInclude<ExtArgs> | null
        /**
         * Filter, which Attendance to fetch.
         */
        where: AttendanceWhereUniqueInput
    }

    /**
     * Attendance findUniqueOrThrow
     */
    export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceInclude<ExtArgs> | null
        /**
         * Filter, which Attendance to fetch.
         */
        where: AttendanceWhereUniqueInput
    }

    /**
     * Attendance findFirst
     */
    export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceInclude<ExtArgs> | null
        /**
         * Filter, which Attendance to fetch.
         */
        where?: AttendanceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Attendances to fetch.
         */
        orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Attendances.
         */
        cursor?: AttendanceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Attendances from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Attendances.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Attendances.
         */
        distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
    }

    /**
     * Attendance findFirstOrThrow
     */
    export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceInclude<ExtArgs> | null
        /**
         * Filter, which Attendance to fetch.
         */
        where?: AttendanceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Attendances to fetch.
         */
        orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Attendances.
         */
        cursor?: AttendanceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Attendances from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Attendances.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Attendances.
         */
        distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
    }

    /**
     * Attendance findMany
     */
    export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceInclude<ExtArgs> | null
        /**
         * Filter, which Attendances to fetch.
         */
        where?: AttendanceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Attendances to fetch.
         */
        orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Attendances.
         */
        cursor?: AttendanceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Attendances from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Attendances.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Attendances.
         */
        distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
    }

    /**
     * Attendance create
     */
    export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceInclude<ExtArgs> | null
        /**
         * The data needed to create a Attendance.
         */
        data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    }

    /**
     * Attendance createMany
     */
    export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Attendances.
         */
        data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Attendance createManyAndReturn
     */
    export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * The data used to create many Attendances.
         */
        data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * Attendance update
     */
    export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceInclude<ExtArgs> | null
        /**
         * The data needed to update a Attendance.
         */
        data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
        /**
         * Choose, which Attendance to update.
         */
        where: AttendanceWhereUniqueInput
    }

    /**
     * Attendance updateMany
     */
    export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Attendances.
         */
        data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
        /**
         * Filter which Attendances to update
         */
        where?: AttendanceWhereInput
        /**
         * Limit how many Attendances to update.
         */
        limit?: number
    }

    /**
     * Attendance updateManyAndReturn
     */
    export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * The data used to update Attendances.
         */
        data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
        /**
         * Filter which Attendances to update
         */
        where?: AttendanceWhereInput
        /**
         * Limit how many Attendances to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * Attendance upsert
     */
    export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceInclude<ExtArgs> | null
        /**
         * The filter to search for the Attendance to update in case it exists.
         */
        where: AttendanceWhereUniqueInput
        /**
         * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
         */
        create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
        /**
         * In case the Attendance was found with the provided `where` argument, update it with this data.
         */
        update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    }

    /**
     * Attendance delete
     */
    export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceInclude<ExtArgs> | null
        /**
         * Filter which Attendance to delete.
         */
        where: AttendanceWhereUniqueInput
    }

    /**
     * Attendance deleteMany
     */
    export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Attendances to delete
         */
        where?: AttendanceWhereInput
        /**
         * Limit how many Attendances to delete.
         */
        limit?: number
    }

    /**
     * Attendance.membership
     */
    export type Attendance$membershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Membership
         */
        select?: MembershipSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Membership
         */
        omit?: MembershipOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MembershipInclude<ExtArgs> | null
        where?: MembershipWhereInput
    }

    /**
     * Attendance without action
     */
    export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Attendance
         */
        select?: AttendanceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Attendance
         */
        omit?: AttendanceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AttendanceInclude<ExtArgs> | null
    }


    /**
     * Model Invoice
     */

    export type AggregateInvoice = {
        _count: InvoiceCountAggregateOutputType | null
        _avg: InvoiceAvgAggregateOutputType | null
        _sum: InvoiceSumAggregateOutputType | null
        _min: InvoiceMinAggregateOutputType | null
        _max: InvoiceMaxAggregateOutputType | null
    }

    export type InvoiceAvgAggregateOutputType = {
        totalAmount: Decimal | null
    }

    export type InvoiceSumAggregateOutputType = {
        totalAmount: Decimal | null
    }

    export type InvoiceMinAggregateOutputType = {
        id: string | null
        tenantId: string | null
        membershipId: string | null
        type: $Enums.InvoiceType | null
        status: $Enums.InvoiceStatus | null
        totalAmount: Decimal | null
        dueDate: Date | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type InvoiceMaxAggregateOutputType = {
        id: string | null
        tenantId: string | null
        membershipId: string | null
        type: $Enums.InvoiceType | null
        status: $Enums.InvoiceStatus | null
        totalAmount: Decimal | null
        dueDate: Date | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type InvoiceCountAggregateOutputType = {
        id: number
        tenantId: number
        membershipId: number
        type: number
        status: number
        totalAmount: number
        dueDate: number
        createdAt: number
        updatedAt: number
        _all: number
    }


    export type InvoiceAvgAggregateInputType = {
        totalAmount?: true
    }

    export type InvoiceSumAggregateInputType = {
        totalAmount?: true
    }

    export type InvoiceMinAggregateInputType = {
        id?: true
        tenantId?: true
        membershipId?: true
        type?: true
        status?: true
        totalAmount?: true
        dueDate?: true
        createdAt?: true
        updatedAt?: true
    }

    export type InvoiceMaxAggregateInputType = {
        id?: true
        tenantId?: true
        membershipId?: true
        type?: true
        status?: true
        totalAmount?: true
        dueDate?: true
        createdAt?: true
        updatedAt?: true
    }

    export type InvoiceCountAggregateInputType = {
        id?: true
        tenantId?: true
        membershipId?: true
        type?: true
        status?: true
        totalAmount?: true
        dueDate?: true
        createdAt?: true
        updatedAt?: true
        _all?: true
    }

    export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Invoice to aggregate.
         */
        where?: InvoiceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Invoices to fetch.
         */
        orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: InvoiceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Invoices from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Invoices.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Invoices
         **/
        _count?: true | InvoiceCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: InvoiceAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: InvoiceSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: InvoiceMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: InvoiceMaxAggregateInputType
    }

    export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateInvoice[P]>
            : GetScalarType<T[P], AggregateInvoice[P]>
    }


    export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: InvoiceWhereInput
        orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
        by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
        having?: InvoiceScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: InvoiceCountAggregateInputType | true
        _avg?: InvoiceAvgAggregateInputType
        _sum?: InvoiceSumAggregateInputType
        _min?: InvoiceMinAggregateInputType
        _max?: InvoiceMaxAggregateInputType
    }

    export type InvoiceGroupByOutputType = {
        id: string
        tenantId: string
        membershipId: string
        type: $Enums.InvoiceType
        status: $Enums.InvoiceStatus
        totalAmount: Decimal
        dueDate: Date | null
        createdAt: Date
        updatedAt: Date
        _count: InvoiceCountAggregateOutputType | null
        _avg: InvoiceAvgAggregateOutputType | null
        _sum: InvoiceSumAggregateOutputType | null
        _min: InvoiceMinAggregateOutputType | null
        _max: InvoiceMaxAggregateOutputType | null
    }

    type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<InvoiceGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
                : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            }
        >
    >


    export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        tenantId?: boolean
        membershipId?: boolean
        type?: boolean
        status?: boolean
        totalAmount?: boolean
        dueDate?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
        payments?: boolean | Invoice$paymentsArgs<ExtArgs>
        items?: boolean | Invoice$itemsArgs<ExtArgs>
        _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["invoice"]>

    export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        tenantId?: boolean
        membershipId?: boolean
        type?: boolean
        status?: boolean
        totalAmount?: boolean
        dueDate?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["invoice"]>

    export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        tenantId?: boolean
        membershipId?: boolean
        type?: boolean
        status?: boolean
        totalAmount?: boolean
        dueDate?: boolean
        createdAt?: boolean
        updatedAt?: boolean
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["invoice"]>

    export type InvoiceSelectScalar = {
        id?: boolean
        tenantId?: boolean
        membershipId?: boolean
        type?: boolean
        status?: boolean
        totalAmount?: boolean
        dueDate?: boolean
        createdAt?: boolean
        updatedAt?: boolean
    }

    export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "membershipId" | "type" | "status" | "totalAmount" | "dueDate" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
    export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
        payments?: boolean | Invoice$paymentsArgs<ExtArgs>
        items?: boolean | Invoice$itemsArgs<ExtArgs>
        _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }
    export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }

    export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Invoice"
        objects: {
            tenant: Prisma.$TenantPayload<ExtArgs>
            membership: Prisma.$MembershipPayload<ExtArgs>
            payments: Prisma.$PaymentPayload<ExtArgs>[]
            items: Prisma.$InvoiceItemPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            tenantId: string
            membershipId: string
            type: $Enums.InvoiceType
            status: $Enums.InvoiceStatus
            totalAmount: Prisma.Decimal
            dueDate: Date | null
            createdAt: Date
            updatedAt: Date
        }, ExtArgs["result"]["invoice"]>
        composites: {}
    }

    type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

    type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: InvoiceCountAggregateInputType | true
    }

    export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the Invoice model
         */
        readonly fields: InvoiceFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }

        /**
         * Find zero or one Invoice that matches the filter.
         * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
         * @example
         * // Get one Invoice
         * const invoice = await prisma.invoice.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
         * @example
         * // Get one Invoice
         * const invoice = await prisma.invoice.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Invoice that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
         * @example
         * // Get one Invoice
         * const invoice = await prisma.invoice.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Invoice that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
         * @example
         * // Get one Invoice
         * const invoice = await prisma.invoice.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more Invoices that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Invoices
         * const invoices = await prisma.invoice.findMany()
         *
         * // Get first 10 Invoices
         * const invoices = await prisma.invoice.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
         *
         */
        findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a Invoice.
         * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
         * @example
         * // Create one Invoice
         * const Invoice = await prisma.invoice.create({
         *   data: {
         *     // ... data to create a Invoice
         *   }
         * })
         *
         */
        create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many Invoices.
         * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
         * @example
         * // Create many Invoices
         * const invoice = await prisma.invoice.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Invoices and returns the data saved in the database.
         * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
         * @example
         * // Create many Invoices
         * const invoice = await prisma.invoice.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Invoices and only return the `id`
         * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a Invoice.
         * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
         * @example
         * // Delete one Invoice
         * const Invoice = await prisma.invoice.delete({
         *   where: {
         *     // ... filter to delete one Invoice
         *   }
         * })
         *
         */
        delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one Invoice.
         * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
         * @example
         * // Update one Invoice
         * const invoice = await prisma.invoice.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more Invoices.
         * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
         * @example
         * // Delete a few Invoices
         * const { count } = await prisma.invoice.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Invoices.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Invoices
         * const invoice = await prisma.invoice.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Invoices and returns the data updated in the database.
         * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
         * @example
         * // Update many Invoices
         * const invoice = await prisma.invoice.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Invoices and only return the `id`
         * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one Invoice.
         * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
         * @example
         * // Update or create a Invoice
         * const invoice = await prisma.invoice.upsert({
         *   create: {
         *     // ... data to create a Invoice
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Invoice we want to update
         *   }
         * })
         */
        upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of Invoices.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
         * @example
         * // Count the number of Invoices
         * const count = await prisma.invoice.count({
         *   where: {
         *     // ... the filter for the Invoices we want to count
         *   }
         * })
         **/
        count<T extends InvoiceCountArgs>(
            args?: Subset<T, InvoiceCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Invoice.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

        /**
         * Group by Invoice.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends InvoiceGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: InvoiceGroupByArgs['orderBy'] }
                : { orderBy?: InvoiceGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for Invoice.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        membership<T extends MembershipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembershipDefaultArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        payments<T extends Invoice$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        items<T extends Invoice$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the Invoice model
     */
    interface InvoiceFieldRefs {
        readonly id: FieldRef<"Invoice", 'String'>
        readonly tenantId: FieldRef<"Invoice", 'String'>
        readonly membershipId: FieldRef<"Invoice", 'String'>
        readonly type: FieldRef<"Invoice", 'InvoiceType'>
        readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
        readonly totalAmount: FieldRef<"Invoice", 'Decimal'>
        readonly dueDate: FieldRef<"Invoice", 'DateTime'>
        readonly createdAt: FieldRef<"Invoice", 'DateTime'>
        readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
    }


    // Custom InputTypes
    /**
     * Invoice findUnique
     */
    export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceInclude<ExtArgs> | null
        /**
         * Filter, which Invoice to fetch.
         */
        where: InvoiceWhereUniqueInput
    }

    /**
     * Invoice findUniqueOrThrow
     */
    export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceInclude<ExtArgs> | null
        /**
         * Filter, which Invoice to fetch.
         */
        where: InvoiceWhereUniqueInput
    }

    /**
     * Invoice findFirst
     */
    export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceInclude<ExtArgs> | null
        /**
         * Filter, which Invoice to fetch.
         */
        where?: InvoiceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Invoices to fetch.
         */
        orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Invoices.
         */
        cursor?: InvoiceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Invoices from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Invoices.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Invoices.
         */
        distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
    }

    /**
     * Invoice findFirstOrThrow
     */
    export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceInclude<ExtArgs> | null
        /**
         * Filter, which Invoice to fetch.
         */
        where?: InvoiceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Invoices to fetch.
         */
        orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Invoices.
         */
        cursor?: InvoiceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Invoices from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Invoices.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Invoices.
         */
        distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
    }

    /**
     * Invoice findMany
     */
    export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceInclude<ExtArgs> | null
        /**
         * Filter, which Invoices to fetch.
         */
        where?: InvoiceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Invoices to fetch.
         */
        orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Invoices.
         */
        cursor?: InvoiceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Invoices from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Invoices.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Invoices.
         */
        distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
    }

    /**
     * Invoice create
     */
    export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceInclude<ExtArgs> | null
        /**
         * The data needed to create a Invoice.
         */
        data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    }

    /**
     * Invoice createMany
     */
    export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Invoices.
         */
        data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Invoice createManyAndReturn
     */
    export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * The data used to create many Invoices.
         */
        data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * Invoice update
     */
    export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceInclude<ExtArgs> | null
        /**
         * The data needed to update a Invoice.
         */
        data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
        /**
         * Choose, which Invoice to update.
         */
        where: InvoiceWhereUniqueInput
    }

    /**
     * Invoice updateMany
     */
    export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Invoices.
         */
        data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
        /**
         * Filter which Invoices to update
         */
        where?: InvoiceWhereInput
        /**
         * Limit how many Invoices to update.
         */
        limit?: number
    }

    /**
     * Invoice updateManyAndReturn
     */
    export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * The data used to update Invoices.
         */
        data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
        /**
         * Filter which Invoices to update
         */
        where?: InvoiceWhereInput
        /**
         * Limit how many Invoices to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * Invoice upsert
     */
    export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceInclude<ExtArgs> | null
        /**
         * The filter to search for the Invoice to update in case it exists.
         */
        where: InvoiceWhereUniqueInput
        /**
         * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
         */
        create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
        /**
         * In case the Invoice was found with the provided `where` argument, update it with this data.
         */
        update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    }

    /**
     * Invoice delete
     */
    export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceInclude<ExtArgs> | null
        /**
         * Filter which Invoice to delete.
         */
        where: InvoiceWhereUniqueInput
    }

    /**
     * Invoice deleteMany
     */
    export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Invoices to delete
         */
        where?: InvoiceWhereInput
        /**
         * Limit how many Invoices to delete.
         */
        limit?: number
    }

    /**
     * Invoice.payments
     */
    export type Invoice$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        where?: PaymentWhereInput
        orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
        cursor?: PaymentWhereUniqueInput
        take?: number
        skip?: number
        distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
    }

    /**
     * Invoice.items
     */
    export type Invoice$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelect<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemInclude<ExtArgs> | null
        where?: InvoiceItemWhereInput
        orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
        cursor?: InvoiceItemWhereUniqueInput
        take?: number
        skip?: number
        distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
    }

    /**
     * Invoice without action
     */
    export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Invoice
         */
        select?: InvoiceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Invoice
         */
        omit?: InvoiceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceInclude<ExtArgs> | null
    }


    /**
     * Model InvoiceItem
     */

    export type AggregateInvoiceItem = {
        _count: InvoiceItemCountAggregateOutputType | null
        _avg: InvoiceItemAvgAggregateOutputType | null
        _sum: InvoiceItemSumAggregateOutputType | null
        _min: InvoiceItemMinAggregateOutputType | null
        _max: InvoiceItemMaxAggregateOutputType | null
    }

    export type InvoiceItemAvgAggregateOutputType = {
        amount: Decimal | null
    }

    export type InvoiceItemSumAggregateOutputType = {
        amount: Decimal | null
    }

    export type InvoiceItemMinAggregateOutputType = {
        id: string | null
        invoiceId: string | null
        description: string | null
        amount: Decimal | null
    }

    export type InvoiceItemMaxAggregateOutputType = {
        id: string | null
        invoiceId: string | null
        description: string | null
        amount: Decimal | null
    }

    export type InvoiceItemCountAggregateOutputType = {
        id: number
        invoiceId: number
        description: number
        amount: number
        _all: number
    }


    export type InvoiceItemAvgAggregateInputType = {
        amount?: true
    }

    export type InvoiceItemSumAggregateInputType = {
        amount?: true
    }

    export type InvoiceItemMinAggregateInputType = {
        id?: true
        invoiceId?: true
        description?: true
        amount?: true
    }

    export type InvoiceItemMaxAggregateInputType = {
        id?: true
        invoiceId?: true
        description?: true
        amount?: true
    }

    export type InvoiceItemCountAggregateInputType = {
        id?: true
        invoiceId?: true
        description?: true
        amount?: true
        _all?: true
    }

    export type InvoiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which InvoiceItem to aggregate.
         */
        where?: InvoiceItemWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of InvoiceItems to fetch.
         */
        orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: InvoiceItemWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` InvoiceItems from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` InvoiceItems.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned InvoiceItems
         **/
        _count?: true | InvoiceItemCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: InvoiceItemAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: InvoiceItemSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: InvoiceItemMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: InvoiceItemMaxAggregateInputType
    }

    export type GetInvoiceItemAggregateType<T extends InvoiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceItem]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateInvoiceItem[P]>
            : GetScalarType<T[P], AggregateInvoiceItem[P]>
    }


    export type InvoiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: InvoiceItemWhereInput
        orderBy?: InvoiceItemOrderByWithAggregationInput | InvoiceItemOrderByWithAggregationInput[]
        by: InvoiceItemScalarFieldEnum[] | InvoiceItemScalarFieldEnum
        having?: InvoiceItemScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: InvoiceItemCountAggregateInputType | true
        _avg?: InvoiceItemAvgAggregateInputType
        _sum?: InvoiceItemSumAggregateInputType
        _min?: InvoiceItemMinAggregateInputType
        _max?: InvoiceItemMaxAggregateInputType
    }

    export type InvoiceItemGroupByOutputType = {
        id: string
        invoiceId: string
        description: string
        amount: Decimal
        _count: InvoiceItemCountAggregateOutputType | null
        _avg: InvoiceItemAvgAggregateOutputType | null
        _sum: InvoiceItemSumAggregateOutputType | null
        _min: InvoiceItemMinAggregateOutputType | null
        _max: InvoiceItemMaxAggregateOutputType | null
    }

    type GetInvoiceItemGroupByPayload<T extends InvoiceItemGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<InvoiceItemGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof InvoiceItemGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
                : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
            }
        >
    >


    export type InvoiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        invoiceId?: boolean
        description?: boolean
        amount?: boolean
        invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["invoiceItem"]>

    export type InvoiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        invoiceId?: boolean
        description?: boolean
        amount?: boolean
        invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["invoiceItem"]>

    export type InvoiceItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        invoiceId?: boolean
        description?: boolean
        amount?: boolean
        invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["invoiceItem"]>

    export type InvoiceItemSelectScalar = {
        id?: boolean
        invoiceId?: boolean
        description?: boolean
        amount?: boolean
    }

    export type InvoiceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "description" | "amount", ExtArgs["result"]["invoiceItem"]>
    export type InvoiceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    }
    export type InvoiceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    }
    export type InvoiceItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    }

    export type $InvoiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "InvoiceItem"
        objects: {
            invoice: Prisma.$InvoicePayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            invoiceId: string
            description: string
            amount: Prisma.Decimal
        }, ExtArgs["result"]["invoiceItem"]>
        composites: {}
    }

    type InvoiceItemGetPayload<S extends boolean | null | undefined | InvoiceItemDefaultArgs> = $Result.GetResult<Prisma.$InvoiceItemPayload, S>

    type InvoiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<InvoiceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: InvoiceItemCountAggregateInputType | true
    }

    export interface InvoiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the InvoiceItem model
         */
        readonly fields: InvoiceItemFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceItem'], meta: { name: 'InvoiceItem' } }

        /**
         * Find zero or one InvoiceItem that matches the filter.
         * @param {InvoiceItemFindUniqueArgs} args - Arguments to find a InvoiceItem
         * @example
         * // Get one InvoiceItem
         * const invoiceItem = await prisma.invoiceItem.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends InvoiceItemFindUniqueArgs>(args: SelectSubset<T, InvoiceItemFindUniqueArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one InvoiceItem that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {InvoiceItemFindUniqueOrThrowArgs} args - Arguments to find a InvoiceItem
         * @example
         * // Get one InvoiceItem
         * const invoiceItem = await prisma.invoiceItem.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends InvoiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first InvoiceItem that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceItemFindFirstArgs} args - Arguments to find a InvoiceItem
         * @example
         * // Get one InvoiceItem
         * const invoiceItem = await prisma.invoiceItem.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends InvoiceItemFindFirstArgs>(args?: SelectSubset<T, InvoiceItemFindFirstArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first InvoiceItem that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceItemFindFirstOrThrowArgs} args - Arguments to find a InvoiceItem
         * @example
         * // Get one InvoiceItem
         * const invoiceItem = await prisma.invoiceItem.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends InvoiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more InvoiceItems that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all InvoiceItems
         * const invoiceItems = await prisma.invoiceItem.findMany()
         *
         * // Get first 10 InvoiceItems
         * const invoiceItems = await prisma.invoiceItem.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const invoiceItemWithIdOnly = await prisma.invoiceItem.findMany({ select: { id: true } })
         *
         */
        findMany<T extends InvoiceItemFindManyArgs>(args?: SelectSubset<T, InvoiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a InvoiceItem.
         * @param {InvoiceItemCreateArgs} args - Arguments to create a InvoiceItem.
         * @example
         * // Create one InvoiceItem
         * const InvoiceItem = await prisma.invoiceItem.create({
         *   data: {
         *     // ... data to create a InvoiceItem
         *   }
         * })
         *
         */
        create<T extends InvoiceItemCreateArgs>(args: SelectSubset<T, InvoiceItemCreateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many InvoiceItems.
         * @param {InvoiceItemCreateManyArgs} args - Arguments to create many InvoiceItems.
         * @example
         * // Create many InvoiceItems
         * const invoiceItem = await prisma.invoiceItem.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends InvoiceItemCreateManyArgs>(args?: SelectSubset<T, InvoiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many InvoiceItems and returns the data saved in the database.
         * @param {InvoiceItemCreateManyAndReturnArgs} args - Arguments to create many InvoiceItems.
         * @example
         * // Create many InvoiceItems
         * const invoiceItem = await prisma.invoiceItem.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many InvoiceItems and only return the `id`
         * const invoiceItemWithIdOnly = await prisma.invoiceItem.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends InvoiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a InvoiceItem.
         * @param {InvoiceItemDeleteArgs} args - Arguments to delete one InvoiceItem.
         * @example
         * // Delete one InvoiceItem
         * const InvoiceItem = await prisma.invoiceItem.delete({
         *   where: {
         *     // ... filter to delete one InvoiceItem
         *   }
         * })
         *
         */
        delete<T extends InvoiceItemDeleteArgs>(args: SelectSubset<T, InvoiceItemDeleteArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one InvoiceItem.
         * @param {InvoiceItemUpdateArgs} args - Arguments to update one InvoiceItem.
         * @example
         * // Update one InvoiceItem
         * const invoiceItem = await prisma.invoiceItem.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends InvoiceItemUpdateArgs>(args: SelectSubset<T, InvoiceItemUpdateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more InvoiceItems.
         * @param {InvoiceItemDeleteManyArgs} args - Arguments to filter InvoiceItems to delete.
         * @example
         * // Delete a few InvoiceItems
         * const { count } = await prisma.invoiceItem.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends InvoiceItemDeleteManyArgs>(args?: SelectSubset<T, InvoiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more InvoiceItems.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceItemUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many InvoiceItems
         * const invoiceItem = await prisma.invoiceItem.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends InvoiceItemUpdateManyArgs>(args: SelectSubset<T, InvoiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more InvoiceItems and returns the data updated in the database.
         * @param {InvoiceItemUpdateManyAndReturnArgs} args - Arguments to update many InvoiceItems.
         * @example
         * // Update many InvoiceItems
         * const invoiceItem = await prisma.invoiceItem.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more InvoiceItems and only return the `id`
         * const invoiceItemWithIdOnly = await prisma.invoiceItem.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends InvoiceItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one InvoiceItem.
         * @param {InvoiceItemUpsertArgs} args - Arguments to update or create a InvoiceItem.
         * @example
         * // Update or create a InvoiceItem
         * const invoiceItem = await prisma.invoiceItem.upsert({
         *   create: {
         *     // ... data to create a InvoiceItem
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the InvoiceItem we want to update
         *   }
         * })
         */
        upsert<T extends InvoiceItemUpsertArgs>(args: SelectSubset<T, InvoiceItemUpsertArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of InvoiceItems.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceItemCountArgs} args - Arguments to filter InvoiceItems to count.
         * @example
         * // Count the number of InvoiceItems
         * const count = await prisma.invoiceItem.count({
         *   where: {
         *     // ... the filter for the InvoiceItems we want to count
         *   }
         * })
         **/
        count<T extends InvoiceItemCountArgs>(
            args?: Subset<T, InvoiceItemCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], InvoiceItemCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a InvoiceItem.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends InvoiceItemAggregateArgs>(args: Subset<T, InvoiceItemAggregateArgs>): Prisma.PrismaPromise<GetInvoiceItemAggregateType<T>>

        /**
         * Group by InvoiceItem.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InvoiceItemGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends InvoiceItemGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: InvoiceItemGroupByArgs['orderBy'] }
                : { orderBy?: InvoiceItemGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, InvoiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for InvoiceItem.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__InvoiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the InvoiceItem model
     */
    interface InvoiceItemFieldRefs {
        readonly id: FieldRef<"InvoiceItem", 'String'>
        readonly invoiceId: FieldRef<"InvoiceItem", 'String'>
        readonly description: FieldRef<"InvoiceItem", 'String'>
        readonly amount: FieldRef<"InvoiceItem", 'Decimal'>
    }


    // Custom InputTypes
    /**
     * InvoiceItem findUnique
     */
    export type InvoiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelect<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemInclude<ExtArgs> | null
        /**
         * Filter, which InvoiceItem to fetch.
         */
        where: InvoiceItemWhereUniqueInput
    }

    /**
     * InvoiceItem findUniqueOrThrow
     */
    export type InvoiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelect<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemInclude<ExtArgs> | null
        /**
         * Filter, which InvoiceItem to fetch.
         */
        where: InvoiceItemWhereUniqueInput
    }

    /**
     * InvoiceItem findFirst
     */
    export type InvoiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelect<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemInclude<ExtArgs> | null
        /**
         * Filter, which InvoiceItem to fetch.
         */
        where?: InvoiceItemWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of InvoiceItems to fetch.
         */
        orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for InvoiceItems.
         */
        cursor?: InvoiceItemWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` InvoiceItems from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` InvoiceItems.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of InvoiceItems.
         */
        distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
    }

    /**
     * InvoiceItem findFirstOrThrow
     */
    export type InvoiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelect<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemInclude<ExtArgs> | null
        /**
         * Filter, which InvoiceItem to fetch.
         */
        where?: InvoiceItemWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of InvoiceItems to fetch.
         */
        orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for InvoiceItems.
         */
        cursor?: InvoiceItemWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` InvoiceItems from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` InvoiceItems.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of InvoiceItems.
         */
        distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
    }

    /**
     * InvoiceItem findMany
     */
    export type InvoiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelect<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemInclude<ExtArgs> | null
        /**
         * Filter, which InvoiceItems to fetch.
         */
        where?: InvoiceItemWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of InvoiceItems to fetch.
         */
        orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing InvoiceItems.
         */
        cursor?: InvoiceItemWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` InvoiceItems from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` InvoiceItems.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of InvoiceItems.
         */
        distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
    }

    /**
     * InvoiceItem create
     */
    export type InvoiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelect<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemInclude<ExtArgs> | null
        /**
         * The data needed to create a InvoiceItem.
         */
        data: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
    }

    /**
     * InvoiceItem createMany
     */
    export type InvoiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many InvoiceItems.
         */
        data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * InvoiceItem createManyAndReturn
     */
    export type InvoiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * The data used to create many InvoiceItems.
         */
        data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * InvoiceItem update
     */
    export type InvoiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelect<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemInclude<ExtArgs> | null
        /**
         * The data needed to update a InvoiceItem.
         */
        data: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
        /**
         * Choose, which InvoiceItem to update.
         */
        where: InvoiceItemWhereUniqueInput
    }

    /**
     * InvoiceItem updateMany
     */
    export type InvoiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update InvoiceItems.
         */
        data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
        /**
         * Filter which InvoiceItems to update
         */
        where?: InvoiceItemWhereInput
        /**
         * Limit how many InvoiceItems to update.
         */
        limit?: number
    }

    /**
     * InvoiceItem updateManyAndReturn
     */
    export type InvoiceItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * The data used to update InvoiceItems.
         */
        data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
        /**
         * Filter which InvoiceItems to update
         */
        where?: InvoiceItemWhereInput
        /**
         * Limit how many InvoiceItems to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * InvoiceItem upsert
     */
    export type InvoiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelect<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemInclude<ExtArgs> | null
        /**
         * The filter to search for the InvoiceItem to update in case it exists.
         */
        where: InvoiceItemWhereUniqueInput
        /**
         * In case the InvoiceItem found by the `where` argument doesn't exist, create a new InvoiceItem with this data.
         */
        create: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
        /**
         * In case the InvoiceItem was found with the provided `where` argument, update it with this data.
         */
        update: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
    }

    /**
     * InvoiceItem delete
     */
    export type InvoiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelect<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemInclude<ExtArgs> | null
        /**
         * Filter which InvoiceItem to delete.
         */
        where: InvoiceItemWhereUniqueInput
    }

    /**
     * InvoiceItem deleteMany
     */
    export type InvoiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which InvoiceItems to delete
         */
        where?: InvoiceItemWhereInput
        /**
         * Limit how many InvoiceItems to delete.
         */
        limit?: number
    }

    /**
     * InvoiceItem without action
     */
    export type InvoiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the InvoiceItem
         */
        select?: InvoiceItemSelect<ExtArgs> | null
        /**
         * Omit specific fields from the InvoiceItem
         */
        omit?: InvoiceItemOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InvoiceItemInclude<ExtArgs> | null
    }


    /**
     * Model Payment
     */

    export type AggregatePayment = {
        _count: PaymentCountAggregateOutputType | null
        _avg: PaymentAvgAggregateOutputType | null
        _sum: PaymentSumAggregateOutputType | null
        _min: PaymentMinAggregateOutputType | null
        _max: PaymentMaxAggregateOutputType | null
    }

    export type PaymentAvgAggregateOutputType = {
        amount: Decimal | null
    }

    export type PaymentSumAggregateOutputType = {
        amount: Decimal | null
    }

    export type PaymentMinAggregateOutputType = {
        id: string | null
        invoiceId: string | null
        amount: Decimal | null
        method: $Enums.PaymentMethod | null
        gatewayTxId: string | null
        status: $Enums.PaymentStatus | null
        processedAt: Date | null
    }

    export type PaymentMaxAggregateOutputType = {
        id: string | null
        invoiceId: string | null
        amount: Decimal | null
        method: $Enums.PaymentMethod | null
        gatewayTxId: string | null
        status: $Enums.PaymentStatus | null
        processedAt: Date | null
    }

    export type PaymentCountAggregateOutputType = {
        id: number
        invoiceId: number
        amount: number
        method: number
        gatewayTxId: number
        status: number
        processedAt: number
        _all: number
    }


    export type PaymentAvgAggregateInputType = {
        amount?: true
    }

    export type PaymentSumAggregateInputType = {
        amount?: true
    }

    export type PaymentMinAggregateInputType = {
        id?: true
        invoiceId?: true
        amount?: true
        method?: true
        gatewayTxId?: true
        status?: true
        processedAt?: true
    }

    export type PaymentMaxAggregateInputType = {
        id?: true
        invoiceId?: true
        amount?: true
        method?: true
        gatewayTxId?: true
        status?: true
        processedAt?: true
    }

    export type PaymentCountAggregateInputType = {
        id?: true
        invoiceId?: true
        amount?: true
        method?: true
        gatewayTxId?: true
        status?: true
        processedAt?: true
        _all?: true
    }

    export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Payment to aggregate.
         */
        where?: PaymentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Payments to fetch.
         */
        orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: PaymentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Payments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Payments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Payments
         **/
        _count?: true | PaymentCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: PaymentAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: PaymentSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: PaymentMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: PaymentMaxAggregateInputType
    }

    export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregatePayment[P]>
            : GetScalarType<T[P], AggregatePayment[P]>
    }


    export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: PaymentWhereInput
        orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
        by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
        having?: PaymentScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: PaymentCountAggregateInputType | true
        _avg?: PaymentAvgAggregateInputType
        _sum?: PaymentSumAggregateInputType
        _min?: PaymentMinAggregateInputType
        _max?: PaymentMaxAggregateInputType
    }

    export type PaymentGroupByOutputType = {
        id: string
        invoiceId: string
        amount: Decimal
        method: $Enums.PaymentMethod
        gatewayTxId: string | null
        status: $Enums.PaymentStatus
        processedAt: Date
        _count: PaymentCountAggregateOutputType | null
        _avg: PaymentAvgAggregateOutputType | null
        _sum: PaymentSumAggregateOutputType | null
        _min: PaymentMinAggregateOutputType | null
        _max: PaymentMaxAggregateOutputType | null
    }

    type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<PaymentGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], PaymentGroupByOutputType[P]>
                : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            }
        >
    >


    export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        invoiceId?: boolean
        amount?: boolean
        method?: boolean
        gatewayTxId?: boolean
        status?: boolean
        processedAt?: boolean
        invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["payment"]>

    export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        invoiceId?: boolean
        amount?: boolean
        method?: boolean
        gatewayTxId?: boolean
        status?: boolean
        processedAt?: boolean
        invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["payment"]>

    export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        invoiceId?: boolean
        amount?: boolean
        method?: boolean
        gatewayTxId?: boolean
        status?: boolean
        processedAt?: boolean
        invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["payment"]>

    export type PaymentSelectScalar = {
        id?: boolean
        invoiceId?: boolean
        amount?: boolean
        method?: boolean
        gatewayTxId?: boolean
        status?: boolean
        processedAt?: boolean
    }

    export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "amount" | "method" | "gatewayTxId" | "status" | "processedAt", ExtArgs["result"]["payment"]>
    export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    }
    export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    }
    export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    }

    export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Payment"
        objects: {
            invoice: Prisma.$InvoicePayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            invoiceId: string
            amount: Prisma.Decimal
            method: $Enums.PaymentMethod
            gatewayTxId: string | null
            status: $Enums.PaymentStatus
            processedAt: Date
        }, ExtArgs["result"]["payment"]>
        composites: {}
    }

    type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

    type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: PaymentCountAggregateInputType | true
    }

    export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the Payment model
         */
        readonly fields: PaymentFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }

        /**
         * Find zero or one Payment that matches the filter.
         * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
         * @example
         * // Get one Payment
         * const payment = await prisma.payment.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
         * @example
         * // Get one Payment
         * const payment = await prisma.payment.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Payment that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
         * @example
         * // Get one Payment
         * const payment = await prisma.payment.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Payment that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
         * @example
         * // Get one Payment
         * const payment = await prisma.payment.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more Payments that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Payments
         * const payments = await prisma.payment.findMany()
         *
         * // Get first 10 Payments
         * const payments = await prisma.payment.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
         *
         */
        findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a Payment.
         * @param {PaymentCreateArgs} args - Arguments to create a Payment.
         * @example
         * // Create one Payment
         * const Payment = await prisma.payment.create({
         *   data: {
         *     // ... data to create a Payment
         *   }
         * })
         *
         */
        create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many Payments.
         * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
         * @example
         * // Create many Payments
         * const payment = await prisma.payment.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Payments and returns the data saved in the database.
         * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
         * @example
         * // Create many Payments
         * const payment = await prisma.payment.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Payments and only return the `id`
         * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a Payment.
         * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
         * @example
         * // Delete one Payment
         * const Payment = await prisma.payment.delete({
         *   where: {
         *     // ... filter to delete one Payment
         *   }
         * })
         *
         */
        delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one Payment.
         * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
         * @example
         * // Update one Payment
         * const payment = await prisma.payment.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more Payments.
         * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
         * @example
         * // Delete a few Payments
         * const { count } = await prisma.payment.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Payments.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Payments
         * const payment = await prisma.payment.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Payments and returns the data updated in the database.
         * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
         * @example
         * // Update many Payments
         * const payment = await prisma.payment.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Payments and only return the `id`
         * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one Payment.
         * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
         * @example
         * // Update or create a Payment
         * const payment = await prisma.payment.upsert({
         *   create: {
         *     // ... data to create a Payment
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Payment we want to update
         *   }
         * })
         */
        upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of Payments.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
         * @example
         * // Count the number of Payments
         * const count = await prisma.payment.count({
         *   where: {
         *     // ... the filter for the Payments we want to count
         *   }
         * })
         **/
        count<T extends PaymentCountArgs>(
            args?: Subset<T, PaymentCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], PaymentCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Payment.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

        /**
         * Group by Payment.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PaymentGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends PaymentGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: PaymentGroupByArgs['orderBy'] }
                : { orderBy?: PaymentGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for Payment.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the Payment model
     */
    interface PaymentFieldRefs {
        readonly id: FieldRef<"Payment", 'String'>
        readonly invoiceId: FieldRef<"Payment", 'String'>
        readonly amount: FieldRef<"Payment", 'Decimal'>
        readonly method: FieldRef<"Payment", 'PaymentMethod'>
        readonly gatewayTxId: FieldRef<"Payment", 'String'>
        readonly status: FieldRef<"Payment", 'PaymentStatus'>
        readonly processedAt: FieldRef<"Payment", 'DateTime'>
    }


    // Custom InputTypes
    /**
     * Payment findUnique
     */
    export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * Filter, which Payment to fetch.
         */
        where: PaymentWhereUniqueInput
    }

    /**
     * Payment findUniqueOrThrow
     */
    export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * Filter, which Payment to fetch.
         */
        where: PaymentWhereUniqueInput
    }

    /**
     * Payment findFirst
     */
    export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * Filter, which Payment to fetch.
         */
        where?: PaymentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Payments to fetch.
         */
        orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Payments.
         */
        cursor?: PaymentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Payments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Payments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Payments.
         */
        distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
    }

    /**
     * Payment findFirstOrThrow
     */
    export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * Filter, which Payment to fetch.
         */
        where?: PaymentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Payments to fetch.
         */
        orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Payments.
         */
        cursor?: PaymentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Payments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Payments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Payments.
         */
        distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
    }

    /**
     * Payment findMany
     */
    export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * Filter, which Payments to fetch.
         */
        where?: PaymentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Payments to fetch.
         */
        orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Payments.
         */
        cursor?: PaymentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Payments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Payments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Payments.
         */
        distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
    }

    /**
     * Payment create
     */
    export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * The data needed to create a Payment.
         */
        data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    }

    /**
     * Payment createMany
     */
    export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Payments.
         */
        data: PaymentCreateManyInput | PaymentCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Payment createManyAndReturn
     */
    export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * The data used to create many Payments.
         */
        data: PaymentCreateManyInput | PaymentCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * Payment update
     */
    export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * The data needed to update a Payment.
         */
        data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
        /**
         * Choose, which Payment to update.
         */
        where: PaymentWhereUniqueInput
    }

    /**
     * Payment updateMany
     */
    export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Payments.
         */
        data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
        /**
         * Filter which Payments to update
         */
        where?: PaymentWhereInput
        /**
         * Limit how many Payments to update.
         */
        limit?: number
    }

    /**
     * Payment updateManyAndReturn
     */
    export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * The data used to update Payments.
         */
        data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
        /**
         * Filter which Payments to update
         */
        where?: PaymentWhereInput
        /**
         * Limit how many Payments to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * Payment upsert
     */
    export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * The filter to search for the Payment to update in case it exists.
         */
        where: PaymentWhereUniqueInput
        /**
         * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
         */
        create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
        /**
         * In case the Payment was found with the provided `where` argument, update it with this data.
         */
        update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    }

    /**
     * Payment delete
     */
    export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
        /**
         * Filter which Payment to delete.
         */
        where: PaymentWhereUniqueInput
    }

    /**
     * Payment deleteMany
     */
    export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Payments to delete
         */
        where?: PaymentWhereInput
        /**
         * Limit how many Payments to delete.
         */
        limit?: number
    }

    /**
     * Payment without action
     */
    export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Payment
         */
        select?: PaymentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Payment
         */
        omit?: PaymentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PaymentInclude<ExtArgs> | null
    }


    /**
     * Model Resource
     */

    export type AggregateResource = {
        _count: ResourceCountAggregateOutputType | null
        _avg: ResourceAvgAggregateOutputType | null
        _sum: ResourceSumAggregateOutputType | null
        _min: ResourceMinAggregateOutputType | null
        _max: ResourceMaxAggregateOutputType | null
    }

    export type ResourceAvgAggregateOutputType = {
        capacity: number | null
    }

    export type ResourceSumAggregateOutputType = {
        capacity: number | null
    }

    export type ResourceMinAggregateOutputType = {
        id: string | null
        tenantId: string | null
        name: string | null
        type: $Enums.ResourceType | null
        capacity: number | null
        linkedMemberId: string | null
    }

    export type ResourceMaxAggregateOutputType = {
        id: string | null
        tenantId: string | null
        name: string | null
        type: $Enums.ResourceType | null
        capacity: number | null
        linkedMemberId: string | null
    }

    export type ResourceCountAggregateOutputType = {
        id: number
        tenantId: number
        name: number
        type: number
        capacity: number
        linkedMemberId: number
        _all: number
    }


    export type ResourceAvgAggregateInputType = {
        capacity?: true
    }

    export type ResourceSumAggregateInputType = {
        capacity?: true
    }

    export type ResourceMinAggregateInputType = {
        id?: true
        tenantId?: true
        name?: true
        type?: true
        capacity?: true
        linkedMemberId?: true
    }

    export type ResourceMaxAggregateInputType = {
        id?: true
        tenantId?: true
        name?: true
        type?: true
        capacity?: true
        linkedMemberId?: true
    }

    export type ResourceCountAggregateInputType = {
        id?: true
        tenantId?: true
        name?: true
        type?: true
        capacity?: true
        linkedMemberId?: true
        _all?: true
    }

    export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Resource to aggregate.
         */
        where?: ResourceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Resources to fetch.
         */
        orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: ResourceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Resources from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Resources.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Resources
         **/
        _count?: true | ResourceCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: ResourceAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: ResourceSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: ResourceMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: ResourceMaxAggregateInputType
    }

    export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateResource[P]>
            : GetScalarType<T[P], AggregateResource[P]>
    }


    export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: ResourceWhereInput
        orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
        by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
        having?: ResourceScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: ResourceCountAggregateInputType | true
        _avg?: ResourceAvgAggregateInputType
        _sum?: ResourceSumAggregateInputType
        _min?: ResourceMinAggregateInputType
        _max?: ResourceMaxAggregateInputType
    }

    export type ResourceGroupByOutputType = {
        id: string
        tenantId: string
        name: string
        type: $Enums.ResourceType
        capacity: number
        linkedMemberId: string | null
        _count: ResourceCountAggregateOutputType | null
        _avg: ResourceAvgAggregateOutputType | null
        _sum: ResourceSumAggregateOutputType | null
        _min: ResourceMinAggregateOutputType | null
        _max: ResourceMaxAggregateOutputType | null
    }

    type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<ResourceGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], ResourceGroupByOutputType[P]>
                : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            }
        >
    >


    export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        tenantId?: boolean
        name?: boolean
        type?: boolean
        capacity?: boolean
        linkedMemberId?: boolean
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        bookings?: boolean | Resource$bookingsArgs<ExtArgs>
        _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["resource"]>

    export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        tenantId?: boolean
        name?: boolean
        type?: boolean
        capacity?: boolean
        linkedMemberId?: boolean
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["resource"]>

    export type ResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        tenantId?: boolean
        name?: boolean
        type?: boolean
        capacity?: boolean
        linkedMemberId?: boolean
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["resource"]>

    export type ResourceSelectScalar = {
        id?: boolean
        tenantId?: boolean
        name?: boolean
        type?: boolean
        capacity?: boolean
        linkedMemberId?: boolean
    }

    export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "name" | "type" | "capacity" | "linkedMemberId", ExtArgs["result"]["resource"]>
    export type ResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        bookings?: boolean | Resource$bookingsArgs<ExtArgs>
        _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
    }
    export type ResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
    }
    export type ResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
    }

    export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Resource"
        objects: {
            tenant: Prisma.$TenantPayload<ExtArgs>
            bookings: Prisma.$BookingPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            tenantId: string
            name: string
            type: $Enums.ResourceType
            capacity: number
            linkedMemberId: string | null
        }, ExtArgs["result"]["resource"]>
        composites: {}
    }

    type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

    type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: ResourceCountAggregateInputType | true
    }

    export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the Resource model
         */
        readonly fields: ResourceFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }

        /**
         * Find zero or one Resource that matches the filter.
         * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
         * @example
         * // Get one Resource
         * const resource = await prisma.resource.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
         * @example
         * // Get one Resource
         * const resource = await prisma.resource.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Resource that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
         * @example
         * // Get one Resource
         * const resource = await prisma.resource.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Resource that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
         * @example
         * // Get one Resource
         * const resource = await prisma.resource.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more Resources that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Resources
         * const resources = await prisma.resource.findMany()
         *
         * // Get first 10 Resources
         * const resources = await prisma.resource.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
         *
         */
        findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a Resource.
         * @param {ResourceCreateArgs} args - Arguments to create a Resource.
         * @example
         * // Create one Resource
         * const Resource = await prisma.resource.create({
         *   data: {
         *     // ... data to create a Resource
         *   }
         * })
         *
         */
        create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many Resources.
         * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
         * @example
         * // Create many Resources
         * const resource = await prisma.resource.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Resources and returns the data saved in the database.
         * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
         * @example
         * // Create many Resources
         * const resource = await prisma.resource.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Resources and only return the `id`
         * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a Resource.
         * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
         * @example
         * // Delete one Resource
         * const Resource = await prisma.resource.delete({
         *   where: {
         *     // ... filter to delete one Resource
         *   }
         * })
         *
         */
        delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one Resource.
         * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
         * @example
         * // Update one Resource
         * const resource = await prisma.resource.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more Resources.
         * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
         * @example
         * // Delete a few Resources
         * const { count } = await prisma.resource.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Resources.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Resources
         * const resource = await prisma.resource.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Resources and returns the data updated in the database.
         * @param {ResourceUpdateManyAndReturnArgs} args - Arguments to update many Resources.
         * @example
         * // Update many Resources
         * const resource = await prisma.resource.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Resources and only return the `id`
         * const resourceWithIdOnly = await prisma.resource.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends ResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one Resource.
         * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
         * @example
         * // Update or create a Resource
         * const resource = await prisma.resource.upsert({
         *   create: {
         *     // ... data to create a Resource
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Resource we want to update
         *   }
         * })
         */
        upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of Resources.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
         * @example
         * // Count the number of Resources
         * const count = await prisma.resource.count({
         *   where: {
         *     // ... the filter for the Resources we want to count
         *   }
         * })
         **/
        count<T extends ResourceCountArgs>(
            args?: Subset<T, ResourceCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], ResourceCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Resource.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

        /**
         * Group by Resource.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ResourceGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends ResourceGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: ResourceGroupByArgs['orderBy'] }
                : { orderBy?: ResourceGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for Resource.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        bookings<T extends Resource$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Resource$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the Resource model
     */
    interface ResourceFieldRefs {
        readonly id: FieldRef<"Resource", 'String'>
        readonly tenantId: FieldRef<"Resource", 'String'>
        readonly name: FieldRef<"Resource", 'String'>
        readonly type: FieldRef<"Resource", 'ResourceType'>
        readonly capacity: FieldRef<"Resource", 'Int'>
        readonly linkedMemberId: FieldRef<"Resource", 'String'>
    }


    // Custom InputTypes
    /**
     * Resource findUnique
     */
    export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceInclude<ExtArgs> | null
        /**
         * Filter, which Resource to fetch.
         */
        where: ResourceWhereUniqueInput
    }

    /**
     * Resource findUniqueOrThrow
     */
    export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceInclude<ExtArgs> | null
        /**
         * Filter, which Resource to fetch.
         */
        where: ResourceWhereUniqueInput
    }

    /**
     * Resource findFirst
     */
    export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceInclude<ExtArgs> | null
        /**
         * Filter, which Resource to fetch.
         */
        where?: ResourceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Resources to fetch.
         */
        orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Resources.
         */
        cursor?: ResourceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Resources from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Resources.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Resources.
         */
        distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
    }

    /**
     * Resource findFirstOrThrow
     */
    export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceInclude<ExtArgs> | null
        /**
         * Filter, which Resource to fetch.
         */
        where?: ResourceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Resources to fetch.
         */
        orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Resources.
         */
        cursor?: ResourceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Resources from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Resources.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Resources.
         */
        distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
    }

    /**
     * Resource findMany
     */
    export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceInclude<ExtArgs> | null
        /**
         * Filter, which Resources to fetch.
         */
        where?: ResourceWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Resources to fetch.
         */
        orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Resources.
         */
        cursor?: ResourceWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Resources from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Resources.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Resources.
         */
        distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
    }

    /**
     * Resource create
     */
    export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceInclude<ExtArgs> | null
        /**
         * The data needed to create a Resource.
         */
        data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    }

    /**
     * Resource createMany
     */
    export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Resources.
         */
        data: ResourceCreateManyInput | ResourceCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Resource createManyAndReturn
     */
    export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * The data used to create many Resources.
         */
        data: ResourceCreateManyInput | ResourceCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * Resource update
     */
    export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceInclude<ExtArgs> | null
        /**
         * The data needed to update a Resource.
         */
        data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
        /**
         * Choose, which Resource to update.
         */
        where: ResourceWhereUniqueInput
    }

    /**
     * Resource updateMany
     */
    export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Resources.
         */
        data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
        /**
         * Filter which Resources to update
         */
        where?: ResourceWhereInput
        /**
         * Limit how many Resources to update.
         */
        limit?: number
    }

    /**
     * Resource updateManyAndReturn
     */
    export type ResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * The data used to update Resources.
         */
        data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
        /**
         * Filter which Resources to update
         */
        where?: ResourceWhereInput
        /**
         * Limit how many Resources to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * Resource upsert
     */
    export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceInclude<ExtArgs> | null
        /**
         * The filter to search for the Resource to update in case it exists.
         */
        where: ResourceWhereUniqueInput
        /**
         * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
         */
        create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
        /**
         * In case the Resource was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    }

    /**
     * Resource delete
     */
    export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceInclude<ExtArgs> | null
        /**
         * Filter which Resource to delete.
         */
        where: ResourceWhereUniqueInput
    }

    /**
     * Resource deleteMany
     */
    export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Resources to delete
         */
        where?: ResourceWhereInput
        /**
         * Limit how many Resources to delete.
         */
        limit?: number
    }

    /**
     * Resource.bookings
     */
    export type Resource$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingInclude<ExtArgs> | null
        where?: BookingWhereInput
        orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
        cursor?: BookingWhereUniqueInput
        take?: number
        skip?: number
        distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
    }

    /**
     * Resource without action
     */
    export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Resource
         */
        select?: ResourceSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Resource
         */
        omit?: ResourceOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ResourceInclude<ExtArgs> | null
    }


    /**
     * Model Booking
     */

    export type AggregateBooking = {
        _count: BookingCountAggregateOutputType | null
        _min: BookingMinAggregateOutputType | null
        _max: BookingMaxAggregateOutputType | null
    }

    export type BookingMinAggregateOutputType = {
        id: string | null
        resourceId: string | null
        membershipId: string | null
        startTime: Date | null
        endTime: Date | null
    }

    export type BookingMaxAggregateOutputType = {
        id: string | null
        resourceId: string | null
        membershipId: string | null
        startTime: Date | null
        endTime: Date | null
    }

    export type BookingCountAggregateOutputType = {
        id: number
        resourceId: number
        membershipId: number
        startTime: number
        endTime: number
        _all: number
    }


    export type BookingMinAggregateInputType = {
        id?: true
        resourceId?: true
        membershipId?: true
        startTime?: true
        endTime?: true
    }

    export type BookingMaxAggregateInputType = {
        id?: true
        resourceId?: true
        membershipId?: true
        startTime?: true
        endTime?: true
    }

    export type BookingCountAggregateInputType = {
        id?: true
        resourceId?: true
        membershipId?: true
        startTime?: true
        endTime?: true
        _all?: true
    }

    export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Booking to aggregate.
         */
        where?: BookingWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Bookings to fetch.
         */
        orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: BookingWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Bookings from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Bookings.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Bookings
         **/
        _count?: true | BookingCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: BookingMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: BookingMaxAggregateInputType
    }

    export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateBooking[P]>
            : GetScalarType<T[P], AggregateBooking[P]>
    }


    export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: BookingWhereInput
        orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
        by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
        having?: BookingScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: BookingCountAggregateInputType | true
        _min?: BookingMinAggregateInputType
        _max?: BookingMaxAggregateInputType
    }

    export type BookingGroupByOutputType = {
        id: string
        resourceId: string
        membershipId: string
        startTime: Date
        endTime: Date
        _count: BookingCountAggregateOutputType | null
        _min: BookingMinAggregateOutputType | null
        _max: BookingMaxAggregateOutputType | null
    }

    type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<BookingGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], BookingGroupByOutputType[P]>
                : GetScalarType<T[P], BookingGroupByOutputType[P]>
            }
        >
    >


    export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        resourceId?: boolean
        membershipId?: boolean
        startTime?: boolean
        endTime?: boolean
        resource?: boolean | ResourceDefaultArgs<ExtArgs>
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["booking"]>

    export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        resourceId?: boolean
        membershipId?: boolean
        startTime?: boolean
        endTime?: boolean
        resource?: boolean | ResourceDefaultArgs<ExtArgs>
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["booking"]>

    export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        resourceId?: boolean
        membershipId?: boolean
        startTime?: boolean
        endTime?: boolean
        resource?: boolean | ResourceDefaultArgs<ExtArgs>
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["booking"]>

    export type BookingSelectScalar = {
        id?: boolean
        resourceId?: boolean
        membershipId?: boolean
        startTime?: boolean
        endTime?: boolean
    }

    export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resourceId" | "membershipId" | "startTime" | "endTime", ExtArgs["result"]["booking"]>
    export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        resource?: boolean | ResourceDefaultArgs<ExtArgs>
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }
    export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        resource?: boolean | ResourceDefaultArgs<ExtArgs>
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }
    export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        resource?: boolean | ResourceDefaultArgs<ExtArgs>
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }

    export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Booking"
        objects: {
            resource: Prisma.$ResourcePayload<ExtArgs>
            membership: Prisma.$MembershipPayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            resourceId: string
            membershipId: string
            startTime: Date
            endTime: Date
        }, ExtArgs["result"]["booking"]>
        composites: {}
    }

    type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

    type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: BookingCountAggregateInputType | true
    }

    export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the Booking model
         */
        readonly fields: BookingFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }

        /**
         * Find zero or one Booking that matches the filter.
         * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
         * @example
         * // Get one Booking
         * const booking = await prisma.booking.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
         * @example
         * // Get one Booking
         * const booking = await prisma.booking.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Booking that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {BookingFindFirstArgs} args - Arguments to find a Booking
         * @example
         * // Get one Booking
         * const booking = await prisma.booking.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Booking that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
         * @example
         * // Get one Booking
         * const booking = await prisma.booking.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more Bookings that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Bookings
         * const bookings = await prisma.booking.findMany()
         *
         * // Get first 10 Bookings
         * const bookings = await prisma.booking.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
         *
         */
        findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a Booking.
         * @param {BookingCreateArgs} args - Arguments to create a Booking.
         * @example
         * // Create one Booking
         * const Booking = await prisma.booking.create({
         *   data: {
         *     // ... data to create a Booking
         *   }
         * })
         *
         */
        create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many Bookings.
         * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
         * @example
         * // Create many Bookings
         * const booking = await prisma.booking.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Bookings and returns the data saved in the database.
         * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
         * @example
         * // Create many Bookings
         * const booking = await prisma.booking.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Bookings and only return the `id`
         * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a Booking.
         * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
         * @example
         * // Delete one Booking
         * const Booking = await prisma.booking.delete({
         *   where: {
         *     // ... filter to delete one Booking
         *   }
         * })
         *
         */
        delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one Booking.
         * @param {BookingUpdateArgs} args - Arguments to update one Booking.
         * @example
         * // Update one Booking
         * const booking = await prisma.booking.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more Bookings.
         * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
         * @example
         * // Delete a few Bookings
         * const { count } = await prisma.booking.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Bookings.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Bookings
         * const booking = await prisma.booking.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Bookings and returns the data updated in the database.
         * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
         * @example
         * // Update many Bookings
         * const booking = await prisma.booking.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Bookings and only return the `id`
         * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one Booking.
         * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
         * @example
         * // Update or create a Booking
         * const booking = await prisma.booking.upsert({
         *   create: {
         *     // ... data to create a Booking
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Booking we want to update
         *   }
         * })
         */
        upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of Bookings.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
         * @example
         * // Count the number of Bookings
         * const count = await prisma.booking.count({
         *   where: {
         *     // ... the filter for the Bookings we want to count
         *   }
         * })
         **/
        count<T extends BookingCountArgs>(
            args?: Subset<T, BookingCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], BookingCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Booking.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

        /**
         * Group by Booking.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {BookingGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends BookingGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: BookingGroupByArgs['orderBy'] }
                : { orderBy?: BookingGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for Booking.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        resource<T extends ResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDefaultArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        membership<T extends MembershipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembershipDefaultArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the Booking model
     */
    interface BookingFieldRefs {
        readonly id: FieldRef<"Booking", 'String'>
        readonly resourceId: FieldRef<"Booking", 'String'>
        readonly membershipId: FieldRef<"Booking", 'String'>
        readonly startTime: FieldRef<"Booking", 'DateTime'>
        readonly endTime: FieldRef<"Booking", 'DateTime'>
    }


    // Custom InputTypes
    /**
     * Booking findUnique
     */
    export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingInclude<ExtArgs> | null
        /**
         * Filter, which Booking to fetch.
         */
        where: BookingWhereUniqueInput
    }

    /**
     * Booking findUniqueOrThrow
     */
    export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingInclude<ExtArgs> | null
        /**
         * Filter, which Booking to fetch.
         */
        where: BookingWhereUniqueInput
    }

    /**
     * Booking findFirst
     */
    export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingInclude<ExtArgs> | null
        /**
         * Filter, which Booking to fetch.
         */
        where?: BookingWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Bookings to fetch.
         */
        orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Bookings.
         */
        cursor?: BookingWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Bookings from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Bookings.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Bookings.
         */
        distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
    }

    /**
     * Booking findFirstOrThrow
     */
    export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingInclude<ExtArgs> | null
        /**
         * Filter, which Booking to fetch.
         */
        where?: BookingWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Bookings to fetch.
         */
        orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Bookings.
         */
        cursor?: BookingWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Bookings from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Bookings.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Bookings.
         */
        distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
    }

    /**
     * Booking findMany
     */
    export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingInclude<ExtArgs> | null
        /**
         * Filter, which Bookings to fetch.
         */
        where?: BookingWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Bookings to fetch.
         */
        orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Bookings.
         */
        cursor?: BookingWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Bookings from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Bookings.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Bookings.
         */
        distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
    }

    /**
     * Booking create
     */
    export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingInclude<ExtArgs> | null
        /**
         * The data needed to create a Booking.
         */
        data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    }

    /**
     * Booking createMany
     */
    export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Bookings.
         */
        data: BookingCreateManyInput | BookingCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Booking createManyAndReturn
     */
    export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * The data used to create many Bookings.
         */
        data: BookingCreateManyInput | BookingCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * Booking update
     */
    export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingInclude<ExtArgs> | null
        /**
         * The data needed to update a Booking.
         */
        data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
        /**
         * Choose, which Booking to update.
         */
        where: BookingWhereUniqueInput
    }

    /**
     * Booking updateMany
     */
    export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Bookings.
         */
        data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
        /**
         * Filter which Bookings to update
         */
        where?: BookingWhereInput
        /**
         * Limit how many Bookings to update.
         */
        limit?: number
    }

    /**
     * Booking updateManyAndReturn
     */
    export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * The data used to update Bookings.
         */
        data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
        /**
         * Filter which Bookings to update
         */
        where?: BookingWhereInput
        /**
         * Limit how many Bookings to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * Booking upsert
     */
    export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingInclude<ExtArgs> | null
        /**
         * The filter to search for the Booking to update in case it exists.
         */
        where: BookingWhereUniqueInput
        /**
         * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
         */
        create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
        /**
         * In case the Booking was found with the provided `where` argument, update it with this data.
         */
        update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    }

    /**
     * Booking delete
     */
    export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingInclude<ExtArgs> | null
        /**
         * Filter which Booking to delete.
         */
        where: BookingWhereUniqueInput
    }

    /**
     * Booking deleteMany
     */
    export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Bookings to delete
         */
        where?: BookingWhereInput
        /**
         * Limit how many Bookings to delete.
         */
        limit?: number
    }

    /**
     * Booking without action
     */
    export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Booking
         */
        select?: BookingSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Booking
         */
        omit?: BookingOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: BookingInclude<ExtArgs> | null
    }


    /**
     * Model Metric
     */

    export type AggregateMetric = {
        _count: MetricCountAggregateOutputType | null
        _min: MetricMinAggregateOutputType | null
        _max: MetricMaxAggregateOutputType | null
    }

    export type MetricMinAggregateOutputType = {
        id: string | null
        membershipId: string | null
        metricType: string | null
        recordedAt: Date | null
    }

    export type MetricMaxAggregateOutputType = {
        id: string | null
        membershipId: string | null
        metricType: string | null
        recordedAt: Date | null
    }

    export type MetricCountAggregateOutputType = {
        id: number
        membershipId: number
        metricType: number
        data: number
        recordedAt: number
        _all: number
    }


    export type MetricMinAggregateInputType = {
        id?: true
        membershipId?: true
        metricType?: true
        recordedAt?: true
    }

    export type MetricMaxAggregateInputType = {
        id?: true
        membershipId?: true
        metricType?: true
        recordedAt?: true
    }

    export type MetricCountAggregateInputType = {
        id?: true
        membershipId?: true
        metricType?: true
        data?: true
        recordedAt?: true
        _all?: true
    }

    export type MetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Metric to aggregate.
         */
        where?: MetricWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Metrics to fetch.
         */
        orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: MetricWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Metrics from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Metrics.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Metrics
         **/
        _count?: true | MetricCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: MetricMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: MetricMaxAggregateInputType
    }

    export type GetMetricAggregateType<T extends MetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMetric]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateMetric[P]>
            : GetScalarType<T[P], AggregateMetric[P]>
    }


    export type MetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: MetricWhereInput
        orderBy?: MetricOrderByWithAggregationInput | MetricOrderByWithAggregationInput[]
        by: MetricScalarFieldEnum[] | MetricScalarFieldEnum
        having?: MetricScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: MetricCountAggregateInputType | true
        _min?: MetricMinAggregateInputType
        _max?: MetricMaxAggregateInputType
    }

    export type MetricGroupByOutputType = {
        id: string
        membershipId: string
        metricType: string
        data: JsonValue
        recordedAt: Date
        _count: MetricCountAggregateOutputType | null
        _min: MetricMinAggregateOutputType | null
        _max: MetricMaxAggregateOutputType | null
    }

    type GetMetricGroupByPayload<T extends MetricGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<MetricGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof MetricGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], MetricGroupByOutputType[P]>
                : GetScalarType<T[P], MetricGroupByOutputType[P]>
            }
        >
    >


    export type MetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        membershipId?: boolean
        metricType?: boolean
        data?: boolean
        recordedAt?: boolean
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["metric"]>

    export type MetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        membershipId?: boolean
        metricType?: boolean
        data?: boolean
        recordedAt?: boolean
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["metric"]>

    export type MetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        membershipId?: boolean
        metricType?: boolean
        data?: boolean
        recordedAt?: boolean
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["metric"]>

    export type MetricSelectScalar = {
        id?: boolean
        membershipId?: boolean
        metricType?: boolean
        data?: boolean
        recordedAt?: boolean
    }

    export type MetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "membershipId" | "metricType" | "data" | "recordedAt", ExtArgs["result"]["metric"]>
    export type MetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }
    export type MetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }
    export type MetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }

    export type $MetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Metric"
        objects: {
            membership: Prisma.$MembershipPayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            membershipId: string
            metricType: string
            data: Prisma.JsonValue
            recordedAt: Date
        }, ExtArgs["result"]["metric"]>
        composites: {}
    }

    type MetricGetPayload<S extends boolean | null | undefined | MetricDefaultArgs> = $Result.GetResult<Prisma.$MetricPayload, S>

    type MetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<MetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: MetricCountAggregateInputType | true
    }

    export interface MetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the Metric model
         */
        readonly fields: MetricFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metric'], meta: { name: 'Metric' } }

        /**
         * Find zero or one Metric that matches the filter.
         * @param {MetricFindUniqueArgs} args - Arguments to find a Metric
         * @example
         * // Get one Metric
         * const metric = await prisma.metric.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends MetricFindUniqueArgs>(args: SelectSubset<T, MetricFindUniqueArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one Metric that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {MetricFindUniqueOrThrowArgs} args - Arguments to find a Metric
         * @example
         * // Get one Metric
         * const metric = await prisma.metric.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends MetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Metric that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MetricFindFirstArgs} args - Arguments to find a Metric
         * @example
         * // Get one Metric
         * const metric = await prisma.metric.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends MetricFindFirstArgs>(args?: SelectSubset<T, MetricFindFirstArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Metric that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MetricFindFirstOrThrowArgs} args - Arguments to find a Metric
         * @example
         * // Get one Metric
         * const metric = await prisma.metric.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends MetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more Metrics that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MetricFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Metrics
         * const metrics = await prisma.metric.findMany()
         *
         * // Get first 10 Metrics
         * const metrics = await prisma.metric.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const metricWithIdOnly = await prisma.metric.findMany({ select: { id: true } })
         *
         */
        findMany<T extends MetricFindManyArgs>(args?: SelectSubset<T, MetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a Metric.
         * @param {MetricCreateArgs} args - Arguments to create a Metric.
         * @example
         * // Create one Metric
         * const Metric = await prisma.metric.create({
         *   data: {
         *     // ... data to create a Metric
         *   }
         * })
         *
         */
        create<T extends MetricCreateArgs>(args: SelectSubset<T, MetricCreateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many Metrics.
         * @param {MetricCreateManyArgs} args - Arguments to create many Metrics.
         * @example
         * // Create many Metrics
         * const metric = await prisma.metric.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends MetricCreateManyArgs>(args?: SelectSubset<T, MetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Metrics and returns the data saved in the database.
         * @param {MetricCreateManyAndReturnArgs} args - Arguments to create many Metrics.
         * @example
         * // Create many Metrics
         * const metric = await prisma.metric.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Metrics and only return the `id`
         * const metricWithIdOnly = await prisma.metric.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends MetricCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a Metric.
         * @param {MetricDeleteArgs} args - Arguments to delete one Metric.
         * @example
         * // Delete one Metric
         * const Metric = await prisma.metric.delete({
         *   where: {
         *     // ... filter to delete one Metric
         *   }
         * })
         *
         */
        delete<T extends MetricDeleteArgs>(args: SelectSubset<T, MetricDeleteArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one Metric.
         * @param {MetricUpdateArgs} args - Arguments to update one Metric.
         * @example
         * // Update one Metric
         * const metric = await prisma.metric.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends MetricUpdateArgs>(args: SelectSubset<T, MetricUpdateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more Metrics.
         * @param {MetricDeleteManyArgs} args - Arguments to filter Metrics to delete.
         * @example
         * // Delete a few Metrics
         * const { count } = await prisma.metric.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends MetricDeleteManyArgs>(args?: SelectSubset<T, MetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Metrics.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MetricUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Metrics
         * const metric = await prisma.metric.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends MetricUpdateManyArgs>(args: SelectSubset<T, MetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Metrics and returns the data updated in the database.
         * @param {MetricUpdateManyAndReturnArgs} args - Arguments to update many Metrics.
         * @example
         * // Update many Metrics
         * const metric = await prisma.metric.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Metrics and only return the `id`
         * const metricWithIdOnly = await prisma.metric.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends MetricUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one Metric.
         * @param {MetricUpsertArgs} args - Arguments to update or create a Metric.
         * @example
         * // Update or create a Metric
         * const metric = await prisma.metric.upsert({
         *   create: {
         *     // ... data to create a Metric
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Metric we want to update
         *   }
         * })
         */
        upsert<T extends MetricUpsertArgs>(args: SelectSubset<T, MetricUpsertArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of Metrics.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MetricCountArgs} args - Arguments to filter Metrics to count.
         * @example
         * // Count the number of Metrics
         * const count = await prisma.metric.count({
         *   where: {
         *     // ... the filter for the Metrics we want to count
         *   }
         * })
         **/
        count<T extends MetricCountArgs>(
            args?: Subset<T, MetricCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], MetricCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Metric.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends MetricAggregateArgs>(args: Subset<T, MetricAggregateArgs>): Prisma.PrismaPromise<GetMetricAggregateType<T>>

        /**
         * Group by Metric.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {MetricGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends MetricGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: MetricGroupByArgs['orderBy'] }
                : { orderBy?: MetricGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, MetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for Metric.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__MetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        membership<T extends MembershipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembershipDefaultArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the Metric model
     */
    interface MetricFieldRefs {
        readonly id: FieldRef<"Metric", 'String'>
        readonly membershipId: FieldRef<"Metric", 'String'>
        readonly metricType: FieldRef<"Metric", 'String'>
        readonly data: FieldRef<"Metric", 'Json'>
        readonly recordedAt: FieldRef<"Metric", 'DateTime'>
    }


    // Custom InputTypes
    /**
     * Metric findUnique
     */
    export type MetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricInclude<ExtArgs> | null
        /**
         * Filter, which Metric to fetch.
         */
        where: MetricWhereUniqueInput
    }

    /**
     * Metric findUniqueOrThrow
     */
    export type MetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricInclude<ExtArgs> | null
        /**
         * Filter, which Metric to fetch.
         */
        where: MetricWhereUniqueInput
    }

    /**
     * Metric findFirst
     */
    export type MetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricInclude<ExtArgs> | null
        /**
         * Filter, which Metric to fetch.
         */
        where?: MetricWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Metrics to fetch.
         */
        orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Metrics.
         */
        cursor?: MetricWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Metrics from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Metrics.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Metrics.
         */
        distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
    }

    /**
     * Metric findFirstOrThrow
     */
    export type MetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricInclude<ExtArgs> | null
        /**
         * Filter, which Metric to fetch.
         */
        where?: MetricWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Metrics to fetch.
         */
        orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Metrics.
         */
        cursor?: MetricWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Metrics from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Metrics.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Metrics.
         */
        distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
    }

    /**
     * Metric findMany
     */
    export type MetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricInclude<ExtArgs> | null
        /**
         * Filter, which Metrics to fetch.
         */
        where?: MetricWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Metrics to fetch.
         */
        orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Metrics.
         */
        cursor?: MetricWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Metrics from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Metrics.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Metrics.
         */
        distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
    }

    /**
     * Metric create
     */
    export type MetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricInclude<ExtArgs> | null
        /**
         * The data needed to create a Metric.
         */
        data: XOR<MetricCreateInput, MetricUncheckedCreateInput>
    }

    /**
     * Metric createMany
     */
    export type MetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Metrics.
         */
        data: MetricCreateManyInput | MetricCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Metric createManyAndReturn
     */
    export type MetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * The data used to create many Metrics.
         */
        data: MetricCreateManyInput | MetricCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * Metric update
     */
    export type MetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricInclude<ExtArgs> | null
        /**
         * The data needed to update a Metric.
         */
        data: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
        /**
         * Choose, which Metric to update.
         */
        where: MetricWhereUniqueInput
    }

    /**
     * Metric updateMany
     */
    export type MetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Metrics.
         */
        data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
        /**
         * Filter which Metrics to update
         */
        where?: MetricWhereInput
        /**
         * Limit how many Metrics to update.
         */
        limit?: number
    }

    /**
     * Metric updateManyAndReturn
     */
    export type MetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * The data used to update Metrics.
         */
        data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
        /**
         * Filter which Metrics to update
         */
        where?: MetricWhereInput
        /**
         * Limit how many Metrics to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * Metric upsert
     */
    export type MetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricInclude<ExtArgs> | null
        /**
         * The filter to search for the Metric to update in case it exists.
         */
        where: MetricWhereUniqueInput
        /**
         * In case the Metric found by the `where` argument doesn't exist, create a new Metric with this data.
         */
        create: XOR<MetricCreateInput, MetricUncheckedCreateInput>
        /**
         * In case the Metric was found with the provided `where` argument, update it with this data.
         */
        update: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
    }

    /**
     * Metric delete
     */
    export type MetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricInclude<ExtArgs> | null
        /**
         * Filter which Metric to delete.
         */
        where: MetricWhereUniqueInput
    }

    /**
     * Metric deleteMany
     */
    export type MetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Metrics to delete
         */
        where?: MetricWhereInput
        /**
         * Limit how many Metrics to delete.
         */
        limit?: number
    }

    /**
     * Metric without action
     */
    export type MetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Metric
         */
        select?: MetricSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Metric
         */
        omit?: MetricOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: MetricInclude<ExtArgs> | null
    }


    /**
     * Model Document
     */

    export type AggregateDocument = {
        _count: DocumentCountAggregateOutputType | null
        _min: DocumentMinAggregateOutputType | null
        _max: DocumentMaxAggregateOutputType | null
    }

    export type DocumentMinAggregateOutputType = {
        id: string | null
        membershipId: string | null
        fileName: string | null
        fileUrl: string | null
        context: string | null
        uploadedAt: Date | null
    }

    export type DocumentMaxAggregateOutputType = {
        id: string | null
        membershipId: string | null
        fileName: string | null
        fileUrl: string | null
        context: string | null
        uploadedAt: Date | null
    }

    export type DocumentCountAggregateOutputType = {
        id: number
        membershipId: number
        fileName: number
        fileUrl: number
        context: number
        uploadedAt: number
        _all: number
    }


    export type DocumentMinAggregateInputType = {
        id?: true
        membershipId?: true
        fileName?: true
        fileUrl?: true
        context?: true
        uploadedAt?: true
    }

    export type DocumentMaxAggregateInputType = {
        id?: true
        membershipId?: true
        fileName?: true
        fileUrl?: true
        context?: true
        uploadedAt?: true
    }

    export type DocumentCountAggregateInputType = {
        id?: true
        membershipId?: true
        fileName?: true
        fileUrl?: true
        context?: true
        uploadedAt?: true
        _all?: true
    }

    export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Document to aggregate.
         */
        where?: DocumentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Documents to fetch.
         */
        orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: DocumentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Documents from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Documents.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Documents
         **/
        _count?: true | DocumentCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: DocumentMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: DocumentMaxAggregateInputType
    }

    export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateDocument[P]>
            : GetScalarType<T[P], AggregateDocument[P]>
    }


    export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: DocumentWhereInput
        orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
        by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
        having?: DocumentScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: DocumentCountAggregateInputType | true
        _min?: DocumentMinAggregateInputType
        _max?: DocumentMaxAggregateInputType
    }

    export type DocumentGroupByOutputType = {
        id: string
        membershipId: string
        fileName: string
        fileUrl: string
        context: string
        uploadedAt: Date
        _count: DocumentCountAggregateOutputType | null
        _min: DocumentMinAggregateOutputType | null
        _max: DocumentMaxAggregateOutputType | null
    }

    type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<DocumentGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], DocumentGroupByOutputType[P]>
                : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            }
        >
    >


    export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        membershipId?: boolean
        fileName?: boolean
        fileUrl?: boolean
        context?: boolean
        uploadedAt?: boolean
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["document"]>

    export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        membershipId?: boolean
        fileName?: boolean
        fileUrl?: boolean
        context?: boolean
        uploadedAt?: boolean
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["document"]>

    export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        membershipId?: boolean
        fileName?: boolean
        fileUrl?: boolean
        context?: boolean
        uploadedAt?: boolean
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }, ExtArgs["result"]["document"]>

    export type DocumentSelectScalar = {
        id?: boolean
        membershipId?: boolean
        fileName?: boolean
        fileUrl?: boolean
        context?: boolean
        uploadedAt?: boolean
    }

    export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "membershipId" | "fileName" | "fileUrl" | "context" | "uploadedAt", ExtArgs["result"]["document"]>
    export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }
    export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }
    export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        membership?: boolean | MembershipDefaultArgs<ExtArgs>
    }

    export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "Document"
        objects: {
            membership: Prisma.$MembershipPayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            membershipId: string
            fileName: string
            fileUrl: string
            context: string
            uploadedAt: Date
        }, ExtArgs["result"]["document"]>
        composites: {}
    }

    type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

    type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: DocumentCountAggregateInputType | true
    }

    export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the Document model
         */
        readonly fields: DocumentFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }

        /**
         * Find zero or one Document that matches the filter.
         * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
         * @example
         * // Get one Document
         * const document = await prisma.document.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one Document that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
         * @example
         * // Get one Document
         * const document = await prisma.document.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Document that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentFindFirstArgs} args - Arguments to find a Document
         * @example
         * // Get one Document
         * const document = await prisma.document.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first Document that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
         * @example
         * // Get one Document
         * const document = await prisma.document.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more Documents that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Documents
         * const documents = await prisma.document.findMany()
         *
         * // Get first 10 Documents
         * const documents = await prisma.document.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
         *
         */
        findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a Document.
         * @param {DocumentCreateArgs} args - Arguments to create a Document.
         * @example
         * // Create one Document
         * const Document = await prisma.document.create({
         *   data: {
         *     // ... data to create a Document
         *   }
         * })
         *
         */
        create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many Documents.
         * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
         * @example
         * // Create many Documents
         * const document = await prisma.document.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many Documents and returns the data saved in the database.
         * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
         * @example
         * // Create many Documents
         * const document = await prisma.document.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Documents and only return the `id`
         * const documentWithIdOnly = await prisma.document.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a Document.
         * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
         * @example
         * // Delete one Document
         * const Document = await prisma.document.delete({
         *   where: {
         *     // ... filter to delete one Document
         *   }
         * })
         *
         */
        delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one Document.
         * @param {DocumentUpdateArgs} args - Arguments to update one Document.
         * @example
         * // Update one Document
         * const document = await prisma.document.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more Documents.
         * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
         * @example
         * // Delete a few Documents
         * const { count } = await prisma.document.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Documents.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Documents
         * const document = await prisma.document.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Documents and returns the data updated in the database.
         * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
         * @example
         * // Update many Documents
         * const document = await prisma.document.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Documents and only return the `id`
         * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one Document.
         * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
         * @example
         * // Update or create a Document
         * const document = await prisma.document.upsert({
         *   create: {
         *     // ... data to create a Document
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Document we want to update
         *   }
         * })
         */
        upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of Documents.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
         * @example
         * // Count the number of Documents
         * const count = await prisma.document.count({
         *   where: {
         *     // ... the filter for the Documents we want to count
         *   }
         * })
         **/
        count<T extends DocumentCountArgs>(
            args?: Subset<T, DocumentCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], DocumentCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Document.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

        /**
         * Group by Document.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends DocumentGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: DocumentGroupByArgs['orderBy'] }
                : { orderBy?: DocumentGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for Document.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        membership<T extends MembershipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembershipDefaultArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the Document model
     */
    interface DocumentFieldRefs {
        readonly id: FieldRef<"Document", 'String'>
        readonly membershipId: FieldRef<"Document", 'String'>
        readonly fileName: FieldRef<"Document", 'String'>
        readonly fileUrl: FieldRef<"Document", 'String'>
        readonly context: FieldRef<"Document", 'String'>
        readonly uploadedAt: FieldRef<"Document", 'DateTime'>
    }


    // Custom InputTypes
    /**
     * Document findUnique
     */
    export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null
        /**
         * Filter, which Document to fetch.
         */
        where: DocumentWhereUniqueInput
    }

    /**
     * Document findUniqueOrThrow
     */
    export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null
        /**
         * Filter, which Document to fetch.
         */
        where: DocumentWhereUniqueInput
    }

    /**
     * Document findFirst
     */
    export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null
        /**
         * Filter, which Document to fetch.
         */
        where?: DocumentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Documents to fetch.
         */
        orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Documents.
         */
        cursor?: DocumentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Documents from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Documents.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Documents.
         */
        distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
    }

    /**
     * Document findFirstOrThrow
     */
    export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null
        /**
         * Filter, which Document to fetch.
         */
        where?: DocumentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Documents to fetch.
         */
        orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Documents.
         */
        cursor?: DocumentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Documents from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Documents.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Documents.
         */
        distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
    }

    /**
     * Document findMany
     */
    export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null
        /**
         * Filter, which Documents to fetch.
         */
        where?: DocumentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Documents to fetch.
         */
        orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Documents.
         */
        cursor?: DocumentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Documents from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Documents.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Documents.
         */
        distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
    }

    /**
     * Document create
     */
    export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null
        /**
         * The data needed to create a Document.
         */
        data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    }

    /**
     * Document createMany
     */
    export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Documents.
         */
        data: DocumentCreateManyInput | DocumentCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Document createManyAndReturn
     */
    export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * The data used to create many Documents.
         */
        data: DocumentCreateManyInput | DocumentCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * Document update
     */
    export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null
        /**
         * The data needed to update a Document.
         */
        data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
        /**
         * Choose, which Document to update.
         */
        where: DocumentWhereUniqueInput
    }

    /**
     * Document updateMany
     */
    export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Documents.
         */
        data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
        /**
         * Filter which Documents to update
         */
        where?: DocumentWhereInput
        /**
         * Limit how many Documents to update.
         */
        limit?: number
    }

    /**
     * Document updateManyAndReturn
     */
    export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * The data used to update Documents.
         */
        data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
        /**
         * Filter which Documents to update
         */
        where?: DocumentWhereInput
        /**
         * Limit how many Documents to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * Document upsert
     */
    export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null
        /**
         * The filter to search for the Document to update in case it exists.
         */
        where: DocumentWhereUniqueInput
        /**
         * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
         */
        create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
        /**
         * In case the Document was found with the provided `where` argument, update it with this data.
         */
        update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    }

    /**
     * Document delete
     */
    export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null
        /**
         * Filter which Document to delete.
         */
        where: DocumentWhereUniqueInput
    }

    /**
     * Document deleteMany
     */
    export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Documents to delete
         */
        where?: DocumentWhereInput
        /**
         * Limit how many Documents to delete.
         */
        limit?: number
    }

    /**
     * Document without action
     */
    export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null
    }


    /**
     * Model AuditLog
     */

    export type AggregateAuditLog = {
        _count: AuditLogCountAggregateOutputType | null
        _min: AuditLogMinAggregateOutputType | null
        _max: AuditLogMaxAggregateOutputType | null
    }

    export type AuditLogMinAggregateOutputType = {
        id: string | null
        tenantId: string | null
        userId: string | null
        action: string | null
        entity: string | null
        entityId: string | null
        createdAt: Date | null
    }

    export type AuditLogMaxAggregateOutputType = {
        id: string | null
        tenantId: string | null
        userId: string | null
        action: string | null
        entity: string | null
        entityId: string | null
        createdAt: Date | null
    }

    export type AuditLogCountAggregateOutputType = {
        id: number
        tenantId: number
        userId: number
        action: number
        entity: number
        entityId: number
        changes: number
        createdAt: number
        _all: number
    }


    export type AuditLogMinAggregateInputType = {
        id?: true
        tenantId?: true
        userId?: true
        action?: true
        entity?: true
        entityId?: true
        createdAt?: true
    }

    export type AuditLogMaxAggregateInputType = {
        id?: true
        tenantId?: true
        userId?: true
        action?: true
        entity?: true
        entityId?: true
        createdAt?: true
    }

    export type AuditLogCountAggregateInputType = {
        id?: true
        tenantId?: true
        userId?: true
        action?: true
        entity?: true
        entityId?: true
        changes?: true
        createdAt?: true
        _all?: true
    }

    export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which AuditLog to aggregate.
         */
        where?: AuditLogWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AuditLogs to fetch.
         */
        orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: AuditLogWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AuditLogs from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AuditLogs.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned AuditLogs
         **/
        _count?: true | AuditLogCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: AuditLogMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: AuditLogMaxAggregateInputType
    }

    export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateAuditLog[P]>
            : GetScalarType<T[P], AggregateAuditLog[P]>
    }


    export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: AuditLogWhereInput
        orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
        by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
        having?: AuditLogScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: AuditLogCountAggregateInputType | true
        _min?: AuditLogMinAggregateInputType
        _max?: AuditLogMaxAggregateInputType
    }

    export type AuditLogGroupByOutputType = {
        id: string
        tenantId: string
        userId: string | null
        action: string
        entity: string
        entityId: string
        changes: JsonValue | null
        createdAt: Date
        _count: AuditLogCountAggregateOutputType | null
        _min: AuditLogMinAggregateOutputType | null
        _max: AuditLogMaxAggregateOutputType | null
    }

    type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<AuditLogGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                    ? number
                    : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
                : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            }
        >
    >


    export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        tenantId?: boolean
        userId?: boolean
        action?: boolean
        entity?: boolean
        entityId?: boolean
        changes?: boolean
        createdAt?: boolean
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        user?: boolean | AuditLog$userArgs<ExtArgs>
    }, ExtArgs["result"]["auditLog"]>

    export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        tenantId?: boolean
        userId?: boolean
        action?: boolean
        entity?: boolean
        entityId?: boolean
        changes?: boolean
        createdAt?: boolean
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        user?: boolean | AuditLog$userArgs<ExtArgs>
    }, ExtArgs["result"]["auditLog"]>

    export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
        id?: boolean
        tenantId?: boolean
        userId?: boolean
        action?: boolean
        entity?: boolean
        entityId?: boolean
        changes?: boolean
        createdAt?: boolean
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        user?: boolean | AuditLog$userArgs<ExtArgs>
    }, ExtArgs["result"]["auditLog"]>

    export type AuditLogSelectScalar = {
        id?: boolean
        tenantId?: boolean
        userId?: boolean
        action?: boolean
        entity?: boolean
        entityId?: boolean
        changes?: boolean
        createdAt?: boolean
    }

    export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "userId" | "action" | "entity" | "entityId" | "changes" | "createdAt", ExtArgs["result"]["auditLog"]>
    export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        user?: boolean | AuditLog$userArgs<ExtArgs>
    }
    export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        user?: boolean | AuditLog$userArgs<ExtArgs>
    }
    export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        tenant?: boolean | TenantDefaultArgs<ExtArgs>
        user?: boolean | AuditLog$userArgs<ExtArgs>
    }

    export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "AuditLog"
        objects: {
            tenant: Prisma.$TenantPayload<ExtArgs>
            user: Prisma.$UserPayload<ExtArgs> | null
        }
        scalars: $Extensions.GetPayloadResult<{
            id: string
            tenantId: string
            userId: string | null
            action: string
            entity: string
            entityId: string
            changes: Prisma.JsonValue | null
            createdAt: Date
        }, ExtArgs["result"]["auditLog"]>
        composites: {}
    }

    type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

    type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: AuditLogCountAggregateInputType | true
    }

    export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
        /**
         * Fields of the AuditLog model
         */
        readonly fields: AuditLogFieldRefs;

        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }

        /**
         * Find zero or one AuditLog that matches the filter.
         * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
         * @example
         * // Get one AuditLog
         * const auditLog = await prisma.auditLog.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
         * @example
         * // Get one AuditLog
         * const auditLog = await prisma.auditLog.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first AuditLog that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
         * @example
         * // Get one AuditLog
         * const auditLog = await prisma.auditLog.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Find the first AuditLog that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
         * @example
         * // Get one AuditLog
         * const auditLog = await prisma.auditLog.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Find zero or more AuditLogs that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all AuditLogs
         * const auditLogs = await prisma.auditLog.findMany()
         *
         * // Get first 10 AuditLogs
         * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
         *
         */
        findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

        /**
         * Create a AuditLog.
         * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
         * @example
         * // Create one AuditLog
         * const AuditLog = await prisma.auditLog.create({
         *   data: {
         *     // ... data to create a AuditLog
         *   }
         * })
         *
         */
        create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Create many AuditLogs.
         * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
         * @example
         * // Create many AuditLogs
         * const auditLog = await prisma.auditLog.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create many AuditLogs and returns the data saved in the database.
         * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
         * @example
         * // Create many AuditLogs
         * const auditLog = await prisma.auditLog.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many AuditLogs and only return the `id`
         * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

        /**
         * Delete a AuditLog.
         * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
         * @example
         * // Delete one AuditLog
         * const AuditLog = await prisma.auditLog.delete({
         *   where: {
         *     // ... filter to delete one AuditLog
         *   }
         * })
         *
         */
        delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Update one AuditLog.
         * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
         * @example
         * // Update one AuditLog
         * const auditLog = await prisma.auditLog.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Delete zero or more AuditLogs.
         * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
         * @example
         * // Delete a few AuditLogs
         * const { count } = await prisma.auditLog.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more AuditLogs.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many AuditLogs
         * const auditLog = await prisma.auditLog.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more AuditLogs and returns the data updated in the database.
         * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
         * @example
         * // Update many AuditLogs
         * const auditLog = await prisma.auditLog.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more AuditLogs and only return the `id`
         * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

        /**
         * Create or update one AuditLog.
         * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
         * @example
         * // Update or create a AuditLog
         * const auditLog = await prisma.auditLog.upsert({
         *   create: {
         *     // ... data to create a AuditLog
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the AuditLog we want to update
         *   }
         * })
         */
        upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

        /**
         * Count the number of AuditLogs.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
         * @example
         * // Count the number of AuditLogs
         * const count = await prisma.auditLog.count({
         *   where: {
         *     // ... the filter for the AuditLogs we want to count
         *   }
         * })
         **/
        count<T extends AuditLogCountArgs>(
            args?: Subset<T, AuditLogCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a AuditLog.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

        /**
         * Group by AuditLog.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AuditLogGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends AuditLogGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: AuditLogGroupByArgs['orderBy'] }
                : { orderBy?: AuditLogGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                    ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                                : [
                                    Error,
                                    'Field ',
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ]
                    }[HavingFields]
                    : 'take' extends Keys<T>
                        ? 'orderBy' extends Keys<T>
                            ? ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                            : 'Error: If you provide "take", you also need to provide "orderBy"'
                        : 'skip' extends Keys<T>
                            ? 'orderBy' extends Keys<T>
                                ? ByValid extends True
                                    ? {}
                                    : {
                                        [P in OrderFields]: P extends ByFields
                                            ? never
                                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                    }[OrderFields]
                                : 'Error: If you provide "skip", you also need to provide "orderBy"'
                            : ByValid extends True
                                ? {}
                                : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
        >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    }

    /**
     * The delegate class that acts as a "Promise-like" for AuditLog.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise"

        tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>

        user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>

        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }


    /**
     * Fields of the AuditLog model
     */
    interface AuditLogFieldRefs {
        readonly id: FieldRef<"AuditLog", 'String'>
        readonly tenantId: FieldRef<"AuditLog", 'String'>
        readonly userId: FieldRef<"AuditLog", 'String'>
        readonly action: FieldRef<"AuditLog", 'String'>
        readonly entity: FieldRef<"AuditLog", 'String'>
        readonly entityId: FieldRef<"AuditLog", 'String'>
        readonly changes: FieldRef<"AuditLog", 'Json'>
        readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
    }


    // Custom InputTypes
    /**
     * AuditLog findUnique
     */
    export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelect<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogInclude<ExtArgs> | null
        /**
         * Filter, which AuditLog to fetch.
         */
        where: AuditLogWhereUniqueInput
    }

    /**
     * AuditLog findUniqueOrThrow
     */
    export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelect<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogInclude<ExtArgs> | null
        /**
         * Filter, which AuditLog to fetch.
         */
        where: AuditLogWhereUniqueInput
    }

    /**
     * AuditLog findFirst
     */
    export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelect<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogInclude<ExtArgs> | null
        /**
         * Filter, which AuditLog to fetch.
         */
        where?: AuditLogWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AuditLogs to fetch.
         */
        orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for AuditLogs.
         */
        cursor?: AuditLogWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AuditLogs from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AuditLogs.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AuditLogs.
         */
        distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
    }

    /**
     * AuditLog findFirstOrThrow
     */
    export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelect<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogInclude<ExtArgs> | null
        /**
         * Filter, which AuditLog to fetch.
         */
        where?: AuditLogWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AuditLogs to fetch.
         */
        orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for AuditLogs.
         */
        cursor?: AuditLogWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AuditLogs from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AuditLogs.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AuditLogs.
         */
        distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
    }

    /**
     * AuditLog findMany
     */
    export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelect<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogInclude<ExtArgs> | null
        /**
         * Filter, which AuditLogs to fetch.
         */
        where?: AuditLogWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AuditLogs to fetch.
         */
        orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing AuditLogs.
         */
        cursor?: AuditLogWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AuditLogs from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AuditLogs.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AuditLogs.
         */
        distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
    }

    /**
     * AuditLog create
     */
    export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelect<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogInclude<ExtArgs> | null
        /**
         * The data needed to create a AuditLog.
         */
        data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    }

    /**
     * AuditLog createMany
     */
    export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many AuditLogs.
         */
        data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * AuditLog createManyAndReturn
     */
    export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * The data used to create many AuditLogs.
         */
        data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
        skipDuplicates?: boolean
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
    }

    /**
     * AuditLog update
     */
    export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelect<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogInclude<ExtArgs> | null
        /**
         * The data needed to update a AuditLog.
         */
        data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
        /**
         * Choose, which AuditLog to update.
         */
        where: AuditLogWhereUniqueInput
    }

    /**
     * AuditLog updateMany
     */
    export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update AuditLogs.
         */
        data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
        /**
         * Filter which AuditLogs to update
         */
        where?: AuditLogWhereInput
        /**
         * Limit how many AuditLogs to update.
         */
        limit?: number
    }

    /**
     * AuditLog updateManyAndReturn
     */
    export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * The data used to update AuditLogs.
         */
        data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
        /**
         * Filter which AuditLogs to update
         */
        where?: AuditLogWhereInput
        /**
         * Limit how many AuditLogs to update.
         */
        limit?: number
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
    }

    /**
     * AuditLog upsert
     */
    export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelect<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogInclude<ExtArgs> | null
        /**
         * The filter to search for the AuditLog to update in case it exists.
         */
        where: AuditLogWhereUniqueInput
        /**
         * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
         */
        create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
        /**
         * In case the AuditLog was found with the provided `where` argument, update it with this data.
         */
        update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    }

    /**
     * AuditLog delete
     */
    export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelect<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogInclude<ExtArgs> | null
        /**
         * Filter which AuditLog to delete.
         */
        where: AuditLogWhereUniqueInput
    }

    /**
     * AuditLog deleteMany
     */
    export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which AuditLogs to delete
         */
        where?: AuditLogWhereInput
        /**
         * Limit how many AuditLogs to delete.
         */
        limit?: number
    }

    /**
     * AuditLog.user
     */
    export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        where?: UserWhereInput
    }

    /**
     * AuditLog without action
     */
    export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the AuditLog
         */
        select?: AuditLogSelect<ExtArgs> | null
        /**
         * Omit specific fields from the AuditLog
         */
        omit?: AuditLogOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AuditLogInclude<ExtArgs> | null
    }


    /**
     * Enums
     */

    export const TransactionIsolationLevel: {
        ReadUncommitted: 'ReadUncommitted',
        ReadCommitted: 'ReadCommitted',
        RepeatableRead: 'RepeatableRead',
        Serializable: 'Serializable'
    };

    export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


    export const UserScalarFieldEnum: {
        id: 'id',
        keycloakId: 'keycloakId',
        email: 'email',
        phone: 'phone',
        firstName: 'firstName',
        lastName: 'lastName',
        isGlobalAdmin: 'isGlobalAdmin',
        isActive: 'isActive',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    };

    export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


    export const TenantScalarFieldEnum: {
        id: 'id',
        name: 'name',
        slug: 'slug',
        domain: 'domain',
        themeConfig: 'themeConfig',
        taxRules: 'taxRules',
        gatewayKeys: 'gatewayKeys',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    };

    export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


    export const MembershipScalarFieldEnum: {
        id: 'id',
        userId: 'userId',
        tenantId: 'tenantId',
        status: 'status',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    };

    export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum]


    export const MembershipRoleScalarFieldEnum: {
        id: 'id',
        membershipId: 'membershipId',
        role: 'role'
    };

    export type MembershipRoleScalarFieldEnum = (typeof MembershipRoleScalarFieldEnum)[keyof typeof MembershipRoleScalarFieldEnum]


    export const AttendanceScalarFieldEnum: {
        id: 'id',
        tenantId: 'tenantId',
        membershipId: 'membershipId',
        rfidTag: 'rfidTag',
        authMethod: 'authMethod',
        checkInTime: 'checkInTime',
        checkOutTime: 'checkOutTime'
    };

    export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


    export const InvoiceScalarFieldEnum: {
        id: 'id',
        tenantId: 'tenantId',
        membershipId: 'membershipId',
        type: 'type',
        status: 'status',
        totalAmount: 'totalAmount',
        dueDate: 'dueDate',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    };

    export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


    export const InvoiceItemScalarFieldEnum: {
        id: 'id',
        invoiceId: 'invoiceId',
        description: 'description',
        amount: 'amount'
    };

    export type InvoiceItemScalarFieldEnum = (typeof InvoiceItemScalarFieldEnum)[keyof typeof InvoiceItemScalarFieldEnum]


    export const PaymentScalarFieldEnum: {
        id: 'id',
        invoiceId: 'invoiceId',
        amount: 'amount',
        method: 'method',
        gatewayTxId: 'gatewayTxId',
        status: 'status',
        processedAt: 'processedAt'
    };

    export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


    export const ResourceScalarFieldEnum: {
        id: 'id',
        tenantId: 'tenantId',
        name: 'name',
        type: 'type',
        capacity: 'capacity',
        linkedMemberId: 'linkedMemberId'
    };

    export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


    export const BookingScalarFieldEnum: {
        id: 'id',
        resourceId: 'resourceId',
        membershipId: 'membershipId',
        startTime: 'startTime',
        endTime: 'endTime'
    };

    export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


    export const MetricScalarFieldEnum: {
        id: 'id',
        membershipId: 'membershipId',
        metricType: 'metricType',
        data: 'data',
        recordedAt: 'recordedAt'
    };

    export type MetricScalarFieldEnum = (typeof MetricScalarFieldEnum)[keyof typeof MetricScalarFieldEnum]


    export const DocumentScalarFieldEnum: {
        id: 'id',
        membershipId: 'membershipId',
        fileName: 'fileName',
        fileUrl: 'fileUrl',
        context: 'context',
        uploadedAt: 'uploadedAt'
    };

    export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


    export const AuditLogScalarFieldEnum: {
        id: 'id',
        tenantId: 'tenantId',
        userId: 'userId',
        action: 'action',
        entity: 'entity',
        entityId: 'entityId',
        changes: 'changes',
        createdAt: 'createdAt'
    };

    export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


    export const SortOrder: {
        asc: 'asc',
        desc: 'desc'
    };

    export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


    export const NullableJsonNullValueInput: {
        DbNull: typeof DbNull,
        JsonNull: typeof JsonNull
    };

    export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


    export const JsonNullValueInput: {
        JsonNull: typeof JsonNull
    };

    export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


    export const QueryMode: {
        default: 'default',
        insensitive: 'insensitive'
    };

    export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


    export const NullsOrder: {
        first: 'first',
        last: 'last'
    };

    export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


    export const JsonNullValueFilter: {
        DbNull: typeof DbNull,
        JsonNull: typeof JsonNull,
        AnyNull: typeof AnyNull
    };

    export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


    /**
     * Field references
     */


    /**
     * Reference to a field of type 'String'
     */
    export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>


    /**
     * Reference to a field of type 'String[]'
     */
    export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>


    /**
     * Reference to a field of type 'Boolean'
     */
    export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>


    /**
     * Reference to a field of type 'DateTime'
     */
    export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>


    /**
     * Reference to a field of type 'DateTime[]'
     */
    export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>


    /**
     * Reference to a field of type 'Json'
     */
    export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>


    /**
     * Reference to a field of type 'QueryMode'
     */
    export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>


    /**
     * Reference to a field of type 'MembershipStatus'
     */
    export type EnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus'>


    /**
     * Reference to a field of type 'MembershipStatus[]'
     */
    export type ListEnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus[]'>


    /**
     * Reference to a field of type 'Role'
     */
    export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>


    /**
     * Reference to a field of type 'Role[]'
     */
    export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>


    /**
     * Reference to a field of type 'InvoiceType'
     */
    export type EnumInvoiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceType'>


    /**
     * Reference to a field of type 'InvoiceType[]'
     */
    export type ListEnumInvoiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceType[]'>


    /**
     * Reference to a field of type 'InvoiceStatus'
     */
    export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>


    /**
     * Reference to a field of type 'InvoiceStatus[]'
     */
    export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>


    /**
     * Reference to a field of type 'Decimal'
     */
    export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>


    /**
     * Reference to a field of type 'Decimal[]'
     */
    export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>


    /**
     * Reference to a field of type 'PaymentMethod'
     */
    export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>


    /**
     * Reference to a field of type 'PaymentMethod[]'
     */
    export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>


    /**
     * Reference to a field of type 'PaymentStatus'
     */
    export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>


    /**
     * Reference to a field of type 'PaymentStatus[]'
     */
    export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>


    /**
     * Reference to a field of type 'ResourceType'
     */
    export type EnumResourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceType'>


    /**
     * Reference to a field of type 'ResourceType[]'
     */
    export type ListEnumResourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceType[]'>


    /**
     * Reference to a field of type 'Int'
     */
    export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>


    /**
     * Reference to a field of type 'Int[]'
     */
    export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>


    /**
     * Reference to a field of type 'Float'
     */
    export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>


    /**
     * Reference to a field of type 'Float[]'
     */
    export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>

    /**
     * Deep Input Types
     */


    export type UserWhereInput = {
        AND?: UserWhereInput | UserWhereInput[]
        OR?: UserWhereInput[]
        NOT?: UserWhereInput | UserWhereInput[]
        id?: StringFilter<"User"> | string
        keycloakId?: StringNullableFilter<"User"> | string | null
        email?: StringFilter<"User"> | string
        phone?: StringNullableFilter<"User"> | string | null
        firstName?: StringFilter<"User"> | string
        lastName?: StringFilter<"User"> | string
        isGlobalAdmin?: BoolFilter<"User"> | boolean
        isActive?: BoolFilter<"User"> | boolean
        createdAt?: DateTimeFilter<"User"> | Date | string
        updatedAt?: DateTimeFilter<"User"> | Date | string
        memberships?: MembershipListRelationFilter
        auditLogs?: AuditLogListRelationFilter
    }

    export type UserOrderByWithRelationInput = {
        id?: SortOrder
        keycloakId?: SortOrderInput | SortOrder
        email?: SortOrder
        phone?: SortOrderInput | SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        isGlobalAdmin?: SortOrder
        isActive?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        memberships?: MembershipOrderByRelationAggregateInput
        auditLogs?: AuditLogOrderByRelationAggregateInput
    }

    export type UserWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        keycloakId?: string
        email?: string
        phone?: string
        AND?: UserWhereInput | UserWhereInput[]
        OR?: UserWhereInput[]
        NOT?: UserWhereInput | UserWhereInput[]
        firstName?: StringFilter<"User"> | string
        lastName?: StringFilter<"User"> | string
        isGlobalAdmin?: BoolFilter<"User"> | boolean
        isActive?: BoolFilter<"User"> | boolean
        createdAt?: DateTimeFilter<"User"> | Date | string
        updatedAt?: DateTimeFilter<"User"> | Date | string
        memberships?: MembershipListRelationFilter
        auditLogs?: AuditLogListRelationFilter
    }, "id" | "keycloakId" | "email" | "phone">

    export type UserOrderByWithAggregationInput = {
        id?: SortOrder
        keycloakId?: SortOrderInput | SortOrder
        email?: SortOrder
        phone?: SortOrderInput | SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        isGlobalAdmin?: SortOrder
        isActive?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        _count?: UserCountOrderByAggregateInput
        _max?: UserMaxOrderByAggregateInput
        _min?: UserMinOrderByAggregateInput
    }

    export type UserScalarWhereWithAggregatesInput = {
        AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
        OR?: UserScalarWhereWithAggregatesInput[]
        NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"User"> | string
        keycloakId?: StringNullableWithAggregatesFilter<"User"> | string | null
        email?: StringWithAggregatesFilter<"User"> | string
        phone?: StringNullableWithAggregatesFilter<"User"> | string | null
        firstName?: StringWithAggregatesFilter<"User"> | string
        lastName?: StringWithAggregatesFilter<"User"> | string
        isGlobalAdmin?: BoolWithAggregatesFilter<"User"> | boolean
        isActive?: BoolWithAggregatesFilter<"User"> | boolean
        createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    }

    export type TenantWhereInput = {
        AND?: TenantWhereInput | TenantWhereInput[]
        OR?: TenantWhereInput[]
        NOT?: TenantWhereInput | TenantWhereInput[]
        id?: StringFilter<"Tenant"> | string
        name?: StringFilter<"Tenant"> | string
        slug?: StringFilter<"Tenant"> | string
        domain?: StringNullableFilter<"Tenant"> | string | null
        themeConfig?: JsonNullableFilter<"Tenant">
        taxRules?: JsonNullableFilter<"Tenant">
        gatewayKeys?: JsonNullableFilter<"Tenant">
        createdAt?: DateTimeFilter<"Tenant"> | Date | string
        updatedAt?: DateTimeFilter<"Tenant"> | Date | string
        memberships?: MembershipListRelationFilter
        attendances?: AttendanceListRelationFilter
        invoices?: InvoiceListRelationFilter
        resources?: ResourceListRelationFilter
        auditLogs?: AuditLogListRelationFilter
    }

    export type TenantOrderByWithRelationInput = {
        id?: SortOrder
        name?: SortOrder
        slug?: SortOrder
        domain?: SortOrderInput | SortOrder
        themeConfig?: SortOrderInput | SortOrder
        taxRules?: SortOrderInput | SortOrder
        gatewayKeys?: SortOrderInput | SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        memberships?: MembershipOrderByRelationAggregateInput
        attendances?: AttendanceOrderByRelationAggregateInput
        invoices?: InvoiceOrderByRelationAggregateInput
        resources?: ResourceOrderByRelationAggregateInput
        auditLogs?: AuditLogOrderByRelationAggregateInput
    }

    export type TenantWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        slug?: string
        domain?: string
        AND?: TenantWhereInput | TenantWhereInput[]
        OR?: TenantWhereInput[]
        NOT?: TenantWhereInput | TenantWhereInput[]
        name?: StringFilter<"Tenant"> | string
        themeConfig?: JsonNullableFilter<"Tenant">
        taxRules?: JsonNullableFilter<"Tenant">
        gatewayKeys?: JsonNullableFilter<"Tenant">
        createdAt?: DateTimeFilter<"Tenant"> | Date | string
        updatedAt?: DateTimeFilter<"Tenant"> | Date | string
        memberships?: MembershipListRelationFilter
        attendances?: AttendanceListRelationFilter
        invoices?: InvoiceListRelationFilter
        resources?: ResourceListRelationFilter
        auditLogs?: AuditLogListRelationFilter
    }, "id" | "slug" | "domain">

    export type TenantOrderByWithAggregationInput = {
        id?: SortOrder
        name?: SortOrder
        slug?: SortOrder
        domain?: SortOrderInput | SortOrder
        themeConfig?: SortOrderInput | SortOrder
        taxRules?: SortOrderInput | SortOrder
        gatewayKeys?: SortOrderInput | SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        _count?: TenantCountOrderByAggregateInput
        _max?: TenantMaxOrderByAggregateInput
        _min?: TenantMinOrderByAggregateInput
    }

    export type TenantScalarWhereWithAggregatesInput = {
        AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
        OR?: TenantScalarWhereWithAggregatesInput[]
        NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Tenant"> | string
        name?: StringWithAggregatesFilter<"Tenant"> | string
        slug?: StringWithAggregatesFilter<"Tenant"> | string
        domain?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
        themeConfig?: JsonNullableWithAggregatesFilter<"Tenant">
        taxRules?: JsonNullableWithAggregatesFilter<"Tenant">
        gatewayKeys?: JsonNullableWithAggregatesFilter<"Tenant">
        createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    }

    export type MembershipWhereInput = {
        AND?: MembershipWhereInput | MembershipWhereInput[]
        OR?: MembershipWhereInput[]
        NOT?: MembershipWhereInput | MembershipWhereInput[]
        id?: StringFilter<"Membership"> | string
        userId?: StringFilter<"Membership"> | string
        tenantId?: StringFilter<"Membership"> | string
        status?: EnumMembershipStatusFilter<"Membership"> | $Enums.MembershipStatus
        createdAt?: DateTimeFilter<"Membership"> | Date | string
        updatedAt?: DateTimeFilter<"Membership"> | Date | string
        user?: XOR<UserScalarRelationFilter, UserWhereInput>
        tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
        roles?: MembershipRoleListRelationFilter
        attendances?: AttendanceListRelationFilter
        invoices?: InvoiceListRelationFilter
        bookings?: BookingListRelationFilter
        metrics?: MetricListRelationFilter
        documents?: DocumentListRelationFilter
    }

    export type MembershipOrderByWithRelationInput = {
        id?: SortOrder
        userId?: SortOrder
        tenantId?: SortOrder
        status?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        user?: UserOrderByWithRelationInput
        tenant?: TenantOrderByWithRelationInput
        roles?: MembershipRoleOrderByRelationAggregateInput
        attendances?: AttendanceOrderByRelationAggregateInput
        invoices?: InvoiceOrderByRelationAggregateInput
        bookings?: BookingOrderByRelationAggregateInput
        metrics?: MetricOrderByRelationAggregateInput
        documents?: DocumentOrderByRelationAggregateInput
    }

    export type MembershipWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        userId_tenantId?: MembershipUserIdTenantIdCompoundUniqueInput
        AND?: MembershipWhereInput | MembershipWhereInput[]
        OR?: MembershipWhereInput[]
        NOT?: MembershipWhereInput | MembershipWhereInput[]
        userId?: StringFilter<"Membership"> | string
        tenantId?: StringFilter<"Membership"> | string
        status?: EnumMembershipStatusFilter<"Membership"> | $Enums.MembershipStatus
        createdAt?: DateTimeFilter<"Membership"> | Date | string
        updatedAt?: DateTimeFilter<"Membership"> | Date | string
        user?: XOR<UserScalarRelationFilter, UserWhereInput>
        tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
        roles?: MembershipRoleListRelationFilter
        attendances?: AttendanceListRelationFilter
        invoices?: InvoiceListRelationFilter
        bookings?: BookingListRelationFilter
        metrics?: MetricListRelationFilter
        documents?: DocumentListRelationFilter
    }, "id" | "userId_tenantId">

    export type MembershipOrderByWithAggregationInput = {
        id?: SortOrder
        userId?: SortOrder
        tenantId?: SortOrder
        status?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        _count?: MembershipCountOrderByAggregateInput
        _max?: MembershipMaxOrderByAggregateInput
        _min?: MembershipMinOrderByAggregateInput
    }

    export type MembershipScalarWhereWithAggregatesInput = {
        AND?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
        OR?: MembershipScalarWhereWithAggregatesInput[]
        NOT?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Membership"> | string
        userId?: StringWithAggregatesFilter<"Membership"> | string
        tenantId?: StringWithAggregatesFilter<"Membership"> | string
        status?: EnumMembershipStatusWithAggregatesFilter<"Membership"> | $Enums.MembershipStatus
        createdAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    }

    export type MembershipRoleWhereInput = {
        AND?: MembershipRoleWhereInput | MembershipRoleWhereInput[]
        OR?: MembershipRoleWhereInput[]
        NOT?: MembershipRoleWhereInput | MembershipRoleWhereInput[]
        id?: StringFilter<"MembershipRole"> | string
        membershipId?: StringFilter<"MembershipRole"> | string
        role?: EnumRoleFilter<"MembershipRole"> | $Enums.Role
        membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
    }

    export type MembershipRoleOrderByWithRelationInput = {
        id?: SortOrder
        membershipId?: SortOrder
        role?: SortOrder
        membership?: MembershipOrderByWithRelationInput
    }

    export type MembershipRoleWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        membershipId_role?: MembershipRoleMembershipIdRoleCompoundUniqueInput
        AND?: MembershipRoleWhereInput | MembershipRoleWhereInput[]
        OR?: MembershipRoleWhereInput[]
        NOT?: MembershipRoleWhereInput | MembershipRoleWhereInput[]
        membershipId?: StringFilter<"MembershipRole"> | string
        role?: EnumRoleFilter<"MembershipRole"> | $Enums.Role
        membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
    }, "id" | "membershipId_role">

    export type MembershipRoleOrderByWithAggregationInput = {
        id?: SortOrder
        membershipId?: SortOrder
        role?: SortOrder
        _count?: MembershipRoleCountOrderByAggregateInput
        _max?: MembershipRoleMaxOrderByAggregateInput
        _min?: MembershipRoleMinOrderByAggregateInput
    }

    export type MembershipRoleScalarWhereWithAggregatesInput = {
        AND?: MembershipRoleScalarWhereWithAggregatesInput | MembershipRoleScalarWhereWithAggregatesInput[]
        OR?: MembershipRoleScalarWhereWithAggregatesInput[]
        NOT?: MembershipRoleScalarWhereWithAggregatesInput | MembershipRoleScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"MembershipRole"> | string
        membershipId?: StringWithAggregatesFilter<"MembershipRole"> | string
        role?: EnumRoleWithAggregatesFilter<"MembershipRole"> | $Enums.Role
    }

    export type AttendanceWhereInput = {
        AND?: AttendanceWhereInput | AttendanceWhereInput[]
        OR?: AttendanceWhereInput[]
        NOT?: AttendanceWhereInput | AttendanceWhereInput[]
        id?: StringFilter<"Attendance"> | string
        tenantId?: StringFilter<"Attendance"> | string
        membershipId?: StringNullableFilter<"Attendance"> | string | null
        rfidTag?: StringNullableFilter<"Attendance"> | string | null
        authMethod?: StringFilter<"Attendance"> | string
        checkInTime?: DateTimeFilter<"Attendance"> | Date | string
        checkOutTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
        tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
        membership?: XOR<MembershipNullableScalarRelationFilter, MembershipWhereInput> | null
    }

    export type AttendanceOrderByWithRelationInput = {
        id?: SortOrder
        tenantId?: SortOrder
        membershipId?: SortOrderInput | SortOrder
        rfidTag?: SortOrderInput | SortOrder
        authMethod?: SortOrder
        checkInTime?: SortOrder
        checkOutTime?: SortOrderInput | SortOrder
        tenant?: TenantOrderByWithRelationInput
        membership?: MembershipOrderByWithRelationInput
    }

    export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: AttendanceWhereInput | AttendanceWhereInput[]
        OR?: AttendanceWhereInput[]
        NOT?: AttendanceWhereInput | AttendanceWhereInput[]
        tenantId?: StringFilter<"Attendance"> | string
        membershipId?: StringNullableFilter<"Attendance"> | string | null
        rfidTag?: StringNullableFilter<"Attendance"> | string | null
        authMethod?: StringFilter<"Attendance"> | string
        checkInTime?: DateTimeFilter<"Attendance"> | Date | string
        checkOutTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
        tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
        membership?: XOR<MembershipNullableScalarRelationFilter, MembershipWhereInput> | null
    }, "id">

    export type AttendanceOrderByWithAggregationInput = {
        id?: SortOrder
        tenantId?: SortOrder
        membershipId?: SortOrderInput | SortOrder
        rfidTag?: SortOrderInput | SortOrder
        authMethod?: SortOrder
        checkInTime?: SortOrder
        checkOutTime?: SortOrderInput | SortOrder
        _count?: AttendanceCountOrderByAggregateInput
        _max?: AttendanceMaxOrderByAggregateInput
        _min?: AttendanceMinOrderByAggregateInput
    }

    export type AttendanceScalarWhereWithAggregatesInput = {
        AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
        OR?: AttendanceScalarWhereWithAggregatesInput[]
        NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Attendance"> | string
        tenantId?: StringWithAggregatesFilter<"Attendance"> | string
        membershipId?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
        rfidTag?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
        authMethod?: StringWithAggregatesFilter<"Attendance"> | string
        checkInTime?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
        checkOutTime?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    }

    export type InvoiceWhereInput = {
        AND?: InvoiceWhereInput | InvoiceWhereInput[]
        OR?: InvoiceWhereInput[]
        NOT?: InvoiceWhereInput | InvoiceWhereInput[]
        id?: StringFilter<"Invoice"> | string
        tenantId?: StringFilter<"Invoice"> | string
        membershipId?: StringFilter<"Invoice"> | string
        type?: EnumInvoiceTypeFilter<"Invoice"> | $Enums.InvoiceType
        status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
        totalAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
        dueDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
        createdAt?: DateTimeFilter<"Invoice"> | Date | string
        updatedAt?: DateTimeFilter<"Invoice"> | Date | string
        tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
        membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
        payments?: PaymentListRelationFilter
        items?: InvoiceItemListRelationFilter
    }

    export type InvoiceOrderByWithRelationInput = {
        id?: SortOrder
        tenantId?: SortOrder
        membershipId?: SortOrder
        type?: SortOrder
        status?: SortOrder
        totalAmount?: SortOrder
        dueDate?: SortOrderInput | SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        tenant?: TenantOrderByWithRelationInput
        membership?: MembershipOrderByWithRelationInput
        payments?: PaymentOrderByRelationAggregateInput
        items?: InvoiceItemOrderByRelationAggregateInput
    }

    export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: InvoiceWhereInput | InvoiceWhereInput[]
        OR?: InvoiceWhereInput[]
        NOT?: InvoiceWhereInput | InvoiceWhereInput[]
        tenantId?: StringFilter<"Invoice"> | string
        membershipId?: StringFilter<"Invoice"> | string
        type?: EnumInvoiceTypeFilter<"Invoice"> | $Enums.InvoiceType
        status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
        totalAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
        dueDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
        createdAt?: DateTimeFilter<"Invoice"> | Date | string
        updatedAt?: DateTimeFilter<"Invoice"> | Date | string
        tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
        membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
        payments?: PaymentListRelationFilter
        items?: InvoiceItemListRelationFilter
    }, "id">

    export type InvoiceOrderByWithAggregationInput = {
        id?: SortOrder
        tenantId?: SortOrder
        membershipId?: SortOrder
        type?: SortOrder
        status?: SortOrder
        totalAmount?: SortOrder
        dueDate?: SortOrderInput | SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        _count?: InvoiceCountOrderByAggregateInput
        _avg?: InvoiceAvgOrderByAggregateInput
        _max?: InvoiceMaxOrderByAggregateInput
        _min?: InvoiceMinOrderByAggregateInput
        _sum?: InvoiceSumOrderByAggregateInput
    }

    export type InvoiceScalarWhereWithAggregatesInput = {
        AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
        OR?: InvoiceScalarWhereWithAggregatesInput[]
        NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Invoice"> | string
        tenantId?: StringWithAggregatesFilter<"Invoice"> | string
        membershipId?: StringWithAggregatesFilter<"Invoice"> | string
        type?: EnumInvoiceTypeWithAggregatesFilter<"Invoice"> | $Enums.InvoiceType
        status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
        totalAmount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
        dueDate?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
        createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    }

    export type InvoiceItemWhereInput = {
        AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
        OR?: InvoiceItemWhereInput[]
        NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
        id?: StringFilter<"InvoiceItem"> | string
        invoiceId?: StringFilter<"InvoiceItem"> | string
        description?: StringFilter<"InvoiceItem"> | string
        amount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
        invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    }

    export type InvoiceItemOrderByWithRelationInput = {
        id?: SortOrder
        invoiceId?: SortOrder
        description?: SortOrder
        amount?: SortOrder
        invoice?: InvoiceOrderByWithRelationInput
    }

    export type InvoiceItemWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
        OR?: InvoiceItemWhereInput[]
        NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
        invoiceId?: StringFilter<"InvoiceItem"> | string
        description?: StringFilter<"InvoiceItem"> | string
        amount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
        invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    }, "id">

    export type InvoiceItemOrderByWithAggregationInput = {
        id?: SortOrder
        invoiceId?: SortOrder
        description?: SortOrder
        amount?: SortOrder
        _count?: InvoiceItemCountOrderByAggregateInput
        _avg?: InvoiceItemAvgOrderByAggregateInput
        _max?: InvoiceItemMaxOrderByAggregateInput
        _min?: InvoiceItemMinOrderByAggregateInput
        _sum?: InvoiceItemSumOrderByAggregateInput
    }

    export type InvoiceItemScalarWhereWithAggregatesInput = {
        AND?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
        OR?: InvoiceItemScalarWhereWithAggregatesInput[]
        NOT?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"InvoiceItem"> | string
        invoiceId?: StringWithAggregatesFilter<"InvoiceItem"> | string
        description?: StringWithAggregatesFilter<"InvoiceItem"> | string
        amount?: DecimalWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    }

    export type PaymentWhereInput = {
        AND?: PaymentWhereInput | PaymentWhereInput[]
        OR?: PaymentWhereInput[]
        NOT?: PaymentWhereInput | PaymentWhereInput[]
        id?: StringFilter<"Payment"> | string
        invoiceId?: StringFilter<"Payment"> | string
        amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
        method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
        gatewayTxId?: StringNullableFilter<"Payment"> | string | null
        status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
        processedAt?: DateTimeFilter<"Payment"> | Date | string
        invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    }

    export type PaymentOrderByWithRelationInput = {
        id?: SortOrder
        invoiceId?: SortOrder
        amount?: SortOrder
        method?: SortOrder
        gatewayTxId?: SortOrderInput | SortOrder
        status?: SortOrder
        processedAt?: SortOrder
        invoice?: InvoiceOrderByWithRelationInput
    }

    export type PaymentWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        gatewayTxId?: string
        AND?: PaymentWhereInput | PaymentWhereInput[]
        OR?: PaymentWhereInput[]
        NOT?: PaymentWhereInput | PaymentWhereInput[]
        invoiceId?: StringFilter<"Payment"> | string
        amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
        method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
        status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
        processedAt?: DateTimeFilter<"Payment"> | Date | string
        invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    }, "id" | "gatewayTxId">

    export type PaymentOrderByWithAggregationInput = {
        id?: SortOrder
        invoiceId?: SortOrder
        amount?: SortOrder
        method?: SortOrder
        gatewayTxId?: SortOrderInput | SortOrder
        status?: SortOrder
        processedAt?: SortOrder
        _count?: PaymentCountOrderByAggregateInput
        _avg?: PaymentAvgOrderByAggregateInput
        _max?: PaymentMaxOrderByAggregateInput
        _min?: PaymentMinOrderByAggregateInput
        _sum?: PaymentSumOrderByAggregateInput
    }

    export type PaymentScalarWhereWithAggregatesInput = {
        AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
        OR?: PaymentScalarWhereWithAggregatesInput[]
        NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Payment"> | string
        invoiceId?: StringWithAggregatesFilter<"Payment"> | string
        amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
        method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
        gatewayTxId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
        status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
        processedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    }

    export type ResourceWhereInput = {
        AND?: ResourceWhereInput | ResourceWhereInput[]
        OR?: ResourceWhereInput[]
        NOT?: ResourceWhereInput | ResourceWhereInput[]
        id?: StringFilter<"Resource"> | string
        tenantId?: StringFilter<"Resource"> | string
        name?: StringFilter<"Resource"> | string
        type?: EnumResourceTypeFilter<"Resource"> | $Enums.ResourceType
        capacity?: IntFilter<"Resource"> | number
        linkedMemberId?: StringNullableFilter<"Resource"> | string | null
        tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
        bookings?: BookingListRelationFilter
    }

    export type ResourceOrderByWithRelationInput = {
        id?: SortOrder
        tenantId?: SortOrder
        name?: SortOrder
        type?: SortOrder
        capacity?: SortOrder
        linkedMemberId?: SortOrderInput | SortOrder
        tenant?: TenantOrderByWithRelationInput
        bookings?: BookingOrderByRelationAggregateInput
    }

    export type ResourceWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: ResourceWhereInput | ResourceWhereInput[]
        OR?: ResourceWhereInput[]
        NOT?: ResourceWhereInput | ResourceWhereInput[]
        tenantId?: StringFilter<"Resource"> | string
        name?: StringFilter<"Resource"> | string
        type?: EnumResourceTypeFilter<"Resource"> | $Enums.ResourceType
        capacity?: IntFilter<"Resource"> | number
        linkedMemberId?: StringNullableFilter<"Resource"> | string | null
        tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
        bookings?: BookingListRelationFilter
    }, "id">

    export type ResourceOrderByWithAggregationInput = {
        id?: SortOrder
        tenantId?: SortOrder
        name?: SortOrder
        type?: SortOrder
        capacity?: SortOrder
        linkedMemberId?: SortOrderInput | SortOrder
        _count?: ResourceCountOrderByAggregateInput
        _avg?: ResourceAvgOrderByAggregateInput
        _max?: ResourceMaxOrderByAggregateInput
        _min?: ResourceMinOrderByAggregateInput
        _sum?: ResourceSumOrderByAggregateInput
    }

    export type ResourceScalarWhereWithAggregatesInput = {
        AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
        OR?: ResourceScalarWhereWithAggregatesInput[]
        NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Resource"> | string
        tenantId?: StringWithAggregatesFilter<"Resource"> | string
        name?: StringWithAggregatesFilter<"Resource"> | string
        type?: EnumResourceTypeWithAggregatesFilter<"Resource"> | $Enums.ResourceType
        capacity?: IntWithAggregatesFilter<"Resource"> | number
        linkedMemberId?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    }

    export type BookingWhereInput = {
        AND?: BookingWhereInput | BookingWhereInput[]
        OR?: BookingWhereInput[]
        NOT?: BookingWhereInput | BookingWhereInput[]
        id?: StringFilter<"Booking"> | string
        resourceId?: StringFilter<"Booking"> | string
        membershipId?: StringFilter<"Booking"> | string
        startTime?: DateTimeFilter<"Booking"> | Date | string
        endTime?: DateTimeFilter<"Booking"> | Date | string
        resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
        membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
    }

    export type BookingOrderByWithRelationInput = {
        id?: SortOrder
        resourceId?: SortOrder
        membershipId?: SortOrder
        startTime?: SortOrder
        endTime?: SortOrder
        resource?: ResourceOrderByWithRelationInput
        membership?: MembershipOrderByWithRelationInput
    }

    export type BookingWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: BookingWhereInput | BookingWhereInput[]
        OR?: BookingWhereInput[]
        NOT?: BookingWhereInput | BookingWhereInput[]
        resourceId?: StringFilter<"Booking"> | string
        membershipId?: StringFilter<"Booking"> | string
        startTime?: DateTimeFilter<"Booking"> | Date | string
        endTime?: DateTimeFilter<"Booking"> | Date | string
        resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
        membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
    }, "id">

    export type BookingOrderByWithAggregationInput = {
        id?: SortOrder
        resourceId?: SortOrder
        membershipId?: SortOrder
        startTime?: SortOrder
        endTime?: SortOrder
        _count?: BookingCountOrderByAggregateInput
        _max?: BookingMaxOrderByAggregateInput
        _min?: BookingMinOrderByAggregateInput
    }

    export type BookingScalarWhereWithAggregatesInput = {
        AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
        OR?: BookingScalarWhereWithAggregatesInput[]
        NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Booking"> | string
        resourceId?: StringWithAggregatesFilter<"Booking"> | string
        membershipId?: StringWithAggregatesFilter<"Booking"> | string
        startTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
        endTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    }

    export type MetricWhereInput = {
        AND?: MetricWhereInput | MetricWhereInput[]
        OR?: MetricWhereInput[]
        NOT?: MetricWhereInput | MetricWhereInput[]
        id?: StringFilter<"Metric"> | string
        membershipId?: StringFilter<"Metric"> | string
        metricType?: StringFilter<"Metric"> | string
        data?: JsonFilter<"Metric">
        recordedAt?: DateTimeFilter<"Metric"> | Date | string
        membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
    }

    export type MetricOrderByWithRelationInput = {
        id?: SortOrder
        membershipId?: SortOrder
        metricType?: SortOrder
        data?: SortOrder
        recordedAt?: SortOrder
        membership?: MembershipOrderByWithRelationInput
    }

    export type MetricWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: MetricWhereInput | MetricWhereInput[]
        OR?: MetricWhereInput[]
        NOT?: MetricWhereInput | MetricWhereInput[]
        membershipId?: StringFilter<"Metric"> | string
        metricType?: StringFilter<"Metric"> | string
        data?: JsonFilter<"Metric">
        recordedAt?: DateTimeFilter<"Metric"> | Date | string
        membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
    }, "id">

    export type MetricOrderByWithAggregationInput = {
        id?: SortOrder
        membershipId?: SortOrder
        metricType?: SortOrder
        data?: SortOrder
        recordedAt?: SortOrder
        _count?: MetricCountOrderByAggregateInput
        _max?: MetricMaxOrderByAggregateInput
        _min?: MetricMinOrderByAggregateInput
    }

    export type MetricScalarWhereWithAggregatesInput = {
        AND?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
        OR?: MetricScalarWhereWithAggregatesInput[]
        NOT?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Metric"> | string
        membershipId?: StringWithAggregatesFilter<"Metric"> | string
        metricType?: StringWithAggregatesFilter<"Metric"> | string
        data?: JsonWithAggregatesFilter<"Metric">
        recordedAt?: DateTimeWithAggregatesFilter<"Metric"> | Date | string
    }

    export type DocumentWhereInput = {
        AND?: DocumentWhereInput | DocumentWhereInput[]
        OR?: DocumentWhereInput[]
        NOT?: DocumentWhereInput | DocumentWhereInput[]
        id?: StringFilter<"Document"> | string
        membershipId?: StringFilter<"Document"> | string
        fileName?: StringFilter<"Document"> | string
        fileUrl?: StringFilter<"Document"> | string
        context?: StringFilter<"Document"> | string
        uploadedAt?: DateTimeFilter<"Document"> | Date | string
        membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
    }

    export type DocumentOrderByWithRelationInput = {
        id?: SortOrder
        membershipId?: SortOrder
        fileName?: SortOrder
        fileUrl?: SortOrder
        context?: SortOrder
        uploadedAt?: SortOrder
        membership?: MembershipOrderByWithRelationInput
    }

    export type DocumentWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: DocumentWhereInput | DocumentWhereInput[]
        OR?: DocumentWhereInput[]
        NOT?: DocumentWhereInput | DocumentWhereInput[]
        membershipId?: StringFilter<"Document"> | string
        fileName?: StringFilter<"Document"> | string
        fileUrl?: StringFilter<"Document"> | string
        context?: StringFilter<"Document"> | string
        uploadedAt?: DateTimeFilter<"Document"> | Date | string
        membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
    }, "id">

    export type DocumentOrderByWithAggregationInput = {
        id?: SortOrder
        membershipId?: SortOrder
        fileName?: SortOrder
        fileUrl?: SortOrder
        context?: SortOrder
        uploadedAt?: SortOrder
        _count?: DocumentCountOrderByAggregateInput
        _max?: DocumentMaxOrderByAggregateInput
        _min?: DocumentMinOrderByAggregateInput
    }

    export type DocumentScalarWhereWithAggregatesInput = {
        AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
        OR?: DocumentScalarWhereWithAggregatesInput[]
        NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"Document"> | string
        membershipId?: StringWithAggregatesFilter<"Document"> | string
        fileName?: StringWithAggregatesFilter<"Document"> | string
        fileUrl?: StringWithAggregatesFilter<"Document"> | string
        context?: StringWithAggregatesFilter<"Document"> | string
        uploadedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    }

    export type AuditLogWhereInput = {
        AND?: AuditLogWhereInput | AuditLogWhereInput[]
        OR?: AuditLogWhereInput[]
        NOT?: AuditLogWhereInput | AuditLogWhereInput[]
        id?: StringFilter<"AuditLog"> | string
        tenantId?: StringFilter<"AuditLog"> | string
        userId?: StringNullableFilter<"AuditLog"> | string | null
        action?: StringFilter<"AuditLog"> | string
        entity?: StringFilter<"AuditLog"> | string
        entityId?: StringFilter<"AuditLog"> | string
        changes?: JsonNullableFilter<"AuditLog">
        createdAt?: DateTimeFilter<"AuditLog"> | Date | string
        tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
        user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    }

    export type AuditLogOrderByWithRelationInput = {
        id?: SortOrder
        tenantId?: SortOrder
        userId?: SortOrderInput | SortOrder
        action?: SortOrder
        entity?: SortOrder
        entityId?: SortOrder
        changes?: SortOrderInput | SortOrder
        createdAt?: SortOrder
        tenant?: TenantOrderByWithRelationInput
        user?: UserOrderByWithRelationInput
    }

    export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
        id?: string
        AND?: AuditLogWhereInput | AuditLogWhereInput[]
        OR?: AuditLogWhereInput[]
        NOT?: AuditLogWhereInput | AuditLogWhereInput[]
        tenantId?: StringFilter<"AuditLog"> | string
        userId?: StringNullableFilter<"AuditLog"> | string | null
        action?: StringFilter<"AuditLog"> | string
        entity?: StringFilter<"AuditLog"> | string
        entityId?: StringFilter<"AuditLog"> | string
        changes?: JsonNullableFilter<"AuditLog">
        createdAt?: DateTimeFilter<"AuditLog"> | Date | string
        tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
        user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    }, "id">

    export type AuditLogOrderByWithAggregationInput = {
        id?: SortOrder
        tenantId?: SortOrder
        userId?: SortOrderInput | SortOrder
        action?: SortOrder
        entity?: SortOrder
        entityId?: SortOrder
        changes?: SortOrderInput | SortOrder
        createdAt?: SortOrder
        _count?: AuditLogCountOrderByAggregateInput
        _max?: AuditLogMaxOrderByAggregateInput
        _min?: AuditLogMinOrderByAggregateInput
    }

    export type AuditLogScalarWhereWithAggregatesInput = {
        AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
        OR?: AuditLogScalarWhereWithAggregatesInput[]
        NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
        id?: StringWithAggregatesFilter<"AuditLog"> | string
        tenantId?: StringWithAggregatesFilter<"AuditLog"> | string
        userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
        action?: StringWithAggregatesFilter<"AuditLog"> | string
        entity?: StringWithAggregatesFilter<"AuditLog"> | string
        entityId?: StringWithAggregatesFilter<"AuditLog"> | string
        changes?: JsonNullableWithAggregatesFilter<"AuditLog">
        createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    }

    export type UserCreateInput = {
        id?: string
        keycloakId?: string | null
        email: string
        phone?: string | null
        firstName: string
        lastName: string
        isGlobalAdmin?: boolean
        isActive?: boolean
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipCreateNestedManyWithoutUserInput
        auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    }

    export type UserUncheckedCreateInput = {
        id?: string
        keycloakId?: string | null
        email: string
        phone?: string | null
        firstName: string
        lastName: string
        isGlobalAdmin?: boolean
        isActive?: boolean
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
        auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    }

    export type UserUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        keycloakId?: NullableStringFieldUpdateOperationsInput | string | null
        email?: StringFieldUpdateOperationsInput | string
        phone?: NullableStringFieldUpdateOperationsInput | string | null
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        isGlobalAdmin?: BoolFieldUpdateOperationsInput | boolean
        isActive?: BoolFieldUpdateOperationsInput | boolean
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUpdateManyWithoutUserNestedInput
        auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    }

    export type UserUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        keycloakId?: NullableStringFieldUpdateOperationsInput | string | null
        email?: StringFieldUpdateOperationsInput | string
        phone?: NullableStringFieldUpdateOperationsInput | string | null
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        isGlobalAdmin?: BoolFieldUpdateOperationsInput | boolean
        isActive?: BoolFieldUpdateOperationsInput | boolean
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
        auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    }

    export type UserCreateManyInput = {
        id?: string
        keycloakId?: string | null
        email: string
        phone?: string | null
        firstName: string
        lastName: string
        isGlobalAdmin?: boolean
        isActive?: boolean
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type UserUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        keycloakId?: NullableStringFieldUpdateOperationsInput | string | null
        email?: StringFieldUpdateOperationsInput | string
        phone?: NullableStringFieldUpdateOperationsInput | string | null
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        isGlobalAdmin?: BoolFieldUpdateOperationsInput | boolean
        isActive?: BoolFieldUpdateOperationsInput | boolean
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type UserUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        keycloakId?: NullableStringFieldUpdateOperationsInput | string | null
        email?: StringFieldUpdateOperationsInput | string
        phone?: NullableStringFieldUpdateOperationsInput | string | null
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        isGlobalAdmin?: BoolFieldUpdateOperationsInput | boolean
        isActive?: BoolFieldUpdateOperationsInput | boolean
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type TenantCreateInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipCreateNestedManyWithoutTenantInput
        attendances?: AttendanceCreateNestedManyWithoutTenantInput
        invoices?: InvoiceCreateNestedManyWithoutTenantInput
        resources?: ResourceCreateNestedManyWithoutTenantInput
        auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    }

    export type TenantUncheckedCreateInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
        attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
        resources?: ResourceUncheckedCreateNestedManyWithoutTenantInput
        auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    }

    export type TenantUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUpdateManyWithoutTenantNestedInput
        attendances?: AttendanceUpdateManyWithoutTenantNestedInput
        invoices?: InvoiceUpdateManyWithoutTenantNestedInput
        resources?: ResourceUpdateManyWithoutTenantNestedInput
        auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    }

    export type TenantUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
        attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
        resources?: ResourceUncheckedUpdateManyWithoutTenantNestedInput
        auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    }

    export type TenantCreateManyInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type TenantUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type TenantUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type MembershipCreateInput = {
        id?: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutMembershipsInput
        tenant: TenantCreateNestedOneWithoutMembershipsInput
        roles?: MembershipRoleCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceCreateNestedManyWithoutMembershipInput
        bookings?: BookingCreateNestedManyWithoutMembershipInput
        metrics?: MetricCreateNestedManyWithoutMembershipInput
        documents?: DocumentCreateNestedManyWithoutMembershipInput
    }

    export type MembershipUncheckedCreateInput = {
        id?: string
        userId: string
        tenantId: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        roles?: MembershipRoleUncheckedCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceUncheckedCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutMembershipInput
        bookings?: BookingUncheckedCreateNestedManyWithoutMembershipInput
        metrics?: MetricUncheckedCreateNestedManyWithoutMembershipInput
        documents?: DocumentUncheckedCreateNestedManyWithoutMembershipInput
    }

    export type MembershipUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
        tenant?: TenantUpdateOneRequiredWithoutMembershipsNestedInput
        roles?: MembershipRoleUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        userId?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        roles?: MembershipRoleUncheckedUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUncheckedUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUncheckedUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUncheckedUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUncheckedUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipCreateManyInput = {
        id?: string
        userId: string
        tenantId: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type MembershipUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type MembershipUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        userId?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type MembershipRoleCreateInput = {
        id?: string
        role: $Enums.Role
        membership: MembershipCreateNestedOneWithoutRolesInput
    }

    export type MembershipRoleUncheckedCreateInput = {
        id?: string
        membershipId: string
        role: $Enums.Role
    }

    export type MembershipRoleUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        membership?: MembershipUpdateOneRequiredWithoutRolesNestedInput
    }

    export type MembershipRoleUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    }

    export type MembershipRoleCreateManyInput = {
        id?: string
        membershipId: string
        role: $Enums.Role
    }

    export type MembershipRoleUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    }

    export type MembershipRoleUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    }

    export type AttendanceCreateInput = {
        id?: string
        rfidTag?: string | null
        authMethod: string
        checkInTime?: Date | string
        checkOutTime?: Date | string | null
        tenant: TenantCreateNestedOneWithoutAttendancesInput
        membership?: MembershipCreateNestedOneWithoutAttendancesInput
    }

    export type AttendanceUncheckedCreateInput = {
        id?: string
        tenantId: string
        membershipId?: string | null
        rfidTag?: string | null
        authMethod: string
        checkInTime?: Date | string
        checkOutTime?: Date | string | null
    }

    export type AttendanceUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        rfidTag?: NullableStringFieldUpdateOperationsInput | string | null
        authMethod?: StringFieldUpdateOperationsInput | string
        checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
        checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        tenant?: TenantUpdateOneRequiredWithoutAttendancesNestedInput
        membership?: MembershipUpdateOneWithoutAttendancesNestedInput
    }

    export type AttendanceUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        membershipId?: NullableStringFieldUpdateOperationsInput | string | null
        rfidTag?: NullableStringFieldUpdateOperationsInput | string | null
        authMethod?: StringFieldUpdateOperationsInput | string
        checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
        checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    }

    export type AttendanceCreateManyInput = {
        id?: string
        tenantId: string
        membershipId?: string | null
        rfidTag?: string | null
        authMethod: string
        checkInTime?: Date | string
        checkOutTime?: Date | string | null
    }

    export type AttendanceUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        rfidTag?: NullableStringFieldUpdateOperationsInput | string | null
        authMethod?: StringFieldUpdateOperationsInput | string
        checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
        checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    }

    export type AttendanceUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        membershipId?: NullableStringFieldUpdateOperationsInput | string | null
        rfidTag?: NullableStringFieldUpdateOperationsInput | string | null
        authMethod?: StringFieldUpdateOperationsInput | string
        checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
        checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    }

    export type InvoiceCreateInput = {
        id?: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        tenant: TenantCreateNestedOneWithoutInvoicesInput
        membership: MembershipCreateNestedOneWithoutInvoicesInput
        payments?: PaymentCreateNestedManyWithoutInvoiceInput
        items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    }

    export type InvoiceUncheckedCreateInput = {
        id?: string
        tenantId: string
        membershipId: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
        items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    }

    export type InvoiceUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        tenant?: TenantUpdateOneRequiredWithoutInvoicesNestedInput
        membership?: MembershipUpdateOneRequiredWithoutInvoicesNestedInput
        payments?: PaymentUpdateManyWithoutInvoiceNestedInput
        items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    }

    export type InvoiceUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
        items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    }

    export type InvoiceCreateManyInput = {
        id?: string
        tenantId: string
        membershipId: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type InvoiceUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type InvoiceUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type InvoiceItemCreateInput = {
        id?: string
        description: string
        amount: Decimal | DecimalJsLike | number | string
        invoice: InvoiceCreateNestedOneWithoutItemsInput
    }

    export type InvoiceItemUncheckedCreateInput = {
        id?: string
        invoiceId: string
        description: string
        amount: Decimal | DecimalJsLike | number | string
    }

    export type InvoiceItemUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        description?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        invoice?: InvoiceUpdateOneRequiredWithoutItemsNestedInput
    }

    export type InvoiceItemUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        invoiceId?: StringFieldUpdateOperationsInput | string
        description?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    }

    export type InvoiceItemCreateManyInput = {
        id?: string
        invoiceId: string
        description: string
        amount: Decimal | DecimalJsLike | number | string
    }

    export type InvoiceItemUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        description?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    }

    export type InvoiceItemUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        invoiceId?: StringFieldUpdateOperationsInput | string
        description?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    }

    export type PaymentCreateInput = {
        id?: string
        amount: Decimal | DecimalJsLike | number | string
        method: $Enums.PaymentMethod
        gatewayTxId?: string | null
        status?: $Enums.PaymentStatus
        processedAt?: Date | string
        invoice: InvoiceCreateNestedOneWithoutPaymentsInput
    }

    export type PaymentUncheckedCreateInput = {
        id?: string
        invoiceId: string
        amount: Decimal | DecimalJsLike | number | string
        method: $Enums.PaymentMethod
        gatewayTxId?: string | null
        status?: $Enums.PaymentStatus
        processedAt?: Date | string
    }

    export type PaymentUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
        gatewayTxId?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
        processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
    }

    export type PaymentUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        invoiceId?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
        gatewayTxId?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
        processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type PaymentCreateManyInput = {
        id?: string
        invoiceId: string
        amount: Decimal | DecimalJsLike | number | string
        method: $Enums.PaymentMethod
        gatewayTxId?: string | null
        status?: $Enums.PaymentStatus
        processedAt?: Date | string
    }

    export type PaymentUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
        gatewayTxId?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
        processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type PaymentUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        invoiceId?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
        gatewayTxId?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
        processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type ResourceCreateInput = {
        id?: string
        name: string
        type: $Enums.ResourceType
        capacity?: number
        linkedMemberId?: string | null
        tenant: TenantCreateNestedOneWithoutResourcesInput
        bookings?: BookingCreateNestedManyWithoutResourceInput
    }

    export type ResourceUncheckedCreateInput = {
        id?: string
        tenantId: string
        name: string
        type: $Enums.ResourceType
        capacity?: number
        linkedMemberId?: string | null
        bookings?: BookingUncheckedCreateNestedManyWithoutResourceInput
    }

    export type ResourceUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
        capacity?: IntFieldUpdateOperationsInput | number
        linkedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
        tenant?: TenantUpdateOneRequiredWithoutResourcesNestedInput
        bookings?: BookingUpdateManyWithoutResourceNestedInput
    }

    export type ResourceUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
        capacity?: IntFieldUpdateOperationsInput | number
        linkedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
        bookings?: BookingUncheckedUpdateManyWithoutResourceNestedInput
    }

    export type ResourceCreateManyInput = {
        id?: string
        tenantId: string
        name: string
        type: $Enums.ResourceType
        capacity?: number
        linkedMemberId?: string | null
    }

    export type ResourceUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
        capacity?: IntFieldUpdateOperationsInput | number
        linkedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type ResourceUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
        capacity?: IntFieldUpdateOperationsInput | number
        linkedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type BookingCreateInput = {
        id?: string
        startTime: Date | string
        endTime: Date | string
        resource: ResourceCreateNestedOneWithoutBookingsInput
        membership: MembershipCreateNestedOneWithoutBookingsInput
    }

    export type BookingUncheckedCreateInput = {
        id?: string
        resourceId: string
        membershipId: string
        startTime: Date | string
        endTime: Date | string
    }

    export type BookingUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        startTime?: DateTimeFieldUpdateOperationsInput | Date | string
        endTime?: DateTimeFieldUpdateOperationsInput | Date | string
        resource?: ResourceUpdateOneRequiredWithoutBookingsNestedInput
        membership?: MembershipUpdateOneRequiredWithoutBookingsNestedInput
    }

    export type BookingUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        resourceId?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        startTime?: DateTimeFieldUpdateOperationsInput | Date | string
        endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type BookingCreateManyInput = {
        id?: string
        resourceId: string
        membershipId: string
        startTime: Date | string
        endTime: Date | string
    }

    export type BookingUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        startTime?: DateTimeFieldUpdateOperationsInput | Date | string
        endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type BookingUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        resourceId?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        startTime?: DateTimeFieldUpdateOperationsInput | Date | string
        endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type MetricCreateInput = {
        id?: string
        metricType: string
        data: JsonNullValueInput | InputJsonValue
        recordedAt?: Date | string
        membership: MembershipCreateNestedOneWithoutMetricsInput
    }

    export type MetricUncheckedCreateInput = {
        id?: string
        membershipId: string
        metricType: string
        data: JsonNullValueInput | InputJsonValue
        recordedAt?: Date | string
    }

    export type MetricUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        metricType?: StringFieldUpdateOperationsInput | string
        data?: JsonNullValueInput | InputJsonValue
        recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        membership?: MembershipUpdateOneRequiredWithoutMetricsNestedInput
    }

    export type MetricUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        metricType?: StringFieldUpdateOperationsInput | string
        data?: JsonNullValueInput | InputJsonValue
        recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type MetricCreateManyInput = {
        id?: string
        membershipId: string
        metricType: string
        data: JsonNullValueInput | InputJsonValue
        recordedAt?: Date | string
    }

    export type MetricUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        metricType?: StringFieldUpdateOperationsInput | string
        data?: JsonNullValueInput | InputJsonValue
        recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type MetricUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        metricType?: StringFieldUpdateOperationsInput | string
        data?: JsonNullValueInput | InputJsonValue
        recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type DocumentCreateInput = {
        id?: string
        fileName: string
        fileUrl: string
        context: string
        uploadedAt?: Date | string
        membership: MembershipCreateNestedOneWithoutDocumentsInput
    }

    export type DocumentUncheckedCreateInput = {
        id?: string
        membershipId: string
        fileName: string
        fileUrl: string
        context: string
        uploadedAt?: Date | string
    }

    export type DocumentUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        fileName?: StringFieldUpdateOperationsInput | string
        fileUrl?: StringFieldUpdateOperationsInput | string
        context?: StringFieldUpdateOperationsInput | string
        uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        membership?: MembershipUpdateOneRequiredWithoutDocumentsNestedInput
    }

    export type DocumentUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        fileName?: StringFieldUpdateOperationsInput | string
        fileUrl?: StringFieldUpdateOperationsInput | string
        context?: StringFieldUpdateOperationsInput | string
        uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type DocumentCreateManyInput = {
        id?: string
        membershipId: string
        fileName: string
        fileUrl: string
        context: string
        uploadedAt?: Date | string
    }

    export type DocumentUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        fileName?: StringFieldUpdateOperationsInput | string
        fileUrl?: StringFieldUpdateOperationsInput | string
        context?: StringFieldUpdateOperationsInput | string
        uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type DocumentUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        fileName?: StringFieldUpdateOperationsInput | string
        fileUrl?: StringFieldUpdateOperationsInput | string
        context?: StringFieldUpdateOperationsInput | string
        uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type AuditLogCreateInput = {
        id?: string
        action: string
        entity: string
        entityId: string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        tenant: TenantCreateNestedOneWithoutAuditLogsInput
        user?: UserCreateNestedOneWithoutAuditLogsInput
    }

    export type AuditLogUncheckedCreateInput = {
        id?: string
        tenantId: string
        userId?: string | null
        action: string
        entity: string
        entityId: string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
    }

    export type AuditLogUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        action?: StringFieldUpdateOperationsInput | string
        entity?: StringFieldUpdateOperationsInput | string
        entityId?: StringFieldUpdateOperationsInput | string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        tenant?: TenantUpdateOneRequiredWithoutAuditLogsNestedInput
        user?: UserUpdateOneWithoutAuditLogsNestedInput
    }

    export type AuditLogUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        userId?: NullableStringFieldUpdateOperationsInput | string | null
        action?: StringFieldUpdateOperationsInput | string
        entity?: StringFieldUpdateOperationsInput | string
        entityId?: StringFieldUpdateOperationsInput | string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type AuditLogCreateManyInput = {
        id?: string
        tenantId: string
        userId?: string | null
        action: string
        entity: string
        entityId: string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
    }

    export type AuditLogUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string
        action?: StringFieldUpdateOperationsInput | string
        entity?: StringFieldUpdateOperationsInput | string
        entityId?: StringFieldUpdateOperationsInput | string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type AuditLogUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        userId?: NullableStringFieldUpdateOperationsInput | string | null
        action?: StringFieldUpdateOperationsInput | string
        entity?: StringFieldUpdateOperationsInput | string
        entityId?: StringFieldUpdateOperationsInput | string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type StringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[] | ListStringFieldRefInput<$PrismaModel>
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        mode?: QueryMode
        not?: NestedStringFilter<$PrismaModel> | string
    }

    export type StringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        mode?: QueryMode
        not?: NestedStringNullableFilter<$PrismaModel> | string | null
    }

    export type BoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>
        not?: NestedBoolFilter<$PrismaModel> | boolean
    }

    export type DateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string
    }

    export type MembershipListRelationFilter = {
        every?: MembershipWhereInput
        some?: MembershipWhereInput
        none?: MembershipWhereInput
    }

    export type AuditLogListRelationFilter = {
        every?: AuditLogWhereInput
        some?: AuditLogWhereInput
        none?: AuditLogWhereInput
    }

    export type SortOrderInput = {
        sort: SortOrder
        nulls?: NullsOrder
    }

    export type MembershipOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type AuditLogOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type UserCountOrderByAggregateInput = {
        id?: SortOrder
        keycloakId?: SortOrder
        email?: SortOrder
        phone?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        isGlobalAdmin?: SortOrder
        isActive?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type UserMaxOrderByAggregateInput = {
        id?: SortOrder
        keycloakId?: SortOrder
        email?: SortOrder
        phone?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        isGlobalAdmin?: SortOrder
        isActive?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type UserMinOrderByAggregateInput = {
        id?: SortOrder
        keycloakId?: SortOrder
        email?: SortOrder
        phone?: SortOrder
        firstName?: SortOrder
        lastName?: SortOrder
        isGlobalAdmin?: SortOrder
        isActive?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type StringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[] | ListStringFieldRefInput<$PrismaModel>
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        mode?: QueryMode
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedStringFilter<$PrismaModel>
        _max?: NestedStringFilter<$PrismaModel>
    }

    export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        mode?: QueryMode
        not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedStringNullableFilter<$PrismaModel>
        _max?: NestedStringNullableFilter<$PrismaModel>
    }

    export type BoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedBoolFilter<$PrismaModel>
        _max?: NestedBoolFilter<$PrismaModel>
    }

    export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedDateTimeFilter<$PrismaModel>
        _max?: NestedDateTimeFilter<$PrismaModel>
    }
    export type JsonNullableFilter<$PrismaModel = never> =
        | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
    >
        | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

    export type JsonNullableFilterBase<$PrismaModel = never> = {
        equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        path?: string[]
        mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
        string_contains?: string | StringFieldRefInput<$PrismaModel>
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>
        array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    }

    export type AttendanceListRelationFilter = {
        every?: AttendanceWhereInput
        some?: AttendanceWhereInput
        none?: AttendanceWhereInput
    }

    export type InvoiceListRelationFilter = {
        every?: InvoiceWhereInput
        some?: InvoiceWhereInput
        none?: InvoiceWhereInput
    }

    export type ResourceListRelationFilter = {
        every?: ResourceWhereInput
        some?: ResourceWhereInput
        none?: ResourceWhereInput
    }

    export type AttendanceOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type InvoiceOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type ResourceOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type TenantCountOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
        slug?: SortOrder
        domain?: SortOrder
        themeConfig?: SortOrder
        taxRules?: SortOrder
        gatewayKeys?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type TenantMaxOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
        slug?: SortOrder
        domain?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type TenantMinOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
        slug?: SortOrder
        domain?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }
    export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
        | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
    >
        | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

    export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
        equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        path?: string[]
        mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
        string_contains?: string | StringFieldRefInput<$PrismaModel>
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>
        array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedJsonNullableFilter<$PrismaModel>
        _max?: NestedJsonNullableFilter<$PrismaModel>
    }

    export type EnumMembershipStatusFilter<$PrismaModel = never> = {
        equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
        in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
        notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
        not?: NestedEnumMembershipStatusFilter<$PrismaModel> | $Enums.MembershipStatus
    }

    export type UserScalarRelationFilter = {
        is?: UserWhereInput
        isNot?: UserWhereInput
    }

    export type TenantScalarRelationFilter = {
        is?: TenantWhereInput
        isNot?: TenantWhereInput
    }

    export type MembershipRoleListRelationFilter = {
        every?: MembershipRoleWhereInput
        some?: MembershipRoleWhereInput
        none?: MembershipRoleWhereInput
    }

    export type BookingListRelationFilter = {
        every?: BookingWhereInput
        some?: BookingWhereInput
        none?: BookingWhereInput
    }

    export type MetricListRelationFilter = {
        every?: MetricWhereInput
        some?: MetricWhereInput
        none?: MetricWhereInput
    }

    export type DocumentListRelationFilter = {
        every?: DocumentWhereInput
        some?: DocumentWhereInput
        none?: DocumentWhereInput
    }

    export type MembershipRoleOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type BookingOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type MetricOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type DocumentOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type MembershipUserIdTenantIdCompoundUniqueInput = {
        userId: string
        tenantId: string
    }

    export type MembershipCountOrderByAggregateInput = {
        id?: SortOrder
        userId?: SortOrder
        tenantId?: SortOrder
        status?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type MembershipMaxOrderByAggregateInput = {
        id?: SortOrder
        userId?: SortOrder
        tenantId?: SortOrder
        status?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type MembershipMinOrderByAggregateInput = {
        id?: SortOrder
        userId?: SortOrder
        tenantId?: SortOrder
        status?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type EnumMembershipStatusWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
        in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
        notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
        not?: NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel> | $Enums.MembershipStatus
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumMembershipStatusFilter<$PrismaModel>
        _max?: NestedEnumMembershipStatusFilter<$PrismaModel>
    }

    export type EnumRoleFilter<$PrismaModel = never> = {
        equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
        in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
    }

    export type MembershipScalarRelationFilter = {
        is?: MembershipWhereInput
        isNot?: MembershipWhereInput
    }

    export type MembershipRoleMembershipIdRoleCompoundUniqueInput = {
        membershipId: string
        role: $Enums.Role
    }

    export type MembershipRoleCountOrderByAggregateInput = {
        id?: SortOrder
        membershipId?: SortOrder
        role?: SortOrder
    }

    export type MembershipRoleMaxOrderByAggregateInput = {
        id?: SortOrder
        membershipId?: SortOrder
        role?: SortOrder
    }

    export type MembershipRoleMinOrderByAggregateInput = {
        id?: SortOrder
        membershipId?: SortOrder
        role?: SortOrder
    }

    export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
        in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumRoleFilter<$PrismaModel>
        _max?: NestedEnumRoleFilter<$PrismaModel>
    }

    export type DateTimeNullableFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    }

    export type MembershipNullableScalarRelationFilter = {
        is?: MembershipWhereInput | null
        isNot?: MembershipWhereInput | null
    }

    export type AttendanceCountOrderByAggregateInput = {
        id?: SortOrder
        tenantId?: SortOrder
        membershipId?: SortOrder
        rfidTag?: SortOrder
        authMethod?: SortOrder
        checkInTime?: SortOrder
        checkOutTime?: SortOrder
    }

    export type AttendanceMaxOrderByAggregateInput = {
        id?: SortOrder
        tenantId?: SortOrder
        membershipId?: SortOrder
        rfidTag?: SortOrder
        authMethod?: SortOrder
        checkInTime?: SortOrder
        checkOutTime?: SortOrder
    }

    export type AttendanceMinOrderByAggregateInput = {
        id?: SortOrder
        tenantId?: SortOrder
        membershipId?: SortOrder
        rfidTag?: SortOrder
        authMethod?: SortOrder
        checkInTime?: SortOrder
        checkOutTime?: SortOrder
    }

    export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedDateTimeNullableFilter<$PrismaModel>
        _max?: NestedDateTimeNullableFilter<$PrismaModel>
    }

    export type EnumInvoiceTypeFilter<$PrismaModel = never> = {
        equals?: $Enums.InvoiceType | EnumInvoiceTypeFieldRefInput<$PrismaModel>
        in?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumInvoiceTypeFilter<$PrismaModel> | $Enums.InvoiceType
    }

    export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
        equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
        in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
        notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
        not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
    }

    export type DecimalFilter<$PrismaModel = never> = {
        equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
        notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
        lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    }

    export type PaymentListRelationFilter = {
        every?: PaymentWhereInput
        some?: PaymentWhereInput
        none?: PaymentWhereInput
    }

    export type InvoiceItemListRelationFilter = {
        every?: InvoiceItemWhereInput
        some?: InvoiceItemWhereInput
        none?: InvoiceItemWhereInput
    }

    export type PaymentOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type InvoiceItemOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type InvoiceCountOrderByAggregateInput = {
        id?: SortOrder
        tenantId?: SortOrder
        membershipId?: SortOrder
        type?: SortOrder
        status?: SortOrder
        totalAmount?: SortOrder
        dueDate?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type InvoiceAvgOrderByAggregateInput = {
        totalAmount?: SortOrder
    }

    export type InvoiceMaxOrderByAggregateInput = {
        id?: SortOrder
        tenantId?: SortOrder
        membershipId?: SortOrder
        type?: SortOrder
        status?: SortOrder
        totalAmount?: SortOrder
        dueDate?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type InvoiceMinOrderByAggregateInput = {
        id?: SortOrder
        tenantId?: SortOrder
        membershipId?: SortOrder
        type?: SortOrder
        status?: SortOrder
        totalAmount?: SortOrder
        dueDate?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type InvoiceSumOrderByAggregateInput = {
        totalAmount?: SortOrder
    }

    export type EnumInvoiceTypeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.InvoiceType | EnumInvoiceTypeFieldRefInput<$PrismaModel>
        in?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumInvoiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceType
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumInvoiceTypeFilter<$PrismaModel>
        _max?: NestedEnumInvoiceTypeFilter<$PrismaModel>
    }

    export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
        in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
        notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
        not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
        _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    }

    export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
        notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
        lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
        _count?: NestedIntFilter<$PrismaModel>
        _avg?: NestedDecimalFilter<$PrismaModel>
        _sum?: NestedDecimalFilter<$PrismaModel>
        _min?: NestedDecimalFilter<$PrismaModel>
        _max?: NestedDecimalFilter<$PrismaModel>
    }

    export type InvoiceScalarRelationFilter = {
        is?: InvoiceWhereInput
        isNot?: InvoiceWhereInput
    }

    export type InvoiceItemCountOrderByAggregateInput = {
        id?: SortOrder
        invoiceId?: SortOrder
        description?: SortOrder
        amount?: SortOrder
    }

    export type InvoiceItemAvgOrderByAggregateInput = {
        amount?: SortOrder
    }

    export type InvoiceItemMaxOrderByAggregateInput = {
        id?: SortOrder
        invoiceId?: SortOrder
        description?: SortOrder
        amount?: SortOrder
    }

    export type InvoiceItemMinOrderByAggregateInput = {
        id?: SortOrder
        invoiceId?: SortOrder
        description?: SortOrder
        amount?: SortOrder
    }

    export type InvoiceItemSumOrderByAggregateInput = {
        amount?: SortOrder
    }

    export type EnumPaymentMethodFilter<$PrismaModel = never> = {
        equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
        in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
        notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
        not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
    }

    export type EnumPaymentStatusFilter<$PrismaModel = never> = {
        equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
        in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
        notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
        not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
    }

    export type PaymentCountOrderByAggregateInput = {
        id?: SortOrder
        invoiceId?: SortOrder
        amount?: SortOrder
        method?: SortOrder
        gatewayTxId?: SortOrder
        status?: SortOrder
        processedAt?: SortOrder
    }

    export type PaymentAvgOrderByAggregateInput = {
        amount?: SortOrder
    }

    export type PaymentMaxOrderByAggregateInput = {
        id?: SortOrder
        invoiceId?: SortOrder
        amount?: SortOrder
        method?: SortOrder
        gatewayTxId?: SortOrder
        status?: SortOrder
        processedAt?: SortOrder
    }

    export type PaymentMinOrderByAggregateInput = {
        id?: SortOrder
        invoiceId?: SortOrder
        amount?: SortOrder
        method?: SortOrder
        gatewayTxId?: SortOrder
        status?: SortOrder
        processedAt?: SortOrder
    }

    export type PaymentSumOrderByAggregateInput = {
        amount?: SortOrder
    }

    export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
        in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
        notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
        not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
        _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
    }

    export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
        in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
        notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
        not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
        _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
    }

    export type EnumResourceTypeFilter<$PrismaModel = never> = {
        equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
        in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
    }

    export type IntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[] | ListIntFieldRefInput<$PrismaModel>
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntFilter<$PrismaModel> | number
    }

    export type ResourceCountOrderByAggregateInput = {
        id?: SortOrder
        tenantId?: SortOrder
        name?: SortOrder
        type?: SortOrder
        capacity?: SortOrder
        linkedMemberId?: SortOrder
    }

    export type ResourceAvgOrderByAggregateInput = {
        capacity?: SortOrder
    }

    export type ResourceMaxOrderByAggregateInput = {
        id?: SortOrder
        tenantId?: SortOrder
        name?: SortOrder
        type?: SortOrder
        capacity?: SortOrder
        linkedMemberId?: SortOrder
    }

    export type ResourceMinOrderByAggregateInput = {
        id?: SortOrder
        tenantId?: SortOrder
        name?: SortOrder
        type?: SortOrder
        capacity?: SortOrder
        linkedMemberId?: SortOrder
    }

    export type ResourceSumOrderByAggregateInput = {
        capacity?: SortOrder
    }

    export type EnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
        in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumResourceTypeFilter<$PrismaModel>
        _max?: NestedEnumResourceTypeFilter<$PrismaModel>
    }

    export type IntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[] | ListIntFieldRefInput<$PrismaModel>
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
        _count?: NestedIntFilter<$PrismaModel>
        _avg?: NestedFloatFilter<$PrismaModel>
        _sum?: NestedIntFilter<$PrismaModel>
        _min?: NestedIntFilter<$PrismaModel>
        _max?: NestedIntFilter<$PrismaModel>
    }

    export type ResourceScalarRelationFilter = {
        is?: ResourceWhereInput
        isNot?: ResourceWhereInput
    }

    export type BookingCountOrderByAggregateInput = {
        id?: SortOrder
        resourceId?: SortOrder
        membershipId?: SortOrder
        startTime?: SortOrder
        endTime?: SortOrder
    }

    export type BookingMaxOrderByAggregateInput = {
        id?: SortOrder
        resourceId?: SortOrder
        membershipId?: SortOrder
        startTime?: SortOrder
        endTime?: SortOrder
    }

    export type BookingMinOrderByAggregateInput = {
        id?: SortOrder
        resourceId?: SortOrder
        membershipId?: SortOrder
        startTime?: SortOrder
        endTime?: SortOrder
    }
    export type JsonFilter<$PrismaModel = never> =
        | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
    >
        | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

    export type JsonFilterBase<$PrismaModel = never> = {
        equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        path?: string[]
        mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
        string_contains?: string | StringFieldRefInput<$PrismaModel>
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>
        array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    }

    export type MetricCountOrderByAggregateInput = {
        id?: SortOrder
        membershipId?: SortOrder
        metricType?: SortOrder
        data?: SortOrder
        recordedAt?: SortOrder
    }

    export type MetricMaxOrderByAggregateInput = {
        id?: SortOrder
        membershipId?: SortOrder
        metricType?: SortOrder
        recordedAt?: SortOrder
    }

    export type MetricMinOrderByAggregateInput = {
        id?: SortOrder
        membershipId?: SortOrder
        metricType?: SortOrder
        recordedAt?: SortOrder
    }
    export type JsonWithAggregatesFilter<$PrismaModel = never> =
        | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
    >
        | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

    export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
        equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        path?: string[]
        mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
        string_contains?: string | StringFieldRefInput<$PrismaModel>
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>
        array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedJsonFilter<$PrismaModel>
        _max?: NestedJsonFilter<$PrismaModel>
    }

    export type DocumentCountOrderByAggregateInput = {
        id?: SortOrder
        membershipId?: SortOrder
        fileName?: SortOrder
        fileUrl?: SortOrder
        context?: SortOrder
        uploadedAt?: SortOrder
    }

    export type DocumentMaxOrderByAggregateInput = {
        id?: SortOrder
        membershipId?: SortOrder
        fileName?: SortOrder
        fileUrl?: SortOrder
        context?: SortOrder
        uploadedAt?: SortOrder
    }

    export type DocumentMinOrderByAggregateInput = {
        id?: SortOrder
        membershipId?: SortOrder
        fileName?: SortOrder
        fileUrl?: SortOrder
        context?: SortOrder
        uploadedAt?: SortOrder
    }

    export type UserNullableScalarRelationFilter = {
        is?: UserWhereInput | null
        isNot?: UserWhereInput | null
    }

    export type AuditLogCountOrderByAggregateInput = {
        id?: SortOrder
        tenantId?: SortOrder
        userId?: SortOrder
        action?: SortOrder
        entity?: SortOrder
        entityId?: SortOrder
        changes?: SortOrder
        createdAt?: SortOrder
    }

    export type AuditLogMaxOrderByAggregateInput = {
        id?: SortOrder
        tenantId?: SortOrder
        userId?: SortOrder
        action?: SortOrder
        entity?: SortOrder
        entityId?: SortOrder
        createdAt?: SortOrder
    }

    export type AuditLogMinOrderByAggregateInput = {
        id?: SortOrder
        tenantId?: SortOrder
        userId?: SortOrder
        action?: SortOrder
        entity?: SortOrder
        entityId?: SortOrder
        createdAt?: SortOrder
    }

    export type MembershipCreateNestedManyWithoutUserInput = {
        create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
        connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
        createMany?: MembershipCreateManyUserInputEnvelope
        connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    }

    export type AuditLogCreateNestedManyWithoutUserInput = {
        create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
        connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
        createMany?: AuditLogCreateManyUserInputEnvelope
        connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    }

    export type MembershipUncheckedCreateNestedManyWithoutUserInput = {
        create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
        connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
        createMany?: MembershipCreateManyUserInputEnvelope
        connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    }

    export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
        create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
        connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
        createMany?: AuditLogCreateManyUserInputEnvelope
        connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    }

    export type StringFieldUpdateOperationsInput = {
        set?: string
    }

    export type NullableStringFieldUpdateOperationsInput = {
        set?: string | null
    }

    export type BoolFieldUpdateOperationsInput = {
        set?: boolean
    }

    export type DateTimeFieldUpdateOperationsInput = {
        set?: Date | string
    }

    export type MembershipUpdateManyWithoutUserNestedInput = {
        create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
        connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
        upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput | MembershipUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: MembershipCreateManyUserInputEnvelope
        set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        update?: MembershipUpdateWithWhereUniqueWithoutUserInput | MembershipUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: MembershipUpdateManyWithWhereWithoutUserInput | MembershipUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    }

    export type AuditLogUpdateManyWithoutUserNestedInput = {
        create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
        connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
        upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: AuditLogCreateManyUserInputEnvelope
        set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    }

    export type MembershipUncheckedUpdateManyWithoutUserNestedInput = {
        create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
        connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
        upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput | MembershipUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: MembershipCreateManyUserInputEnvelope
        set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        update?: MembershipUpdateWithWhereUniqueWithoutUserInput | MembershipUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: MembershipUpdateManyWithWhereWithoutUserInput | MembershipUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    }

    export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
        create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
        connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
        upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: AuditLogCreateManyUserInputEnvelope
        set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    }

    export type MembershipCreateNestedManyWithoutTenantInput = {
        create?: XOR<MembershipCreateWithoutTenantInput, MembershipUncheckedCreateWithoutTenantInput> | MembershipCreateWithoutTenantInput[] | MembershipUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: MembershipCreateOrConnectWithoutTenantInput | MembershipCreateOrConnectWithoutTenantInput[]
        createMany?: MembershipCreateManyTenantInputEnvelope
        connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    }

    export type AttendanceCreateNestedManyWithoutTenantInput = {
        create?: XOR<AttendanceCreateWithoutTenantInput, AttendanceUncheckedCreateWithoutTenantInput> | AttendanceCreateWithoutTenantInput[] | AttendanceUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: AttendanceCreateOrConnectWithoutTenantInput | AttendanceCreateOrConnectWithoutTenantInput[]
        createMany?: AttendanceCreateManyTenantInputEnvelope
        connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    }

    export type InvoiceCreateNestedManyWithoutTenantInput = {
        create?: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput> | InvoiceCreateWithoutTenantInput[] | InvoiceUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: InvoiceCreateOrConnectWithoutTenantInput | InvoiceCreateOrConnectWithoutTenantInput[]
        createMany?: InvoiceCreateManyTenantInputEnvelope
        connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    }

    export type ResourceCreateNestedManyWithoutTenantInput = {
        create?: XOR<ResourceCreateWithoutTenantInput, ResourceUncheckedCreateWithoutTenantInput> | ResourceCreateWithoutTenantInput[] | ResourceUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: ResourceCreateOrConnectWithoutTenantInput | ResourceCreateOrConnectWithoutTenantInput[]
        createMany?: ResourceCreateManyTenantInputEnvelope
        connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    }

    export type AuditLogCreateNestedManyWithoutTenantInput = {
        create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
        createMany?: AuditLogCreateManyTenantInputEnvelope
        connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    }

    export type MembershipUncheckedCreateNestedManyWithoutTenantInput = {
        create?: XOR<MembershipCreateWithoutTenantInput, MembershipUncheckedCreateWithoutTenantInput> | MembershipCreateWithoutTenantInput[] | MembershipUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: MembershipCreateOrConnectWithoutTenantInput | MembershipCreateOrConnectWithoutTenantInput[]
        createMany?: MembershipCreateManyTenantInputEnvelope
        connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    }

    export type AttendanceUncheckedCreateNestedManyWithoutTenantInput = {
        create?: XOR<AttendanceCreateWithoutTenantInput, AttendanceUncheckedCreateWithoutTenantInput> | AttendanceCreateWithoutTenantInput[] | AttendanceUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: AttendanceCreateOrConnectWithoutTenantInput | AttendanceCreateOrConnectWithoutTenantInput[]
        createMany?: AttendanceCreateManyTenantInputEnvelope
        connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    }

    export type InvoiceUncheckedCreateNestedManyWithoutTenantInput = {
        create?: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput> | InvoiceCreateWithoutTenantInput[] | InvoiceUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: InvoiceCreateOrConnectWithoutTenantInput | InvoiceCreateOrConnectWithoutTenantInput[]
        createMany?: InvoiceCreateManyTenantInputEnvelope
        connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    }

    export type ResourceUncheckedCreateNestedManyWithoutTenantInput = {
        create?: XOR<ResourceCreateWithoutTenantInput, ResourceUncheckedCreateWithoutTenantInput> | ResourceCreateWithoutTenantInput[] | ResourceUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: ResourceCreateOrConnectWithoutTenantInput | ResourceCreateOrConnectWithoutTenantInput[]
        createMany?: ResourceCreateManyTenantInputEnvelope
        connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    }

    export type AuditLogUncheckedCreateNestedManyWithoutTenantInput = {
        create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
        createMany?: AuditLogCreateManyTenantInputEnvelope
        connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    }

    export type MembershipUpdateManyWithoutTenantNestedInput = {
        create?: XOR<MembershipCreateWithoutTenantInput, MembershipUncheckedCreateWithoutTenantInput> | MembershipCreateWithoutTenantInput[] | MembershipUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: MembershipCreateOrConnectWithoutTenantInput | MembershipCreateOrConnectWithoutTenantInput[]
        upsert?: MembershipUpsertWithWhereUniqueWithoutTenantInput | MembershipUpsertWithWhereUniqueWithoutTenantInput[]
        createMany?: MembershipCreateManyTenantInputEnvelope
        set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        update?: MembershipUpdateWithWhereUniqueWithoutTenantInput | MembershipUpdateWithWhereUniqueWithoutTenantInput[]
        updateMany?: MembershipUpdateManyWithWhereWithoutTenantInput | MembershipUpdateManyWithWhereWithoutTenantInput[]
        deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    }

    export type AttendanceUpdateManyWithoutTenantNestedInput = {
        create?: XOR<AttendanceCreateWithoutTenantInput, AttendanceUncheckedCreateWithoutTenantInput> | AttendanceCreateWithoutTenantInput[] | AttendanceUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: AttendanceCreateOrConnectWithoutTenantInput | AttendanceCreateOrConnectWithoutTenantInput[]
        upsert?: AttendanceUpsertWithWhereUniqueWithoutTenantInput | AttendanceUpsertWithWhereUniqueWithoutTenantInput[]
        createMany?: AttendanceCreateManyTenantInputEnvelope
        set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        update?: AttendanceUpdateWithWhereUniqueWithoutTenantInput | AttendanceUpdateWithWhereUniqueWithoutTenantInput[]
        updateMany?: AttendanceUpdateManyWithWhereWithoutTenantInput | AttendanceUpdateManyWithWhereWithoutTenantInput[]
        deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    }

    export type InvoiceUpdateManyWithoutTenantNestedInput = {
        create?: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput> | InvoiceCreateWithoutTenantInput[] | InvoiceUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: InvoiceCreateOrConnectWithoutTenantInput | InvoiceCreateOrConnectWithoutTenantInput[]
        upsert?: InvoiceUpsertWithWhereUniqueWithoutTenantInput | InvoiceUpsertWithWhereUniqueWithoutTenantInput[]
        createMany?: InvoiceCreateManyTenantInputEnvelope
        set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        update?: InvoiceUpdateWithWhereUniqueWithoutTenantInput | InvoiceUpdateWithWhereUniqueWithoutTenantInput[]
        updateMany?: InvoiceUpdateManyWithWhereWithoutTenantInput | InvoiceUpdateManyWithWhereWithoutTenantInput[]
        deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    }

    export type ResourceUpdateManyWithoutTenantNestedInput = {
        create?: XOR<ResourceCreateWithoutTenantInput, ResourceUncheckedCreateWithoutTenantInput> | ResourceCreateWithoutTenantInput[] | ResourceUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: ResourceCreateOrConnectWithoutTenantInput | ResourceCreateOrConnectWithoutTenantInput[]
        upsert?: ResourceUpsertWithWhereUniqueWithoutTenantInput | ResourceUpsertWithWhereUniqueWithoutTenantInput[]
        createMany?: ResourceCreateManyTenantInputEnvelope
        set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
        disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
        delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
        connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
        update?: ResourceUpdateWithWhereUniqueWithoutTenantInput | ResourceUpdateWithWhereUniqueWithoutTenantInput[]
        updateMany?: ResourceUpdateManyWithWhereWithoutTenantInput | ResourceUpdateManyWithWhereWithoutTenantInput[]
        deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    }

    export type AuditLogUpdateManyWithoutTenantNestedInput = {
        create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
        upsert?: AuditLogUpsertWithWhereUniqueWithoutTenantInput | AuditLogUpsertWithWhereUniqueWithoutTenantInput[]
        createMany?: AuditLogCreateManyTenantInputEnvelope
        set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        update?: AuditLogUpdateWithWhereUniqueWithoutTenantInput | AuditLogUpdateWithWhereUniqueWithoutTenantInput[]
        updateMany?: AuditLogUpdateManyWithWhereWithoutTenantInput | AuditLogUpdateManyWithWhereWithoutTenantInput[]
        deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    }

    export type MembershipUncheckedUpdateManyWithoutTenantNestedInput = {
        create?: XOR<MembershipCreateWithoutTenantInput, MembershipUncheckedCreateWithoutTenantInput> | MembershipCreateWithoutTenantInput[] | MembershipUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: MembershipCreateOrConnectWithoutTenantInput | MembershipCreateOrConnectWithoutTenantInput[]
        upsert?: MembershipUpsertWithWhereUniqueWithoutTenantInput | MembershipUpsertWithWhereUniqueWithoutTenantInput[]
        createMany?: MembershipCreateManyTenantInputEnvelope
        set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
        update?: MembershipUpdateWithWhereUniqueWithoutTenantInput | MembershipUpdateWithWhereUniqueWithoutTenantInput[]
        updateMany?: MembershipUpdateManyWithWhereWithoutTenantInput | MembershipUpdateManyWithWhereWithoutTenantInput[]
        deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    }

    export type AttendanceUncheckedUpdateManyWithoutTenantNestedInput = {
        create?: XOR<AttendanceCreateWithoutTenantInput, AttendanceUncheckedCreateWithoutTenantInput> | AttendanceCreateWithoutTenantInput[] | AttendanceUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: AttendanceCreateOrConnectWithoutTenantInput | AttendanceCreateOrConnectWithoutTenantInput[]
        upsert?: AttendanceUpsertWithWhereUniqueWithoutTenantInput | AttendanceUpsertWithWhereUniqueWithoutTenantInput[]
        createMany?: AttendanceCreateManyTenantInputEnvelope
        set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        update?: AttendanceUpdateWithWhereUniqueWithoutTenantInput | AttendanceUpdateWithWhereUniqueWithoutTenantInput[]
        updateMany?: AttendanceUpdateManyWithWhereWithoutTenantInput | AttendanceUpdateManyWithWhereWithoutTenantInput[]
        deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    }

    export type InvoiceUncheckedUpdateManyWithoutTenantNestedInput = {
        create?: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput> | InvoiceCreateWithoutTenantInput[] | InvoiceUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: InvoiceCreateOrConnectWithoutTenantInput | InvoiceCreateOrConnectWithoutTenantInput[]
        upsert?: InvoiceUpsertWithWhereUniqueWithoutTenantInput | InvoiceUpsertWithWhereUniqueWithoutTenantInput[]
        createMany?: InvoiceCreateManyTenantInputEnvelope
        set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        update?: InvoiceUpdateWithWhereUniqueWithoutTenantInput | InvoiceUpdateWithWhereUniqueWithoutTenantInput[]
        updateMany?: InvoiceUpdateManyWithWhereWithoutTenantInput | InvoiceUpdateManyWithWhereWithoutTenantInput[]
        deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    }

    export type ResourceUncheckedUpdateManyWithoutTenantNestedInput = {
        create?: XOR<ResourceCreateWithoutTenantInput, ResourceUncheckedCreateWithoutTenantInput> | ResourceCreateWithoutTenantInput[] | ResourceUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: ResourceCreateOrConnectWithoutTenantInput | ResourceCreateOrConnectWithoutTenantInput[]
        upsert?: ResourceUpsertWithWhereUniqueWithoutTenantInput | ResourceUpsertWithWhereUniqueWithoutTenantInput[]
        createMany?: ResourceCreateManyTenantInputEnvelope
        set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
        disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
        delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
        connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
        update?: ResourceUpdateWithWhereUniqueWithoutTenantInput | ResourceUpdateWithWhereUniqueWithoutTenantInput[]
        updateMany?: ResourceUpdateManyWithWhereWithoutTenantInput | ResourceUpdateManyWithWhereWithoutTenantInput[]
        deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    }

    export type AuditLogUncheckedUpdateManyWithoutTenantNestedInput = {
        create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
        connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
        upsert?: AuditLogUpsertWithWhereUniqueWithoutTenantInput | AuditLogUpsertWithWhereUniqueWithoutTenantInput[]
        createMany?: AuditLogCreateManyTenantInputEnvelope
        set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
        update?: AuditLogUpdateWithWhereUniqueWithoutTenantInput | AuditLogUpdateWithWhereUniqueWithoutTenantInput[]
        updateMany?: AuditLogUpdateManyWithWhereWithoutTenantInput | AuditLogUpdateManyWithWhereWithoutTenantInput[]
        deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    }

    export type UserCreateNestedOneWithoutMembershipsInput = {
        create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
        connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
        connect?: UserWhereUniqueInput
    }

    export type TenantCreateNestedOneWithoutMembershipsInput = {
        create?: XOR<TenantCreateWithoutMembershipsInput, TenantUncheckedCreateWithoutMembershipsInput>
        connectOrCreate?: TenantCreateOrConnectWithoutMembershipsInput
        connect?: TenantWhereUniqueInput
    }

    export type MembershipRoleCreateNestedManyWithoutMembershipInput = {
        create?: XOR<MembershipRoleCreateWithoutMembershipInput, MembershipRoleUncheckedCreateWithoutMembershipInput> | MembershipRoleCreateWithoutMembershipInput[] | MembershipRoleUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: MembershipRoleCreateOrConnectWithoutMembershipInput | MembershipRoleCreateOrConnectWithoutMembershipInput[]
        createMany?: MembershipRoleCreateManyMembershipInputEnvelope
        connect?: MembershipRoleWhereUniqueInput | MembershipRoleWhereUniqueInput[]
    }

    export type AttendanceCreateNestedManyWithoutMembershipInput = {
        create?: XOR<AttendanceCreateWithoutMembershipInput, AttendanceUncheckedCreateWithoutMembershipInput> | AttendanceCreateWithoutMembershipInput[] | AttendanceUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: AttendanceCreateOrConnectWithoutMembershipInput | AttendanceCreateOrConnectWithoutMembershipInput[]
        createMany?: AttendanceCreateManyMembershipInputEnvelope
        connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    }

    export type InvoiceCreateNestedManyWithoutMembershipInput = {
        create?: XOR<InvoiceCreateWithoutMembershipInput, InvoiceUncheckedCreateWithoutMembershipInput> | InvoiceCreateWithoutMembershipInput[] | InvoiceUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: InvoiceCreateOrConnectWithoutMembershipInput | InvoiceCreateOrConnectWithoutMembershipInput[]
        createMany?: InvoiceCreateManyMembershipInputEnvelope
        connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    }

    export type BookingCreateNestedManyWithoutMembershipInput = {
        create?: XOR<BookingCreateWithoutMembershipInput, BookingUncheckedCreateWithoutMembershipInput> | BookingCreateWithoutMembershipInput[] | BookingUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: BookingCreateOrConnectWithoutMembershipInput | BookingCreateOrConnectWithoutMembershipInput[]
        createMany?: BookingCreateManyMembershipInputEnvelope
        connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    }

    export type MetricCreateNestedManyWithoutMembershipInput = {
        create?: XOR<MetricCreateWithoutMembershipInput, MetricUncheckedCreateWithoutMembershipInput> | MetricCreateWithoutMembershipInput[] | MetricUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: MetricCreateOrConnectWithoutMembershipInput | MetricCreateOrConnectWithoutMembershipInput[]
        createMany?: MetricCreateManyMembershipInputEnvelope
        connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    }

    export type DocumentCreateNestedManyWithoutMembershipInput = {
        create?: XOR<DocumentCreateWithoutMembershipInput, DocumentUncheckedCreateWithoutMembershipInput> | DocumentCreateWithoutMembershipInput[] | DocumentUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: DocumentCreateOrConnectWithoutMembershipInput | DocumentCreateOrConnectWithoutMembershipInput[]
        createMany?: DocumentCreateManyMembershipInputEnvelope
        connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    }

    export type MembershipRoleUncheckedCreateNestedManyWithoutMembershipInput = {
        create?: XOR<MembershipRoleCreateWithoutMembershipInput, MembershipRoleUncheckedCreateWithoutMembershipInput> | MembershipRoleCreateWithoutMembershipInput[] | MembershipRoleUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: MembershipRoleCreateOrConnectWithoutMembershipInput | MembershipRoleCreateOrConnectWithoutMembershipInput[]
        createMany?: MembershipRoleCreateManyMembershipInputEnvelope
        connect?: MembershipRoleWhereUniqueInput | MembershipRoleWhereUniqueInput[]
    }

    export type AttendanceUncheckedCreateNestedManyWithoutMembershipInput = {
        create?: XOR<AttendanceCreateWithoutMembershipInput, AttendanceUncheckedCreateWithoutMembershipInput> | AttendanceCreateWithoutMembershipInput[] | AttendanceUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: AttendanceCreateOrConnectWithoutMembershipInput | AttendanceCreateOrConnectWithoutMembershipInput[]
        createMany?: AttendanceCreateManyMembershipInputEnvelope
        connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    }

    export type InvoiceUncheckedCreateNestedManyWithoutMembershipInput = {
        create?: XOR<InvoiceCreateWithoutMembershipInput, InvoiceUncheckedCreateWithoutMembershipInput> | InvoiceCreateWithoutMembershipInput[] | InvoiceUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: InvoiceCreateOrConnectWithoutMembershipInput | InvoiceCreateOrConnectWithoutMembershipInput[]
        createMany?: InvoiceCreateManyMembershipInputEnvelope
        connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    }

    export type BookingUncheckedCreateNestedManyWithoutMembershipInput = {
        create?: XOR<BookingCreateWithoutMembershipInput, BookingUncheckedCreateWithoutMembershipInput> | BookingCreateWithoutMembershipInput[] | BookingUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: BookingCreateOrConnectWithoutMembershipInput | BookingCreateOrConnectWithoutMembershipInput[]
        createMany?: BookingCreateManyMembershipInputEnvelope
        connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    }

    export type MetricUncheckedCreateNestedManyWithoutMembershipInput = {
        create?: XOR<MetricCreateWithoutMembershipInput, MetricUncheckedCreateWithoutMembershipInput> | MetricCreateWithoutMembershipInput[] | MetricUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: MetricCreateOrConnectWithoutMembershipInput | MetricCreateOrConnectWithoutMembershipInput[]
        createMany?: MetricCreateManyMembershipInputEnvelope
        connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    }

    export type DocumentUncheckedCreateNestedManyWithoutMembershipInput = {
        create?: XOR<DocumentCreateWithoutMembershipInput, DocumentUncheckedCreateWithoutMembershipInput> | DocumentCreateWithoutMembershipInput[] | DocumentUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: DocumentCreateOrConnectWithoutMembershipInput | DocumentCreateOrConnectWithoutMembershipInput[]
        createMany?: DocumentCreateManyMembershipInputEnvelope
        connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    }

    export type EnumMembershipStatusFieldUpdateOperationsInput = {
        set?: $Enums.MembershipStatus
    }

    export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
        create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
        connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
        upsert?: UserUpsertWithoutMembershipsInput
        connect?: UserWhereUniqueInput
        update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
    }

    export type TenantUpdateOneRequiredWithoutMembershipsNestedInput = {
        create?: XOR<TenantCreateWithoutMembershipsInput, TenantUncheckedCreateWithoutMembershipsInput>
        connectOrCreate?: TenantCreateOrConnectWithoutMembershipsInput
        upsert?: TenantUpsertWithoutMembershipsInput
        connect?: TenantWhereUniqueInput
        update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutMembershipsInput, TenantUpdateWithoutMembershipsInput>, TenantUncheckedUpdateWithoutMembershipsInput>
    }

    export type MembershipRoleUpdateManyWithoutMembershipNestedInput = {
        create?: XOR<MembershipRoleCreateWithoutMembershipInput, MembershipRoleUncheckedCreateWithoutMembershipInput> | MembershipRoleCreateWithoutMembershipInput[] | MembershipRoleUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: MembershipRoleCreateOrConnectWithoutMembershipInput | MembershipRoleCreateOrConnectWithoutMembershipInput[]
        upsert?: MembershipRoleUpsertWithWhereUniqueWithoutMembershipInput | MembershipRoleUpsertWithWhereUniqueWithoutMembershipInput[]
        createMany?: MembershipRoleCreateManyMembershipInputEnvelope
        set?: MembershipRoleWhereUniqueInput | MembershipRoleWhereUniqueInput[]
        disconnect?: MembershipRoleWhereUniqueInput | MembershipRoleWhereUniqueInput[]
        delete?: MembershipRoleWhereUniqueInput | MembershipRoleWhereUniqueInput[]
        connect?: MembershipRoleWhereUniqueInput | MembershipRoleWhereUniqueInput[]
        update?: MembershipRoleUpdateWithWhereUniqueWithoutMembershipInput | MembershipRoleUpdateWithWhereUniqueWithoutMembershipInput[]
        updateMany?: MembershipRoleUpdateManyWithWhereWithoutMembershipInput | MembershipRoleUpdateManyWithWhereWithoutMembershipInput[]
        deleteMany?: MembershipRoleScalarWhereInput | MembershipRoleScalarWhereInput[]
    }

    export type AttendanceUpdateManyWithoutMembershipNestedInput = {
        create?: XOR<AttendanceCreateWithoutMembershipInput, AttendanceUncheckedCreateWithoutMembershipInput> | AttendanceCreateWithoutMembershipInput[] | AttendanceUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: AttendanceCreateOrConnectWithoutMembershipInput | AttendanceCreateOrConnectWithoutMembershipInput[]
        upsert?: AttendanceUpsertWithWhereUniqueWithoutMembershipInput | AttendanceUpsertWithWhereUniqueWithoutMembershipInput[]
        createMany?: AttendanceCreateManyMembershipInputEnvelope
        set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        update?: AttendanceUpdateWithWhereUniqueWithoutMembershipInput | AttendanceUpdateWithWhereUniqueWithoutMembershipInput[]
        updateMany?: AttendanceUpdateManyWithWhereWithoutMembershipInput | AttendanceUpdateManyWithWhereWithoutMembershipInput[]
        deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    }

    export type InvoiceUpdateManyWithoutMembershipNestedInput = {
        create?: XOR<InvoiceCreateWithoutMembershipInput, InvoiceUncheckedCreateWithoutMembershipInput> | InvoiceCreateWithoutMembershipInput[] | InvoiceUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: InvoiceCreateOrConnectWithoutMembershipInput | InvoiceCreateOrConnectWithoutMembershipInput[]
        upsert?: InvoiceUpsertWithWhereUniqueWithoutMembershipInput | InvoiceUpsertWithWhereUniqueWithoutMembershipInput[]
        createMany?: InvoiceCreateManyMembershipInputEnvelope
        set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        update?: InvoiceUpdateWithWhereUniqueWithoutMembershipInput | InvoiceUpdateWithWhereUniqueWithoutMembershipInput[]
        updateMany?: InvoiceUpdateManyWithWhereWithoutMembershipInput | InvoiceUpdateManyWithWhereWithoutMembershipInput[]
        deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    }

    export type BookingUpdateManyWithoutMembershipNestedInput = {
        create?: XOR<BookingCreateWithoutMembershipInput, BookingUncheckedCreateWithoutMembershipInput> | BookingCreateWithoutMembershipInput[] | BookingUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: BookingCreateOrConnectWithoutMembershipInput | BookingCreateOrConnectWithoutMembershipInput[]
        upsert?: BookingUpsertWithWhereUniqueWithoutMembershipInput | BookingUpsertWithWhereUniqueWithoutMembershipInput[]
        createMany?: BookingCreateManyMembershipInputEnvelope
        set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        update?: BookingUpdateWithWhereUniqueWithoutMembershipInput | BookingUpdateWithWhereUniqueWithoutMembershipInput[]
        updateMany?: BookingUpdateManyWithWhereWithoutMembershipInput | BookingUpdateManyWithWhereWithoutMembershipInput[]
        deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
    }

    export type MetricUpdateManyWithoutMembershipNestedInput = {
        create?: XOR<MetricCreateWithoutMembershipInput, MetricUncheckedCreateWithoutMembershipInput> | MetricCreateWithoutMembershipInput[] | MetricUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: MetricCreateOrConnectWithoutMembershipInput | MetricCreateOrConnectWithoutMembershipInput[]
        upsert?: MetricUpsertWithWhereUniqueWithoutMembershipInput | MetricUpsertWithWhereUniqueWithoutMembershipInput[]
        createMany?: MetricCreateManyMembershipInputEnvelope
        set?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
        disconnect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
        delete?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
        connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
        update?: MetricUpdateWithWhereUniqueWithoutMembershipInput | MetricUpdateWithWhereUniqueWithoutMembershipInput[]
        updateMany?: MetricUpdateManyWithWhereWithoutMembershipInput | MetricUpdateManyWithWhereWithoutMembershipInput[]
        deleteMany?: MetricScalarWhereInput | MetricScalarWhereInput[]
    }

    export type DocumentUpdateManyWithoutMembershipNestedInput = {
        create?: XOR<DocumentCreateWithoutMembershipInput, DocumentUncheckedCreateWithoutMembershipInput> | DocumentCreateWithoutMembershipInput[] | DocumentUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: DocumentCreateOrConnectWithoutMembershipInput | DocumentCreateOrConnectWithoutMembershipInput[]
        upsert?: DocumentUpsertWithWhereUniqueWithoutMembershipInput | DocumentUpsertWithWhereUniqueWithoutMembershipInput[]
        createMany?: DocumentCreateManyMembershipInputEnvelope
        set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
        disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
        delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
        connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
        update?: DocumentUpdateWithWhereUniqueWithoutMembershipInput | DocumentUpdateWithWhereUniqueWithoutMembershipInput[]
        updateMany?: DocumentUpdateManyWithWhereWithoutMembershipInput | DocumentUpdateManyWithWhereWithoutMembershipInput[]
        deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    }

    export type MembershipRoleUncheckedUpdateManyWithoutMembershipNestedInput = {
        create?: XOR<MembershipRoleCreateWithoutMembershipInput, MembershipRoleUncheckedCreateWithoutMembershipInput> | MembershipRoleCreateWithoutMembershipInput[] | MembershipRoleUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: MembershipRoleCreateOrConnectWithoutMembershipInput | MembershipRoleCreateOrConnectWithoutMembershipInput[]
        upsert?: MembershipRoleUpsertWithWhereUniqueWithoutMembershipInput | MembershipRoleUpsertWithWhereUniqueWithoutMembershipInput[]
        createMany?: MembershipRoleCreateManyMembershipInputEnvelope
        set?: MembershipRoleWhereUniqueInput | MembershipRoleWhereUniqueInput[]
        disconnect?: MembershipRoleWhereUniqueInput | MembershipRoleWhereUniqueInput[]
        delete?: MembershipRoleWhereUniqueInput | MembershipRoleWhereUniqueInput[]
        connect?: MembershipRoleWhereUniqueInput | MembershipRoleWhereUniqueInput[]
        update?: MembershipRoleUpdateWithWhereUniqueWithoutMembershipInput | MembershipRoleUpdateWithWhereUniqueWithoutMembershipInput[]
        updateMany?: MembershipRoleUpdateManyWithWhereWithoutMembershipInput | MembershipRoleUpdateManyWithWhereWithoutMembershipInput[]
        deleteMany?: MembershipRoleScalarWhereInput | MembershipRoleScalarWhereInput[]
    }

    export type AttendanceUncheckedUpdateManyWithoutMembershipNestedInput = {
        create?: XOR<AttendanceCreateWithoutMembershipInput, AttendanceUncheckedCreateWithoutMembershipInput> | AttendanceCreateWithoutMembershipInput[] | AttendanceUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: AttendanceCreateOrConnectWithoutMembershipInput | AttendanceCreateOrConnectWithoutMembershipInput[]
        upsert?: AttendanceUpsertWithWhereUniqueWithoutMembershipInput | AttendanceUpsertWithWhereUniqueWithoutMembershipInput[]
        createMany?: AttendanceCreateManyMembershipInputEnvelope
        set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
        update?: AttendanceUpdateWithWhereUniqueWithoutMembershipInput | AttendanceUpdateWithWhereUniqueWithoutMembershipInput[]
        updateMany?: AttendanceUpdateManyWithWhereWithoutMembershipInput | AttendanceUpdateManyWithWhereWithoutMembershipInput[]
        deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    }

    export type InvoiceUncheckedUpdateManyWithoutMembershipNestedInput = {
        create?: XOR<InvoiceCreateWithoutMembershipInput, InvoiceUncheckedCreateWithoutMembershipInput> | InvoiceCreateWithoutMembershipInput[] | InvoiceUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: InvoiceCreateOrConnectWithoutMembershipInput | InvoiceCreateOrConnectWithoutMembershipInput[]
        upsert?: InvoiceUpsertWithWhereUniqueWithoutMembershipInput | InvoiceUpsertWithWhereUniqueWithoutMembershipInput[]
        createMany?: InvoiceCreateManyMembershipInputEnvelope
        set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
        update?: InvoiceUpdateWithWhereUniqueWithoutMembershipInput | InvoiceUpdateWithWhereUniqueWithoutMembershipInput[]
        updateMany?: InvoiceUpdateManyWithWhereWithoutMembershipInput | InvoiceUpdateManyWithWhereWithoutMembershipInput[]
        deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    }

    export type BookingUncheckedUpdateManyWithoutMembershipNestedInput = {
        create?: XOR<BookingCreateWithoutMembershipInput, BookingUncheckedCreateWithoutMembershipInput> | BookingCreateWithoutMembershipInput[] | BookingUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: BookingCreateOrConnectWithoutMembershipInput | BookingCreateOrConnectWithoutMembershipInput[]
        upsert?: BookingUpsertWithWhereUniqueWithoutMembershipInput | BookingUpsertWithWhereUniqueWithoutMembershipInput[]
        createMany?: BookingCreateManyMembershipInputEnvelope
        set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        update?: BookingUpdateWithWhereUniqueWithoutMembershipInput | BookingUpdateWithWhereUniqueWithoutMembershipInput[]
        updateMany?: BookingUpdateManyWithWhereWithoutMembershipInput | BookingUpdateManyWithWhereWithoutMembershipInput[]
        deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
    }

    export type MetricUncheckedUpdateManyWithoutMembershipNestedInput = {
        create?: XOR<MetricCreateWithoutMembershipInput, MetricUncheckedCreateWithoutMembershipInput> | MetricCreateWithoutMembershipInput[] | MetricUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: MetricCreateOrConnectWithoutMembershipInput | MetricCreateOrConnectWithoutMembershipInput[]
        upsert?: MetricUpsertWithWhereUniqueWithoutMembershipInput | MetricUpsertWithWhereUniqueWithoutMembershipInput[]
        createMany?: MetricCreateManyMembershipInputEnvelope
        set?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
        disconnect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
        delete?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
        connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
        update?: MetricUpdateWithWhereUniqueWithoutMembershipInput | MetricUpdateWithWhereUniqueWithoutMembershipInput[]
        updateMany?: MetricUpdateManyWithWhereWithoutMembershipInput | MetricUpdateManyWithWhereWithoutMembershipInput[]
        deleteMany?: MetricScalarWhereInput | MetricScalarWhereInput[]
    }

    export type DocumentUncheckedUpdateManyWithoutMembershipNestedInput = {
        create?: XOR<DocumentCreateWithoutMembershipInput, DocumentUncheckedCreateWithoutMembershipInput> | DocumentCreateWithoutMembershipInput[] | DocumentUncheckedCreateWithoutMembershipInput[]
        connectOrCreate?: DocumentCreateOrConnectWithoutMembershipInput | DocumentCreateOrConnectWithoutMembershipInput[]
        upsert?: DocumentUpsertWithWhereUniqueWithoutMembershipInput | DocumentUpsertWithWhereUniqueWithoutMembershipInput[]
        createMany?: DocumentCreateManyMembershipInputEnvelope
        set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
        disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
        delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
        connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
        update?: DocumentUpdateWithWhereUniqueWithoutMembershipInput | DocumentUpdateWithWhereUniqueWithoutMembershipInput[]
        updateMany?: DocumentUpdateManyWithWhereWithoutMembershipInput | DocumentUpdateManyWithWhereWithoutMembershipInput[]
        deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    }

    export type MembershipCreateNestedOneWithoutRolesInput = {
        create?: XOR<MembershipCreateWithoutRolesInput, MembershipUncheckedCreateWithoutRolesInput>
        connectOrCreate?: MembershipCreateOrConnectWithoutRolesInput
        connect?: MembershipWhereUniqueInput
    }

    export type EnumRoleFieldUpdateOperationsInput = {
        set?: $Enums.Role
    }

    export type MembershipUpdateOneRequiredWithoutRolesNestedInput = {
        create?: XOR<MembershipCreateWithoutRolesInput, MembershipUncheckedCreateWithoutRolesInput>
        connectOrCreate?: MembershipCreateOrConnectWithoutRolesInput
        upsert?: MembershipUpsertWithoutRolesInput
        connect?: MembershipWhereUniqueInput
        update?: XOR<XOR<MembershipUpdateToOneWithWhereWithoutRolesInput, MembershipUpdateWithoutRolesInput>, MembershipUncheckedUpdateWithoutRolesInput>
    }

    export type TenantCreateNestedOneWithoutAttendancesInput = {
        create?: XOR<TenantCreateWithoutAttendancesInput, TenantUncheckedCreateWithoutAttendancesInput>
        connectOrCreate?: TenantCreateOrConnectWithoutAttendancesInput
        connect?: TenantWhereUniqueInput
    }

    export type MembershipCreateNestedOneWithoutAttendancesInput = {
        create?: XOR<MembershipCreateWithoutAttendancesInput, MembershipUncheckedCreateWithoutAttendancesInput>
        connectOrCreate?: MembershipCreateOrConnectWithoutAttendancesInput
        connect?: MembershipWhereUniqueInput
    }

    export type NullableDateTimeFieldUpdateOperationsInput = {
        set?: Date | string | null
    }

    export type TenantUpdateOneRequiredWithoutAttendancesNestedInput = {
        create?: XOR<TenantCreateWithoutAttendancesInput, TenantUncheckedCreateWithoutAttendancesInput>
        connectOrCreate?: TenantCreateOrConnectWithoutAttendancesInput
        upsert?: TenantUpsertWithoutAttendancesInput
        connect?: TenantWhereUniqueInput
        update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutAttendancesInput, TenantUpdateWithoutAttendancesInput>, TenantUncheckedUpdateWithoutAttendancesInput>
    }

    export type MembershipUpdateOneWithoutAttendancesNestedInput = {
        create?: XOR<MembershipCreateWithoutAttendancesInput, MembershipUncheckedCreateWithoutAttendancesInput>
        connectOrCreate?: MembershipCreateOrConnectWithoutAttendancesInput
        upsert?: MembershipUpsertWithoutAttendancesInput
        disconnect?: MembershipWhereInput | boolean
        delete?: MembershipWhereInput | boolean
        connect?: MembershipWhereUniqueInput
        update?: XOR<XOR<MembershipUpdateToOneWithWhereWithoutAttendancesInput, MembershipUpdateWithoutAttendancesInput>, MembershipUncheckedUpdateWithoutAttendancesInput>
    }

    export type TenantCreateNestedOneWithoutInvoicesInput = {
        create?: XOR<TenantCreateWithoutInvoicesInput, TenantUncheckedCreateWithoutInvoicesInput>
        connectOrCreate?: TenantCreateOrConnectWithoutInvoicesInput
        connect?: TenantWhereUniqueInput
    }

    export type MembershipCreateNestedOneWithoutInvoicesInput = {
        create?: XOR<MembershipCreateWithoutInvoicesInput, MembershipUncheckedCreateWithoutInvoicesInput>
        connectOrCreate?: MembershipCreateOrConnectWithoutInvoicesInput
        connect?: MembershipWhereUniqueInput
    }

    export type PaymentCreateNestedManyWithoutInvoiceInput = {
        create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
        createMany?: PaymentCreateManyInvoiceInputEnvelope
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    }

    export type InvoiceItemCreateNestedManyWithoutInvoiceInput = {
        create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
        connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
        createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
        connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    }

    export type PaymentUncheckedCreateNestedManyWithoutInvoiceInput = {
        create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
        createMany?: PaymentCreateManyInvoiceInputEnvelope
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    }

    export type InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput = {
        create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
        connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
        createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
        connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    }

    export type EnumInvoiceTypeFieldUpdateOperationsInput = {
        set?: $Enums.InvoiceType
    }

    export type EnumInvoiceStatusFieldUpdateOperationsInput = {
        set?: $Enums.InvoiceStatus
    }

    export type DecimalFieldUpdateOperationsInput = {
        set?: Decimal | DecimalJsLike | number | string
        increment?: Decimal | DecimalJsLike | number | string
        decrement?: Decimal | DecimalJsLike | number | string
        multiply?: Decimal | DecimalJsLike | number | string
        divide?: Decimal | DecimalJsLike | number | string
    }

    export type TenantUpdateOneRequiredWithoutInvoicesNestedInput = {
        create?: XOR<TenantCreateWithoutInvoicesInput, TenantUncheckedCreateWithoutInvoicesInput>
        connectOrCreate?: TenantCreateOrConnectWithoutInvoicesInput
        upsert?: TenantUpsertWithoutInvoicesInput
        connect?: TenantWhereUniqueInput
        update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutInvoicesInput, TenantUpdateWithoutInvoicesInput>, TenantUncheckedUpdateWithoutInvoicesInput>
    }

    export type MembershipUpdateOneRequiredWithoutInvoicesNestedInput = {
        create?: XOR<MembershipCreateWithoutInvoicesInput, MembershipUncheckedCreateWithoutInvoicesInput>
        connectOrCreate?: MembershipCreateOrConnectWithoutInvoicesInput
        upsert?: MembershipUpsertWithoutInvoicesInput
        connect?: MembershipWhereUniqueInput
        update?: XOR<XOR<MembershipUpdateToOneWithWhereWithoutInvoicesInput, MembershipUpdateWithoutInvoicesInput>, MembershipUncheckedUpdateWithoutInvoicesInput>
    }

    export type PaymentUpdateManyWithoutInvoiceNestedInput = {
        create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
        upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
        createMany?: PaymentCreateManyInvoiceInputEnvelope
        set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
        updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
        deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    }

    export type InvoiceItemUpdateManyWithoutInvoiceNestedInput = {
        create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
        connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
        upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
        createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
        set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
        disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
        delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
        connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
        update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
        updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
        deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    }

    export type PaymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
        create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
        connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
        upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
        createMany?: PaymentCreateManyInvoiceInputEnvelope
        set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
        update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
        updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
        deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    }

    export type InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput = {
        create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
        connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
        upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
        createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
        set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
        disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
        delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
        connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
        update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
        updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
        deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    }

    export type InvoiceCreateNestedOneWithoutItemsInput = {
        create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
        connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
        connect?: InvoiceWhereUniqueInput
    }

    export type InvoiceUpdateOneRequiredWithoutItemsNestedInput = {
        create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
        connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
        upsert?: InvoiceUpsertWithoutItemsInput
        connect?: InvoiceWhereUniqueInput
        update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutItemsInput, InvoiceUpdateWithoutItemsInput>, InvoiceUncheckedUpdateWithoutItemsInput>
    }

    export type InvoiceCreateNestedOneWithoutPaymentsInput = {
        create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
        connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
        connect?: InvoiceWhereUniqueInput
    }

    export type EnumPaymentMethodFieldUpdateOperationsInput = {
        set?: $Enums.PaymentMethod
    }

    export type EnumPaymentStatusFieldUpdateOperationsInput = {
        set?: $Enums.PaymentStatus
    }

    export type InvoiceUpdateOneRequiredWithoutPaymentsNestedInput = {
        create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
        connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
        upsert?: InvoiceUpsertWithoutPaymentsInput
        connect?: InvoiceWhereUniqueInput
        update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutPaymentsInput, InvoiceUpdateWithoutPaymentsInput>, InvoiceUncheckedUpdateWithoutPaymentsInput>
    }

    export type TenantCreateNestedOneWithoutResourcesInput = {
        create?: XOR<TenantCreateWithoutResourcesInput, TenantUncheckedCreateWithoutResourcesInput>
        connectOrCreate?: TenantCreateOrConnectWithoutResourcesInput
        connect?: TenantWhereUniqueInput
    }

    export type BookingCreateNestedManyWithoutResourceInput = {
        create?: XOR<BookingCreateWithoutResourceInput, BookingUncheckedCreateWithoutResourceInput> | BookingCreateWithoutResourceInput[] | BookingUncheckedCreateWithoutResourceInput[]
        connectOrCreate?: BookingCreateOrConnectWithoutResourceInput | BookingCreateOrConnectWithoutResourceInput[]
        createMany?: BookingCreateManyResourceInputEnvelope
        connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    }

    export type BookingUncheckedCreateNestedManyWithoutResourceInput = {
        create?: XOR<BookingCreateWithoutResourceInput, BookingUncheckedCreateWithoutResourceInput> | BookingCreateWithoutResourceInput[] | BookingUncheckedCreateWithoutResourceInput[]
        connectOrCreate?: BookingCreateOrConnectWithoutResourceInput | BookingCreateOrConnectWithoutResourceInput[]
        createMany?: BookingCreateManyResourceInputEnvelope
        connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    }

    export type EnumResourceTypeFieldUpdateOperationsInput = {
        set?: $Enums.ResourceType
    }

    export type IntFieldUpdateOperationsInput = {
        set?: number
        increment?: number
        decrement?: number
        multiply?: number
        divide?: number
    }

    export type TenantUpdateOneRequiredWithoutResourcesNestedInput = {
        create?: XOR<TenantCreateWithoutResourcesInput, TenantUncheckedCreateWithoutResourcesInput>
        connectOrCreate?: TenantCreateOrConnectWithoutResourcesInput
        upsert?: TenantUpsertWithoutResourcesInput
        connect?: TenantWhereUniqueInput
        update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutResourcesInput, TenantUpdateWithoutResourcesInput>, TenantUncheckedUpdateWithoutResourcesInput>
    }

    export type BookingUpdateManyWithoutResourceNestedInput = {
        create?: XOR<BookingCreateWithoutResourceInput, BookingUncheckedCreateWithoutResourceInput> | BookingCreateWithoutResourceInput[] | BookingUncheckedCreateWithoutResourceInput[]
        connectOrCreate?: BookingCreateOrConnectWithoutResourceInput | BookingCreateOrConnectWithoutResourceInput[]
        upsert?: BookingUpsertWithWhereUniqueWithoutResourceInput | BookingUpsertWithWhereUniqueWithoutResourceInput[]
        createMany?: BookingCreateManyResourceInputEnvelope
        set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        update?: BookingUpdateWithWhereUniqueWithoutResourceInput | BookingUpdateWithWhereUniqueWithoutResourceInput[]
        updateMany?: BookingUpdateManyWithWhereWithoutResourceInput | BookingUpdateManyWithWhereWithoutResourceInput[]
        deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
    }

    export type BookingUncheckedUpdateManyWithoutResourceNestedInput = {
        create?: XOR<BookingCreateWithoutResourceInput, BookingUncheckedCreateWithoutResourceInput> | BookingCreateWithoutResourceInput[] | BookingUncheckedCreateWithoutResourceInput[]
        connectOrCreate?: BookingCreateOrConnectWithoutResourceInput | BookingCreateOrConnectWithoutResourceInput[]
        upsert?: BookingUpsertWithWhereUniqueWithoutResourceInput | BookingUpsertWithWhereUniqueWithoutResourceInput[]
        createMany?: BookingCreateManyResourceInputEnvelope
        set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
        update?: BookingUpdateWithWhereUniqueWithoutResourceInput | BookingUpdateWithWhereUniqueWithoutResourceInput[]
        updateMany?: BookingUpdateManyWithWhereWithoutResourceInput | BookingUpdateManyWithWhereWithoutResourceInput[]
        deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
    }

    export type ResourceCreateNestedOneWithoutBookingsInput = {
        create?: XOR<ResourceCreateWithoutBookingsInput, ResourceUncheckedCreateWithoutBookingsInput>
        connectOrCreate?: ResourceCreateOrConnectWithoutBookingsInput
        connect?: ResourceWhereUniqueInput
    }

    export type MembershipCreateNestedOneWithoutBookingsInput = {
        create?: XOR<MembershipCreateWithoutBookingsInput, MembershipUncheckedCreateWithoutBookingsInput>
        connectOrCreate?: MembershipCreateOrConnectWithoutBookingsInput
        connect?: MembershipWhereUniqueInput
    }

    export type ResourceUpdateOneRequiredWithoutBookingsNestedInput = {
        create?: XOR<ResourceCreateWithoutBookingsInput, ResourceUncheckedCreateWithoutBookingsInput>
        connectOrCreate?: ResourceCreateOrConnectWithoutBookingsInput
        upsert?: ResourceUpsertWithoutBookingsInput
        connect?: ResourceWhereUniqueInput
        update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutBookingsInput, ResourceUpdateWithoutBookingsInput>, ResourceUncheckedUpdateWithoutBookingsInput>
    }

    export type MembershipUpdateOneRequiredWithoutBookingsNestedInput = {
        create?: XOR<MembershipCreateWithoutBookingsInput, MembershipUncheckedCreateWithoutBookingsInput>
        connectOrCreate?: MembershipCreateOrConnectWithoutBookingsInput
        upsert?: MembershipUpsertWithoutBookingsInput
        connect?: MembershipWhereUniqueInput
        update?: XOR<XOR<MembershipUpdateToOneWithWhereWithoutBookingsInput, MembershipUpdateWithoutBookingsInput>, MembershipUncheckedUpdateWithoutBookingsInput>
    }

    export type MembershipCreateNestedOneWithoutMetricsInput = {
        create?: XOR<MembershipCreateWithoutMetricsInput, MembershipUncheckedCreateWithoutMetricsInput>
        connectOrCreate?: MembershipCreateOrConnectWithoutMetricsInput
        connect?: MembershipWhereUniqueInput
    }

    export type MembershipUpdateOneRequiredWithoutMetricsNestedInput = {
        create?: XOR<MembershipCreateWithoutMetricsInput, MembershipUncheckedCreateWithoutMetricsInput>
        connectOrCreate?: MembershipCreateOrConnectWithoutMetricsInput
        upsert?: MembershipUpsertWithoutMetricsInput
        connect?: MembershipWhereUniqueInput
        update?: XOR<XOR<MembershipUpdateToOneWithWhereWithoutMetricsInput, MembershipUpdateWithoutMetricsInput>, MembershipUncheckedUpdateWithoutMetricsInput>
    }

    export type MembershipCreateNestedOneWithoutDocumentsInput = {
        create?: XOR<MembershipCreateWithoutDocumentsInput, MembershipUncheckedCreateWithoutDocumentsInput>
        connectOrCreate?: MembershipCreateOrConnectWithoutDocumentsInput
        connect?: MembershipWhereUniqueInput
    }

    export type MembershipUpdateOneRequiredWithoutDocumentsNestedInput = {
        create?: XOR<MembershipCreateWithoutDocumentsInput, MembershipUncheckedCreateWithoutDocumentsInput>
        connectOrCreate?: MembershipCreateOrConnectWithoutDocumentsInput
        upsert?: MembershipUpsertWithoutDocumentsInput
        connect?: MembershipWhereUniqueInput
        update?: XOR<XOR<MembershipUpdateToOneWithWhereWithoutDocumentsInput, MembershipUpdateWithoutDocumentsInput>, MembershipUncheckedUpdateWithoutDocumentsInput>
    }

    export type TenantCreateNestedOneWithoutAuditLogsInput = {
        create?: XOR<TenantCreateWithoutAuditLogsInput, TenantUncheckedCreateWithoutAuditLogsInput>
        connectOrCreate?: TenantCreateOrConnectWithoutAuditLogsInput
        connect?: TenantWhereUniqueInput
    }

    export type UserCreateNestedOneWithoutAuditLogsInput = {
        create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
        connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
        connect?: UserWhereUniqueInput
    }

    export type TenantUpdateOneRequiredWithoutAuditLogsNestedInput = {
        create?: XOR<TenantCreateWithoutAuditLogsInput, TenantUncheckedCreateWithoutAuditLogsInput>
        connectOrCreate?: TenantCreateOrConnectWithoutAuditLogsInput
        upsert?: TenantUpsertWithoutAuditLogsInput
        connect?: TenantWhereUniqueInput
        update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutAuditLogsInput, TenantUpdateWithoutAuditLogsInput>, TenantUncheckedUpdateWithoutAuditLogsInput>
    }

    export type UserUpdateOneWithoutAuditLogsNestedInput = {
        create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
        connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
        upsert?: UserUpsertWithoutAuditLogsInput
        disconnect?: UserWhereInput | boolean
        delete?: UserWhereInput | boolean
        connect?: UserWhereUniqueInput
        update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
    }

    export type NestedStringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[] | ListStringFieldRefInput<$PrismaModel>
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        not?: NestedStringFilter<$PrismaModel> | string
    }

    export type NestedStringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        not?: NestedStringNullableFilter<$PrismaModel> | string | null
    }

    export type NestedBoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>
        not?: NestedBoolFilter<$PrismaModel> | boolean
    }

    export type NestedDateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string
    }

    export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[] | ListStringFieldRefInput<$PrismaModel>
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedStringFilter<$PrismaModel>
        _max?: NestedStringFilter<$PrismaModel>
    }

    export type NestedIntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[] | ListIntFieldRefInput<$PrismaModel>
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntFilter<$PrismaModel> | number
    }

    export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedStringNullableFilter<$PrismaModel>
        _max?: NestedStringNullableFilter<$PrismaModel>
    }

    export type NestedIntNullableFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null
        in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntNullableFilter<$PrismaModel> | number | null
    }

    export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedBoolFilter<$PrismaModel>
        _max?: NestedBoolFilter<$PrismaModel>
    }

    export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedDateTimeFilter<$PrismaModel>
        _max?: NestedDateTimeFilter<$PrismaModel>
    }
    export type NestedJsonNullableFilter<$PrismaModel = never> =
        | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
    >
        | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

    export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
        equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        path?: string[]
        mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
        string_contains?: string | StringFieldRefInput<$PrismaModel>
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>
        array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    }

    export type NestedEnumMembershipStatusFilter<$PrismaModel = never> = {
        equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
        in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
        notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
        not?: NestedEnumMembershipStatusFilter<$PrismaModel> | $Enums.MembershipStatus
    }

    export type NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
        in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
        notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
        not?: NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel> | $Enums.MembershipStatus
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumMembershipStatusFilter<$PrismaModel>
        _max?: NestedEnumMembershipStatusFilter<$PrismaModel>
    }

    export type NestedEnumRoleFilter<$PrismaModel = never> = {
        equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
        in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
    }

    export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
        in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
        not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumRoleFilter<$PrismaModel>
        _max?: NestedEnumRoleFilter<$PrismaModel>
    }

    export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    }

    export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedDateTimeNullableFilter<$PrismaModel>
        _max?: NestedDateTimeNullableFilter<$PrismaModel>
    }

    export type NestedEnumInvoiceTypeFilter<$PrismaModel = never> = {
        equals?: $Enums.InvoiceType | EnumInvoiceTypeFieldRefInput<$PrismaModel>
        in?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumInvoiceTypeFilter<$PrismaModel> | $Enums.InvoiceType
    }

    export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
        equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
        in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
        notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
        not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
    }

    export type NestedDecimalFilter<$PrismaModel = never> = {
        equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
        notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
        lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    }

    export type NestedEnumInvoiceTypeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.InvoiceType | EnumInvoiceTypeFieldRefInput<$PrismaModel>
        in?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumInvoiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceType
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumInvoiceTypeFilter<$PrismaModel>
        _max?: NestedEnumInvoiceTypeFilter<$PrismaModel>
    }

    export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
        in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
        notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
        not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
        _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    }

    export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
        notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
        lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
        not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
        _count?: NestedIntFilter<$PrismaModel>
        _avg?: NestedDecimalFilter<$PrismaModel>
        _sum?: NestedDecimalFilter<$PrismaModel>
        _min?: NestedDecimalFilter<$PrismaModel>
        _max?: NestedDecimalFilter<$PrismaModel>
    }

    export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
        equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
        in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
        notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
        not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
    }

    export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
        equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
        in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
        notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
        not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
    }

    export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
        in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
        notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
        not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
        _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
    }

    export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
        in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
        notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
        not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
        _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
    }

    export type NestedEnumResourceTypeFilter<$PrismaModel = never> = {
        equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
        in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
    }

    export type NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
        in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
        notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
        not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumResourceTypeFilter<$PrismaModel>
        _max?: NestedEnumResourceTypeFilter<$PrismaModel>
    }

    export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[] | ListIntFieldRefInput<$PrismaModel>
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
        _count?: NestedIntFilter<$PrismaModel>
        _avg?: NestedFloatFilter<$PrismaModel>
        _sum?: NestedIntFilter<$PrismaModel>
        _min?: NestedIntFilter<$PrismaModel>
        _max?: NestedIntFilter<$PrismaModel>
    }

    export type NestedFloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
        lt?: number | FloatFieldRefInput<$PrismaModel>
        lte?: number | FloatFieldRefInput<$PrismaModel>
        gt?: number | FloatFieldRefInput<$PrismaModel>
        gte?: number | FloatFieldRefInput<$PrismaModel>
        not?: NestedFloatFilter<$PrismaModel> | number
    }
    export type NestedJsonFilter<$PrismaModel = never> =
        | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
    >
        | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

    export type NestedJsonFilterBase<$PrismaModel = never> = {
        equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
        path?: string[]
        mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
        string_contains?: string | StringFieldRefInput<$PrismaModel>
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>
        array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
        not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    }

    export type MembershipCreateWithoutUserInput = {
        id?: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        tenant: TenantCreateNestedOneWithoutMembershipsInput
        roles?: MembershipRoleCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceCreateNestedManyWithoutMembershipInput
        bookings?: BookingCreateNestedManyWithoutMembershipInput
        metrics?: MetricCreateNestedManyWithoutMembershipInput
        documents?: DocumentCreateNestedManyWithoutMembershipInput
    }

    export type MembershipUncheckedCreateWithoutUserInput = {
        id?: string
        tenantId: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        roles?: MembershipRoleUncheckedCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceUncheckedCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutMembershipInput
        bookings?: BookingUncheckedCreateNestedManyWithoutMembershipInput
        metrics?: MetricUncheckedCreateNestedManyWithoutMembershipInput
        documents?: DocumentUncheckedCreateNestedManyWithoutMembershipInput
    }

    export type MembershipCreateOrConnectWithoutUserInput = {
        where: MembershipWhereUniqueInput
        create: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput>
    }

    export type MembershipCreateManyUserInputEnvelope = {
        data: MembershipCreateManyUserInput | MembershipCreateManyUserInput[]
        skipDuplicates?: boolean
    }

    export type AuditLogCreateWithoutUserInput = {
        id?: string
        action: string
        entity: string
        entityId: string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        tenant: TenantCreateNestedOneWithoutAuditLogsInput
    }

    export type AuditLogUncheckedCreateWithoutUserInput = {
        id?: string
        tenantId: string
        action: string
        entity: string
        entityId: string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
    }

    export type AuditLogCreateOrConnectWithoutUserInput = {
        where: AuditLogWhereUniqueInput
        create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
    }

    export type AuditLogCreateManyUserInputEnvelope = {
        data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
        skipDuplicates?: boolean
    }

    export type MembershipUpsertWithWhereUniqueWithoutUserInput = {
        where: MembershipWhereUniqueInput
        update: XOR<MembershipUpdateWithoutUserInput, MembershipUncheckedUpdateWithoutUserInput>
        create: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput>
    }

    export type MembershipUpdateWithWhereUniqueWithoutUserInput = {
        where: MembershipWhereUniqueInput
        data: XOR<MembershipUpdateWithoutUserInput, MembershipUncheckedUpdateWithoutUserInput>
    }

    export type MembershipUpdateManyWithWhereWithoutUserInput = {
        where: MembershipScalarWhereInput
        data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutUserInput>
    }

    export type MembershipScalarWhereInput = {
        AND?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
        OR?: MembershipScalarWhereInput[]
        NOT?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
        id?: StringFilter<"Membership"> | string
        userId?: StringFilter<"Membership"> | string
        tenantId?: StringFilter<"Membership"> | string
        status?: EnumMembershipStatusFilter<"Membership"> | $Enums.MembershipStatus
        createdAt?: DateTimeFilter<"Membership"> | Date | string
        updatedAt?: DateTimeFilter<"Membership"> | Date | string
    }

    export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
        where: AuditLogWhereUniqueInput
        update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
        create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
    }

    export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
        where: AuditLogWhereUniqueInput
        data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    }

    export type AuditLogUpdateManyWithWhereWithoutUserInput = {
        where: AuditLogScalarWhereInput
        data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
    }

    export type AuditLogScalarWhereInput = {
        AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
        OR?: AuditLogScalarWhereInput[]
        NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
        id?: StringFilter<"AuditLog"> | string
        tenantId?: StringFilter<"AuditLog"> | string
        userId?: StringNullableFilter<"AuditLog"> | string | null
        action?: StringFilter<"AuditLog"> | string
        entity?: StringFilter<"AuditLog"> | string
        entityId?: StringFilter<"AuditLog"> | string
        changes?: JsonNullableFilter<"AuditLog">
        createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    }

    export type MembershipCreateWithoutTenantInput = {
        id?: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutMembershipsInput
        roles?: MembershipRoleCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceCreateNestedManyWithoutMembershipInput
        bookings?: BookingCreateNestedManyWithoutMembershipInput
        metrics?: MetricCreateNestedManyWithoutMembershipInput
        documents?: DocumentCreateNestedManyWithoutMembershipInput
    }

    export type MembershipUncheckedCreateWithoutTenantInput = {
        id?: string
        userId: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        roles?: MembershipRoleUncheckedCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceUncheckedCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutMembershipInput
        bookings?: BookingUncheckedCreateNestedManyWithoutMembershipInput
        metrics?: MetricUncheckedCreateNestedManyWithoutMembershipInput
        documents?: DocumentUncheckedCreateNestedManyWithoutMembershipInput
    }

    export type MembershipCreateOrConnectWithoutTenantInput = {
        where: MembershipWhereUniqueInput
        create: XOR<MembershipCreateWithoutTenantInput, MembershipUncheckedCreateWithoutTenantInput>
    }

    export type MembershipCreateManyTenantInputEnvelope = {
        data: MembershipCreateManyTenantInput | MembershipCreateManyTenantInput[]
        skipDuplicates?: boolean
    }

    export type AttendanceCreateWithoutTenantInput = {
        id?: string
        rfidTag?: string | null
        authMethod: string
        checkInTime?: Date | string
        checkOutTime?: Date | string | null
        membership?: MembershipCreateNestedOneWithoutAttendancesInput
    }

    export type AttendanceUncheckedCreateWithoutTenantInput = {
        id?: string
        membershipId?: string | null
        rfidTag?: string | null
        authMethod: string
        checkInTime?: Date | string
        checkOutTime?: Date | string | null
    }

    export type AttendanceCreateOrConnectWithoutTenantInput = {
        where: AttendanceWhereUniqueInput
        create: XOR<AttendanceCreateWithoutTenantInput, AttendanceUncheckedCreateWithoutTenantInput>
    }

    export type AttendanceCreateManyTenantInputEnvelope = {
        data: AttendanceCreateManyTenantInput | AttendanceCreateManyTenantInput[]
        skipDuplicates?: boolean
    }

    export type InvoiceCreateWithoutTenantInput = {
        id?: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        membership: MembershipCreateNestedOneWithoutInvoicesInput
        payments?: PaymentCreateNestedManyWithoutInvoiceInput
        items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    }

    export type InvoiceUncheckedCreateWithoutTenantInput = {
        id?: string
        membershipId: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
        items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    }

    export type InvoiceCreateOrConnectWithoutTenantInput = {
        where: InvoiceWhereUniqueInput
        create: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput>
    }

    export type InvoiceCreateManyTenantInputEnvelope = {
        data: InvoiceCreateManyTenantInput | InvoiceCreateManyTenantInput[]
        skipDuplicates?: boolean
    }

    export type ResourceCreateWithoutTenantInput = {
        id?: string
        name: string
        type: $Enums.ResourceType
        capacity?: number
        linkedMemberId?: string | null
        bookings?: BookingCreateNestedManyWithoutResourceInput
    }

    export type ResourceUncheckedCreateWithoutTenantInput = {
        id?: string
        name: string
        type: $Enums.ResourceType
        capacity?: number
        linkedMemberId?: string | null
        bookings?: BookingUncheckedCreateNestedManyWithoutResourceInput
    }

    export type ResourceCreateOrConnectWithoutTenantInput = {
        where: ResourceWhereUniqueInput
        create: XOR<ResourceCreateWithoutTenantInput, ResourceUncheckedCreateWithoutTenantInput>
    }

    export type ResourceCreateManyTenantInputEnvelope = {
        data: ResourceCreateManyTenantInput | ResourceCreateManyTenantInput[]
        skipDuplicates?: boolean
    }

    export type AuditLogCreateWithoutTenantInput = {
        id?: string
        action: string
        entity: string
        entityId: string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        user?: UserCreateNestedOneWithoutAuditLogsInput
    }

    export type AuditLogUncheckedCreateWithoutTenantInput = {
        id?: string
        userId?: string | null
        action: string
        entity: string
        entityId: string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
    }

    export type AuditLogCreateOrConnectWithoutTenantInput = {
        where: AuditLogWhereUniqueInput
        create: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput>
    }

    export type AuditLogCreateManyTenantInputEnvelope = {
        data: AuditLogCreateManyTenantInput | AuditLogCreateManyTenantInput[]
        skipDuplicates?: boolean
    }

    export type MembershipUpsertWithWhereUniqueWithoutTenantInput = {
        where: MembershipWhereUniqueInput
        update: XOR<MembershipUpdateWithoutTenantInput, MembershipUncheckedUpdateWithoutTenantInput>
        create: XOR<MembershipCreateWithoutTenantInput, MembershipUncheckedCreateWithoutTenantInput>
    }

    export type MembershipUpdateWithWhereUniqueWithoutTenantInput = {
        where: MembershipWhereUniqueInput
        data: XOR<MembershipUpdateWithoutTenantInput, MembershipUncheckedUpdateWithoutTenantInput>
    }

    export type MembershipUpdateManyWithWhereWithoutTenantInput = {
        where: MembershipScalarWhereInput
        data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutTenantInput>
    }

    export type AttendanceUpsertWithWhereUniqueWithoutTenantInput = {
        where: AttendanceWhereUniqueInput
        update: XOR<AttendanceUpdateWithoutTenantInput, AttendanceUncheckedUpdateWithoutTenantInput>
        create: XOR<AttendanceCreateWithoutTenantInput, AttendanceUncheckedCreateWithoutTenantInput>
    }

    export type AttendanceUpdateWithWhereUniqueWithoutTenantInput = {
        where: AttendanceWhereUniqueInput
        data: XOR<AttendanceUpdateWithoutTenantInput, AttendanceUncheckedUpdateWithoutTenantInput>
    }

    export type AttendanceUpdateManyWithWhereWithoutTenantInput = {
        where: AttendanceScalarWhereInput
        data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutTenantInput>
    }

    export type AttendanceScalarWhereInput = {
        AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
        OR?: AttendanceScalarWhereInput[]
        NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
        id?: StringFilter<"Attendance"> | string
        tenantId?: StringFilter<"Attendance"> | string
        membershipId?: StringNullableFilter<"Attendance"> | string | null
        rfidTag?: StringNullableFilter<"Attendance"> | string | null
        authMethod?: StringFilter<"Attendance"> | string
        checkInTime?: DateTimeFilter<"Attendance"> | Date | string
        checkOutTime?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    }

    export type InvoiceUpsertWithWhereUniqueWithoutTenantInput = {
        where: InvoiceWhereUniqueInput
        update: XOR<InvoiceUpdateWithoutTenantInput, InvoiceUncheckedUpdateWithoutTenantInput>
        create: XOR<InvoiceCreateWithoutTenantInput, InvoiceUncheckedCreateWithoutTenantInput>
    }

    export type InvoiceUpdateWithWhereUniqueWithoutTenantInput = {
        where: InvoiceWhereUniqueInput
        data: XOR<InvoiceUpdateWithoutTenantInput, InvoiceUncheckedUpdateWithoutTenantInput>
    }

    export type InvoiceUpdateManyWithWhereWithoutTenantInput = {
        where: InvoiceScalarWhereInput
        data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutTenantInput>
    }

    export type InvoiceScalarWhereInput = {
        AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
        OR?: InvoiceScalarWhereInput[]
        NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
        id?: StringFilter<"Invoice"> | string
        tenantId?: StringFilter<"Invoice"> | string
        membershipId?: StringFilter<"Invoice"> | string
        type?: EnumInvoiceTypeFilter<"Invoice"> | $Enums.InvoiceType
        status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
        totalAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
        dueDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
        createdAt?: DateTimeFilter<"Invoice"> | Date | string
        updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    }

    export type ResourceUpsertWithWhereUniqueWithoutTenantInput = {
        where: ResourceWhereUniqueInput
        update: XOR<ResourceUpdateWithoutTenantInput, ResourceUncheckedUpdateWithoutTenantInput>
        create: XOR<ResourceCreateWithoutTenantInput, ResourceUncheckedCreateWithoutTenantInput>
    }

    export type ResourceUpdateWithWhereUniqueWithoutTenantInput = {
        where: ResourceWhereUniqueInput
        data: XOR<ResourceUpdateWithoutTenantInput, ResourceUncheckedUpdateWithoutTenantInput>
    }

    export type ResourceUpdateManyWithWhereWithoutTenantInput = {
        where: ResourceScalarWhereInput
        data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutTenantInput>
    }

    export type ResourceScalarWhereInput = {
        AND?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
        OR?: ResourceScalarWhereInput[]
        NOT?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
        id?: StringFilter<"Resource"> | string
        tenantId?: StringFilter<"Resource"> | string
        name?: StringFilter<"Resource"> | string
        type?: EnumResourceTypeFilter<"Resource"> | $Enums.ResourceType
        capacity?: IntFilter<"Resource"> | number
        linkedMemberId?: StringNullableFilter<"Resource"> | string | null
    }

    export type AuditLogUpsertWithWhereUniqueWithoutTenantInput = {
        where: AuditLogWhereUniqueInput
        update: XOR<AuditLogUpdateWithoutTenantInput, AuditLogUncheckedUpdateWithoutTenantInput>
        create: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput>
    }

    export type AuditLogUpdateWithWhereUniqueWithoutTenantInput = {
        where: AuditLogWhereUniqueInput
        data: XOR<AuditLogUpdateWithoutTenantInput, AuditLogUncheckedUpdateWithoutTenantInput>
    }

    export type AuditLogUpdateManyWithWhereWithoutTenantInput = {
        where: AuditLogScalarWhereInput
        data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutTenantInput>
    }

    export type UserCreateWithoutMembershipsInput = {
        id?: string
        keycloakId?: string | null
        email: string
        phone?: string | null
        firstName: string
        lastName: string
        isGlobalAdmin?: boolean
        isActive?: boolean
        createdAt?: Date | string
        updatedAt?: Date | string
        auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    }

    export type UserUncheckedCreateWithoutMembershipsInput = {
        id?: string
        keycloakId?: string | null
        email: string
        phone?: string | null
        firstName: string
        lastName: string
        isGlobalAdmin?: boolean
        isActive?: boolean
        createdAt?: Date | string
        updatedAt?: Date | string
        auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    }

    export type UserCreateOrConnectWithoutMembershipsInput = {
        where: UserWhereUniqueInput
        create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    }

    export type TenantCreateWithoutMembershipsInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
        attendances?: AttendanceCreateNestedManyWithoutTenantInput
        invoices?: InvoiceCreateNestedManyWithoutTenantInput
        resources?: ResourceCreateNestedManyWithoutTenantInput
        auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    }

    export type TenantUncheckedCreateWithoutMembershipsInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
        attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
        resources?: ResourceUncheckedCreateNestedManyWithoutTenantInput
        auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    }

    export type TenantCreateOrConnectWithoutMembershipsInput = {
        where: TenantWhereUniqueInput
        create: XOR<TenantCreateWithoutMembershipsInput, TenantUncheckedCreateWithoutMembershipsInput>
    }

    export type MembershipRoleCreateWithoutMembershipInput = {
        id?: string
        role: $Enums.Role
    }

    export type MembershipRoleUncheckedCreateWithoutMembershipInput = {
        id?: string
        role: $Enums.Role
    }

    export type MembershipRoleCreateOrConnectWithoutMembershipInput = {
        where: MembershipRoleWhereUniqueInput
        create: XOR<MembershipRoleCreateWithoutMembershipInput, MembershipRoleUncheckedCreateWithoutMembershipInput>
    }

    export type MembershipRoleCreateManyMembershipInputEnvelope = {
        data: MembershipRoleCreateManyMembershipInput | MembershipRoleCreateManyMembershipInput[]
        skipDuplicates?: boolean
    }

    export type AttendanceCreateWithoutMembershipInput = {
        id?: string
        rfidTag?: string | null
        authMethod: string
        checkInTime?: Date | string
        checkOutTime?: Date | string | null
        tenant: TenantCreateNestedOneWithoutAttendancesInput
    }

    export type AttendanceUncheckedCreateWithoutMembershipInput = {
        id?: string
        tenantId: string
        rfidTag?: string | null
        authMethod: string
        checkInTime?: Date | string
        checkOutTime?: Date | string | null
    }

    export type AttendanceCreateOrConnectWithoutMembershipInput = {
        where: AttendanceWhereUniqueInput
        create: XOR<AttendanceCreateWithoutMembershipInput, AttendanceUncheckedCreateWithoutMembershipInput>
    }

    export type AttendanceCreateManyMembershipInputEnvelope = {
        data: AttendanceCreateManyMembershipInput | AttendanceCreateManyMembershipInput[]
        skipDuplicates?: boolean
    }

    export type InvoiceCreateWithoutMembershipInput = {
        id?: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        tenant: TenantCreateNestedOneWithoutInvoicesInput
        payments?: PaymentCreateNestedManyWithoutInvoiceInput
        items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    }

    export type InvoiceUncheckedCreateWithoutMembershipInput = {
        id?: string
        tenantId: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
        items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    }

    export type InvoiceCreateOrConnectWithoutMembershipInput = {
        where: InvoiceWhereUniqueInput
        create: XOR<InvoiceCreateWithoutMembershipInput, InvoiceUncheckedCreateWithoutMembershipInput>
    }

    export type InvoiceCreateManyMembershipInputEnvelope = {
        data: InvoiceCreateManyMembershipInput | InvoiceCreateManyMembershipInput[]
        skipDuplicates?: boolean
    }

    export type BookingCreateWithoutMembershipInput = {
        id?: string
        startTime: Date | string
        endTime: Date | string
        resource: ResourceCreateNestedOneWithoutBookingsInput
    }

    export type BookingUncheckedCreateWithoutMembershipInput = {
        id?: string
        resourceId: string
        startTime: Date | string
        endTime: Date | string
    }

    export type BookingCreateOrConnectWithoutMembershipInput = {
        where: BookingWhereUniqueInput
        create: XOR<BookingCreateWithoutMembershipInput, BookingUncheckedCreateWithoutMembershipInput>
    }

    export type BookingCreateManyMembershipInputEnvelope = {
        data: BookingCreateManyMembershipInput | BookingCreateManyMembershipInput[]
        skipDuplicates?: boolean
    }

    export type MetricCreateWithoutMembershipInput = {
        id?: string
        metricType: string
        data: JsonNullValueInput | InputJsonValue
        recordedAt?: Date | string
    }

    export type MetricUncheckedCreateWithoutMembershipInput = {
        id?: string
        metricType: string
        data: JsonNullValueInput | InputJsonValue
        recordedAt?: Date | string
    }

    export type MetricCreateOrConnectWithoutMembershipInput = {
        where: MetricWhereUniqueInput
        create: XOR<MetricCreateWithoutMembershipInput, MetricUncheckedCreateWithoutMembershipInput>
    }

    export type MetricCreateManyMembershipInputEnvelope = {
        data: MetricCreateManyMembershipInput | MetricCreateManyMembershipInput[]
        skipDuplicates?: boolean
    }

    export type DocumentCreateWithoutMembershipInput = {
        id?: string
        fileName: string
        fileUrl: string
        context: string
        uploadedAt?: Date | string
    }

    export type DocumentUncheckedCreateWithoutMembershipInput = {
        id?: string
        fileName: string
        fileUrl: string
        context: string
        uploadedAt?: Date | string
    }

    export type DocumentCreateOrConnectWithoutMembershipInput = {
        where: DocumentWhereUniqueInput
        create: XOR<DocumentCreateWithoutMembershipInput, DocumentUncheckedCreateWithoutMembershipInput>
    }

    export type DocumentCreateManyMembershipInputEnvelope = {
        data: DocumentCreateManyMembershipInput | DocumentCreateManyMembershipInput[]
        skipDuplicates?: boolean
    }

    export type UserUpsertWithoutMembershipsInput = {
        update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
        create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
        where?: UserWhereInput
    }

    export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
        where?: UserWhereInput
        data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    }

    export type UserUpdateWithoutMembershipsInput = {
        id?: StringFieldUpdateOperationsInput | string
        keycloakId?: NullableStringFieldUpdateOperationsInput | string | null
        email?: StringFieldUpdateOperationsInput | string
        phone?: NullableStringFieldUpdateOperationsInput | string | null
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        isGlobalAdmin?: BoolFieldUpdateOperationsInput | boolean
        isActive?: BoolFieldUpdateOperationsInput | boolean
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    }

    export type UserUncheckedUpdateWithoutMembershipsInput = {
        id?: StringFieldUpdateOperationsInput | string
        keycloakId?: NullableStringFieldUpdateOperationsInput | string | null
        email?: StringFieldUpdateOperationsInput | string
        phone?: NullableStringFieldUpdateOperationsInput | string | null
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        isGlobalAdmin?: BoolFieldUpdateOperationsInput | boolean
        isActive?: BoolFieldUpdateOperationsInput | boolean
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    }

    export type TenantUpsertWithoutMembershipsInput = {
        update: XOR<TenantUpdateWithoutMembershipsInput, TenantUncheckedUpdateWithoutMembershipsInput>
        create: XOR<TenantCreateWithoutMembershipsInput, TenantUncheckedCreateWithoutMembershipsInput>
        where?: TenantWhereInput
    }

    export type TenantUpdateToOneWithWhereWithoutMembershipsInput = {
        where?: TenantWhereInput
        data: XOR<TenantUpdateWithoutMembershipsInput, TenantUncheckedUpdateWithoutMembershipsInput>
    }

    export type TenantUpdateWithoutMembershipsInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        attendances?: AttendanceUpdateManyWithoutTenantNestedInput
        invoices?: InvoiceUpdateManyWithoutTenantNestedInput
        resources?: ResourceUpdateManyWithoutTenantNestedInput
        auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    }

    export type TenantUncheckedUpdateWithoutMembershipsInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
        resources?: ResourceUncheckedUpdateManyWithoutTenantNestedInput
        auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    }

    export type MembershipRoleUpsertWithWhereUniqueWithoutMembershipInput = {
        where: MembershipRoleWhereUniqueInput
        update: XOR<MembershipRoleUpdateWithoutMembershipInput, MembershipRoleUncheckedUpdateWithoutMembershipInput>
        create: XOR<MembershipRoleCreateWithoutMembershipInput, MembershipRoleUncheckedCreateWithoutMembershipInput>
    }

    export type MembershipRoleUpdateWithWhereUniqueWithoutMembershipInput = {
        where: MembershipRoleWhereUniqueInput
        data: XOR<MembershipRoleUpdateWithoutMembershipInput, MembershipRoleUncheckedUpdateWithoutMembershipInput>
    }

    export type MembershipRoleUpdateManyWithWhereWithoutMembershipInput = {
        where: MembershipRoleScalarWhereInput
        data: XOR<MembershipRoleUpdateManyMutationInput, MembershipRoleUncheckedUpdateManyWithoutMembershipInput>
    }

    export type MembershipRoleScalarWhereInput = {
        AND?: MembershipRoleScalarWhereInput | MembershipRoleScalarWhereInput[]
        OR?: MembershipRoleScalarWhereInput[]
        NOT?: MembershipRoleScalarWhereInput | MembershipRoleScalarWhereInput[]
        id?: StringFilter<"MembershipRole"> | string
        membershipId?: StringFilter<"MembershipRole"> | string
        role?: EnumRoleFilter<"MembershipRole"> | $Enums.Role
    }

    export type AttendanceUpsertWithWhereUniqueWithoutMembershipInput = {
        where: AttendanceWhereUniqueInput
        update: XOR<AttendanceUpdateWithoutMembershipInput, AttendanceUncheckedUpdateWithoutMembershipInput>
        create: XOR<AttendanceCreateWithoutMembershipInput, AttendanceUncheckedCreateWithoutMembershipInput>
    }

    export type AttendanceUpdateWithWhereUniqueWithoutMembershipInput = {
        where: AttendanceWhereUniqueInput
        data: XOR<AttendanceUpdateWithoutMembershipInput, AttendanceUncheckedUpdateWithoutMembershipInput>
    }

    export type AttendanceUpdateManyWithWhereWithoutMembershipInput = {
        where: AttendanceScalarWhereInput
        data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutMembershipInput>
    }

    export type InvoiceUpsertWithWhereUniqueWithoutMembershipInput = {
        where: InvoiceWhereUniqueInput
        update: XOR<InvoiceUpdateWithoutMembershipInput, InvoiceUncheckedUpdateWithoutMembershipInput>
        create: XOR<InvoiceCreateWithoutMembershipInput, InvoiceUncheckedCreateWithoutMembershipInput>
    }

    export type InvoiceUpdateWithWhereUniqueWithoutMembershipInput = {
        where: InvoiceWhereUniqueInput
        data: XOR<InvoiceUpdateWithoutMembershipInput, InvoiceUncheckedUpdateWithoutMembershipInput>
    }

    export type InvoiceUpdateManyWithWhereWithoutMembershipInput = {
        where: InvoiceScalarWhereInput
        data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutMembershipInput>
    }

    export type BookingUpsertWithWhereUniqueWithoutMembershipInput = {
        where: BookingWhereUniqueInput
        update: XOR<BookingUpdateWithoutMembershipInput, BookingUncheckedUpdateWithoutMembershipInput>
        create: XOR<BookingCreateWithoutMembershipInput, BookingUncheckedCreateWithoutMembershipInput>
    }

    export type BookingUpdateWithWhereUniqueWithoutMembershipInput = {
        where: BookingWhereUniqueInput
        data: XOR<BookingUpdateWithoutMembershipInput, BookingUncheckedUpdateWithoutMembershipInput>
    }

    export type BookingUpdateManyWithWhereWithoutMembershipInput = {
        where: BookingScalarWhereInput
        data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutMembershipInput>
    }

    export type BookingScalarWhereInput = {
        AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
        OR?: BookingScalarWhereInput[]
        NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
        id?: StringFilter<"Booking"> | string
        resourceId?: StringFilter<"Booking"> | string
        membershipId?: StringFilter<"Booking"> | string
        startTime?: DateTimeFilter<"Booking"> | Date | string
        endTime?: DateTimeFilter<"Booking"> | Date | string
    }

    export type MetricUpsertWithWhereUniqueWithoutMembershipInput = {
        where: MetricWhereUniqueInput
        update: XOR<MetricUpdateWithoutMembershipInput, MetricUncheckedUpdateWithoutMembershipInput>
        create: XOR<MetricCreateWithoutMembershipInput, MetricUncheckedCreateWithoutMembershipInput>
    }

    export type MetricUpdateWithWhereUniqueWithoutMembershipInput = {
        where: MetricWhereUniqueInput
        data: XOR<MetricUpdateWithoutMembershipInput, MetricUncheckedUpdateWithoutMembershipInput>
    }

    export type MetricUpdateManyWithWhereWithoutMembershipInput = {
        where: MetricScalarWhereInput
        data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyWithoutMembershipInput>
    }

    export type MetricScalarWhereInput = {
        AND?: MetricScalarWhereInput | MetricScalarWhereInput[]
        OR?: MetricScalarWhereInput[]
        NOT?: MetricScalarWhereInput | MetricScalarWhereInput[]
        id?: StringFilter<"Metric"> | string
        membershipId?: StringFilter<"Metric"> | string
        metricType?: StringFilter<"Metric"> | string
        data?: JsonFilter<"Metric">
        recordedAt?: DateTimeFilter<"Metric"> | Date | string
    }

    export type DocumentUpsertWithWhereUniqueWithoutMembershipInput = {
        where: DocumentWhereUniqueInput
        update: XOR<DocumentUpdateWithoutMembershipInput, DocumentUncheckedUpdateWithoutMembershipInput>
        create: XOR<DocumentCreateWithoutMembershipInput, DocumentUncheckedCreateWithoutMembershipInput>
    }

    export type DocumentUpdateWithWhereUniqueWithoutMembershipInput = {
        where: DocumentWhereUniqueInput
        data: XOR<DocumentUpdateWithoutMembershipInput, DocumentUncheckedUpdateWithoutMembershipInput>
    }

    export type DocumentUpdateManyWithWhereWithoutMembershipInput = {
        where: DocumentScalarWhereInput
        data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutMembershipInput>
    }

    export type DocumentScalarWhereInput = {
        AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
        OR?: DocumentScalarWhereInput[]
        NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
        id?: StringFilter<"Document"> | string
        membershipId?: StringFilter<"Document"> | string
        fileName?: StringFilter<"Document"> | string
        fileUrl?: StringFilter<"Document"> | string
        context?: StringFilter<"Document"> | string
        uploadedAt?: DateTimeFilter<"Document"> | Date | string
    }

    export type MembershipCreateWithoutRolesInput = {
        id?: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutMembershipsInput
        tenant: TenantCreateNestedOneWithoutMembershipsInput
        attendances?: AttendanceCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceCreateNestedManyWithoutMembershipInput
        bookings?: BookingCreateNestedManyWithoutMembershipInput
        metrics?: MetricCreateNestedManyWithoutMembershipInput
        documents?: DocumentCreateNestedManyWithoutMembershipInput
    }

    export type MembershipUncheckedCreateWithoutRolesInput = {
        id?: string
        userId: string
        tenantId: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        attendances?: AttendanceUncheckedCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutMembershipInput
        bookings?: BookingUncheckedCreateNestedManyWithoutMembershipInput
        metrics?: MetricUncheckedCreateNestedManyWithoutMembershipInput
        documents?: DocumentUncheckedCreateNestedManyWithoutMembershipInput
    }

    export type MembershipCreateOrConnectWithoutRolesInput = {
        where: MembershipWhereUniqueInput
        create: XOR<MembershipCreateWithoutRolesInput, MembershipUncheckedCreateWithoutRolesInput>
    }

    export type MembershipUpsertWithoutRolesInput = {
        update: XOR<MembershipUpdateWithoutRolesInput, MembershipUncheckedUpdateWithoutRolesInput>
        create: XOR<MembershipCreateWithoutRolesInput, MembershipUncheckedCreateWithoutRolesInput>
        where?: MembershipWhereInput
    }

    export type MembershipUpdateToOneWithWhereWithoutRolesInput = {
        where?: MembershipWhereInput
        data: XOR<MembershipUpdateWithoutRolesInput, MembershipUncheckedUpdateWithoutRolesInput>
    }

    export type MembershipUpdateWithoutRolesInput = {
        id?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
        tenant?: TenantUpdateOneRequiredWithoutMembershipsNestedInput
        attendances?: AttendanceUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipUncheckedUpdateWithoutRolesInput = {
        id?: StringFieldUpdateOperationsInput | string
        userId?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        attendances?: AttendanceUncheckedUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUncheckedUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUncheckedUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUncheckedUpdateManyWithoutMembershipNestedInput
    }

    export type TenantCreateWithoutAttendancesInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipCreateNestedManyWithoutTenantInput
        invoices?: InvoiceCreateNestedManyWithoutTenantInput
        resources?: ResourceCreateNestedManyWithoutTenantInput
        auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    }

    export type TenantUncheckedCreateWithoutAttendancesInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
        resources?: ResourceUncheckedCreateNestedManyWithoutTenantInput
        auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    }

    export type TenantCreateOrConnectWithoutAttendancesInput = {
        where: TenantWhereUniqueInput
        create: XOR<TenantCreateWithoutAttendancesInput, TenantUncheckedCreateWithoutAttendancesInput>
    }

    export type MembershipCreateWithoutAttendancesInput = {
        id?: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutMembershipsInput
        tenant: TenantCreateNestedOneWithoutMembershipsInput
        roles?: MembershipRoleCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceCreateNestedManyWithoutMembershipInput
        bookings?: BookingCreateNestedManyWithoutMembershipInput
        metrics?: MetricCreateNestedManyWithoutMembershipInput
        documents?: DocumentCreateNestedManyWithoutMembershipInput
    }

    export type MembershipUncheckedCreateWithoutAttendancesInput = {
        id?: string
        userId: string
        tenantId: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        roles?: MembershipRoleUncheckedCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutMembershipInput
        bookings?: BookingUncheckedCreateNestedManyWithoutMembershipInput
        metrics?: MetricUncheckedCreateNestedManyWithoutMembershipInput
        documents?: DocumentUncheckedCreateNestedManyWithoutMembershipInput
    }

    export type MembershipCreateOrConnectWithoutAttendancesInput = {
        where: MembershipWhereUniqueInput
        create: XOR<MembershipCreateWithoutAttendancesInput, MembershipUncheckedCreateWithoutAttendancesInput>
    }

    export type TenantUpsertWithoutAttendancesInput = {
        update: XOR<TenantUpdateWithoutAttendancesInput, TenantUncheckedUpdateWithoutAttendancesInput>
        create: XOR<TenantCreateWithoutAttendancesInput, TenantUncheckedCreateWithoutAttendancesInput>
        where?: TenantWhereInput
    }

    export type TenantUpdateToOneWithWhereWithoutAttendancesInput = {
        where?: TenantWhereInput
        data: XOR<TenantUpdateWithoutAttendancesInput, TenantUncheckedUpdateWithoutAttendancesInput>
    }

    export type TenantUpdateWithoutAttendancesInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUpdateManyWithoutTenantNestedInput
        invoices?: InvoiceUpdateManyWithoutTenantNestedInput
        resources?: ResourceUpdateManyWithoutTenantNestedInput
        auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    }

    export type TenantUncheckedUpdateWithoutAttendancesInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
        resources?: ResourceUncheckedUpdateManyWithoutTenantNestedInput
        auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    }

    export type MembershipUpsertWithoutAttendancesInput = {
        update: XOR<MembershipUpdateWithoutAttendancesInput, MembershipUncheckedUpdateWithoutAttendancesInput>
        create: XOR<MembershipCreateWithoutAttendancesInput, MembershipUncheckedCreateWithoutAttendancesInput>
        where?: MembershipWhereInput
    }

    export type MembershipUpdateToOneWithWhereWithoutAttendancesInput = {
        where?: MembershipWhereInput
        data: XOR<MembershipUpdateWithoutAttendancesInput, MembershipUncheckedUpdateWithoutAttendancesInput>
    }

    export type MembershipUpdateWithoutAttendancesInput = {
        id?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
        tenant?: TenantUpdateOneRequiredWithoutMembershipsNestedInput
        roles?: MembershipRoleUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipUncheckedUpdateWithoutAttendancesInput = {
        id?: StringFieldUpdateOperationsInput | string
        userId?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        roles?: MembershipRoleUncheckedUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUncheckedUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUncheckedUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUncheckedUpdateManyWithoutMembershipNestedInput
    }

    export type TenantCreateWithoutInvoicesInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipCreateNestedManyWithoutTenantInput
        attendances?: AttendanceCreateNestedManyWithoutTenantInput
        resources?: ResourceCreateNestedManyWithoutTenantInput
        auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    }

    export type TenantUncheckedCreateWithoutInvoicesInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
        attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
        resources?: ResourceUncheckedCreateNestedManyWithoutTenantInput
        auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    }

    export type TenantCreateOrConnectWithoutInvoicesInput = {
        where: TenantWhereUniqueInput
        create: XOR<TenantCreateWithoutInvoicesInput, TenantUncheckedCreateWithoutInvoicesInput>
    }

    export type MembershipCreateWithoutInvoicesInput = {
        id?: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutMembershipsInput
        tenant: TenantCreateNestedOneWithoutMembershipsInput
        roles?: MembershipRoleCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceCreateNestedManyWithoutMembershipInput
        bookings?: BookingCreateNestedManyWithoutMembershipInput
        metrics?: MetricCreateNestedManyWithoutMembershipInput
        documents?: DocumentCreateNestedManyWithoutMembershipInput
    }

    export type MembershipUncheckedCreateWithoutInvoicesInput = {
        id?: string
        userId: string
        tenantId: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        roles?: MembershipRoleUncheckedCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceUncheckedCreateNestedManyWithoutMembershipInput
        bookings?: BookingUncheckedCreateNestedManyWithoutMembershipInput
        metrics?: MetricUncheckedCreateNestedManyWithoutMembershipInput
        documents?: DocumentUncheckedCreateNestedManyWithoutMembershipInput
    }

    export type MembershipCreateOrConnectWithoutInvoicesInput = {
        where: MembershipWhereUniqueInput
        create: XOR<MembershipCreateWithoutInvoicesInput, MembershipUncheckedCreateWithoutInvoicesInput>
    }

    export type PaymentCreateWithoutInvoiceInput = {
        id?: string
        amount: Decimal | DecimalJsLike | number | string
        method: $Enums.PaymentMethod
        gatewayTxId?: string | null
        status?: $Enums.PaymentStatus
        processedAt?: Date | string
    }

    export type PaymentUncheckedCreateWithoutInvoiceInput = {
        id?: string
        amount: Decimal | DecimalJsLike | number | string
        method: $Enums.PaymentMethod
        gatewayTxId?: string | null
        status?: $Enums.PaymentStatus
        processedAt?: Date | string
    }

    export type PaymentCreateOrConnectWithoutInvoiceInput = {
        where: PaymentWhereUniqueInput
        create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
    }

    export type PaymentCreateManyInvoiceInputEnvelope = {
        data: PaymentCreateManyInvoiceInput | PaymentCreateManyInvoiceInput[]
        skipDuplicates?: boolean
    }

    export type InvoiceItemCreateWithoutInvoiceInput = {
        id?: string
        description: string
        amount: Decimal | DecimalJsLike | number | string
    }

    export type InvoiceItemUncheckedCreateWithoutInvoiceInput = {
        id?: string
        description: string
        amount: Decimal | DecimalJsLike | number | string
    }

    export type InvoiceItemCreateOrConnectWithoutInvoiceInput = {
        where: InvoiceItemWhereUniqueInput
        create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
    }

    export type InvoiceItemCreateManyInvoiceInputEnvelope = {
        data: InvoiceItemCreateManyInvoiceInput | InvoiceItemCreateManyInvoiceInput[]
        skipDuplicates?: boolean
    }

    export type TenantUpsertWithoutInvoicesInput = {
        update: XOR<TenantUpdateWithoutInvoicesInput, TenantUncheckedUpdateWithoutInvoicesInput>
        create: XOR<TenantCreateWithoutInvoicesInput, TenantUncheckedCreateWithoutInvoicesInput>
        where?: TenantWhereInput
    }

    export type TenantUpdateToOneWithWhereWithoutInvoicesInput = {
        where?: TenantWhereInput
        data: XOR<TenantUpdateWithoutInvoicesInput, TenantUncheckedUpdateWithoutInvoicesInput>
    }

    export type TenantUpdateWithoutInvoicesInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUpdateManyWithoutTenantNestedInput
        attendances?: AttendanceUpdateManyWithoutTenantNestedInput
        resources?: ResourceUpdateManyWithoutTenantNestedInput
        auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    }

    export type TenantUncheckedUpdateWithoutInvoicesInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
        attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
        resources?: ResourceUncheckedUpdateManyWithoutTenantNestedInput
        auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    }

    export type MembershipUpsertWithoutInvoicesInput = {
        update: XOR<MembershipUpdateWithoutInvoicesInput, MembershipUncheckedUpdateWithoutInvoicesInput>
        create: XOR<MembershipCreateWithoutInvoicesInput, MembershipUncheckedCreateWithoutInvoicesInput>
        where?: MembershipWhereInput
    }

    export type MembershipUpdateToOneWithWhereWithoutInvoicesInput = {
        where?: MembershipWhereInput
        data: XOR<MembershipUpdateWithoutInvoicesInput, MembershipUncheckedUpdateWithoutInvoicesInput>
    }

    export type MembershipUpdateWithoutInvoicesInput = {
        id?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
        tenant?: TenantUpdateOneRequiredWithoutMembershipsNestedInput
        roles?: MembershipRoleUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipUncheckedUpdateWithoutInvoicesInput = {
        id?: StringFieldUpdateOperationsInput | string
        userId?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        roles?: MembershipRoleUncheckedUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUncheckedUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUncheckedUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUncheckedUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUncheckedUpdateManyWithoutMembershipNestedInput
    }

    export type PaymentUpsertWithWhereUniqueWithoutInvoiceInput = {
        where: PaymentWhereUniqueInput
        update: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
        create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
    }

    export type PaymentUpdateWithWhereUniqueWithoutInvoiceInput = {
        where: PaymentWhereUniqueInput
        data: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
    }

    export type PaymentUpdateManyWithWhereWithoutInvoiceInput = {
        where: PaymentScalarWhereInput
        data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutInvoiceInput>
    }

    export type PaymentScalarWhereInput = {
        AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
        OR?: PaymentScalarWhereInput[]
        NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
        id?: StringFilter<"Payment"> | string
        invoiceId?: StringFilter<"Payment"> | string
        amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
        method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
        gatewayTxId?: StringNullableFilter<"Payment"> | string | null
        status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
        processedAt?: DateTimeFilter<"Payment"> | Date | string
    }

    export type InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput = {
        where: InvoiceItemWhereUniqueInput
        update: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
        create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
    }

    export type InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput = {
        where: InvoiceItemWhereUniqueInput
        data: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
    }

    export type InvoiceItemUpdateManyWithWhereWithoutInvoiceInput = {
        where: InvoiceItemScalarWhereInput
        data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutInvoiceInput>
    }

    export type InvoiceItemScalarWhereInput = {
        AND?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
        OR?: InvoiceItemScalarWhereInput[]
        NOT?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
        id?: StringFilter<"InvoiceItem"> | string
        invoiceId?: StringFilter<"InvoiceItem"> | string
        description?: StringFilter<"InvoiceItem"> | string
        amount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    }

    export type InvoiceCreateWithoutItemsInput = {
        id?: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        tenant: TenantCreateNestedOneWithoutInvoicesInput
        membership: MembershipCreateNestedOneWithoutInvoicesInput
        payments?: PaymentCreateNestedManyWithoutInvoiceInput
    }

    export type InvoiceUncheckedCreateWithoutItemsInput = {
        id?: string
        tenantId: string
        membershipId: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
    }

    export type InvoiceCreateOrConnectWithoutItemsInput = {
        where: InvoiceWhereUniqueInput
        create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    }

    export type InvoiceUpsertWithoutItemsInput = {
        update: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
        create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
        where?: InvoiceWhereInput
    }

    export type InvoiceUpdateToOneWithWhereWithoutItemsInput = {
        where?: InvoiceWhereInput
        data: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
    }

    export type InvoiceUpdateWithoutItemsInput = {
        id?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        tenant?: TenantUpdateOneRequiredWithoutInvoicesNestedInput
        membership?: MembershipUpdateOneRequiredWithoutInvoicesNestedInput
        payments?: PaymentUpdateManyWithoutInvoiceNestedInput
    }

    export type InvoiceUncheckedUpdateWithoutItemsInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
    }

    export type InvoiceCreateWithoutPaymentsInput = {
        id?: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        tenant: TenantCreateNestedOneWithoutInvoicesInput
        membership: MembershipCreateNestedOneWithoutInvoicesInput
        items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    }

    export type InvoiceUncheckedCreateWithoutPaymentsInput = {
        id?: string
        tenantId: string
        membershipId: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
        items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    }

    export type InvoiceCreateOrConnectWithoutPaymentsInput = {
        where: InvoiceWhereUniqueInput
        create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    }

    export type InvoiceUpsertWithoutPaymentsInput = {
        update: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
        create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
        where?: InvoiceWhereInput
    }

    export type InvoiceUpdateToOneWithWhereWithoutPaymentsInput = {
        where?: InvoiceWhereInput
        data: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
    }

    export type InvoiceUpdateWithoutPaymentsInput = {
        id?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        tenant?: TenantUpdateOneRequiredWithoutInvoicesNestedInput
        membership?: MembershipUpdateOneRequiredWithoutInvoicesNestedInput
        items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    }

    export type InvoiceUncheckedUpdateWithoutPaymentsInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    }

    export type TenantCreateWithoutResourcesInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipCreateNestedManyWithoutTenantInput
        attendances?: AttendanceCreateNestedManyWithoutTenantInput
        invoices?: InvoiceCreateNestedManyWithoutTenantInput
        auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    }

    export type TenantUncheckedCreateWithoutResourcesInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
        attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
        auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    }

    export type TenantCreateOrConnectWithoutResourcesInput = {
        where: TenantWhereUniqueInput
        create: XOR<TenantCreateWithoutResourcesInput, TenantUncheckedCreateWithoutResourcesInput>
    }

    export type BookingCreateWithoutResourceInput = {
        id?: string
        startTime: Date | string
        endTime: Date | string
        membership: MembershipCreateNestedOneWithoutBookingsInput
    }

    export type BookingUncheckedCreateWithoutResourceInput = {
        id?: string
        membershipId: string
        startTime: Date | string
        endTime: Date | string
    }

    export type BookingCreateOrConnectWithoutResourceInput = {
        where: BookingWhereUniqueInput
        create: XOR<BookingCreateWithoutResourceInput, BookingUncheckedCreateWithoutResourceInput>
    }

    export type BookingCreateManyResourceInputEnvelope = {
        data: BookingCreateManyResourceInput | BookingCreateManyResourceInput[]
        skipDuplicates?: boolean
    }

    export type TenantUpsertWithoutResourcesInput = {
        update: XOR<TenantUpdateWithoutResourcesInput, TenantUncheckedUpdateWithoutResourcesInput>
        create: XOR<TenantCreateWithoutResourcesInput, TenantUncheckedCreateWithoutResourcesInput>
        where?: TenantWhereInput
    }

    export type TenantUpdateToOneWithWhereWithoutResourcesInput = {
        where?: TenantWhereInput
        data: XOR<TenantUpdateWithoutResourcesInput, TenantUncheckedUpdateWithoutResourcesInput>
    }

    export type TenantUpdateWithoutResourcesInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUpdateManyWithoutTenantNestedInput
        attendances?: AttendanceUpdateManyWithoutTenantNestedInput
        invoices?: InvoiceUpdateManyWithoutTenantNestedInput
        auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    }

    export type TenantUncheckedUpdateWithoutResourcesInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
        attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
        auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    }

    export type BookingUpsertWithWhereUniqueWithoutResourceInput = {
        where: BookingWhereUniqueInput
        update: XOR<BookingUpdateWithoutResourceInput, BookingUncheckedUpdateWithoutResourceInput>
        create: XOR<BookingCreateWithoutResourceInput, BookingUncheckedCreateWithoutResourceInput>
    }

    export type BookingUpdateWithWhereUniqueWithoutResourceInput = {
        where: BookingWhereUniqueInput
        data: XOR<BookingUpdateWithoutResourceInput, BookingUncheckedUpdateWithoutResourceInput>
    }

    export type BookingUpdateManyWithWhereWithoutResourceInput = {
        where: BookingScalarWhereInput
        data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutResourceInput>
    }

    export type ResourceCreateWithoutBookingsInput = {
        id?: string
        name: string
        type: $Enums.ResourceType
        capacity?: number
        linkedMemberId?: string | null
        tenant: TenantCreateNestedOneWithoutResourcesInput
    }

    export type ResourceUncheckedCreateWithoutBookingsInput = {
        id?: string
        tenantId: string
        name: string
        type: $Enums.ResourceType
        capacity?: number
        linkedMemberId?: string | null
    }

    export type ResourceCreateOrConnectWithoutBookingsInput = {
        where: ResourceWhereUniqueInput
        create: XOR<ResourceCreateWithoutBookingsInput, ResourceUncheckedCreateWithoutBookingsInput>
    }

    export type MembershipCreateWithoutBookingsInput = {
        id?: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutMembershipsInput
        tenant: TenantCreateNestedOneWithoutMembershipsInput
        roles?: MembershipRoleCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceCreateNestedManyWithoutMembershipInput
        metrics?: MetricCreateNestedManyWithoutMembershipInput
        documents?: DocumentCreateNestedManyWithoutMembershipInput
    }

    export type MembershipUncheckedCreateWithoutBookingsInput = {
        id?: string
        userId: string
        tenantId: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        roles?: MembershipRoleUncheckedCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceUncheckedCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutMembershipInput
        metrics?: MetricUncheckedCreateNestedManyWithoutMembershipInput
        documents?: DocumentUncheckedCreateNestedManyWithoutMembershipInput
    }

    export type MembershipCreateOrConnectWithoutBookingsInput = {
        where: MembershipWhereUniqueInput
        create: XOR<MembershipCreateWithoutBookingsInput, MembershipUncheckedCreateWithoutBookingsInput>
    }

    export type ResourceUpsertWithoutBookingsInput = {
        update: XOR<ResourceUpdateWithoutBookingsInput, ResourceUncheckedUpdateWithoutBookingsInput>
        create: XOR<ResourceCreateWithoutBookingsInput, ResourceUncheckedCreateWithoutBookingsInput>
        where?: ResourceWhereInput
    }

    export type ResourceUpdateToOneWithWhereWithoutBookingsInput = {
        where?: ResourceWhereInput
        data: XOR<ResourceUpdateWithoutBookingsInput, ResourceUncheckedUpdateWithoutBookingsInput>
    }

    export type ResourceUpdateWithoutBookingsInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
        capacity?: IntFieldUpdateOperationsInput | number
        linkedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
        tenant?: TenantUpdateOneRequiredWithoutResourcesNestedInput
    }

    export type ResourceUncheckedUpdateWithoutBookingsInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
        capacity?: IntFieldUpdateOperationsInput | number
        linkedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type MembershipUpsertWithoutBookingsInput = {
        update: XOR<MembershipUpdateWithoutBookingsInput, MembershipUncheckedUpdateWithoutBookingsInput>
        create: XOR<MembershipCreateWithoutBookingsInput, MembershipUncheckedCreateWithoutBookingsInput>
        where?: MembershipWhereInput
    }

    export type MembershipUpdateToOneWithWhereWithoutBookingsInput = {
        where?: MembershipWhereInput
        data: XOR<MembershipUpdateWithoutBookingsInput, MembershipUncheckedUpdateWithoutBookingsInput>
    }

    export type MembershipUpdateWithoutBookingsInput = {
        id?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
        tenant?: TenantUpdateOneRequiredWithoutMembershipsNestedInput
        roles?: MembershipRoleUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipUncheckedUpdateWithoutBookingsInput = {
        id?: StringFieldUpdateOperationsInput | string
        userId?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        roles?: MembershipRoleUncheckedUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUncheckedUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUncheckedUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUncheckedUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipCreateWithoutMetricsInput = {
        id?: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutMembershipsInput
        tenant: TenantCreateNestedOneWithoutMembershipsInput
        roles?: MembershipRoleCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceCreateNestedManyWithoutMembershipInput
        bookings?: BookingCreateNestedManyWithoutMembershipInput
        documents?: DocumentCreateNestedManyWithoutMembershipInput
    }

    export type MembershipUncheckedCreateWithoutMetricsInput = {
        id?: string
        userId: string
        tenantId: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        roles?: MembershipRoleUncheckedCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceUncheckedCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutMembershipInput
        bookings?: BookingUncheckedCreateNestedManyWithoutMembershipInput
        documents?: DocumentUncheckedCreateNestedManyWithoutMembershipInput
    }

    export type MembershipCreateOrConnectWithoutMetricsInput = {
        where: MembershipWhereUniqueInput
        create: XOR<MembershipCreateWithoutMetricsInput, MembershipUncheckedCreateWithoutMetricsInput>
    }

    export type MembershipUpsertWithoutMetricsInput = {
        update: XOR<MembershipUpdateWithoutMetricsInput, MembershipUncheckedUpdateWithoutMetricsInput>
        create: XOR<MembershipCreateWithoutMetricsInput, MembershipUncheckedCreateWithoutMetricsInput>
        where?: MembershipWhereInput
    }

    export type MembershipUpdateToOneWithWhereWithoutMetricsInput = {
        where?: MembershipWhereInput
        data: XOR<MembershipUpdateWithoutMetricsInput, MembershipUncheckedUpdateWithoutMetricsInput>
    }

    export type MembershipUpdateWithoutMetricsInput = {
        id?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
        tenant?: TenantUpdateOneRequiredWithoutMembershipsNestedInput
        roles?: MembershipRoleUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipUncheckedUpdateWithoutMetricsInput = {
        id?: StringFieldUpdateOperationsInput | string
        userId?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        roles?: MembershipRoleUncheckedUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUncheckedUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUncheckedUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUncheckedUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipCreateWithoutDocumentsInput = {
        id?: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutMembershipsInput
        tenant: TenantCreateNestedOneWithoutMembershipsInput
        roles?: MembershipRoleCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceCreateNestedManyWithoutMembershipInput
        bookings?: BookingCreateNestedManyWithoutMembershipInput
        metrics?: MetricCreateNestedManyWithoutMembershipInput
    }

    export type MembershipUncheckedCreateWithoutDocumentsInput = {
        id?: string
        userId: string
        tenantId: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
        roles?: MembershipRoleUncheckedCreateNestedManyWithoutMembershipInput
        attendances?: AttendanceUncheckedCreateNestedManyWithoutMembershipInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutMembershipInput
        bookings?: BookingUncheckedCreateNestedManyWithoutMembershipInput
        metrics?: MetricUncheckedCreateNestedManyWithoutMembershipInput
    }

    export type MembershipCreateOrConnectWithoutDocumentsInput = {
        where: MembershipWhereUniqueInput
        create: XOR<MembershipCreateWithoutDocumentsInput, MembershipUncheckedCreateWithoutDocumentsInput>
    }

    export type MembershipUpsertWithoutDocumentsInput = {
        update: XOR<MembershipUpdateWithoutDocumentsInput, MembershipUncheckedUpdateWithoutDocumentsInput>
        create: XOR<MembershipCreateWithoutDocumentsInput, MembershipUncheckedCreateWithoutDocumentsInput>
        where?: MembershipWhereInput
    }

    export type MembershipUpdateToOneWithWhereWithoutDocumentsInput = {
        where?: MembershipWhereInput
        data: XOR<MembershipUpdateWithoutDocumentsInput, MembershipUncheckedUpdateWithoutDocumentsInput>
    }

    export type MembershipUpdateWithoutDocumentsInput = {
        id?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
        tenant?: TenantUpdateOneRequiredWithoutMembershipsNestedInput
        roles?: MembershipRoleUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipUncheckedUpdateWithoutDocumentsInput = {
        id?: StringFieldUpdateOperationsInput | string
        userId?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        roles?: MembershipRoleUncheckedUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUncheckedUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUncheckedUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUncheckedUpdateManyWithoutMembershipNestedInput
    }

    export type TenantCreateWithoutAuditLogsInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipCreateNestedManyWithoutTenantInput
        attendances?: AttendanceCreateNestedManyWithoutTenantInput
        invoices?: InvoiceCreateNestedManyWithoutTenantInput
        resources?: ResourceCreateNestedManyWithoutTenantInput
    }

    export type TenantUncheckedCreateWithoutAuditLogsInput = {
        id?: string
        name: string
        slug: string
        domain?: string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipUncheckedCreateNestedManyWithoutTenantInput
        attendances?: AttendanceUncheckedCreateNestedManyWithoutTenantInput
        invoices?: InvoiceUncheckedCreateNestedManyWithoutTenantInput
        resources?: ResourceUncheckedCreateNestedManyWithoutTenantInput
    }

    export type TenantCreateOrConnectWithoutAuditLogsInput = {
        where: TenantWhereUniqueInput
        create: XOR<TenantCreateWithoutAuditLogsInput, TenantUncheckedCreateWithoutAuditLogsInput>
    }

    export type UserCreateWithoutAuditLogsInput = {
        id?: string
        keycloakId?: string | null
        email: string
        phone?: string | null
        firstName: string
        lastName: string
        isGlobalAdmin?: boolean
        isActive?: boolean
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipCreateNestedManyWithoutUserInput
    }

    export type UserUncheckedCreateWithoutAuditLogsInput = {
        id?: string
        keycloakId?: string | null
        email: string
        phone?: string | null
        firstName: string
        lastName: string
        isGlobalAdmin?: boolean
        isActive?: boolean
        createdAt?: Date | string
        updatedAt?: Date | string
        memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    }

    export type UserCreateOrConnectWithoutAuditLogsInput = {
        where: UserWhereUniqueInput
        create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    }

    export type TenantUpsertWithoutAuditLogsInput = {
        update: XOR<TenantUpdateWithoutAuditLogsInput, TenantUncheckedUpdateWithoutAuditLogsInput>
        create: XOR<TenantCreateWithoutAuditLogsInput, TenantUncheckedCreateWithoutAuditLogsInput>
        where?: TenantWhereInput
    }

    export type TenantUpdateToOneWithWhereWithoutAuditLogsInput = {
        where?: TenantWhereInput
        data: XOR<TenantUpdateWithoutAuditLogsInput, TenantUncheckedUpdateWithoutAuditLogsInput>
    }

    export type TenantUpdateWithoutAuditLogsInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUpdateManyWithoutTenantNestedInput
        attendances?: AttendanceUpdateManyWithoutTenantNestedInput
        invoices?: InvoiceUpdateManyWithoutTenantNestedInput
        resources?: ResourceUpdateManyWithoutTenantNestedInput
    }

    export type TenantUncheckedUpdateWithoutAuditLogsInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        slug?: StringFieldUpdateOperationsInput | string
        domain?: NullableStringFieldUpdateOperationsInput | string | null
        themeConfig?: NullableJsonNullValueInput | InputJsonValue
        taxRules?: NullableJsonNullValueInput | InputJsonValue
        gatewayKeys?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUncheckedUpdateManyWithoutTenantNestedInput
        attendances?: AttendanceUncheckedUpdateManyWithoutTenantNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutTenantNestedInput
        resources?: ResourceUncheckedUpdateManyWithoutTenantNestedInput
    }

    export type UserUpsertWithoutAuditLogsInput = {
        update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
        create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
        where?: UserWhereInput
    }

    export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
        where?: UserWhereInput
        data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    }

    export type UserUpdateWithoutAuditLogsInput = {
        id?: StringFieldUpdateOperationsInput | string
        keycloakId?: NullableStringFieldUpdateOperationsInput | string | null
        email?: StringFieldUpdateOperationsInput | string
        phone?: NullableStringFieldUpdateOperationsInput | string | null
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        isGlobalAdmin?: BoolFieldUpdateOperationsInput | boolean
        isActive?: BoolFieldUpdateOperationsInput | boolean
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUpdateManyWithoutUserNestedInput
    }

    export type UserUncheckedUpdateWithoutAuditLogsInput = {
        id?: StringFieldUpdateOperationsInput | string
        keycloakId?: NullableStringFieldUpdateOperationsInput | string | null
        email?: StringFieldUpdateOperationsInput | string
        phone?: NullableStringFieldUpdateOperationsInput | string | null
        firstName?: StringFieldUpdateOperationsInput | string
        lastName?: StringFieldUpdateOperationsInput | string
        isGlobalAdmin?: BoolFieldUpdateOperationsInput | boolean
        isActive?: BoolFieldUpdateOperationsInput | boolean
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    }

    export type MembershipCreateManyUserInput = {
        id?: string
        tenantId: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type AuditLogCreateManyUserInput = {
        id?: string
        tenantId: string
        action: string
        entity: string
        entityId: string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
    }

    export type MembershipUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        tenant?: TenantUpdateOneRequiredWithoutMembershipsNestedInput
        roles?: MembershipRoleUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        roles?: MembershipRoleUncheckedUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUncheckedUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUncheckedUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUncheckedUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUncheckedUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipUncheckedUpdateManyWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type AuditLogUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string
        action?: StringFieldUpdateOperationsInput | string
        entity?: StringFieldUpdateOperationsInput | string
        entityId?: StringFieldUpdateOperationsInput | string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        tenant?: TenantUpdateOneRequiredWithoutAuditLogsNestedInput
    }

    export type AuditLogUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        action?: StringFieldUpdateOperationsInput | string
        entity?: StringFieldUpdateOperationsInput | string
        entityId?: StringFieldUpdateOperationsInput | string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type AuditLogUncheckedUpdateManyWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        action?: StringFieldUpdateOperationsInput | string
        entity?: StringFieldUpdateOperationsInput | string
        entityId?: StringFieldUpdateOperationsInput | string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type MembershipCreateManyTenantInput = {
        id?: string
        userId: string
        status?: $Enums.MembershipStatus
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type AttendanceCreateManyTenantInput = {
        id?: string
        membershipId?: string | null
        rfidTag?: string | null
        authMethod: string
        checkInTime?: Date | string
        checkOutTime?: Date | string | null
    }

    export type InvoiceCreateManyTenantInput = {
        id?: string
        membershipId: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type ResourceCreateManyTenantInput = {
        id?: string
        name: string
        type: $Enums.ResourceType
        capacity?: number
        linkedMemberId?: string | null
    }

    export type AuditLogCreateManyTenantInput = {
        id?: string
        userId?: string | null
        action: string
        entity: string
        entityId: string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: Date | string
    }

    export type MembershipUpdateWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
        roles?: MembershipRoleUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipUncheckedUpdateWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        userId?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        roles?: MembershipRoleUncheckedUpdateManyWithoutMembershipNestedInput
        attendances?: AttendanceUncheckedUpdateManyWithoutMembershipNestedInput
        invoices?: InvoiceUncheckedUpdateManyWithoutMembershipNestedInput
        bookings?: BookingUncheckedUpdateManyWithoutMembershipNestedInput
        metrics?: MetricUncheckedUpdateManyWithoutMembershipNestedInput
        documents?: DocumentUncheckedUpdateManyWithoutMembershipNestedInput
    }

    export type MembershipUncheckedUpdateManyWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        userId?: StringFieldUpdateOperationsInput | string
        status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type AttendanceUpdateWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        rfidTag?: NullableStringFieldUpdateOperationsInput | string | null
        authMethod?: StringFieldUpdateOperationsInput | string
        checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
        checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        membership?: MembershipUpdateOneWithoutAttendancesNestedInput
    }

    export type AttendanceUncheckedUpdateWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        membershipId?: NullableStringFieldUpdateOperationsInput | string | null
        rfidTag?: NullableStringFieldUpdateOperationsInput | string | null
        authMethod?: StringFieldUpdateOperationsInput | string
        checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
        checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    }

    export type AttendanceUncheckedUpdateManyWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        membershipId?: NullableStringFieldUpdateOperationsInput | string | null
        rfidTag?: NullableStringFieldUpdateOperationsInput | string | null
        authMethod?: StringFieldUpdateOperationsInput | string
        checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
        checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    }

    export type InvoiceUpdateWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        membership?: MembershipUpdateOneRequiredWithoutInvoicesNestedInput
        payments?: PaymentUpdateManyWithoutInvoiceNestedInput
        items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    }

    export type InvoiceUncheckedUpdateWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
        items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    }

    export type InvoiceUncheckedUpdateManyWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type ResourceUpdateWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
        capacity?: IntFieldUpdateOperationsInput | number
        linkedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
        bookings?: BookingUpdateManyWithoutResourceNestedInput
    }

    export type ResourceUncheckedUpdateWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
        capacity?: IntFieldUpdateOperationsInput | number
        linkedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
        bookings?: BookingUncheckedUpdateManyWithoutResourceNestedInput
    }

    export type ResourceUncheckedUpdateManyWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        name?: StringFieldUpdateOperationsInput | string
        type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
        capacity?: IntFieldUpdateOperationsInput | number
        linkedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    }

    export type AuditLogUpdateWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        action?: StringFieldUpdateOperationsInput | string
        entity?: StringFieldUpdateOperationsInput | string
        entityId?: StringFieldUpdateOperationsInput | string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneWithoutAuditLogsNestedInput
    }

    export type AuditLogUncheckedUpdateWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        userId?: NullableStringFieldUpdateOperationsInput | string | null
        action?: StringFieldUpdateOperationsInput | string
        entity?: StringFieldUpdateOperationsInput | string
        entityId?: StringFieldUpdateOperationsInput | string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type AuditLogUncheckedUpdateManyWithoutTenantInput = {
        id?: StringFieldUpdateOperationsInput | string
        userId?: NullableStringFieldUpdateOperationsInput | string | null
        action?: StringFieldUpdateOperationsInput | string
        entity?: StringFieldUpdateOperationsInput | string
        entityId?: StringFieldUpdateOperationsInput | string
        changes?: NullableJsonNullValueInput | InputJsonValue
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type MembershipRoleCreateManyMembershipInput = {
        id?: string
        role: $Enums.Role
    }

    export type AttendanceCreateManyMembershipInput = {
        id?: string
        tenantId: string
        rfidTag?: string | null
        authMethod: string
        checkInTime?: Date | string
        checkOutTime?: Date | string | null
    }

    export type InvoiceCreateManyMembershipInput = {
        id?: string
        tenantId: string
        type: $Enums.InvoiceType
        status?: $Enums.InvoiceStatus
        totalAmount: Decimal | DecimalJsLike | number | string
        dueDate?: Date | string | null
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type BookingCreateManyMembershipInput = {
        id?: string
        resourceId: string
        startTime: Date | string
        endTime: Date | string
    }

    export type MetricCreateManyMembershipInput = {
        id?: string
        metricType: string
        data: JsonNullValueInput | InputJsonValue
        recordedAt?: Date | string
    }

    export type DocumentCreateManyMembershipInput = {
        id?: string
        fileName: string
        fileUrl: string
        context: string
        uploadedAt?: Date | string
    }

    export type MembershipRoleUpdateWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    }

    export type MembershipRoleUncheckedUpdateWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    }

    export type MembershipRoleUncheckedUpdateManyWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    }

    export type AttendanceUpdateWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        rfidTag?: NullableStringFieldUpdateOperationsInput | string | null
        authMethod?: StringFieldUpdateOperationsInput | string
        checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
        checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        tenant?: TenantUpdateOneRequiredWithoutAttendancesNestedInput
    }

    export type AttendanceUncheckedUpdateWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        rfidTag?: NullableStringFieldUpdateOperationsInput | string | null
        authMethod?: StringFieldUpdateOperationsInput | string
        checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
        checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    }

    export type AttendanceUncheckedUpdateManyWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        rfidTag?: NullableStringFieldUpdateOperationsInput | string | null
        authMethod?: StringFieldUpdateOperationsInput | string
        checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
        checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    }

    export type InvoiceUpdateWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        tenant?: TenantUpdateOneRequiredWithoutInvoicesNestedInput
        payments?: PaymentUpdateManyWithoutInvoiceNestedInput
        items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    }

    export type InvoiceUncheckedUpdateWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
        items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    }

    export type InvoiceUncheckedUpdateManyWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        tenantId?: StringFieldUpdateOperationsInput | string
        type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
        status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
        totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type BookingUpdateWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        startTime?: DateTimeFieldUpdateOperationsInput | Date | string
        endTime?: DateTimeFieldUpdateOperationsInput | Date | string
        resource?: ResourceUpdateOneRequiredWithoutBookingsNestedInput
    }

    export type BookingUncheckedUpdateWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        resourceId?: StringFieldUpdateOperationsInput | string
        startTime?: DateTimeFieldUpdateOperationsInput | Date | string
        endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type BookingUncheckedUpdateManyWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        resourceId?: StringFieldUpdateOperationsInput | string
        startTime?: DateTimeFieldUpdateOperationsInput | Date | string
        endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type MetricUpdateWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        metricType?: StringFieldUpdateOperationsInput | string
        data?: JsonNullValueInput | InputJsonValue
        recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type MetricUncheckedUpdateWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        metricType?: StringFieldUpdateOperationsInput | string
        data?: JsonNullValueInput | InputJsonValue
        recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type MetricUncheckedUpdateManyWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        metricType?: StringFieldUpdateOperationsInput | string
        data?: JsonNullValueInput | InputJsonValue
        recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type DocumentUpdateWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        fileName?: StringFieldUpdateOperationsInput | string
        fileUrl?: StringFieldUpdateOperationsInput | string
        context?: StringFieldUpdateOperationsInput | string
        uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type DocumentUncheckedUpdateWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        fileName?: StringFieldUpdateOperationsInput | string
        fileUrl?: StringFieldUpdateOperationsInput | string
        context?: StringFieldUpdateOperationsInput | string
        uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type DocumentUncheckedUpdateManyWithoutMembershipInput = {
        id?: StringFieldUpdateOperationsInput | string
        fileName?: StringFieldUpdateOperationsInput | string
        fileUrl?: StringFieldUpdateOperationsInput | string
        context?: StringFieldUpdateOperationsInput | string
        uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type PaymentCreateManyInvoiceInput = {
        id?: string
        amount: Decimal | DecimalJsLike | number | string
        method: $Enums.PaymentMethod
        gatewayTxId?: string | null
        status?: $Enums.PaymentStatus
        processedAt?: Date | string
    }

    export type InvoiceItemCreateManyInvoiceInput = {
        id?: string
        description: string
        amount: Decimal | DecimalJsLike | number | string
    }

    export type PaymentUpdateWithoutInvoiceInput = {
        id?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
        gatewayTxId?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
        processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type PaymentUncheckedUpdateWithoutInvoiceInput = {
        id?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
        gatewayTxId?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
        processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type PaymentUncheckedUpdateManyWithoutInvoiceInput = {
        id?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
        method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
        gatewayTxId?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
        processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type InvoiceItemUpdateWithoutInvoiceInput = {
        id?: StringFieldUpdateOperationsInput | string
        description?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    }

    export type InvoiceItemUncheckedUpdateWithoutInvoiceInput = {
        id?: StringFieldUpdateOperationsInput | string
        description?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    }

    export type InvoiceItemUncheckedUpdateManyWithoutInvoiceInput = {
        id?: StringFieldUpdateOperationsInput | string
        description?: StringFieldUpdateOperationsInput | string
        amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    }

    export type BookingCreateManyResourceInput = {
        id?: string
        membershipId: string
        startTime: Date | string
        endTime: Date | string
    }

    export type BookingUpdateWithoutResourceInput = {
        id?: StringFieldUpdateOperationsInput | string
        startTime?: DateTimeFieldUpdateOperationsInput | Date | string
        endTime?: DateTimeFieldUpdateOperationsInput | Date | string
        membership?: MembershipUpdateOneRequiredWithoutBookingsNestedInput
    }

    export type BookingUncheckedUpdateWithoutResourceInput = {
        id?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        startTime?: DateTimeFieldUpdateOperationsInput | Date | string
        endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type BookingUncheckedUpdateManyWithoutResourceInput = {
        id?: StringFieldUpdateOperationsInput | string
        membershipId?: StringFieldUpdateOperationsInput | string
        startTime?: DateTimeFieldUpdateOperationsInput | Date | string
        endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    }


    /**
     * Batch Payload for updateMany & deleteMany & createMany
     */

    export type BatchPayload = {
        count: number
    }

    /**
     * DMMF
     */
    export const dmmf: runtime.BaseDMMF
}