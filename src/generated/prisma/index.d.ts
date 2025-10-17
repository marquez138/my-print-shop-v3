
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Design
 * 
 */
export type Design = $Result.DefaultSelection<Prisma.$DesignPayload>
/**
 * Model DesignPlacement
 * 
 */
export type DesignPlacement = $Result.DefaultSelection<Prisma.$DesignPlacementPayload>
/**
 * Model DesignComment
 * 
 */
export type DesignComment = $Result.DefaultSelection<Prisma.$DesignCommentPayload>
/**
 * Model DesignLineItem
 * 
 */
export type DesignLineItem = $Result.DefaultSelection<Prisma.$DesignLineItemPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const DesignStatus: {
  draft: 'draft',
  submitted: 'submitted',
  approved: 'approved',
  rejected: 'rejected'
};

export type DesignStatus = (typeof DesignStatus)[keyof typeof DesignStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type DesignStatus = $Enums.DesignStatus

export const DesignStatus: typeof $Enums.DesignStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.design`: Exposes CRUD operations for the **Design** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Designs
    * const designs = await prisma.design.findMany()
    * ```
    */
  get design(): Prisma.DesignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.designPlacement`: Exposes CRUD operations for the **DesignPlacement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DesignPlacements
    * const designPlacements = await prisma.designPlacement.findMany()
    * ```
    */
  get designPlacement(): Prisma.DesignPlacementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.designComment`: Exposes CRUD operations for the **DesignComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DesignComments
    * const designComments = await prisma.designComment.findMany()
    * ```
    */
  get designComment(): Prisma.DesignCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.designLineItem`: Exposes CRUD operations for the **DesignLineItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DesignLineItems
    * const designLineItems = await prisma.designLineItem.findMany()
    * ```
    */
  get designLineItem(): Prisma.DesignLineItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Design: 'Design',
    DesignPlacement: 'DesignPlacement',
    DesignComment: 'DesignComment',
    DesignLineItem: 'DesignLineItem',
    Order: 'Order'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "design" | "designPlacement" | "designComment" | "designLineItem" | "order"
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
      Design: {
        payload: Prisma.$DesignPayload<ExtArgs>
        fields: Prisma.DesignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          findFirst: {
            args: Prisma.DesignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          findMany: {
            args: Prisma.DesignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>[]
          }
          create: {
            args: Prisma.DesignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          createMany: {
            args: Prisma.DesignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DesignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>[]
          }
          delete: {
            args: Prisma.DesignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          update: {
            args: Prisma.DesignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          deleteMany: {
            args: Prisma.DesignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DesignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DesignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>[]
          }
          upsert: {
            args: Prisma.DesignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPayload>
          }
          aggregate: {
            args: Prisma.DesignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDesign>
          }
          groupBy: {
            args: Prisma.DesignGroupByArgs<ExtArgs>
            result: $Utils.Optional<DesignGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesignCountArgs<ExtArgs>
            result: $Utils.Optional<DesignCountAggregateOutputType> | number
          }
        }
      }
      DesignPlacement: {
        payload: Prisma.$DesignPlacementPayload<ExtArgs>
        fields: Prisma.DesignPlacementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesignPlacementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPlacementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesignPlacementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPlacementPayload>
          }
          findFirst: {
            args: Prisma.DesignPlacementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPlacementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesignPlacementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPlacementPayload>
          }
          findMany: {
            args: Prisma.DesignPlacementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPlacementPayload>[]
          }
          create: {
            args: Prisma.DesignPlacementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPlacementPayload>
          }
          createMany: {
            args: Prisma.DesignPlacementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DesignPlacementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPlacementPayload>[]
          }
          delete: {
            args: Prisma.DesignPlacementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPlacementPayload>
          }
          update: {
            args: Prisma.DesignPlacementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPlacementPayload>
          }
          deleteMany: {
            args: Prisma.DesignPlacementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DesignPlacementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DesignPlacementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPlacementPayload>[]
          }
          upsert: {
            args: Prisma.DesignPlacementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignPlacementPayload>
          }
          aggregate: {
            args: Prisma.DesignPlacementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDesignPlacement>
          }
          groupBy: {
            args: Prisma.DesignPlacementGroupByArgs<ExtArgs>
            result: $Utils.Optional<DesignPlacementGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesignPlacementCountArgs<ExtArgs>
            result: $Utils.Optional<DesignPlacementCountAggregateOutputType> | number
          }
        }
      }
      DesignComment: {
        payload: Prisma.$DesignCommentPayload<ExtArgs>
        fields: Prisma.DesignCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesignCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesignCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignCommentPayload>
          }
          findFirst: {
            args: Prisma.DesignCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesignCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignCommentPayload>
          }
          findMany: {
            args: Prisma.DesignCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignCommentPayload>[]
          }
          create: {
            args: Prisma.DesignCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignCommentPayload>
          }
          createMany: {
            args: Prisma.DesignCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DesignCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignCommentPayload>[]
          }
          delete: {
            args: Prisma.DesignCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignCommentPayload>
          }
          update: {
            args: Prisma.DesignCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignCommentPayload>
          }
          deleteMany: {
            args: Prisma.DesignCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DesignCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DesignCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignCommentPayload>[]
          }
          upsert: {
            args: Prisma.DesignCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignCommentPayload>
          }
          aggregate: {
            args: Prisma.DesignCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDesignComment>
          }
          groupBy: {
            args: Prisma.DesignCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DesignCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesignCommentCountArgs<ExtArgs>
            result: $Utils.Optional<DesignCommentCountAggregateOutputType> | number
          }
        }
      }
      DesignLineItem: {
        payload: Prisma.$DesignLineItemPayload<ExtArgs>
        fields: Prisma.DesignLineItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesignLineItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignLineItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesignLineItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignLineItemPayload>
          }
          findFirst: {
            args: Prisma.DesignLineItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignLineItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesignLineItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignLineItemPayload>
          }
          findMany: {
            args: Prisma.DesignLineItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignLineItemPayload>[]
          }
          create: {
            args: Prisma.DesignLineItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignLineItemPayload>
          }
          createMany: {
            args: Prisma.DesignLineItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DesignLineItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignLineItemPayload>[]
          }
          delete: {
            args: Prisma.DesignLineItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignLineItemPayload>
          }
          update: {
            args: Prisma.DesignLineItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignLineItemPayload>
          }
          deleteMany: {
            args: Prisma.DesignLineItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DesignLineItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DesignLineItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignLineItemPayload>[]
          }
          upsert: {
            args: Prisma.DesignLineItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignLineItemPayload>
          }
          aggregate: {
            args: Prisma.DesignLineItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDesignLineItem>
          }
          groupBy: {
            args: Prisma.DesignLineItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<DesignLineItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesignLineItemCountArgs<ExtArgs>
            result: $Utils.Optional<DesignLineItemCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    design?: DesignOmit
    designPlacement?: DesignPlacementOmit
    designComment?: DesignCommentOmit
    designLineItem?: DesignLineItemOmit
    order?: OrderOmit
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
    designs: number
    DesignComment: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    designs?: boolean | UserCountOutputTypeCountDesignsArgs
    DesignComment?: boolean | UserCountOutputTypeCountDesignCommentArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
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
  export type UserCountOutputTypeCountDesignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDesignCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type DesignCountOutputType
   */

  export type DesignCountOutputType = {
    comments: number
    lineItems: number
    placements: number
  }

  export type DesignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | DesignCountOutputTypeCountCommentsArgs
    lineItems?: boolean | DesignCountOutputTypeCountLineItemsArgs
    placements?: boolean | DesignCountOutputTypeCountPlacementsArgs
  }

  // Custom InputTypes
  /**
   * DesignCountOutputType without action
   */
  export type DesignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignCountOutputType
     */
    select?: DesignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DesignCountOutputType without action
   */
  export type DesignCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignCommentWhereInput
  }

  /**
   * DesignCountOutputType without action
   */
  export type DesignCountOutputTypeCountLineItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignLineItemWhereInput
  }

  /**
   * DesignCountOutputType without action
   */
  export type DesignCountOutputTypeCountPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignPlacementWhereInput
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
    email: string | null
    name: string | null
    phone: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    clerkUserId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phone: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    clerkUserId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    phone: number
    role: number
    createdAt: number
    updatedAt: number
    clerkUserId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    clerkUserId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    clerkUserId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    clerkUserId?: true
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
    email: string
    name: string | null
    phone: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    clerkUserId: string
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
    email?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkUserId?: boolean
    designs?: boolean | User$designsArgs<ExtArgs>
    DesignComment?: boolean | User$DesignCommentArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkUserId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkUserId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkUserId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "phone" | "role" | "createdAt" | "updatedAt" | "clerkUserId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    designs?: boolean | User$designsArgs<ExtArgs>
    DesignComment?: boolean | User$DesignCommentArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      designs: Prisma.$DesignPayload<ExtArgs>[]
      DesignComment: Prisma.$DesignCommentPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      phone: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      clerkUserId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    designs<T extends User$designsArgs<ExtArgs> = {}>(args?: Subset<T, User$designsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DesignComment<T extends User$DesignCommentArgs<ExtArgs> = {}>(args?: Subset<T, User$DesignCommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly clerkUserId: FieldRef<"User", 'String'>
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
   * User.designs
   */
  export type User$designsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    where?: DesignWhereInput
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    cursor?: DesignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesignScalarFieldEnum | DesignScalarFieldEnum[]
  }

  /**
   * User.DesignComment
   */
  export type User$DesignCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentInclude<ExtArgs> | null
    where?: DesignCommentWhereInput
    orderBy?: DesignCommentOrderByWithRelationInput | DesignCommentOrderByWithRelationInput[]
    cursor?: DesignCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesignCommentScalarFieldEnum | DesignCommentScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
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
   * Model Design
   */

  export type AggregateDesign = {
    _count: DesignCountAggregateOutputType | null
    _avg: DesignAvgAggregateOutputType | null
    _sum: DesignSumAggregateOutputType | null
    _min: DesignMinAggregateOutputType | null
    _max: DesignMaxAggregateOutputType | null
  }

  export type DesignAvgAggregateOutputType = {
    pricingBase: number | null
    pricingFees: number | null
    pricingTotal: number | null
  }

  export type DesignSumAggregateOutputType = {
    pricingBase: number | null
    pricingFees: number | null
    pricingTotal: number | null
  }

  export type DesignMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    color: string | null
    status: $Enums.DesignStatus | null
    pricingBase: number | null
    pricingFees: number | null
    pricingTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DesignMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    color: string | null
    status: $Enums.DesignStatus | null
    pricingBase: number | null
    pricingFees: number | null
    pricingTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DesignCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    color: number
    status: number
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DesignAvgAggregateInputType = {
    pricingBase?: true
    pricingFees?: true
    pricingTotal?: true
  }

  export type DesignSumAggregateInputType = {
    pricingBase?: true
    pricingFees?: true
    pricingTotal?: true
  }

  export type DesignMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    color?: true
    status?: true
    pricingBase?: true
    pricingFees?: true
    pricingTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DesignMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    color?: true
    status?: true
    pricingBase?: true
    pricingFees?: true
    pricingTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DesignCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    color?: true
    status?: true
    pricingBase?: true
    pricingFees?: true
    pricingTotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DesignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Design to aggregate.
     */
    where?: DesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Designs to fetch.
     */
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Designs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Designs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Designs
    **/
    _count?: true | DesignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DesignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DesignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesignMaxAggregateInputType
  }

  export type GetDesignAggregateType<T extends DesignAggregateArgs> = {
        [P in keyof T & keyof AggregateDesign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesign[P]>
      : GetScalarType<T[P], AggregateDesign[P]>
  }




  export type DesignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignWhereInput
    orderBy?: DesignOrderByWithAggregationInput | DesignOrderByWithAggregationInput[]
    by: DesignScalarFieldEnum[] | DesignScalarFieldEnum
    having?: DesignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesignCountAggregateInputType | true
    _avg?: DesignAvgAggregateInputType
    _sum?: DesignSumAggregateInputType
    _min?: DesignMinAggregateInputType
    _max?: DesignMaxAggregateInputType
  }

  export type DesignGroupByOutputType = {
    id: string
    userId: string
    productId: string
    color: string | null
    status: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt: Date
    updatedAt: Date
    _count: DesignCountAggregateOutputType | null
    _avg: DesignAvgAggregateOutputType | null
    _sum: DesignSumAggregateOutputType | null
    _min: DesignMinAggregateOutputType | null
    _max: DesignMaxAggregateOutputType | null
  }

  type GetDesignGroupByPayload<T extends DesignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesignGroupByOutputType[P]>
            : GetScalarType<T[P], DesignGroupByOutputType[P]>
        }
      >
    >


  export type DesignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    color?: boolean
    status?: boolean
    pricingBase?: boolean
    pricingFees?: boolean
    pricingTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Design$commentsArgs<ExtArgs>
    lineItems?: boolean | Design$lineItemsArgs<ExtArgs>
    placements?: boolean | Design$placementsArgs<ExtArgs>
    order?: boolean | Design$orderArgs<ExtArgs>
    _count?: boolean | DesignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["design"]>

  export type DesignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    color?: boolean
    status?: boolean
    pricingBase?: boolean
    pricingFees?: boolean
    pricingTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["design"]>

  export type DesignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    color?: boolean
    status?: boolean
    pricingBase?: boolean
    pricingFees?: boolean
    pricingTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["design"]>

  export type DesignSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    color?: boolean
    status?: boolean
    pricingBase?: boolean
    pricingFees?: boolean
    pricingTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DesignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "color" | "status" | "pricingBase" | "pricingFees" | "pricingTotal" | "createdAt" | "updatedAt", ExtArgs["result"]["design"]>
  export type DesignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Design$commentsArgs<ExtArgs>
    lineItems?: boolean | Design$lineItemsArgs<ExtArgs>
    placements?: boolean | Design$placementsArgs<ExtArgs>
    order?: boolean | Design$orderArgs<ExtArgs>
    _count?: boolean | DesignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DesignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DesignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DesignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Design"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$DesignCommentPayload<ExtArgs>[]
      lineItems: Prisma.$DesignLineItemPayload<ExtArgs>[]
      placements: Prisma.$DesignPlacementPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      color: string | null
      status: $Enums.DesignStatus
      pricingBase: number
      pricingFees: number
      pricingTotal: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["design"]>
    composites: {}
  }

  type DesignGetPayload<S extends boolean | null | undefined | DesignDefaultArgs> = $Result.GetResult<Prisma.$DesignPayload, S>

  type DesignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DesignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DesignCountAggregateInputType | true
    }

  export interface DesignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Design'], meta: { name: 'Design' } }
    /**
     * Find zero or one Design that matches the filter.
     * @param {DesignFindUniqueArgs} args - Arguments to find a Design
     * @example
     * // Get one Design
     * const design = await prisma.design.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DesignFindUniqueArgs>(args: SelectSubset<T, DesignFindUniqueArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Design that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DesignFindUniqueOrThrowArgs} args - Arguments to find a Design
     * @example
     * // Get one Design
     * const design = await prisma.design.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DesignFindUniqueOrThrowArgs>(args: SelectSubset<T, DesignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Design that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignFindFirstArgs} args - Arguments to find a Design
     * @example
     * // Get one Design
     * const design = await prisma.design.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DesignFindFirstArgs>(args?: SelectSubset<T, DesignFindFirstArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Design that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignFindFirstOrThrowArgs} args - Arguments to find a Design
     * @example
     * // Get one Design
     * const design = await prisma.design.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DesignFindFirstOrThrowArgs>(args?: SelectSubset<T, DesignFindFirstOrThrowArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Designs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Designs
     * const designs = await prisma.design.findMany()
     * 
     * // Get first 10 Designs
     * const designs = await prisma.design.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const designWithIdOnly = await prisma.design.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DesignFindManyArgs>(args?: SelectSubset<T, DesignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Design.
     * @param {DesignCreateArgs} args - Arguments to create a Design.
     * @example
     * // Create one Design
     * const Design = await prisma.design.create({
     *   data: {
     *     // ... data to create a Design
     *   }
     * })
     * 
     */
    create<T extends DesignCreateArgs>(args: SelectSubset<T, DesignCreateArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Designs.
     * @param {DesignCreateManyArgs} args - Arguments to create many Designs.
     * @example
     * // Create many Designs
     * const design = await prisma.design.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DesignCreateManyArgs>(args?: SelectSubset<T, DesignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Designs and returns the data saved in the database.
     * @param {DesignCreateManyAndReturnArgs} args - Arguments to create many Designs.
     * @example
     * // Create many Designs
     * const design = await prisma.design.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Designs and only return the `id`
     * const designWithIdOnly = await prisma.design.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DesignCreateManyAndReturnArgs>(args?: SelectSubset<T, DesignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Design.
     * @param {DesignDeleteArgs} args - Arguments to delete one Design.
     * @example
     * // Delete one Design
     * const Design = await prisma.design.delete({
     *   where: {
     *     // ... filter to delete one Design
     *   }
     * })
     * 
     */
    delete<T extends DesignDeleteArgs>(args: SelectSubset<T, DesignDeleteArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Design.
     * @param {DesignUpdateArgs} args - Arguments to update one Design.
     * @example
     * // Update one Design
     * const design = await prisma.design.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DesignUpdateArgs>(args: SelectSubset<T, DesignUpdateArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Designs.
     * @param {DesignDeleteManyArgs} args - Arguments to filter Designs to delete.
     * @example
     * // Delete a few Designs
     * const { count } = await prisma.design.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DesignDeleteManyArgs>(args?: SelectSubset<T, DesignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Designs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Designs
     * const design = await prisma.design.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DesignUpdateManyArgs>(args: SelectSubset<T, DesignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Designs and returns the data updated in the database.
     * @param {DesignUpdateManyAndReturnArgs} args - Arguments to update many Designs.
     * @example
     * // Update many Designs
     * const design = await prisma.design.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Designs and only return the `id`
     * const designWithIdOnly = await prisma.design.updateManyAndReturn({
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
    updateManyAndReturn<T extends DesignUpdateManyAndReturnArgs>(args: SelectSubset<T, DesignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Design.
     * @param {DesignUpsertArgs} args - Arguments to update or create a Design.
     * @example
     * // Update or create a Design
     * const design = await prisma.design.upsert({
     *   create: {
     *     // ... data to create a Design
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Design we want to update
     *   }
     * })
     */
    upsert<T extends DesignUpsertArgs>(args: SelectSubset<T, DesignUpsertArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Designs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignCountArgs} args - Arguments to filter Designs to count.
     * @example
     * // Count the number of Designs
     * const count = await prisma.design.count({
     *   where: {
     *     // ... the filter for the Designs we want to count
     *   }
     * })
    **/
    count<T extends DesignCountArgs>(
      args?: Subset<T, DesignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Design.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DesignAggregateArgs>(args: Subset<T, DesignAggregateArgs>): Prisma.PrismaPromise<GetDesignAggregateType<T>>

    /**
     * Group by Design.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignGroupByArgs} args - Group by arguments.
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
      T extends DesignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesignGroupByArgs['orderBy'] }
        : { orderBy?: DesignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DesignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Design model
   */
  readonly fields: DesignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Design.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Design$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Design$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lineItems<T extends Design$lineItemsArgs<ExtArgs> = {}>(args?: Subset<T, Design$lineItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignLineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    placements<T extends Design$placementsArgs<ExtArgs> = {}>(args?: Subset<T, Design$placementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends Design$orderArgs<ExtArgs> = {}>(args?: Subset<T, Design$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Design model
   */
  interface DesignFieldRefs {
    readonly id: FieldRef<"Design", 'String'>
    readonly userId: FieldRef<"Design", 'String'>
    readonly productId: FieldRef<"Design", 'String'>
    readonly color: FieldRef<"Design", 'String'>
    readonly status: FieldRef<"Design", 'DesignStatus'>
    readonly pricingBase: FieldRef<"Design", 'Int'>
    readonly pricingFees: FieldRef<"Design", 'Int'>
    readonly pricingTotal: FieldRef<"Design", 'Int'>
    readonly createdAt: FieldRef<"Design", 'DateTime'>
    readonly updatedAt: FieldRef<"Design", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Design findUnique
   */
  export type DesignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * Filter, which Design to fetch.
     */
    where: DesignWhereUniqueInput
  }

  /**
   * Design findUniqueOrThrow
   */
  export type DesignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * Filter, which Design to fetch.
     */
    where: DesignWhereUniqueInput
  }

  /**
   * Design findFirst
   */
  export type DesignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * Filter, which Design to fetch.
     */
    where?: DesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Designs to fetch.
     */
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Designs.
     */
    cursor?: DesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Designs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Designs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Designs.
     */
    distinct?: DesignScalarFieldEnum | DesignScalarFieldEnum[]
  }

  /**
   * Design findFirstOrThrow
   */
  export type DesignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * Filter, which Design to fetch.
     */
    where?: DesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Designs to fetch.
     */
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Designs.
     */
    cursor?: DesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Designs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Designs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Designs.
     */
    distinct?: DesignScalarFieldEnum | DesignScalarFieldEnum[]
  }

  /**
   * Design findMany
   */
  export type DesignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * Filter, which Designs to fetch.
     */
    where?: DesignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Designs to fetch.
     */
    orderBy?: DesignOrderByWithRelationInput | DesignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Designs.
     */
    cursor?: DesignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Designs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Designs.
     */
    skip?: number
    distinct?: DesignScalarFieldEnum | DesignScalarFieldEnum[]
  }

  /**
   * Design create
   */
  export type DesignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * The data needed to create a Design.
     */
    data: XOR<DesignCreateInput, DesignUncheckedCreateInput>
  }

  /**
   * Design createMany
   */
  export type DesignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Designs.
     */
    data: DesignCreateManyInput | DesignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Design createManyAndReturn
   */
  export type DesignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * The data used to create many Designs.
     */
    data: DesignCreateManyInput | DesignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Design update
   */
  export type DesignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * The data needed to update a Design.
     */
    data: XOR<DesignUpdateInput, DesignUncheckedUpdateInput>
    /**
     * Choose, which Design to update.
     */
    where: DesignWhereUniqueInput
  }

  /**
   * Design updateMany
   */
  export type DesignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Designs.
     */
    data: XOR<DesignUpdateManyMutationInput, DesignUncheckedUpdateManyInput>
    /**
     * Filter which Designs to update
     */
    where?: DesignWhereInput
    /**
     * Limit how many Designs to update.
     */
    limit?: number
  }

  /**
   * Design updateManyAndReturn
   */
  export type DesignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * The data used to update Designs.
     */
    data: XOR<DesignUpdateManyMutationInput, DesignUncheckedUpdateManyInput>
    /**
     * Filter which Designs to update
     */
    where?: DesignWhereInput
    /**
     * Limit how many Designs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Design upsert
   */
  export type DesignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * The filter to search for the Design to update in case it exists.
     */
    where: DesignWhereUniqueInput
    /**
     * In case the Design found by the `where` argument doesn't exist, create a new Design with this data.
     */
    create: XOR<DesignCreateInput, DesignUncheckedCreateInput>
    /**
     * In case the Design was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesignUpdateInput, DesignUncheckedUpdateInput>
  }

  /**
   * Design delete
   */
  export type DesignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
    /**
     * Filter which Design to delete.
     */
    where: DesignWhereUniqueInput
  }

  /**
   * Design deleteMany
   */
  export type DesignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Designs to delete
     */
    where?: DesignWhereInput
    /**
     * Limit how many Designs to delete.
     */
    limit?: number
  }

  /**
   * Design.comments
   */
  export type Design$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentInclude<ExtArgs> | null
    where?: DesignCommentWhereInput
    orderBy?: DesignCommentOrderByWithRelationInput | DesignCommentOrderByWithRelationInput[]
    cursor?: DesignCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesignCommentScalarFieldEnum | DesignCommentScalarFieldEnum[]
  }

  /**
   * Design.lineItems
   */
  export type Design$lineItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemInclude<ExtArgs> | null
    where?: DesignLineItemWhereInput
    orderBy?: DesignLineItemOrderByWithRelationInput | DesignLineItemOrderByWithRelationInput[]
    cursor?: DesignLineItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesignLineItemScalarFieldEnum | DesignLineItemScalarFieldEnum[]
  }

  /**
   * Design.placements
   */
  export type Design$placementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementInclude<ExtArgs> | null
    where?: DesignPlacementWhereInput
    orderBy?: DesignPlacementOrderByWithRelationInput | DesignPlacementOrderByWithRelationInput[]
    cursor?: DesignPlacementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DesignPlacementScalarFieldEnum | DesignPlacementScalarFieldEnum[]
  }

  /**
   * Design.order
   */
  export type Design$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * Design without action
   */
  export type DesignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Design
     */
    select?: DesignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Design
     */
    omit?: DesignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignInclude<ExtArgs> | null
  }


  /**
   * Model DesignPlacement
   */

  export type AggregateDesignPlacement = {
    _count: DesignPlacementCountAggregateOutputType | null
    _min: DesignPlacementMinAggregateOutputType | null
    _max: DesignPlacementMaxAggregateOutputType | null
  }

  export type DesignPlacementMinAggregateOutputType = {
    id: string | null
    designId: string | null
    side: string | null
    areaId: string | null
    assetId: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DesignPlacementMaxAggregateOutputType = {
    id: string | null
    designId: string | null
    side: string | null
    areaId: string | null
    assetId: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DesignPlacementCountAggregateOutputType = {
    id: number
    designId: number
    side: number
    areaId: number
    assetId: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DesignPlacementMinAggregateInputType = {
    id?: true
    designId?: true
    side?: true
    areaId?: true
    assetId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DesignPlacementMaxAggregateInputType = {
    id?: true
    designId?: true
    side?: true
    areaId?: true
    assetId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DesignPlacementCountAggregateInputType = {
    id?: true
    designId?: true
    side?: true
    areaId?: true
    assetId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DesignPlacementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesignPlacement to aggregate.
     */
    where?: DesignPlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignPlacements to fetch.
     */
    orderBy?: DesignPlacementOrderByWithRelationInput | DesignPlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesignPlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignPlacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignPlacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DesignPlacements
    **/
    _count?: true | DesignPlacementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesignPlacementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesignPlacementMaxAggregateInputType
  }

  export type GetDesignPlacementAggregateType<T extends DesignPlacementAggregateArgs> = {
        [P in keyof T & keyof AggregateDesignPlacement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesignPlacement[P]>
      : GetScalarType<T[P], AggregateDesignPlacement[P]>
  }




  export type DesignPlacementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignPlacementWhereInput
    orderBy?: DesignPlacementOrderByWithAggregationInput | DesignPlacementOrderByWithAggregationInput[]
    by: DesignPlacementScalarFieldEnum[] | DesignPlacementScalarFieldEnum
    having?: DesignPlacementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesignPlacementCountAggregateInputType | true
    _min?: DesignPlacementMinAggregateInputType
    _max?: DesignPlacementMaxAggregateInputType
  }

  export type DesignPlacementGroupByOutputType = {
    id: string
    designId: string
    side: string
    areaId: string
    assetId: string
    url: string
    createdAt: Date
    updatedAt: Date
    _count: DesignPlacementCountAggregateOutputType | null
    _min: DesignPlacementMinAggregateOutputType | null
    _max: DesignPlacementMaxAggregateOutputType | null
  }

  type GetDesignPlacementGroupByPayload<T extends DesignPlacementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesignPlacementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesignPlacementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesignPlacementGroupByOutputType[P]>
            : GetScalarType<T[P], DesignPlacementGroupByOutputType[P]>
        }
      >
    >


  export type DesignPlacementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designId?: boolean
    side?: boolean
    areaId?: boolean
    assetId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["designPlacement"]>

  export type DesignPlacementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designId?: boolean
    side?: boolean
    areaId?: boolean
    assetId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["designPlacement"]>

  export type DesignPlacementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designId?: boolean
    side?: boolean
    areaId?: boolean
    assetId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["designPlacement"]>

  export type DesignPlacementSelectScalar = {
    id?: boolean
    designId?: boolean
    side?: boolean
    areaId?: boolean
    assetId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DesignPlacementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "designId" | "side" | "areaId" | "assetId" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["designPlacement"]>
  export type DesignPlacementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }
  export type DesignPlacementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }
  export type DesignPlacementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }

  export type $DesignPlacementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DesignPlacement"
    objects: {
      design: Prisma.$DesignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      designId: string
      side: string
      areaId: string
      assetId: string
      url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["designPlacement"]>
    composites: {}
  }

  type DesignPlacementGetPayload<S extends boolean | null | undefined | DesignPlacementDefaultArgs> = $Result.GetResult<Prisma.$DesignPlacementPayload, S>

  type DesignPlacementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DesignPlacementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DesignPlacementCountAggregateInputType | true
    }

  export interface DesignPlacementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DesignPlacement'], meta: { name: 'DesignPlacement' } }
    /**
     * Find zero or one DesignPlacement that matches the filter.
     * @param {DesignPlacementFindUniqueArgs} args - Arguments to find a DesignPlacement
     * @example
     * // Get one DesignPlacement
     * const designPlacement = await prisma.designPlacement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DesignPlacementFindUniqueArgs>(args: SelectSubset<T, DesignPlacementFindUniqueArgs<ExtArgs>>): Prisma__DesignPlacementClient<$Result.GetResult<Prisma.$DesignPlacementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DesignPlacement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DesignPlacementFindUniqueOrThrowArgs} args - Arguments to find a DesignPlacement
     * @example
     * // Get one DesignPlacement
     * const designPlacement = await prisma.designPlacement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DesignPlacementFindUniqueOrThrowArgs>(args: SelectSubset<T, DesignPlacementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DesignPlacementClient<$Result.GetResult<Prisma.$DesignPlacementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesignPlacement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignPlacementFindFirstArgs} args - Arguments to find a DesignPlacement
     * @example
     * // Get one DesignPlacement
     * const designPlacement = await prisma.designPlacement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DesignPlacementFindFirstArgs>(args?: SelectSubset<T, DesignPlacementFindFirstArgs<ExtArgs>>): Prisma__DesignPlacementClient<$Result.GetResult<Prisma.$DesignPlacementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesignPlacement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignPlacementFindFirstOrThrowArgs} args - Arguments to find a DesignPlacement
     * @example
     * // Get one DesignPlacement
     * const designPlacement = await prisma.designPlacement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DesignPlacementFindFirstOrThrowArgs>(args?: SelectSubset<T, DesignPlacementFindFirstOrThrowArgs<ExtArgs>>): Prisma__DesignPlacementClient<$Result.GetResult<Prisma.$DesignPlacementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DesignPlacements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignPlacementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DesignPlacements
     * const designPlacements = await prisma.designPlacement.findMany()
     * 
     * // Get first 10 DesignPlacements
     * const designPlacements = await prisma.designPlacement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const designPlacementWithIdOnly = await prisma.designPlacement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DesignPlacementFindManyArgs>(args?: SelectSubset<T, DesignPlacementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DesignPlacement.
     * @param {DesignPlacementCreateArgs} args - Arguments to create a DesignPlacement.
     * @example
     * // Create one DesignPlacement
     * const DesignPlacement = await prisma.designPlacement.create({
     *   data: {
     *     // ... data to create a DesignPlacement
     *   }
     * })
     * 
     */
    create<T extends DesignPlacementCreateArgs>(args: SelectSubset<T, DesignPlacementCreateArgs<ExtArgs>>): Prisma__DesignPlacementClient<$Result.GetResult<Prisma.$DesignPlacementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DesignPlacements.
     * @param {DesignPlacementCreateManyArgs} args - Arguments to create many DesignPlacements.
     * @example
     * // Create many DesignPlacements
     * const designPlacement = await prisma.designPlacement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DesignPlacementCreateManyArgs>(args?: SelectSubset<T, DesignPlacementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DesignPlacements and returns the data saved in the database.
     * @param {DesignPlacementCreateManyAndReturnArgs} args - Arguments to create many DesignPlacements.
     * @example
     * // Create many DesignPlacements
     * const designPlacement = await prisma.designPlacement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DesignPlacements and only return the `id`
     * const designPlacementWithIdOnly = await prisma.designPlacement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DesignPlacementCreateManyAndReturnArgs>(args?: SelectSubset<T, DesignPlacementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPlacementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DesignPlacement.
     * @param {DesignPlacementDeleteArgs} args - Arguments to delete one DesignPlacement.
     * @example
     * // Delete one DesignPlacement
     * const DesignPlacement = await prisma.designPlacement.delete({
     *   where: {
     *     // ... filter to delete one DesignPlacement
     *   }
     * })
     * 
     */
    delete<T extends DesignPlacementDeleteArgs>(args: SelectSubset<T, DesignPlacementDeleteArgs<ExtArgs>>): Prisma__DesignPlacementClient<$Result.GetResult<Prisma.$DesignPlacementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DesignPlacement.
     * @param {DesignPlacementUpdateArgs} args - Arguments to update one DesignPlacement.
     * @example
     * // Update one DesignPlacement
     * const designPlacement = await prisma.designPlacement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DesignPlacementUpdateArgs>(args: SelectSubset<T, DesignPlacementUpdateArgs<ExtArgs>>): Prisma__DesignPlacementClient<$Result.GetResult<Prisma.$DesignPlacementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DesignPlacements.
     * @param {DesignPlacementDeleteManyArgs} args - Arguments to filter DesignPlacements to delete.
     * @example
     * // Delete a few DesignPlacements
     * const { count } = await prisma.designPlacement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DesignPlacementDeleteManyArgs>(args?: SelectSubset<T, DesignPlacementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesignPlacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignPlacementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DesignPlacements
     * const designPlacement = await prisma.designPlacement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DesignPlacementUpdateManyArgs>(args: SelectSubset<T, DesignPlacementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesignPlacements and returns the data updated in the database.
     * @param {DesignPlacementUpdateManyAndReturnArgs} args - Arguments to update many DesignPlacements.
     * @example
     * // Update many DesignPlacements
     * const designPlacement = await prisma.designPlacement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DesignPlacements and only return the `id`
     * const designPlacementWithIdOnly = await prisma.designPlacement.updateManyAndReturn({
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
    updateManyAndReturn<T extends DesignPlacementUpdateManyAndReturnArgs>(args: SelectSubset<T, DesignPlacementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignPlacementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DesignPlacement.
     * @param {DesignPlacementUpsertArgs} args - Arguments to update or create a DesignPlacement.
     * @example
     * // Update or create a DesignPlacement
     * const designPlacement = await prisma.designPlacement.upsert({
     *   create: {
     *     // ... data to create a DesignPlacement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DesignPlacement we want to update
     *   }
     * })
     */
    upsert<T extends DesignPlacementUpsertArgs>(args: SelectSubset<T, DesignPlacementUpsertArgs<ExtArgs>>): Prisma__DesignPlacementClient<$Result.GetResult<Prisma.$DesignPlacementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DesignPlacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignPlacementCountArgs} args - Arguments to filter DesignPlacements to count.
     * @example
     * // Count the number of DesignPlacements
     * const count = await prisma.designPlacement.count({
     *   where: {
     *     // ... the filter for the DesignPlacements we want to count
     *   }
     * })
    **/
    count<T extends DesignPlacementCountArgs>(
      args?: Subset<T, DesignPlacementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesignPlacementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DesignPlacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignPlacementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DesignPlacementAggregateArgs>(args: Subset<T, DesignPlacementAggregateArgs>): Prisma.PrismaPromise<GetDesignPlacementAggregateType<T>>

    /**
     * Group by DesignPlacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignPlacementGroupByArgs} args - Group by arguments.
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
      T extends DesignPlacementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesignPlacementGroupByArgs['orderBy'] }
        : { orderBy?: DesignPlacementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DesignPlacementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignPlacementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DesignPlacement model
   */
  readonly fields: DesignPlacementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DesignPlacement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesignPlacementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    design<T extends DesignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DesignDefaultArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DesignPlacement model
   */
  interface DesignPlacementFieldRefs {
    readonly id: FieldRef<"DesignPlacement", 'String'>
    readonly designId: FieldRef<"DesignPlacement", 'String'>
    readonly side: FieldRef<"DesignPlacement", 'String'>
    readonly areaId: FieldRef<"DesignPlacement", 'String'>
    readonly assetId: FieldRef<"DesignPlacement", 'String'>
    readonly url: FieldRef<"DesignPlacement", 'String'>
    readonly createdAt: FieldRef<"DesignPlacement", 'DateTime'>
    readonly updatedAt: FieldRef<"DesignPlacement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DesignPlacement findUnique
   */
  export type DesignPlacementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementInclude<ExtArgs> | null
    /**
     * Filter, which DesignPlacement to fetch.
     */
    where: DesignPlacementWhereUniqueInput
  }

  /**
   * DesignPlacement findUniqueOrThrow
   */
  export type DesignPlacementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementInclude<ExtArgs> | null
    /**
     * Filter, which DesignPlacement to fetch.
     */
    where: DesignPlacementWhereUniqueInput
  }

  /**
   * DesignPlacement findFirst
   */
  export type DesignPlacementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementInclude<ExtArgs> | null
    /**
     * Filter, which DesignPlacement to fetch.
     */
    where?: DesignPlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignPlacements to fetch.
     */
    orderBy?: DesignPlacementOrderByWithRelationInput | DesignPlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesignPlacements.
     */
    cursor?: DesignPlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignPlacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignPlacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesignPlacements.
     */
    distinct?: DesignPlacementScalarFieldEnum | DesignPlacementScalarFieldEnum[]
  }

  /**
   * DesignPlacement findFirstOrThrow
   */
  export type DesignPlacementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementInclude<ExtArgs> | null
    /**
     * Filter, which DesignPlacement to fetch.
     */
    where?: DesignPlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignPlacements to fetch.
     */
    orderBy?: DesignPlacementOrderByWithRelationInput | DesignPlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesignPlacements.
     */
    cursor?: DesignPlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignPlacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignPlacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesignPlacements.
     */
    distinct?: DesignPlacementScalarFieldEnum | DesignPlacementScalarFieldEnum[]
  }

  /**
   * DesignPlacement findMany
   */
  export type DesignPlacementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementInclude<ExtArgs> | null
    /**
     * Filter, which DesignPlacements to fetch.
     */
    where?: DesignPlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignPlacements to fetch.
     */
    orderBy?: DesignPlacementOrderByWithRelationInput | DesignPlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DesignPlacements.
     */
    cursor?: DesignPlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignPlacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignPlacements.
     */
    skip?: number
    distinct?: DesignPlacementScalarFieldEnum | DesignPlacementScalarFieldEnum[]
  }

  /**
   * DesignPlacement create
   */
  export type DesignPlacementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementInclude<ExtArgs> | null
    /**
     * The data needed to create a DesignPlacement.
     */
    data: XOR<DesignPlacementCreateInput, DesignPlacementUncheckedCreateInput>
  }

  /**
   * DesignPlacement createMany
   */
  export type DesignPlacementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DesignPlacements.
     */
    data: DesignPlacementCreateManyInput | DesignPlacementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DesignPlacement createManyAndReturn
   */
  export type DesignPlacementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * The data used to create many DesignPlacements.
     */
    data: DesignPlacementCreateManyInput | DesignPlacementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DesignPlacement update
   */
  export type DesignPlacementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementInclude<ExtArgs> | null
    /**
     * The data needed to update a DesignPlacement.
     */
    data: XOR<DesignPlacementUpdateInput, DesignPlacementUncheckedUpdateInput>
    /**
     * Choose, which DesignPlacement to update.
     */
    where: DesignPlacementWhereUniqueInput
  }

  /**
   * DesignPlacement updateMany
   */
  export type DesignPlacementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DesignPlacements.
     */
    data: XOR<DesignPlacementUpdateManyMutationInput, DesignPlacementUncheckedUpdateManyInput>
    /**
     * Filter which DesignPlacements to update
     */
    where?: DesignPlacementWhereInput
    /**
     * Limit how many DesignPlacements to update.
     */
    limit?: number
  }

  /**
   * DesignPlacement updateManyAndReturn
   */
  export type DesignPlacementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * The data used to update DesignPlacements.
     */
    data: XOR<DesignPlacementUpdateManyMutationInput, DesignPlacementUncheckedUpdateManyInput>
    /**
     * Filter which DesignPlacements to update
     */
    where?: DesignPlacementWhereInput
    /**
     * Limit how many DesignPlacements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DesignPlacement upsert
   */
  export type DesignPlacementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementInclude<ExtArgs> | null
    /**
     * The filter to search for the DesignPlacement to update in case it exists.
     */
    where: DesignPlacementWhereUniqueInput
    /**
     * In case the DesignPlacement found by the `where` argument doesn't exist, create a new DesignPlacement with this data.
     */
    create: XOR<DesignPlacementCreateInput, DesignPlacementUncheckedCreateInput>
    /**
     * In case the DesignPlacement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesignPlacementUpdateInput, DesignPlacementUncheckedUpdateInput>
  }

  /**
   * DesignPlacement delete
   */
  export type DesignPlacementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementInclude<ExtArgs> | null
    /**
     * Filter which DesignPlacement to delete.
     */
    where: DesignPlacementWhereUniqueInput
  }

  /**
   * DesignPlacement deleteMany
   */
  export type DesignPlacementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesignPlacements to delete
     */
    where?: DesignPlacementWhereInput
    /**
     * Limit how many DesignPlacements to delete.
     */
    limit?: number
  }

  /**
   * DesignPlacement without action
   */
  export type DesignPlacementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignPlacement
     */
    select?: DesignPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignPlacement
     */
    omit?: DesignPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignPlacementInclude<ExtArgs> | null
  }


  /**
   * Model DesignComment
   */

  export type AggregateDesignComment = {
    _count: DesignCommentCountAggregateOutputType | null
    _min: DesignCommentMinAggregateOutputType | null
    _max: DesignCommentMaxAggregateOutputType | null
  }

  export type DesignCommentMinAggregateOutputType = {
    id: string | null
    designId: string | null
    body: string | null
    createdAt: Date | null
    authorId: string | null
  }

  export type DesignCommentMaxAggregateOutputType = {
    id: string | null
    designId: string | null
    body: string | null
    createdAt: Date | null
    authorId: string | null
  }

  export type DesignCommentCountAggregateOutputType = {
    id: number
    designId: number
    body: number
    createdAt: number
    authorId: number
    _all: number
  }


  export type DesignCommentMinAggregateInputType = {
    id?: true
    designId?: true
    body?: true
    createdAt?: true
    authorId?: true
  }

  export type DesignCommentMaxAggregateInputType = {
    id?: true
    designId?: true
    body?: true
    createdAt?: true
    authorId?: true
  }

  export type DesignCommentCountAggregateInputType = {
    id?: true
    designId?: true
    body?: true
    createdAt?: true
    authorId?: true
    _all?: true
  }

  export type DesignCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesignComment to aggregate.
     */
    where?: DesignCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignComments to fetch.
     */
    orderBy?: DesignCommentOrderByWithRelationInput | DesignCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesignCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DesignComments
    **/
    _count?: true | DesignCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesignCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesignCommentMaxAggregateInputType
  }

  export type GetDesignCommentAggregateType<T extends DesignCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateDesignComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesignComment[P]>
      : GetScalarType<T[P], AggregateDesignComment[P]>
  }




  export type DesignCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignCommentWhereInput
    orderBy?: DesignCommentOrderByWithAggregationInput | DesignCommentOrderByWithAggregationInput[]
    by: DesignCommentScalarFieldEnum[] | DesignCommentScalarFieldEnum
    having?: DesignCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesignCommentCountAggregateInputType | true
    _min?: DesignCommentMinAggregateInputType
    _max?: DesignCommentMaxAggregateInputType
  }

  export type DesignCommentGroupByOutputType = {
    id: string
    designId: string
    body: string
    createdAt: Date
    authorId: string | null
    _count: DesignCommentCountAggregateOutputType | null
    _min: DesignCommentMinAggregateOutputType | null
    _max: DesignCommentMaxAggregateOutputType | null
  }

  type GetDesignCommentGroupByPayload<T extends DesignCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesignCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesignCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesignCommentGroupByOutputType[P]>
            : GetScalarType<T[P], DesignCommentGroupByOutputType[P]>
        }
      >
    >


  export type DesignCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designId?: boolean
    body?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | DesignComment$authorArgs<ExtArgs>
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["designComment"]>

  export type DesignCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designId?: boolean
    body?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | DesignComment$authorArgs<ExtArgs>
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["designComment"]>

  export type DesignCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designId?: boolean
    body?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | DesignComment$authorArgs<ExtArgs>
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["designComment"]>

  export type DesignCommentSelectScalar = {
    id?: boolean
    designId?: boolean
    body?: boolean
    createdAt?: boolean
    authorId?: boolean
  }

  export type DesignCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "designId" | "body" | "createdAt" | "authorId", ExtArgs["result"]["designComment"]>
  export type DesignCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | DesignComment$authorArgs<ExtArgs>
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }
  export type DesignCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | DesignComment$authorArgs<ExtArgs>
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }
  export type DesignCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | DesignComment$authorArgs<ExtArgs>
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }

  export type $DesignCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DesignComment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
      design: Prisma.$DesignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      designId: string
      body: string
      createdAt: Date
      authorId: string | null
    }, ExtArgs["result"]["designComment"]>
    composites: {}
  }

  type DesignCommentGetPayload<S extends boolean | null | undefined | DesignCommentDefaultArgs> = $Result.GetResult<Prisma.$DesignCommentPayload, S>

  type DesignCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DesignCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DesignCommentCountAggregateInputType | true
    }

  export interface DesignCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DesignComment'], meta: { name: 'DesignComment' } }
    /**
     * Find zero or one DesignComment that matches the filter.
     * @param {DesignCommentFindUniqueArgs} args - Arguments to find a DesignComment
     * @example
     * // Get one DesignComment
     * const designComment = await prisma.designComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DesignCommentFindUniqueArgs>(args: SelectSubset<T, DesignCommentFindUniqueArgs<ExtArgs>>): Prisma__DesignCommentClient<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DesignComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DesignCommentFindUniqueOrThrowArgs} args - Arguments to find a DesignComment
     * @example
     * // Get one DesignComment
     * const designComment = await prisma.designComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DesignCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, DesignCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DesignCommentClient<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesignComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignCommentFindFirstArgs} args - Arguments to find a DesignComment
     * @example
     * // Get one DesignComment
     * const designComment = await prisma.designComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DesignCommentFindFirstArgs>(args?: SelectSubset<T, DesignCommentFindFirstArgs<ExtArgs>>): Prisma__DesignCommentClient<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesignComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignCommentFindFirstOrThrowArgs} args - Arguments to find a DesignComment
     * @example
     * // Get one DesignComment
     * const designComment = await prisma.designComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DesignCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, DesignCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DesignCommentClient<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DesignComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DesignComments
     * const designComments = await prisma.designComment.findMany()
     * 
     * // Get first 10 DesignComments
     * const designComments = await prisma.designComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const designCommentWithIdOnly = await prisma.designComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DesignCommentFindManyArgs>(args?: SelectSubset<T, DesignCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DesignComment.
     * @param {DesignCommentCreateArgs} args - Arguments to create a DesignComment.
     * @example
     * // Create one DesignComment
     * const DesignComment = await prisma.designComment.create({
     *   data: {
     *     // ... data to create a DesignComment
     *   }
     * })
     * 
     */
    create<T extends DesignCommentCreateArgs>(args: SelectSubset<T, DesignCommentCreateArgs<ExtArgs>>): Prisma__DesignCommentClient<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DesignComments.
     * @param {DesignCommentCreateManyArgs} args - Arguments to create many DesignComments.
     * @example
     * // Create many DesignComments
     * const designComment = await prisma.designComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DesignCommentCreateManyArgs>(args?: SelectSubset<T, DesignCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DesignComments and returns the data saved in the database.
     * @param {DesignCommentCreateManyAndReturnArgs} args - Arguments to create many DesignComments.
     * @example
     * // Create many DesignComments
     * const designComment = await prisma.designComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DesignComments and only return the `id`
     * const designCommentWithIdOnly = await prisma.designComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DesignCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, DesignCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DesignComment.
     * @param {DesignCommentDeleteArgs} args - Arguments to delete one DesignComment.
     * @example
     * // Delete one DesignComment
     * const DesignComment = await prisma.designComment.delete({
     *   where: {
     *     // ... filter to delete one DesignComment
     *   }
     * })
     * 
     */
    delete<T extends DesignCommentDeleteArgs>(args: SelectSubset<T, DesignCommentDeleteArgs<ExtArgs>>): Prisma__DesignCommentClient<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DesignComment.
     * @param {DesignCommentUpdateArgs} args - Arguments to update one DesignComment.
     * @example
     * // Update one DesignComment
     * const designComment = await prisma.designComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DesignCommentUpdateArgs>(args: SelectSubset<T, DesignCommentUpdateArgs<ExtArgs>>): Prisma__DesignCommentClient<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DesignComments.
     * @param {DesignCommentDeleteManyArgs} args - Arguments to filter DesignComments to delete.
     * @example
     * // Delete a few DesignComments
     * const { count } = await prisma.designComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DesignCommentDeleteManyArgs>(args?: SelectSubset<T, DesignCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesignComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DesignComments
     * const designComment = await prisma.designComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DesignCommentUpdateManyArgs>(args: SelectSubset<T, DesignCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesignComments and returns the data updated in the database.
     * @param {DesignCommentUpdateManyAndReturnArgs} args - Arguments to update many DesignComments.
     * @example
     * // Update many DesignComments
     * const designComment = await prisma.designComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DesignComments and only return the `id`
     * const designCommentWithIdOnly = await prisma.designComment.updateManyAndReturn({
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
    updateManyAndReturn<T extends DesignCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, DesignCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DesignComment.
     * @param {DesignCommentUpsertArgs} args - Arguments to update or create a DesignComment.
     * @example
     * // Update or create a DesignComment
     * const designComment = await prisma.designComment.upsert({
     *   create: {
     *     // ... data to create a DesignComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DesignComment we want to update
     *   }
     * })
     */
    upsert<T extends DesignCommentUpsertArgs>(args: SelectSubset<T, DesignCommentUpsertArgs<ExtArgs>>): Prisma__DesignCommentClient<$Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DesignComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignCommentCountArgs} args - Arguments to filter DesignComments to count.
     * @example
     * // Count the number of DesignComments
     * const count = await prisma.designComment.count({
     *   where: {
     *     // ... the filter for the DesignComments we want to count
     *   }
     * })
    **/
    count<T extends DesignCommentCountArgs>(
      args?: Subset<T, DesignCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesignCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DesignComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DesignCommentAggregateArgs>(args: Subset<T, DesignCommentAggregateArgs>): Prisma.PrismaPromise<GetDesignCommentAggregateType<T>>

    /**
     * Group by DesignComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignCommentGroupByArgs} args - Group by arguments.
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
      T extends DesignCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesignCommentGroupByArgs['orderBy'] }
        : { orderBy?: DesignCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DesignCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DesignComment model
   */
  readonly fields: DesignCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DesignComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesignCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends DesignComment$authorArgs<ExtArgs> = {}>(args?: Subset<T, DesignComment$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    design<T extends DesignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DesignDefaultArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DesignComment model
   */
  interface DesignCommentFieldRefs {
    readonly id: FieldRef<"DesignComment", 'String'>
    readonly designId: FieldRef<"DesignComment", 'String'>
    readonly body: FieldRef<"DesignComment", 'String'>
    readonly createdAt: FieldRef<"DesignComment", 'DateTime'>
    readonly authorId: FieldRef<"DesignComment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DesignComment findUnique
   */
  export type DesignCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentInclude<ExtArgs> | null
    /**
     * Filter, which DesignComment to fetch.
     */
    where: DesignCommentWhereUniqueInput
  }

  /**
   * DesignComment findUniqueOrThrow
   */
  export type DesignCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentInclude<ExtArgs> | null
    /**
     * Filter, which DesignComment to fetch.
     */
    where: DesignCommentWhereUniqueInput
  }

  /**
   * DesignComment findFirst
   */
  export type DesignCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentInclude<ExtArgs> | null
    /**
     * Filter, which DesignComment to fetch.
     */
    where?: DesignCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignComments to fetch.
     */
    orderBy?: DesignCommentOrderByWithRelationInput | DesignCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesignComments.
     */
    cursor?: DesignCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesignComments.
     */
    distinct?: DesignCommentScalarFieldEnum | DesignCommentScalarFieldEnum[]
  }

  /**
   * DesignComment findFirstOrThrow
   */
  export type DesignCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentInclude<ExtArgs> | null
    /**
     * Filter, which DesignComment to fetch.
     */
    where?: DesignCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignComments to fetch.
     */
    orderBy?: DesignCommentOrderByWithRelationInput | DesignCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesignComments.
     */
    cursor?: DesignCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesignComments.
     */
    distinct?: DesignCommentScalarFieldEnum | DesignCommentScalarFieldEnum[]
  }

  /**
   * DesignComment findMany
   */
  export type DesignCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentInclude<ExtArgs> | null
    /**
     * Filter, which DesignComments to fetch.
     */
    where?: DesignCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignComments to fetch.
     */
    orderBy?: DesignCommentOrderByWithRelationInput | DesignCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DesignComments.
     */
    cursor?: DesignCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignComments.
     */
    skip?: number
    distinct?: DesignCommentScalarFieldEnum | DesignCommentScalarFieldEnum[]
  }

  /**
   * DesignComment create
   */
  export type DesignCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a DesignComment.
     */
    data: XOR<DesignCommentCreateInput, DesignCommentUncheckedCreateInput>
  }

  /**
   * DesignComment createMany
   */
  export type DesignCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DesignComments.
     */
    data: DesignCommentCreateManyInput | DesignCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DesignComment createManyAndReturn
   */
  export type DesignCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * The data used to create many DesignComments.
     */
    data: DesignCommentCreateManyInput | DesignCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DesignComment update
   */
  export type DesignCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a DesignComment.
     */
    data: XOR<DesignCommentUpdateInput, DesignCommentUncheckedUpdateInput>
    /**
     * Choose, which DesignComment to update.
     */
    where: DesignCommentWhereUniqueInput
  }

  /**
   * DesignComment updateMany
   */
  export type DesignCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DesignComments.
     */
    data: XOR<DesignCommentUpdateManyMutationInput, DesignCommentUncheckedUpdateManyInput>
    /**
     * Filter which DesignComments to update
     */
    where?: DesignCommentWhereInput
    /**
     * Limit how many DesignComments to update.
     */
    limit?: number
  }

  /**
   * DesignComment updateManyAndReturn
   */
  export type DesignCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * The data used to update DesignComments.
     */
    data: XOR<DesignCommentUpdateManyMutationInput, DesignCommentUncheckedUpdateManyInput>
    /**
     * Filter which DesignComments to update
     */
    where?: DesignCommentWhereInput
    /**
     * Limit how many DesignComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DesignComment upsert
   */
  export type DesignCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the DesignComment to update in case it exists.
     */
    where: DesignCommentWhereUniqueInput
    /**
     * In case the DesignComment found by the `where` argument doesn't exist, create a new DesignComment with this data.
     */
    create: XOR<DesignCommentCreateInput, DesignCommentUncheckedCreateInput>
    /**
     * In case the DesignComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesignCommentUpdateInput, DesignCommentUncheckedUpdateInput>
  }

  /**
   * DesignComment delete
   */
  export type DesignCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentInclude<ExtArgs> | null
    /**
     * Filter which DesignComment to delete.
     */
    where: DesignCommentWhereUniqueInput
  }

  /**
   * DesignComment deleteMany
   */
  export type DesignCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesignComments to delete
     */
    where?: DesignCommentWhereInput
    /**
     * Limit how many DesignComments to delete.
     */
    limit?: number
  }

  /**
   * DesignComment.author
   */
  export type DesignComment$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * DesignComment without action
   */
  export type DesignCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignComment
     */
    select?: DesignCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignComment
     */
    omit?: DesignCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignCommentInclude<ExtArgs> | null
  }


  /**
   * Model DesignLineItem
   */

  export type AggregateDesignLineItem = {
    _count: DesignLineItemCountAggregateOutputType | null
    _avg: DesignLineItemAvgAggregateOutputType | null
    _sum: DesignLineItemSumAggregateOutputType | null
    _min: DesignLineItemMinAggregateOutputType | null
    _max: DesignLineItemMaxAggregateOutputType | null
  }

  export type DesignLineItemAvgAggregateOutputType = {
    qty: number | null
    unitPrice: number | null
    surcharge: number | null
  }

  export type DesignLineItemSumAggregateOutputType = {
    qty: number | null
    unitPrice: number | null
    surcharge: number | null
  }

  export type DesignLineItemMinAggregateOutputType = {
    id: string | null
    designId: string | null
    size: string | null
    qty: number | null
    unitPrice: number | null
    surcharge: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DesignLineItemMaxAggregateOutputType = {
    id: string | null
    designId: string | null
    size: string | null
    qty: number | null
    unitPrice: number | null
    surcharge: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DesignLineItemCountAggregateOutputType = {
    id: number
    designId: number
    size: number
    qty: number
    unitPrice: number
    surcharge: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DesignLineItemAvgAggregateInputType = {
    qty?: true
    unitPrice?: true
    surcharge?: true
  }

  export type DesignLineItemSumAggregateInputType = {
    qty?: true
    unitPrice?: true
    surcharge?: true
  }

  export type DesignLineItemMinAggregateInputType = {
    id?: true
    designId?: true
    size?: true
    qty?: true
    unitPrice?: true
    surcharge?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DesignLineItemMaxAggregateInputType = {
    id?: true
    designId?: true
    size?: true
    qty?: true
    unitPrice?: true
    surcharge?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DesignLineItemCountAggregateInputType = {
    id?: true
    designId?: true
    size?: true
    qty?: true
    unitPrice?: true
    surcharge?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DesignLineItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesignLineItem to aggregate.
     */
    where?: DesignLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignLineItems to fetch.
     */
    orderBy?: DesignLineItemOrderByWithRelationInput | DesignLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesignLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DesignLineItems
    **/
    _count?: true | DesignLineItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DesignLineItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DesignLineItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesignLineItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesignLineItemMaxAggregateInputType
  }

  export type GetDesignLineItemAggregateType<T extends DesignLineItemAggregateArgs> = {
        [P in keyof T & keyof AggregateDesignLineItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesignLineItem[P]>
      : GetScalarType<T[P], AggregateDesignLineItem[P]>
  }




  export type DesignLineItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignLineItemWhereInput
    orderBy?: DesignLineItemOrderByWithAggregationInput | DesignLineItemOrderByWithAggregationInput[]
    by: DesignLineItemScalarFieldEnum[] | DesignLineItemScalarFieldEnum
    having?: DesignLineItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesignLineItemCountAggregateInputType | true
    _avg?: DesignLineItemAvgAggregateInputType
    _sum?: DesignLineItemSumAggregateInputType
    _min?: DesignLineItemMinAggregateInputType
    _max?: DesignLineItemMaxAggregateInputType
  }

  export type DesignLineItemGroupByOutputType = {
    id: string
    designId: string
    size: string
    qty: number
    unitPrice: number
    surcharge: number
    createdAt: Date
    updatedAt: Date
    _count: DesignLineItemCountAggregateOutputType | null
    _avg: DesignLineItemAvgAggregateOutputType | null
    _sum: DesignLineItemSumAggregateOutputType | null
    _min: DesignLineItemMinAggregateOutputType | null
    _max: DesignLineItemMaxAggregateOutputType | null
  }

  type GetDesignLineItemGroupByPayload<T extends DesignLineItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesignLineItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesignLineItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesignLineItemGroupByOutputType[P]>
            : GetScalarType<T[P], DesignLineItemGroupByOutputType[P]>
        }
      >
    >


  export type DesignLineItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designId?: boolean
    size?: boolean
    qty?: boolean
    unitPrice?: boolean
    surcharge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["designLineItem"]>

  export type DesignLineItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designId?: boolean
    size?: boolean
    qty?: boolean
    unitPrice?: boolean
    surcharge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["designLineItem"]>

  export type DesignLineItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designId?: boolean
    size?: boolean
    qty?: boolean
    unitPrice?: boolean
    surcharge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["designLineItem"]>

  export type DesignLineItemSelectScalar = {
    id?: boolean
    designId?: boolean
    size?: boolean
    qty?: boolean
    unitPrice?: boolean
    surcharge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DesignLineItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "designId" | "size" | "qty" | "unitPrice" | "surcharge" | "createdAt" | "updatedAt", ExtArgs["result"]["designLineItem"]>
  export type DesignLineItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }
  export type DesignLineItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }
  export type DesignLineItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    design?: boolean | DesignDefaultArgs<ExtArgs>
  }

  export type $DesignLineItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DesignLineItem"
    objects: {
      design: Prisma.$DesignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      designId: string
      size: string
      qty: number
      unitPrice: number
      surcharge: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["designLineItem"]>
    composites: {}
  }

  type DesignLineItemGetPayload<S extends boolean | null | undefined | DesignLineItemDefaultArgs> = $Result.GetResult<Prisma.$DesignLineItemPayload, S>

  type DesignLineItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DesignLineItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DesignLineItemCountAggregateInputType | true
    }

  export interface DesignLineItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DesignLineItem'], meta: { name: 'DesignLineItem' } }
    /**
     * Find zero or one DesignLineItem that matches the filter.
     * @param {DesignLineItemFindUniqueArgs} args - Arguments to find a DesignLineItem
     * @example
     * // Get one DesignLineItem
     * const designLineItem = await prisma.designLineItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DesignLineItemFindUniqueArgs>(args: SelectSubset<T, DesignLineItemFindUniqueArgs<ExtArgs>>): Prisma__DesignLineItemClient<$Result.GetResult<Prisma.$DesignLineItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DesignLineItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DesignLineItemFindUniqueOrThrowArgs} args - Arguments to find a DesignLineItem
     * @example
     * // Get one DesignLineItem
     * const designLineItem = await prisma.designLineItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DesignLineItemFindUniqueOrThrowArgs>(args: SelectSubset<T, DesignLineItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DesignLineItemClient<$Result.GetResult<Prisma.$DesignLineItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesignLineItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignLineItemFindFirstArgs} args - Arguments to find a DesignLineItem
     * @example
     * // Get one DesignLineItem
     * const designLineItem = await prisma.designLineItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DesignLineItemFindFirstArgs>(args?: SelectSubset<T, DesignLineItemFindFirstArgs<ExtArgs>>): Prisma__DesignLineItemClient<$Result.GetResult<Prisma.$DesignLineItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesignLineItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignLineItemFindFirstOrThrowArgs} args - Arguments to find a DesignLineItem
     * @example
     * // Get one DesignLineItem
     * const designLineItem = await prisma.designLineItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DesignLineItemFindFirstOrThrowArgs>(args?: SelectSubset<T, DesignLineItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__DesignLineItemClient<$Result.GetResult<Prisma.$DesignLineItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DesignLineItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignLineItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DesignLineItems
     * const designLineItems = await prisma.designLineItem.findMany()
     * 
     * // Get first 10 DesignLineItems
     * const designLineItems = await prisma.designLineItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const designLineItemWithIdOnly = await prisma.designLineItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DesignLineItemFindManyArgs>(args?: SelectSubset<T, DesignLineItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignLineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DesignLineItem.
     * @param {DesignLineItemCreateArgs} args - Arguments to create a DesignLineItem.
     * @example
     * // Create one DesignLineItem
     * const DesignLineItem = await prisma.designLineItem.create({
     *   data: {
     *     // ... data to create a DesignLineItem
     *   }
     * })
     * 
     */
    create<T extends DesignLineItemCreateArgs>(args: SelectSubset<T, DesignLineItemCreateArgs<ExtArgs>>): Prisma__DesignLineItemClient<$Result.GetResult<Prisma.$DesignLineItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DesignLineItems.
     * @param {DesignLineItemCreateManyArgs} args - Arguments to create many DesignLineItems.
     * @example
     * // Create many DesignLineItems
     * const designLineItem = await prisma.designLineItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DesignLineItemCreateManyArgs>(args?: SelectSubset<T, DesignLineItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DesignLineItems and returns the data saved in the database.
     * @param {DesignLineItemCreateManyAndReturnArgs} args - Arguments to create many DesignLineItems.
     * @example
     * // Create many DesignLineItems
     * const designLineItem = await prisma.designLineItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DesignLineItems and only return the `id`
     * const designLineItemWithIdOnly = await prisma.designLineItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DesignLineItemCreateManyAndReturnArgs>(args?: SelectSubset<T, DesignLineItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignLineItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DesignLineItem.
     * @param {DesignLineItemDeleteArgs} args - Arguments to delete one DesignLineItem.
     * @example
     * // Delete one DesignLineItem
     * const DesignLineItem = await prisma.designLineItem.delete({
     *   where: {
     *     // ... filter to delete one DesignLineItem
     *   }
     * })
     * 
     */
    delete<T extends DesignLineItemDeleteArgs>(args: SelectSubset<T, DesignLineItemDeleteArgs<ExtArgs>>): Prisma__DesignLineItemClient<$Result.GetResult<Prisma.$DesignLineItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DesignLineItem.
     * @param {DesignLineItemUpdateArgs} args - Arguments to update one DesignLineItem.
     * @example
     * // Update one DesignLineItem
     * const designLineItem = await prisma.designLineItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DesignLineItemUpdateArgs>(args: SelectSubset<T, DesignLineItemUpdateArgs<ExtArgs>>): Prisma__DesignLineItemClient<$Result.GetResult<Prisma.$DesignLineItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DesignLineItems.
     * @param {DesignLineItemDeleteManyArgs} args - Arguments to filter DesignLineItems to delete.
     * @example
     * // Delete a few DesignLineItems
     * const { count } = await prisma.designLineItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DesignLineItemDeleteManyArgs>(args?: SelectSubset<T, DesignLineItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesignLineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignLineItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DesignLineItems
     * const designLineItem = await prisma.designLineItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DesignLineItemUpdateManyArgs>(args: SelectSubset<T, DesignLineItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesignLineItems and returns the data updated in the database.
     * @param {DesignLineItemUpdateManyAndReturnArgs} args - Arguments to update many DesignLineItems.
     * @example
     * // Update many DesignLineItems
     * const designLineItem = await prisma.designLineItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DesignLineItems and only return the `id`
     * const designLineItemWithIdOnly = await prisma.designLineItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends DesignLineItemUpdateManyAndReturnArgs>(args: SelectSubset<T, DesignLineItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignLineItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DesignLineItem.
     * @param {DesignLineItemUpsertArgs} args - Arguments to update or create a DesignLineItem.
     * @example
     * // Update or create a DesignLineItem
     * const designLineItem = await prisma.designLineItem.upsert({
     *   create: {
     *     // ... data to create a DesignLineItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DesignLineItem we want to update
     *   }
     * })
     */
    upsert<T extends DesignLineItemUpsertArgs>(args: SelectSubset<T, DesignLineItemUpsertArgs<ExtArgs>>): Prisma__DesignLineItemClient<$Result.GetResult<Prisma.$DesignLineItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DesignLineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignLineItemCountArgs} args - Arguments to filter DesignLineItems to count.
     * @example
     * // Count the number of DesignLineItems
     * const count = await prisma.designLineItem.count({
     *   where: {
     *     // ... the filter for the DesignLineItems we want to count
     *   }
     * })
    **/
    count<T extends DesignLineItemCountArgs>(
      args?: Subset<T, DesignLineItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesignLineItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DesignLineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignLineItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DesignLineItemAggregateArgs>(args: Subset<T, DesignLineItemAggregateArgs>): Prisma.PrismaPromise<GetDesignLineItemAggregateType<T>>

    /**
     * Group by DesignLineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignLineItemGroupByArgs} args - Group by arguments.
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
      T extends DesignLineItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesignLineItemGroupByArgs['orderBy'] }
        : { orderBy?: DesignLineItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DesignLineItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignLineItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DesignLineItem model
   */
  readonly fields: DesignLineItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DesignLineItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesignLineItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    design<T extends DesignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DesignDefaultArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DesignLineItem model
   */
  interface DesignLineItemFieldRefs {
    readonly id: FieldRef<"DesignLineItem", 'String'>
    readonly designId: FieldRef<"DesignLineItem", 'String'>
    readonly size: FieldRef<"DesignLineItem", 'String'>
    readonly qty: FieldRef<"DesignLineItem", 'Int'>
    readonly unitPrice: FieldRef<"DesignLineItem", 'Int'>
    readonly surcharge: FieldRef<"DesignLineItem", 'Int'>
    readonly createdAt: FieldRef<"DesignLineItem", 'DateTime'>
    readonly updatedAt: FieldRef<"DesignLineItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DesignLineItem findUnique
   */
  export type DesignLineItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemInclude<ExtArgs> | null
    /**
     * Filter, which DesignLineItem to fetch.
     */
    where: DesignLineItemWhereUniqueInput
  }

  /**
   * DesignLineItem findUniqueOrThrow
   */
  export type DesignLineItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemInclude<ExtArgs> | null
    /**
     * Filter, which DesignLineItem to fetch.
     */
    where: DesignLineItemWhereUniqueInput
  }

  /**
   * DesignLineItem findFirst
   */
  export type DesignLineItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemInclude<ExtArgs> | null
    /**
     * Filter, which DesignLineItem to fetch.
     */
    where?: DesignLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignLineItems to fetch.
     */
    orderBy?: DesignLineItemOrderByWithRelationInput | DesignLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesignLineItems.
     */
    cursor?: DesignLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesignLineItems.
     */
    distinct?: DesignLineItemScalarFieldEnum | DesignLineItemScalarFieldEnum[]
  }

  /**
   * DesignLineItem findFirstOrThrow
   */
  export type DesignLineItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemInclude<ExtArgs> | null
    /**
     * Filter, which DesignLineItem to fetch.
     */
    where?: DesignLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignLineItems to fetch.
     */
    orderBy?: DesignLineItemOrderByWithRelationInput | DesignLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesignLineItems.
     */
    cursor?: DesignLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesignLineItems.
     */
    distinct?: DesignLineItemScalarFieldEnum | DesignLineItemScalarFieldEnum[]
  }

  /**
   * DesignLineItem findMany
   */
  export type DesignLineItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemInclude<ExtArgs> | null
    /**
     * Filter, which DesignLineItems to fetch.
     */
    where?: DesignLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignLineItems to fetch.
     */
    orderBy?: DesignLineItemOrderByWithRelationInput | DesignLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DesignLineItems.
     */
    cursor?: DesignLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignLineItems.
     */
    skip?: number
    distinct?: DesignLineItemScalarFieldEnum | DesignLineItemScalarFieldEnum[]
  }

  /**
   * DesignLineItem create
   */
  export type DesignLineItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemInclude<ExtArgs> | null
    /**
     * The data needed to create a DesignLineItem.
     */
    data: XOR<DesignLineItemCreateInput, DesignLineItemUncheckedCreateInput>
  }

  /**
   * DesignLineItem createMany
   */
  export type DesignLineItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DesignLineItems.
     */
    data: DesignLineItemCreateManyInput | DesignLineItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DesignLineItem createManyAndReturn
   */
  export type DesignLineItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * The data used to create many DesignLineItems.
     */
    data: DesignLineItemCreateManyInput | DesignLineItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DesignLineItem update
   */
  export type DesignLineItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemInclude<ExtArgs> | null
    /**
     * The data needed to update a DesignLineItem.
     */
    data: XOR<DesignLineItemUpdateInput, DesignLineItemUncheckedUpdateInput>
    /**
     * Choose, which DesignLineItem to update.
     */
    where: DesignLineItemWhereUniqueInput
  }

  /**
   * DesignLineItem updateMany
   */
  export type DesignLineItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DesignLineItems.
     */
    data: XOR<DesignLineItemUpdateManyMutationInput, DesignLineItemUncheckedUpdateManyInput>
    /**
     * Filter which DesignLineItems to update
     */
    where?: DesignLineItemWhereInput
    /**
     * Limit how many DesignLineItems to update.
     */
    limit?: number
  }

  /**
   * DesignLineItem updateManyAndReturn
   */
  export type DesignLineItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * The data used to update DesignLineItems.
     */
    data: XOR<DesignLineItemUpdateManyMutationInput, DesignLineItemUncheckedUpdateManyInput>
    /**
     * Filter which DesignLineItems to update
     */
    where?: DesignLineItemWhereInput
    /**
     * Limit how many DesignLineItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DesignLineItem upsert
   */
  export type DesignLineItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemInclude<ExtArgs> | null
    /**
     * The filter to search for the DesignLineItem to update in case it exists.
     */
    where: DesignLineItemWhereUniqueInput
    /**
     * In case the DesignLineItem found by the `where` argument doesn't exist, create a new DesignLineItem with this data.
     */
    create: XOR<DesignLineItemCreateInput, DesignLineItemUncheckedCreateInput>
    /**
     * In case the DesignLineItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesignLineItemUpdateInput, DesignLineItemUncheckedUpdateInput>
  }

  /**
   * DesignLineItem delete
   */
  export type DesignLineItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemInclude<ExtArgs> | null
    /**
     * Filter which DesignLineItem to delete.
     */
    where: DesignLineItemWhereUniqueInput
  }

  /**
   * DesignLineItem deleteMany
   */
  export type DesignLineItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesignLineItems to delete
     */
    where?: DesignLineItemWhereInput
    /**
     * Limit how many DesignLineItems to delete.
     */
    limit?: number
  }

  /**
   * DesignLineItem without action
   */
  export type DesignLineItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignLineItem
     */
    select?: DesignLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignLineItem
     */
    omit?: DesignLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignLineItemInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    designId: string | null
    total: number | null
    currency: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    designId: string | null
    total: number | null
    currency: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    designId: number
    total: number
    currency: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total?: true
  }

  export type OrderSumAggregateInputType = {
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    designId?: true
    total?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    designId?: true
    total?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    designId?: true
    total?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    designId: string
    total: number
    currency: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    designId?: boolean
    total?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    design?: boolean | DesignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    designId?: boolean
    total?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    design?: boolean | DesignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    designId?: boolean
    total?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    design?: boolean | DesignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    designId?: boolean
    total?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "designId" | "total" | "currency" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    design?: boolean | DesignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    design?: boolean | DesignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    design?: boolean | DesignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      design: Prisma.$DesignPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      designId: string
      total: number
      currency: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    design<T extends DesignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DesignDefaultArgs<ExtArgs>>): Prisma__DesignClient<$Result.GetResult<Prisma.$DesignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly designId: FieldRef<"Order", 'String'>
    readonly total: FieldRef<"Order", 'Int'>
    readonly currency: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    phone: 'phone',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clerkUserId: 'clerkUserId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DesignScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    color: 'color',
    status: 'status',
    pricingBase: 'pricingBase',
    pricingFees: 'pricingFees',
    pricingTotal: 'pricingTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DesignScalarFieldEnum = (typeof DesignScalarFieldEnum)[keyof typeof DesignScalarFieldEnum]


  export const DesignPlacementScalarFieldEnum: {
    id: 'id',
    designId: 'designId',
    side: 'side',
    areaId: 'areaId',
    assetId: 'assetId',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DesignPlacementScalarFieldEnum = (typeof DesignPlacementScalarFieldEnum)[keyof typeof DesignPlacementScalarFieldEnum]


  export const DesignCommentScalarFieldEnum: {
    id: 'id',
    designId: 'designId',
    body: 'body',
    createdAt: 'createdAt',
    authorId: 'authorId'
  };

  export type DesignCommentScalarFieldEnum = (typeof DesignCommentScalarFieldEnum)[keyof typeof DesignCommentScalarFieldEnum]


  export const DesignLineItemScalarFieldEnum: {
    id: 'id',
    designId: 'designId',
    size: 'size',
    qty: 'qty',
    unitPrice: 'unitPrice',
    surcharge: 'surcharge',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DesignLineItemScalarFieldEnum = (typeof DesignLineItemScalarFieldEnum)[keyof typeof DesignLineItemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    designId: 'designId',
    total: 'total',
    currency: 'currency',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DesignStatus'
   */
  export type EnumDesignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DesignStatus'>
    


  /**
   * Reference to a field of type 'DesignStatus[]'
   */
  export type ListEnumDesignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DesignStatus[]'>
    


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
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clerkUserId?: StringFilter<"User"> | string
    designs?: DesignListRelationFilter
    DesignComment?: DesignCommentListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkUserId?: SortOrder
    designs?: DesignOrderByRelationAggregateInput
    DesignComment?: DesignCommentOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    clerkUserId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    designs?: DesignListRelationFilter
    DesignComment?: DesignCommentListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "email" | "clerkUserId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkUserId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    clerkUserId?: StringWithAggregatesFilter<"User"> | string
  }

  export type DesignWhereInput = {
    AND?: DesignWhereInput | DesignWhereInput[]
    OR?: DesignWhereInput[]
    NOT?: DesignWhereInput | DesignWhereInput[]
    id?: StringFilter<"Design"> | string
    userId?: StringFilter<"Design"> | string
    productId?: StringFilter<"Design"> | string
    color?: StringNullableFilter<"Design"> | string | null
    status?: EnumDesignStatusFilter<"Design"> | $Enums.DesignStatus
    pricingBase?: IntFilter<"Design"> | number
    pricingFees?: IntFilter<"Design"> | number
    pricingTotal?: IntFilter<"Design"> | number
    createdAt?: DateTimeFilter<"Design"> | Date | string
    updatedAt?: DateTimeFilter<"Design"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: DesignCommentListRelationFilter
    lineItems?: DesignLineItemListRelationFilter
    placements?: DesignPlacementListRelationFilter
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }

  export type DesignOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    color?: SortOrderInput | SortOrder
    status?: SortOrder
    pricingBase?: SortOrder
    pricingFees?: SortOrder
    pricingTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    comments?: DesignCommentOrderByRelationAggregateInput
    lineItems?: DesignLineItemOrderByRelationAggregateInput
    placements?: DesignPlacementOrderByRelationAggregateInput
    order?: OrderOrderByWithRelationInput
  }

  export type DesignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DesignWhereInput | DesignWhereInput[]
    OR?: DesignWhereInput[]
    NOT?: DesignWhereInput | DesignWhereInput[]
    userId?: StringFilter<"Design"> | string
    productId?: StringFilter<"Design"> | string
    color?: StringNullableFilter<"Design"> | string | null
    status?: EnumDesignStatusFilter<"Design"> | $Enums.DesignStatus
    pricingBase?: IntFilter<"Design"> | number
    pricingFees?: IntFilter<"Design"> | number
    pricingTotal?: IntFilter<"Design"> | number
    createdAt?: DateTimeFilter<"Design"> | Date | string
    updatedAt?: DateTimeFilter<"Design"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: DesignCommentListRelationFilter
    lineItems?: DesignLineItemListRelationFilter
    placements?: DesignPlacementListRelationFilter
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }, "id">

  export type DesignOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    color?: SortOrderInput | SortOrder
    status?: SortOrder
    pricingBase?: SortOrder
    pricingFees?: SortOrder
    pricingTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DesignCountOrderByAggregateInput
    _avg?: DesignAvgOrderByAggregateInput
    _max?: DesignMaxOrderByAggregateInput
    _min?: DesignMinOrderByAggregateInput
    _sum?: DesignSumOrderByAggregateInput
  }

  export type DesignScalarWhereWithAggregatesInput = {
    AND?: DesignScalarWhereWithAggregatesInput | DesignScalarWhereWithAggregatesInput[]
    OR?: DesignScalarWhereWithAggregatesInput[]
    NOT?: DesignScalarWhereWithAggregatesInput | DesignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Design"> | string
    userId?: StringWithAggregatesFilter<"Design"> | string
    productId?: StringWithAggregatesFilter<"Design"> | string
    color?: StringNullableWithAggregatesFilter<"Design"> | string | null
    status?: EnumDesignStatusWithAggregatesFilter<"Design"> | $Enums.DesignStatus
    pricingBase?: IntWithAggregatesFilter<"Design"> | number
    pricingFees?: IntWithAggregatesFilter<"Design"> | number
    pricingTotal?: IntWithAggregatesFilter<"Design"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Design"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Design"> | Date | string
  }

  export type DesignPlacementWhereInput = {
    AND?: DesignPlacementWhereInput | DesignPlacementWhereInput[]
    OR?: DesignPlacementWhereInput[]
    NOT?: DesignPlacementWhereInput | DesignPlacementWhereInput[]
    id?: StringFilter<"DesignPlacement"> | string
    designId?: StringFilter<"DesignPlacement"> | string
    side?: StringFilter<"DesignPlacement"> | string
    areaId?: StringFilter<"DesignPlacement"> | string
    assetId?: StringFilter<"DesignPlacement"> | string
    url?: StringFilter<"DesignPlacement"> | string
    createdAt?: DateTimeFilter<"DesignPlacement"> | Date | string
    updatedAt?: DateTimeFilter<"DesignPlacement"> | Date | string
    design?: XOR<DesignScalarRelationFilter, DesignWhereInput>
  }

  export type DesignPlacementOrderByWithRelationInput = {
    id?: SortOrder
    designId?: SortOrder
    side?: SortOrder
    areaId?: SortOrder
    assetId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    design?: DesignOrderByWithRelationInput
  }

  export type DesignPlacementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    designId_side?: DesignPlacementDesignId_sideCompoundUniqueInput
    AND?: DesignPlacementWhereInput | DesignPlacementWhereInput[]
    OR?: DesignPlacementWhereInput[]
    NOT?: DesignPlacementWhereInput | DesignPlacementWhereInput[]
    designId?: StringFilter<"DesignPlacement"> | string
    side?: StringFilter<"DesignPlacement"> | string
    areaId?: StringFilter<"DesignPlacement"> | string
    assetId?: StringFilter<"DesignPlacement"> | string
    url?: StringFilter<"DesignPlacement"> | string
    createdAt?: DateTimeFilter<"DesignPlacement"> | Date | string
    updatedAt?: DateTimeFilter<"DesignPlacement"> | Date | string
    design?: XOR<DesignScalarRelationFilter, DesignWhereInput>
  }, "id" | "designId_side">

  export type DesignPlacementOrderByWithAggregationInput = {
    id?: SortOrder
    designId?: SortOrder
    side?: SortOrder
    areaId?: SortOrder
    assetId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DesignPlacementCountOrderByAggregateInput
    _max?: DesignPlacementMaxOrderByAggregateInput
    _min?: DesignPlacementMinOrderByAggregateInput
  }

  export type DesignPlacementScalarWhereWithAggregatesInput = {
    AND?: DesignPlacementScalarWhereWithAggregatesInput | DesignPlacementScalarWhereWithAggregatesInput[]
    OR?: DesignPlacementScalarWhereWithAggregatesInput[]
    NOT?: DesignPlacementScalarWhereWithAggregatesInput | DesignPlacementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DesignPlacement"> | string
    designId?: StringWithAggregatesFilter<"DesignPlacement"> | string
    side?: StringWithAggregatesFilter<"DesignPlacement"> | string
    areaId?: StringWithAggregatesFilter<"DesignPlacement"> | string
    assetId?: StringWithAggregatesFilter<"DesignPlacement"> | string
    url?: StringWithAggregatesFilter<"DesignPlacement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DesignPlacement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DesignPlacement"> | Date | string
  }

  export type DesignCommentWhereInput = {
    AND?: DesignCommentWhereInput | DesignCommentWhereInput[]
    OR?: DesignCommentWhereInput[]
    NOT?: DesignCommentWhereInput | DesignCommentWhereInput[]
    id?: StringFilter<"DesignComment"> | string
    designId?: StringFilter<"DesignComment"> | string
    body?: StringFilter<"DesignComment"> | string
    createdAt?: DateTimeFilter<"DesignComment"> | Date | string
    authorId?: StringNullableFilter<"DesignComment"> | string | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    design?: XOR<DesignScalarRelationFilter, DesignWhereInput>
  }

  export type DesignCommentOrderByWithRelationInput = {
    id?: SortOrder
    designId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    design?: DesignOrderByWithRelationInput
  }

  export type DesignCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DesignCommentWhereInput | DesignCommentWhereInput[]
    OR?: DesignCommentWhereInput[]
    NOT?: DesignCommentWhereInput | DesignCommentWhereInput[]
    designId?: StringFilter<"DesignComment"> | string
    body?: StringFilter<"DesignComment"> | string
    createdAt?: DateTimeFilter<"DesignComment"> | Date | string
    authorId?: StringNullableFilter<"DesignComment"> | string | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    design?: XOR<DesignScalarRelationFilter, DesignWhereInput>
  }, "id">

  export type DesignCommentOrderByWithAggregationInput = {
    id?: SortOrder
    designId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrderInput | SortOrder
    _count?: DesignCommentCountOrderByAggregateInput
    _max?: DesignCommentMaxOrderByAggregateInput
    _min?: DesignCommentMinOrderByAggregateInput
  }

  export type DesignCommentScalarWhereWithAggregatesInput = {
    AND?: DesignCommentScalarWhereWithAggregatesInput | DesignCommentScalarWhereWithAggregatesInput[]
    OR?: DesignCommentScalarWhereWithAggregatesInput[]
    NOT?: DesignCommentScalarWhereWithAggregatesInput | DesignCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DesignComment"> | string
    designId?: StringWithAggregatesFilter<"DesignComment"> | string
    body?: StringWithAggregatesFilter<"DesignComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DesignComment"> | Date | string
    authorId?: StringNullableWithAggregatesFilter<"DesignComment"> | string | null
  }

  export type DesignLineItemWhereInput = {
    AND?: DesignLineItemWhereInput | DesignLineItemWhereInput[]
    OR?: DesignLineItemWhereInput[]
    NOT?: DesignLineItemWhereInput | DesignLineItemWhereInput[]
    id?: StringFilter<"DesignLineItem"> | string
    designId?: StringFilter<"DesignLineItem"> | string
    size?: StringFilter<"DesignLineItem"> | string
    qty?: IntFilter<"DesignLineItem"> | number
    unitPrice?: IntFilter<"DesignLineItem"> | number
    surcharge?: IntFilter<"DesignLineItem"> | number
    createdAt?: DateTimeFilter<"DesignLineItem"> | Date | string
    updatedAt?: DateTimeFilter<"DesignLineItem"> | Date | string
    design?: XOR<DesignScalarRelationFilter, DesignWhereInput>
  }

  export type DesignLineItemOrderByWithRelationInput = {
    id?: SortOrder
    designId?: SortOrder
    size?: SortOrder
    qty?: SortOrder
    unitPrice?: SortOrder
    surcharge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    design?: DesignOrderByWithRelationInput
  }

  export type DesignLineItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DesignLineItemWhereInput | DesignLineItemWhereInput[]
    OR?: DesignLineItemWhereInput[]
    NOT?: DesignLineItemWhereInput | DesignLineItemWhereInput[]
    designId?: StringFilter<"DesignLineItem"> | string
    size?: StringFilter<"DesignLineItem"> | string
    qty?: IntFilter<"DesignLineItem"> | number
    unitPrice?: IntFilter<"DesignLineItem"> | number
    surcharge?: IntFilter<"DesignLineItem"> | number
    createdAt?: DateTimeFilter<"DesignLineItem"> | Date | string
    updatedAt?: DateTimeFilter<"DesignLineItem"> | Date | string
    design?: XOR<DesignScalarRelationFilter, DesignWhereInput>
  }, "id">

  export type DesignLineItemOrderByWithAggregationInput = {
    id?: SortOrder
    designId?: SortOrder
    size?: SortOrder
    qty?: SortOrder
    unitPrice?: SortOrder
    surcharge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DesignLineItemCountOrderByAggregateInput
    _avg?: DesignLineItemAvgOrderByAggregateInput
    _max?: DesignLineItemMaxOrderByAggregateInput
    _min?: DesignLineItemMinOrderByAggregateInput
    _sum?: DesignLineItemSumOrderByAggregateInput
  }

  export type DesignLineItemScalarWhereWithAggregatesInput = {
    AND?: DesignLineItemScalarWhereWithAggregatesInput | DesignLineItemScalarWhereWithAggregatesInput[]
    OR?: DesignLineItemScalarWhereWithAggregatesInput[]
    NOT?: DesignLineItemScalarWhereWithAggregatesInput | DesignLineItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DesignLineItem"> | string
    designId?: StringWithAggregatesFilter<"DesignLineItem"> | string
    size?: StringWithAggregatesFilter<"DesignLineItem"> | string
    qty?: IntWithAggregatesFilter<"DesignLineItem"> | number
    unitPrice?: IntWithAggregatesFilter<"DesignLineItem"> | number
    surcharge?: IntWithAggregatesFilter<"DesignLineItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DesignLineItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DesignLineItem"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    designId?: StringFilter<"Order"> | string
    total?: IntFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    design?: XOR<DesignScalarRelationFilter, DesignWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    designId?: SortOrder
    total?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    design?: DesignOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    designId?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    total?: IntFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    design?: XOR<DesignScalarRelationFilter, DesignWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "designId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    designId?: SortOrder
    total?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    designId?: StringWithAggregatesFilter<"Order"> | string
    total?: IntWithAggregatesFilter<"Order"> | number
    currency?: StringWithAggregatesFilter<"Order"> | string
    status?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkUserId: string
    designs?: DesignCreateNestedManyWithoutUserInput
    DesignComment?: DesignCommentCreateNestedManyWithoutAuthorInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkUserId: string
    designs?: DesignUncheckedCreateNestedManyWithoutUserInput
    DesignComment?: DesignCommentUncheckedCreateNestedManyWithoutAuthorInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    designs?: DesignUpdateManyWithoutUserNestedInput
    DesignComment?: DesignCommentUpdateManyWithoutAuthorNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    designs?: DesignUncheckedUpdateManyWithoutUserNestedInput
    DesignComment?: DesignCommentUncheckedUpdateManyWithoutAuthorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkUserId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
  }

  export type DesignCreateInput = {
    id?: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDesignsInput
    comments?: DesignCommentCreateNestedManyWithoutDesignInput
    lineItems?: DesignLineItemCreateNestedManyWithoutDesignInput
    placements?: DesignPlacementCreateNestedManyWithoutDesignInput
    order?: OrderCreateNestedOneWithoutDesignInput
  }

  export type DesignUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: DesignCommentUncheckedCreateNestedManyWithoutDesignInput
    lineItems?: DesignLineItemUncheckedCreateNestedManyWithoutDesignInput
    placements?: DesignPlacementUncheckedCreateNestedManyWithoutDesignInput
    order?: OrderUncheckedCreateNestedOneWithoutDesignInput
  }

  export type DesignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDesignsNestedInput
    comments?: DesignCommentUpdateManyWithoutDesignNestedInput
    lineItems?: DesignLineItemUpdateManyWithoutDesignNestedInput
    placements?: DesignPlacementUpdateManyWithoutDesignNestedInput
    order?: OrderUpdateOneWithoutDesignNestedInput
  }

  export type DesignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: DesignCommentUncheckedUpdateManyWithoutDesignNestedInput
    lineItems?: DesignLineItemUncheckedUpdateManyWithoutDesignNestedInput
    placements?: DesignPlacementUncheckedUpdateManyWithoutDesignNestedInput
    order?: OrderUncheckedUpdateOneWithoutDesignNestedInput
  }

  export type DesignCreateManyInput = {
    id?: string
    userId: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignPlacementCreateInput = {
    id?: string
    side: string
    areaId: string
    assetId: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    design: DesignCreateNestedOneWithoutPlacementsInput
  }

  export type DesignPlacementUncheckedCreateInput = {
    id?: string
    designId: string
    side: string
    areaId: string
    assetId: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignPlacementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    design?: DesignUpdateOneRequiredWithoutPlacementsNestedInput
  }

  export type DesignPlacementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    designId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignPlacementCreateManyInput = {
    id?: string
    designId: string
    side: string
    areaId: string
    assetId: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignPlacementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignPlacementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    designId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignCommentCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    author?: UserCreateNestedOneWithoutDesignCommentInput
    design: DesignCreateNestedOneWithoutCommentsInput
  }

  export type DesignCommentUncheckedCreateInput = {
    id?: string
    designId: string
    body: string
    createdAt?: Date | string
    authorId?: string | null
  }

  export type DesignCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutDesignCommentNestedInput
    design?: DesignUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type DesignCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    designId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DesignCommentCreateManyInput = {
    id?: string
    designId: string
    body: string
    createdAt?: Date | string
    authorId?: string | null
  }

  export type DesignCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    designId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DesignLineItemCreateInput = {
    id?: string
    size: string
    qty?: number
    unitPrice: number
    surcharge?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    design: DesignCreateNestedOneWithoutLineItemsInput
  }

  export type DesignLineItemUncheckedCreateInput = {
    id?: string
    designId: string
    size: string
    qty?: number
    unitPrice: number
    surcharge?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignLineItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    surcharge?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    design?: DesignUpdateOneRequiredWithoutLineItemsNestedInput
  }

  export type DesignLineItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    designId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    surcharge?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignLineItemCreateManyInput = {
    id?: string
    designId: string
    size: string
    qty?: number
    unitPrice: number
    surcharge?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignLineItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    surcharge?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignLineItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    designId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    surcharge?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    total: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    design: DesignCreateNestedOneWithoutOrderInput
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    designId: string
    total: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    design?: DesignUpdateOneRequiredWithoutOrderNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    designId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    designId: string
    total: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    designId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type DesignListRelationFilter = {
    every?: DesignWhereInput
    some?: DesignWhereInput
    none?: DesignWhereInput
  }

  export type DesignCommentListRelationFilter = {
    every?: DesignCommentWhereInput
    some?: DesignCommentWhereInput
    none?: DesignCommentWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DesignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DesignCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkUserId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkUserId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkUserId?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumDesignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignStatus | EnumDesignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DesignStatus[] | ListEnumDesignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DesignStatus[] | ListEnumDesignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignStatusFilter<$PrismaModel> | $Enums.DesignStatus
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DesignLineItemListRelationFilter = {
    every?: DesignLineItemWhereInput
    some?: DesignLineItemWhereInput
    none?: DesignLineItemWhereInput
  }

  export type DesignPlacementListRelationFilter = {
    every?: DesignPlacementWhereInput
    some?: DesignPlacementWhereInput
    none?: DesignPlacementWhereInput
  }

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type DesignLineItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DesignPlacementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DesignCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    status?: SortOrder
    pricingBase?: SortOrder
    pricingFees?: SortOrder
    pricingTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DesignAvgOrderByAggregateInput = {
    pricingBase?: SortOrder
    pricingFees?: SortOrder
    pricingTotal?: SortOrder
  }

  export type DesignMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    status?: SortOrder
    pricingBase?: SortOrder
    pricingFees?: SortOrder
    pricingTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DesignMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    status?: SortOrder
    pricingBase?: SortOrder
    pricingFees?: SortOrder
    pricingTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DesignSumOrderByAggregateInput = {
    pricingBase?: SortOrder
    pricingFees?: SortOrder
    pricingTotal?: SortOrder
  }

  export type EnumDesignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignStatus | EnumDesignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DesignStatus[] | ListEnumDesignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DesignStatus[] | ListEnumDesignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignStatusWithAggregatesFilter<$PrismaModel> | $Enums.DesignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDesignStatusFilter<$PrismaModel>
    _max?: NestedEnumDesignStatusFilter<$PrismaModel>
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

  export type DesignScalarRelationFilter = {
    is?: DesignWhereInput
    isNot?: DesignWhereInput
  }

  export type DesignPlacementDesignId_sideCompoundUniqueInput = {
    designId: string
    side: string
  }

  export type DesignPlacementCountOrderByAggregateInput = {
    id?: SortOrder
    designId?: SortOrder
    side?: SortOrder
    areaId?: SortOrder
    assetId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DesignPlacementMaxOrderByAggregateInput = {
    id?: SortOrder
    designId?: SortOrder
    side?: SortOrder
    areaId?: SortOrder
    assetId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DesignPlacementMinOrderByAggregateInput = {
    id?: SortOrder
    designId?: SortOrder
    side?: SortOrder
    areaId?: SortOrder
    assetId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DesignCommentCountOrderByAggregateInput = {
    id?: SortOrder
    designId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type DesignCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    designId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type DesignCommentMinOrderByAggregateInput = {
    id?: SortOrder
    designId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type DesignLineItemCountOrderByAggregateInput = {
    id?: SortOrder
    designId?: SortOrder
    size?: SortOrder
    qty?: SortOrder
    unitPrice?: SortOrder
    surcharge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DesignLineItemAvgOrderByAggregateInput = {
    qty?: SortOrder
    unitPrice?: SortOrder
    surcharge?: SortOrder
  }

  export type DesignLineItemMaxOrderByAggregateInput = {
    id?: SortOrder
    designId?: SortOrder
    size?: SortOrder
    qty?: SortOrder
    unitPrice?: SortOrder
    surcharge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DesignLineItemMinOrderByAggregateInput = {
    id?: SortOrder
    designId?: SortOrder
    size?: SortOrder
    qty?: SortOrder
    unitPrice?: SortOrder
    surcharge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DesignLineItemSumOrderByAggregateInput = {
    qty?: SortOrder
    unitPrice?: SortOrder
    surcharge?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    designId?: SortOrder
    total?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    designId?: SortOrder
    total?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    designId?: SortOrder
    total?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type DesignCreateNestedManyWithoutUserInput = {
    create?: XOR<DesignCreateWithoutUserInput, DesignUncheckedCreateWithoutUserInput> | DesignCreateWithoutUserInput[] | DesignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DesignCreateOrConnectWithoutUserInput | DesignCreateOrConnectWithoutUserInput[]
    createMany?: DesignCreateManyUserInputEnvelope
    connect?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
  }

  export type DesignCommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<DesignCommentCreateWithoutAuthorInput, DesignCommentUncheckedCreateWithoutAuthorInput> | DesignCommentCreateWithoutAuthorInput[] | DesignCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DesignCommentCreateOrConnectWithoutAuthorInput | DesignCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: DesignCommentCreateManyAuthorInputEnvelope
    connect?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type DesignUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DesignCreateWithoutUserInput, DesignUncheckedCreateWithoutUserInput> | DesignCreateWithoutUserInput[] | DesignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DesignCreateOrConnectWithoutUserInput | DesignCreateOrConnectWithoutUserInput[]
    createMany?: DesignCreateManyUserInputEnvelope
    connect?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
  }

  export type DesignCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<DesignCommentCreateWithoutAuthorInput, DesignCommentUncheckedCreateWithoutAuthorInput> | DesignCommentCreateWithoutAuthorInput[] | DesignCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DesignCommentCreateOrConnectWithoutAuthorInput | DesignCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: DesignCommentCreateManyAuthorInputEnvelope
    connect?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DesignUpdateManyWithoutUserNestedInput = {
    create?: XOR<DesignCreateWithoutUserInput, DesignUncheckedCreateWithoutUserInput> | DesignCreateWithoutUserInput[] | DesignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DesignCreateOrConnectWithoutUserInput | DesignCreateOrConnectWithoutUserInput[]
    upsert?: DesignUpsertWithWhereUniqueWithoutUserInput | DesignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DesignCreateManyUserInputEnvelope
    set?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    disconnect?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    delete?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    connect?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    update?: DesignUpdateWithWhereUniqueWithoutUserInput | DesignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DesignUpdateManyWithWhereWithoutUserInput | DesignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DesignScalarWhereInput | DesignScalarWhereInput[]
  }

  export type DesignCommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<DesignCommentCreateWithoutAuthorInput, DesignCommentUncheckedCreateWithoutAuthorInput> | DesignCommentCreateWithoutAuthorInput[] | DesignCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DesignCommentCreateOrConnectWithoutAuthorInput | DesignCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: DesignCommentUpsertWithWhereUniqueWithoutAuthorInput | DesignCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: DesignCommentCreateManyAuthorInputEnvelope
    set?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    disconnect?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    delete?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    connect?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    update?: DesignCommentUpdateWithWhereUniqueWithoutAuthorInput | DesignCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: DesignCommentUpdateManyWithWhereWithoutAuthorInput | DesignCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: DesignCommentScalarWhereInput | DesignCommentScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type DesignUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DesignCreateWithoutUserInput, DesignUncheckedCreateWithoutUserInput> | DesignCreateWithoutUserInput[] | DesignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DesignCreateOrConnectWithoutUserInput | DesignCreateOrConnectWithoutUserInput[]
    upsert?: DesignUpsertWithWhereUniqueWithoutUserInput | DesignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DesignCreateManyUserInputEnvelope
    set?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    disconnect?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    delete?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    connect?: DesignWhereUniqueInput | DesignWhereUniqueInput[]
    update?: DesignUpdateWithWhereUniqueWithoutUserInput | DesignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DesignUpdateManyWithWhereWithoutUserInput | DesignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DesignScalarWhereInput | DesignScalarWhereInput[]
  }

  export type DesignCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<DesignCommentCreateWithoutAuthorInput, DesignCommentUncheckedCreateWithoutAuthorInput> | DesignCommentCreateWithoutAuthorInput[] | DesignCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DesignCommentCreateOrConnectWithoutAuthorInput | DesignCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: DesignCommentUpsertWithWhereUniqueWithoutAuthorInput | DesignCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: DesignCommentCreateManyAuthorInputEnvelope
    set?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    disconnect?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    delete?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    connect?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    update?: DesignCommentUpdateWithWhereUniqueWithoutAuthorInput | DesignCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: DesignCommentUpdateManyWithWhereWithoutAuthorInput | DesignCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: DesignCommentScalarWhereInput | DesignCommentScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDesignsInput = {
    create?: XOR<UserCreateWithoutDesignsInput, UserUncheckedCreateWithoutDesignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDesignsInput
    connect?: UserWhereUniqueInput
  }

  export type DesignCommentCreateNestedManyWithoutDesignInput = {
    create?: XOR<DesignCommentCreateWithoutDesignInput, DesignCommentUncheckedCreateWithoutDesignInput> | DesignCommentCreateWithoutDesignInput[] | DesignCommentUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: DesignCommentCreateOrConnectWithoutDesignInput | DesignCommentCreateOrConnectWithoutDesignInput[]
    createMany?: DesignCommentCreateManyDesignInputEnvelope
    connect?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
  }

  export type DesignLineItemCreateNestedManyWithoutDesignInput = {
    create?: XOR<DesignLineItemCreateWithoutDesignInput, DesignLineItemUncheckedCreateWithoutDesignInput> | DesignLineItemCreateWithoutDesignInput[] | DesignLineItemUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: DesignLineItemCreateOrConnectWithoutDesignInput | DesignLineItemCreateOrConnectWithoutDesignInput[]
    createMany?: DesignLineItemCreateManyDesignInputEnvelope
    connect?: DesignLineItemWhereUniqueInput | DesignLineItemWhereUniqueInput[]
  }

  export type DesignPlacementCreateNestedManyWithoutDesignInput = {
    create?: XOR<DesignPlacementCreateWithoutDesignInput, DesignPlacementUncheckedCreateWithoutDesignInput> | DesignPlacementCreateWithoutDesignInput[] | DesignPlacementUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: DesignPlacementCreateOrConnectWithoutDesignInput | DesignPlacementCreateOrConnectWithoutDesignInput[]
    createMany?: DesignPlacementCreateManyDesignInputEnvelope
    connect?: DesignPlacementWhereUniqueInput | DesignPlacementWhereUniqueInput[]
  }

  export type OrderCreateNestedOneWithoutDesignInput = {
    create?: XOR<OrderCreateWithoutDesignInput, OrderUncheckedCreateWithoutDesignInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDesignInput
    connect?: OrderWhereUniqueInput
  }

  export type DesignCommentUncheckedCreateNestedManyWithoutDesignInput = {
    create?: XOR<DesignCommentCreateWithoutDesignInput, DesignCommentUncheckedCreateWithoutDesignInput> | DesignCommentCreateWithoutDesignInput[] | DesignCommentUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: DesignCommentCreateOrConnectWithoutDesignInput | DesignCommentCreateOrConnectWithoutDesignInput[]
    createMany?: DesignCommentCreateManyDesignInputEnvelope
    connect?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
  }

  export type DesignLineItemUncheckedCreateNestedManyWithoutDesignInput = {
    create?: XOR<DesignLineItemCreateWithoutDesignInput, DesignLineItemUncheckedCreateWithoutDesignInput> | DesignLineItemCreateWithoutDesignInput[] | DesignLineItemUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: DesignLineItemCreateOrConnectWithoutDesignInput | DesignLineItemCreateOrConnectWithoutDesignInput[]
    createMany?: DesignLineItemCreateManyDesignInputEnvelope
    connect?: DesignLineItemWhereUniqueInput | DesignLineItemWhereUniqueInput[]
  }

  export type DesignPlacementUncheckedCreateNestedManyWithoutDesignInput = {
    create?: XOR<DesignPlacementCreateWithoutDesignInput, DesignPlacementUncheckedCreateWithoutDesignInput> | DesignPlacementCreateWithoutDesignInput[] | DesignPlacementUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: DesignPlacementCreateOrConnectWithoutDesignInput | DesignPlacementCreateOrConnectWithoutDesignInput[]
    createMany?: DesignPlacementCreateManyDesignInputEnvelope
    connect?: DesignPlacementWhereUniqueInput | DesignPlacementWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedOneWithoutDesignInput = {
    create?: XOR<OrderCreateWithoutDesignInput, OrderUncheckedCreateWithoutDesignInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDesignInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumDesignStatusFieldUpdateOperationsInput = {
    set?: $Enums.DesignStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDesignsNestedInput = {
    create?: XOR<UserCreateWithoutDesignsInput, UserUncheckedCreateWithoutDesignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDesignsInput
    upsert?: UserUpsertWithoutDesignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDesignsInput, UserUpdateWithoutDesignsInput>, UserUncheckedUpdateWithoutDesignsInput>
  }

  export type DesignCommentUpdateManyWithoutDesignNestedInput = {
    create?: XOR<DesignCommentCreateWithoutDesignInput, DesignCommentUncheckedCreateWithoutDesignInput> | DesignCommentCreateWithoutDesignInput[] | DesignCommentUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: DesignCommentCreateOrConnectWithoutDesignInput | DesignCommentCreateOrConnectWithoutDesignInput[]
    upsert?: DesignCommentUpsertWithWhereUniqueWithoutDesignInput | DesignCommentUpsertWithWhereUniqueWithoutDesignInput[]
    createMany?: DesignCommentCreateManyDesignInputEnvelope
    set?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    disconnect?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    delete?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    connect?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    update?: DesignCommentUpdateWithWhereUniqueWithoutDesignInput | DesignCommentUpdateWithWhereUniqueWithoutDesignInput[]
    updateMany?: DesignCommentUpdateManyWithWhereWithoutDesignInput | DesignCommentUpdateManyWithWhereWithoutDesignInput[]
    deleteMany?: DesignCommentScalarWhereInput | DesignCommentScalarWhereInput[]
  }

  export type DesignLineItemUpdateManyWithoutDesignNestedInput = {
    create?: XOR<DesignLineItemCreateWithoutDesignInput, DesignLineItemUncheckedCreateWithoutDesignInput> | DesignLineItemCreateWithoutDesignInput[] | DesignLineItemUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: DesignLineItemCreateOrConnectWithoutDesignInput | DesignLineItemCreateOrConnectWithoutDesignInput[]
    upsert?: DesignLineItemUpsertWithWhereUniqueWithoutDesignInput | DesignLineItemUpsertWithWhereUniqueWithoutDesignInput[]
    createMany?: DesignLineItemCreateManyDesignInputEnvelope
    set?: DesignLineItemWhereUniqueInput | DesignLineItemWhereUniqueInput[]
    disconnect?: DesignLineItemWhereUniqueInput | DesignLineItemWhereUniqueInput[]
    delete?: DesignLineItemWhereUniqueInput | DesignLineItemWhereUniqueInput[]
    connect?: DesignLineItemWhereUniqueInput | DesignLineItemWhereUniqueInput[]
    update?: DesignLineItemUpdateWithWhereUniqueWithoutDesignInput | DesignLineItemUpdateWithWhereUniqueWithoutDesignInput[]
    updateMany?: DesignLineItemUpdateManyWithWhereWithoutDesignInput | DesignLineItemUpdateManyWithWhereWithoutDesignInput[]
    deleteMany?: DesignLineItemScalarWhereInput | DesignLineItemScalarWhereInput[]
  }

  export type DesignPlacementUpdateManyWithoutDesignNestedInput = {
    create?: XOR<DesignPlacementCreateWithoutDesignInput, DesignPlacementUncheckedCreateWithoutDesignInput> | DesignPlacementCreateWithoutDesignInput[] | DesignPlacementUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: DesignPlacementCreateOrConnectWithoutDesignInput | DesignPlacementCreateOrConnectWithoutDesignInput[]
    upsert?: DesignPlacementUpsertWithWhereUniqueWithoutDesignInput | DesignPlacementUpsertWithWhereUniqueWithoutDesignInput[]
    createMany?: DesignPlacementCreateManyDesignInputEnvelope
    set?: DesignPlacementWhereUniqueInput | DesignPlacementWhereUniqueInput[]
    disconnect?: DesignPlacementWhereUniqueInput | DesignPlacementWhereUniqueInput[]
    delete?: DesignPlacementWhereUniqueInput | DesignPlacementWhereUniqueInput[]
    connect?: DesignPlacementWhereUniqueInput | DesignPlacementWhereUniqueInput[]
    update?: DesignPlacementUpdateWithWhereUniqueWithoutDesignInput | DesignPlacementUpdateWithWhereUniqueWithoutDesignInput[]
    updateMany?: DesignPlacementUpdateManyWithWhereWithoutDesignInput | DesignPlacementUpdateManyWithWhereWithoutDesignInput[]
    deleteMany?: DesignPlacementScalarWhereInput | DesignPlacementScalarWhereInput[]
  }

  export type OrderUpdateOneWithoutDesignNestedInput = {
    create?: XOR<OrderCreateWithoutDesignInput, OrderUncheckedCreateWithoutDesignInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDesignInput
    upsert?: OrderUpsertWithoutDesignInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutDesignInput, OrderUpdateWithoutDesignInput>, OrderUncheckedUpdateWithoutDesignInput>
  }

  export type DesignCommentUncheckedUpdateManyWithoutDesignNestedInput = {
    create?: XOR<DesignCommentCreateWithoutDesignInput, DesignCommentUncheckedCreateWithoutDesignInput> | DesignCommentCreateWithoutDesignInput[] | DesignCommentUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: DesignCommentCreateOrConnectWithoutDesignInput | DesignCommentCreateOrConnectWithoutDesignInput[]
    upsert?: DesignCommentUpsertWithWhereUniqueWithoutDesignInput | DesignCommentUpsertWithWhereUniqueWithoutDesignInput[]
    createMany?: DesignCommentCreateManyDesignInputEnvelope
    set?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    disconnect?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    delete?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    connect?: DesignCommentWhereUniqueInput | DesignCommentWhereUniqueInput[]
    update?: DesignCommentUpdateWithWhereUniqueWithoutDesignInput | DesignCommentUpdateWithWhereUniqueWithoutDesignInput[]
    updateMany?: DesignCommentUpdateManyWithWhereWithoutDesignInput | DesignCommentUpdateManyWithWhereWithoutDesignInput[]
    deleteMany?: DesignCommentScalarWhereInput | DesignCommentScalarWhereInput[]
  }

  export type DesignLineItemUncheckedUpdateManyWithoutDesignNestedInput = {
    create?: XOR<DesignLineItemCreateWithoutDesignInput, DesignLineItemUncheckedCreateWithoutDesignInput> | DesignLineItemCreateWithoutDesignInput[] | DesignLineItemUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: DesignLineItemCreateOrConnectWithoutDesignInput | DesignLineItemCreateOrConnectWithoutDesignInput[]
    upsert?: DesignLineItemUpsertWithWhereUniqueWithoutDesignInput | DesignLineItemUpsertWithWhereUniqueWithoutDesignInput[]
    createMany?: DesignLineItemCreateManyDesignInputEnvelope
    set?: DesignLineItemWhereUniqueInput | DesignLineItemWhereUniqueInput[]
    disconnect?: DesignLineItemWhereUniqueInput | DesignLineItemWhereUniqueInput[]
    delete?: DesignLineItemWhereUniqueInput | DesignLineItemWhereUniqueInput[]
    connect?: DesignLineItemWhereUniqueInput | DesignLineItemWhereUniqueInput[]
    update?: DesignLineItemUpdateWithWhereUniqueWithoutDesignInput | DesignLineItemUpdateWithWhereUniqueWithoutDesignInput[]
    updateMany?: DesignLineItemUpdateManyWithWhereWithoutDesignInput | DesignLineItemUpdateManyWithWhereWithoutDesignInput[]
    deleteMany?: DesignLineItemScalarWhereInput | DesignLineItemScalarWhereInput[]
  }

  export type DesignPlacementUncheckedUpdateManyWithoutDesignNestedInput = {
    create?: XOR<DesignPlacementCreateWithoutDesignInput, DesignPlacementUncheckedCreateWithoutDesignInput> | DesignPlacementCreateWithoutDesignInput[] | DesignPlacementUncheckedCreateWithoutDesignInput[]
    connectOrCreate?: DesignPlacementCreateOrConnectWithoutDesignInput | DesignPlacementCreateOrConnectWithoutDesignInput[]
    upsert?: DesignPlacementUpsertWithWhereUniqueWithoutDesignInput | DesignPlacementUpsertWithWhereUniqueWithoutDesignInput[]
    createMany?: DesignPlacementCreateManyDesignInputEnvelope
    set?: DesignPlacementWhereUniqueInput | DesignPlacementWhereUniqueInput[]
    disconnect?: DesignPlacementWhereUniqueInput | DesignPlacementWhereUniqueInput[]
    delete?: DesignPlacementWhereUniqueInput | DesignPlacementWhereUniqueInput[]
    connect?: DesignPlacementWhereUniqueInput | DesignPlacementWhereUniqueInput[]
    update?: DesignPlacementUpdateWithWhereUniqueWithoutDesignInput | DesignPlacementUpdateWithWhereUniqueWithoutDesignInput[]
    updateMany?: DesignPlacementUpdateManyWithWhereWithoutDesignInput | DesignPlacementUpdateManyWithWhereWithoutDesignInput[]
    deleteMany?: DesignPlacementScalarWhereInput | DesignPlacementScalarWhereInput[]
  }

  export type OrderUncheckedUpdateOneWithoutDesignNestedInput = {
    create?: XOR<OrderCreateWithoutDesignInput, OrderUncheckedCreateWithoutDesignInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDesignInput
    upsert?: OrderUpsertWithoutDesignInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutDesignInput, OrderUpdateWithoutDesignInput>, OrderUncheckedUpdateWithoutDesignInput>
  }

  export type DesignCreateNestedOneWithoutPlacementsInput = {
    create?: XOR<DesignCreateWithoutPlacementsInput, DesignUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: DesignCreateOrConnectWithoutPlacementsInput
    connect?: DesignWhereUniqueInput
  }

  export type DesignUpdateOneRequiredWithoutPlacementsNestedInput = {
    create?: XOR<DesignCreateWithoutPlacementsInput, DesignUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: DesignCreateOrConnectWithoutPlacementsInput
    upsert?: DesignUpsertWithoutPlacementsInput
    connect?: DesignWhereUniqueInput
    update?: XOR<XOR<DesignUpdateToOneWithWhereWithoutPlacementsInput, DesignUpdateWithoutPlacementsInput>, DesignUncheckedUpdateWithoutPlacementsInput>
  }

  export type UserCreateNestedOneWithoutDesignCommentInput = {
    create?: XOR<UserCreateWithoutDesignCommentInput, UserUncheckedCreateWithoutDesignCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutDesignCommentInput
    connect?: UserWhereUniqueInput
  }

  export type DesignCreateNestedOneWithoutCommentsInput = {
    create?: XOR<DesignCreateWithoutCommentsInput, DesignUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: DesignCreateOrConnectWithoutCommentsInput
    connect?: DesignWhereUniqueInput
  }

  export type UserUpdateOneWithoutDesignCommentNestedInput = {
    create?: XOR<UserCreateWithoutDesignCommentInput, UserUncheckedCreateWithoutDesignCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutDesignCommentInput
    upsert?: UserUpsertWithoutDesignCommentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDesignCommentInput, UserUpdateWithoutDesignCommentInput>, UserUncheckedUpdateWithoutDesignCommentInput>
  }

  export type DesignUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<DesignCreateWithoutCommentsInput, DesignUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: DesignCreateOrConnectWithoutCommentsInput
    upsert?: DesignUpsertWithoutCommentsInput
    connect?: DesignWhereUniqueInput
    update?: XOR<XOR<DesignUpdateToOneWithWhereWithoutCommentsInput, DesignUpdateWithoutCommentsInput>, DesignUncheckedUpdateWithoutCommentsInput>
  }

  export type DesignCreateNestedOneWithoutLineItemsInput = {
    create?: XOR<DesignCreateWithoutLineItemsInput, DesignUncheckedCreateWithoutLineItemsInput>
    connectOrCreate?: DesignCreateOrConnectWithoutLineItemsInput
    connect?: DesignWhereUniqueInput
  }

  export type DesignUpdateOneRequiredWithoutLineItemsNestedInput = {
    create?: XOR<DesignCreateWithoutLineItemsInput, DesignUncheckedCreateWithoutLineItemsInput>
    connectOrCreate?: DesignCreateOrConnectWithoutLineItemsInput
    upsert?: DesignUpsertWithoutLineItemsInput
    connect?: DesignWhereUniqueInput
    update?: XOR<XOR<DesignUpdateToOneWithWhereWithoutLineItemsInput, DesignUpdateWithoutLineItemsInput>, DesignUncheckedUpdateWithoutLineItemsInput>
  }

  export type DesignCreateNestedOneWithoutOrderInput = {
    create?: XOR<DesignCreateWithoutOrderInput, DesignUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DesignCreateOrConnectWithoutOrderInput
    connect?: DesignWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type DesignUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<DesignCreateWithoutOrderInput, DesignUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DesignCreateOrConnectWithoutOrderInput
    upsert?: DesignUpsertWithoutOrderInput
    connect?: DesignWhereUniqueInput
    update?: XOR<XOR<DesignUpdateToOneWithWhereWithoutOrderInput, DesignUpdateWithoutOrderInput>, DesignUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumDesignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignStatus | EnumDesignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DesignStatus[] | ListEnumDesignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DesignStatus[] | ListEnumDesignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignStatusFilter<$PrismaModel> | $Enums.DesignStatus
  }

  export type NestedEnumDesignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignStatus | EnumDesignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DesignStatus[] | ListEnumDesignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DesignStatus[] | ListEnumDesignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDesignStatusWithAggregatesFilter<$PrismaModel> | $Enums.DesignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDesignStatusFilter<$PrismaModel>
    _max?: NestedEnumDesignStatusFilter<$PrismaModel>
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

  export type DesignCreateWithoutUserInput = {
    id?: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: DesignCommentCreateNestedManyWithoutDesignInput
    lineItems?: DesignLineItemCreateNestedManyWithoutDesignInput
    placements?: DesignPlacementCreateNestedManyWithoutDesignInput
    order?: OrderCreateNestedOneWithoutDesignInput
  }

  export type DesignUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: DesignCommentUncheckedCreateNestedManyWithoutDesignInput
    lineItems?: DesignLineItemUncheckedCreateNestedManyWithoutDesignInput
    placements?: DesignPlacementUncheckedCreateNestedManyWithoutDesignInput
    order?: OrderUncheckedCreateNestedOneWithoutDesignInput
  }

  export type DesignCreateOrConnectWithoutUserInput = {
    where: DesignWhereUniqueInput
    create: XOR<DesignCreateWithoutUserInput, DesignUncheckedCreateWithoutUserInput>
  }

  export type DesignCreateManyUserInputEnvelope = {
    data: DesignCreateManyUserInput | DesignCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DesignCommentCreateWithoutAuthorInput = {
    id?: string
    body: string
    createdAt?: Date | string
    design: DesignCreateNestedOneWithoutCommentsInput
  }

  export type DesignCommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    designId: string
    body: string
    createdAt?: Date | string
  }

  export type DesignCommentCreateOrConnectWithoutAuthorInput = {
    where: DesignCommentWhereUniqueInput
    create: XOR<DesignCommentCreateWithoutAuthorInput, DesignCommentUncheckedCreateWithoutAuthorInput>
  }

  export type DesignCommentCreateManyAuthorInputEnvelope = {
    data: DesignCommentCreateManyAuthorInput | DesignCommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    total: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    design: DesignCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    designId: string
    total: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DesignUpsertWithWhereUniqueWithoutUserInput = {
    where: DesignWhereUniqueInput
    update: XOR<DesignUpdateWithoutUserInput, DesignUncheckedUpdateWithoutUserInput>
    create: XOR<DesignCreateWithoutUserInput, DesignUncheckedCreateWithoutUserInput>
  }

  export type DesignUpdateWithWhereUniqueWithoutUserInput = {
    where: DesignWhereUniqueInput
    data: XOR<DesignUpdateWithoutUserInput, DesignUncheckedUpdateWithoutUserInput>
  }

  export type DesignUpdateManyWithWhereWithoutUserInput = {
    where: DesignScalarWhereInput
    data: XOR<DesignUpdateManyMutationInput, DesignUncheckedUpdateManyWithoutUserInput>
  }

  export type DesignScalarWhereInput = {
    AND?: DesignScalarWhereInput | DesignScalarWhereInput[]
    OR?: DesignScalarWhereInput[]
    NOT?: DesignScalarWhereInput | DesignScalarWhereInput[]
    id?: StringFilter<"Design"> | string
    userId?: StringFilter<"Design"> | string
    productId?: StringFilter<"Design"> | string
    color?: StringNullableFilter<"Design"> | string | null
    status?: EnumDesignStatusFilter<"Design"> | $Enums.DesignStatus
    pricingBase?: IntFilter<"Design"> | number
    pricingFees?: IntFilter<"Design"> | number
    pricingTotal?: IntFilter<"Design"> | number
    createdAt?: DateTimeFilter<"Design"> | Date | string
    updatedAt?: DateTimeFilter<"Design"> | Date | string
  }

  export type DesignCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: DesignCommentWhereUniqueInput
    update: XOR<DesignCommentUpdateWithoutAuthorInput, DesignCommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<DesignCommentCreateWithoutAuthorInput, DesignCommentUncheckedCreateWithoutAuthorInput>
  }

  export type DesignCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: DesignCommentWhereUniqueInput
    data: XOR<DesignCommentUpdateWithoutAuthorInput, DesignCommentUncheckedUpdateWithoutAuthorInput>
  }

  export type DesignCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: DesignCommentScalarWhereInput
    data: XOR<DesignCommentUpdateManyMutationInput, DesignCommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type DesignCommentScalarWhereInput = {
    AND?: DesignCommentScalarWhereInput | DesignCommentScalarWhereInput[]
    OR?: DesignCommentScalarWhereInput[]
    NOT?: DesignCommentScalarWhereInput | DesignCommentScalarWhereInput[]
    id?: StringFilter<"DesignComment"> | string
    designId?: StringFilter<"DesignComment"> | string
    body?: StringFilter<"DesignComment"> | string
    createdAt?: DateTimeFilter<"DesignComment"> | Date | string
    authorId?: StringNullableFilter<"DesignComment"> | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    designId?: StringFilter<"Order"> | string
    total?: IntFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type UserCreateWithoutDesignsInput = {
    id?: string
    email: string
    name?: string | null
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkUserId: string
    DesignComment?: DesignCommentCreateNestedManyWithoutAuthorInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDesignsInput = {
    id?: string
    email: string
    name?: string | null
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkUserId: string
    DesignComment?: DesignCommentUncheckedCreateNestedManyWithoutAuthorInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDesignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDesignsInput, UserUncheckedCreateWithoutDesignsInput>
  }

  export type DesignCommentCreateWithoutDesignInput = {
    id?: string
    body: string
    createdAt?: Date | string
    author?: UserCreateNestedOneWithoutDesignCommentInput
  }

  export type DesignCommentUncheckedCreateWithoutDesignInput = {
    id?: string
    body: string
    createdAt?: Date | string
    authorId?: string | null
  }

  export type DesignCommentCreateOrConnectWithoutDesignInput = {
    where: DesignCommentWhereUniqueInput
    create: XOR<DesignCommentCreateWithoutDesignInput, DesignCommentUncheckedCreateWithoutDesignInput>
  }

  export type DesignCommentCreateManyDesignInputEnvelope = {
    data: DesignCommentCreateManyDesignInput | DesignCommentCreateManyDesignInput[]
    skipDuplicates?: boolean
  }

  export type DesignLineItemCreateWithoutDesignInput = {
    id?: string
    size: string
    qty?: number
    unitPrice: number
    surcharge?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignLineItemUncheckedCreateWithoutDesignInput = {
    id?: string
    size: string
    qty?: number
    unitPrice: number
    surcharge?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignLineItemCreateOrConnectWithoutDesignInput = {
    where: DesignLineItemWhereUniqueInput
    create: XOR<DesignLineItemCreateWithoutDesignInput, DesignLineItemUncheckedCreateWithoutDesignInput>
  }

  export type DesignLineItemCreateManyDesignInputEnvelope = {
    data: DesignLineItemCreateManyDesignInput | DesignLineItemCreateManyDesignInput[]
    skipDuplicates?: boolean
  }

  export type DesignPlacementCreateWithoutDesignInput = {
    id?: string
    side: string
    areaId: string
    assetId: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignPlacementUncheckedCreateWithoutDesignInput = {
    id?: string
    side: string
    areaId: string
    assetId: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignPlacementCreateOrConnectWithoutDesignInput = {
    where: DesignPlacementWhereUniqueInput
    create: XOR<DesignPlacementCreateWithoutDesignInput, DesignPlacementUncheckedCreateWithoutDesignInput>
  }

  export type DesignPlacementCreateManyDesignInputEnvelope = {
    data: DesignPlacementCreateManyDesignInput | DesignPlacementCreateManyDesignInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutDesignInput = {
    id?: string
    total: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutDesignInput = {
    id?: string
    userId: string
    total: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutDesignInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDesignInput, OrderUncheckedCreateWithoutDesignInput>
  }

  export type UserUpsertWithoutDesignsInput = {
    update: XOR<UserUpdateWithoutDesignsInput, UserUncheckedUpdateWithoutDesignsInput>
    create: XOR<UserCreateWithoutDesignsInput, UserUncheckedCreateWithoutDesignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDesignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDesignsInput, UserUncheckedUpdateWithoutDesignsInput>
  }

  export type UserUpdateWithoutDesignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    DesignComment?: DesignCommentUpdateManyWithoutAuthorNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDesignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    DesignComment?: DesignCommentUncheckedUpdateManyWithoutAuthorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DesignCommentUpsertWithWhereUniqueWithoutDesignInput = {
    where: DesignCommentWhereUniqueInput
    update: XOR<DesignCommentUpdateWithoutDesignInput, DesignCommentUncheckedUpdateWithoutDesignInput>
    create: XOR<DesignCommentCreateWithoutDesignInput, DesignCommentUncheckedCreateWithoutDesignInput>
  }

  export type DesignCommentUpdateWithWhereUniqueWithoutDesignInput = {
    where: DesignCommentWhereUniqueInput
    data: XOR<DesignCommentUpdateWithoutDesignInput, DesignCommentUncheckedUpdateWithoutDesignInput>
  }

  export type DesignCommentUpdateManyWithWhereWithoutDesignInput = {
    where: DesignCommentScalarWhereInput
    data: XOR<DesignCommentUpdateManyMutationInput, DesignCommentUncheckedUpdateManyWithoutDesignInput>
  }

  export type DesignLineItemUpsertWithWhereUniqueWithoutDesignInput = {
    where: DesignLineItemWhereUniqueInput
    update: XOR<DesignLineItemUpdateWithoutDesignInput, DesignLineItemUncheckedUpdateWithoutDesignInput>
    create: XOR<DesignLineItemCreateWithoutDesignInput, DesignLineItemUncheckedCreateWithoutDesignInput>
  }

  export type DesignLineItemUpdateWithWhereUniqueWithoutDesignInput = {
    where: DesignLineItemWhereUniqueInput
    data: XOR<DesignLineItemUpdateWithoutDesignInput, DesignLineItemUncheckedUpdateWithoutDesignInput>
  }

  export type DesignLineItemUpdateManyWithWhereWithoutDesignInput = {
    where: DesignLineItemScalarWhereInput
    data: XOR<DesignLineItemUpdateManyMutationInput, DesignLineItemUncheckedUpdateManyWithoutDesignInput>
  }

  export type DesignLineItemScalarWhereInput = {
    AND?: DesignLineItemScalarWhereInput | DesignLineItemScalarWhereInput[]
    OR?: DesignLineItemScalarWhereInput[]
    NOT?: DesignLineItemScalarWhereInput | DesignLineItemScalarWhereInput[]
    id?: StringFilter<"DesignLineItem"> | string
    designId?: StringFilter<"DesignLineItem"> | string
    size?: StringFilter<"DesignLineItem"> | string
    qty?: IntFilter<"DesignLineItem"> | number
    unitPrice?: IntFilter<"DesignLineItem"> | number
    surcharge?: IntFilter<"DesignLineItem"> | number
    createdAt?: DateTimeFilter<"DesignLineItem"> | Date | string
    updatedAt?: DateTimeFilter<"DesignLineItem"> | Date | string
  }

  export type DesignPlacementUpsertWithWhereUniqueWithoutDesignInput = {
    where: DesignPlacementWhereUniqueInput
    update: XOR<DesignPlacementUpdateWithoutDesignInput, DesignPlacementUncheckedUpdateWithoutDesignInput>
    create: XOR<DesignPlacementCreateWithoutDesignInput, DesignPlacementUncheckedCreateWithoutDesignInput>
  }

  export type DesignPlacementUpdateWithWhereUniqueWithoutDesignInput = {
    where: DesignPlacementWhereUniqueInput
    data: XOR<DesignPlacementUpdateWithoutDesignInput, DesignPlacementUncheckedUpdateWithoutDesignInput>
  }

  export type DesignPlacementUpdateManyWithWhereWithoutDesignInput = {
    where: DesignPlacementScalarWhereInput
    data: XOR<DesignPlacementUpdateManyMutationInput, DesignPlacementUncheckedUpdateManyWithoutDesignInput>
  }

  export type DesignPlacementScalarWhereInput = {
    AND?: DesignPlacementScalarWhereInput | DesignPlacementScalarWhereInput[]
    OR?: DesignPlacementScalarWhereInput[]
    NOT?: DesignPlacementScalarWhereInput | DesignPlacementScalarWhereInput[]
    id?: StringFilter<"DesignPlacement"> | string
    designId?: StringFilter<"DesignPlacement"> | string
    side?: StringFilter<"DesignPlacement"> | string
    areaId?: StringFilter<"DesignPlacement"> | string
    assetId?: StringFilter<"DesignPlacement"> | string
    url?: StringFilter<"DesignPlacement"> | string
    createdAt?: DateTimeFilter<"DesignPlacement"> | Date | string
    updatedAt?: DateTimeFilter<"DesignPlacement"> | Date | string
  }

  export type OrderUpsertWithoutDesignInput = {
    update: XOR<OrderUpdateWithoutDesignInput, OrderUncheckedUpdateWithoutDesignInput>
    create: XOR<OrderCreateWithoutDesignInput, OrderUncheckedCreateWithoutDesignInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutDesignInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutDesignInput, OrderUncheckedUpdateWithoutDesignInput>
  }

  export type OrderUpdateWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignCreateWithoutPlacementsInput = {
    id?: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDesignsInput
    comments?: DesignCommentCreateNestedManyWithoutDesignInput
    lineItems?: DesignLineItemCreateNestedManyWithoutDesignInput
    order?: OrderCreateNestedOneWithoutDesignInput
  }

  export type DesignUncheckedCreateWithoutPlacementsInput = {
    id?: string
    userId: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: DesignCommentUncheckedCreateNestedManyWithoutDesignInput
    lineItems?: DesignLineItemUncheckedCreateNestedManyWithoutDesignInput
    order?: OrderUncheckedCreateNestedOneWithoutDesignInput
  }

  export type DesignCreateOrConnectWithoutPlacementsInput = {
    where: DesignWhereUniqueInput
    create: XOR<DesignCreateWithoutPlacementsInput, DesignUncheckedCreateWithoutPlacementsInput>
  }

  export type DesignUpsertWithoutPlacementsInput = {
    update: XOR<DesignUpdateWithoutPlacementsInput, DesignUncheckedUpdateWithoutPlacementsInput>
    create: XOR<DesignCreateWithoutPlacementsInput, DesignUncheckedCreateWithoutPlacementsInput>
    where?: DesignWhereInput
  }

  export type DesignUpdateToOneWithWhereWithoutPlacementsInput = {
    where?: DesignWhereInput
    data: XOR<DesignUpdateWithoutPlacementsInput, DesignUncheckedUpdateWithoutPlacementsInput>
  }

  export type DesignUpdateWithoutPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDesignsNestedInput
    comments?: DesignCommentUpdateManyWithoutDesignNestedInput
    lineItems?: DesignLineItemUpdateManyWithoutDesignNestedInput
    order?: OrderUpdateOneWithoutDesignNestedInput
  }

  export type DesignUncheckedUpdateWithoutPlacementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: DesignCommentUncheckedUpdateManyWithoutDesignNestedInput
    lineItems?: DesignLineItemUncheckedUpdateManyWithoutDesignNestedInput
    order?: OrderUncheckedUpdateOneWithoutDesignNestedInput
  }

  export type UserCreateWithoutDesignCommentInput = {
    id?: string
    email: string
    name?: string | null
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkUserId: string
    designs?: DesignCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDesignCommentInput = {
    id?: string
    email: string
    name?: string | null
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkUserId: string
    designs?: DesignUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDesignCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDesignCommentInput, UserUncheckedCreateWithoutDesignCommentInput>
  }

  export type DesignCreateWithoutCommentsInput = {
    id?: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDesignsInput
    lineItems?: DesignLineItemCreateNestedManyWithoutDesignInput
    placements?: DesignPlacementCreateNestedManyWithoutDesignInput
    order?: OrderCreateNestedOneWithoutDesignInput
  }

  export type DesignUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lineItems?: DesignLineItemUncheckedCreateNestedManyWithoutDesignInput
    placements?: DesignPlacementUncheckedCreateNestedManyWithoutDesignInput
    order?: OrderUncheckedCreateNestedOneWithoutDesignInput
  }

  export type DesignCreateOrConnectWithoutCommentsInput = {
    where: DesignWhereUniqueInput
    create: XOR<DesignCreateWithoutCommentsInput, DesignUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutDesignCommentInput = {
    update: XOR<UserUpdateWithoutDesignCommentInput, UserUncheckedUpdateWithoutDesignCommentInput>
    create: XOR<UserCreateWithoutDesignCommentInput, UserUncheckedCreateWithoutDesignCommentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDesignCommentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDesignCommentInput, UserUncheckedUpdateWithoutDesignCommentInput>
  }

  export type UserUpdateWithoutDesignCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    designs?: DesignUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDesignCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    designs?: DesignUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DesignUpsertWithoutCommentsInput = {
    update: XOR<DesignUpdateWithoutCommentsInput, DesignUncheckedUpdateWithoutCommentsInput>
    create: XOR<DesignCreateWithoutCommentsInput, DesignUncheckedCreateWithoutCommentsInput>
    where?: DesignWhereInput
  }

  export type DesignUpdateToOneWithWhereWithoutCommentsInput = {
    where?: DesignWhereInput
    data: XOR<DesignUpdateWithoutCommentsInput, DesignUncheckedUpdateWithoutCommentsInput>
  }

  export type DesignUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDesignsNestedInput
    lineItems?: DesignLineItemUpdateManyWithoutDesignNestedInput
    placements?: DesignPlacementUpdateManyWithoutDesignNestedInput
    order?: OrderUpdateOneWithoutDesignNestedInput
  }

  export type DesignUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineItems?: DesignLineItemUncheckedUpdateManyWithoutDesignNestedInput
    placements?: DesignPlacementUncheckedUpdateManyWithoutDesignNestedInput
    order?: OrderUncheckedUpdateOneWithoutDesignNestedInput
  }

  export type DesignCreateWithoutLineItemsInput = {
    id?: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDesignsInput
    comments?: DesignCommentCreateNestedManyWithoutDesignInput
    placements?: DesignPlacementCreateNestedManyWithoutDesignInput
    order?: OrderCreateNestedOneWithoutDesignInput
  }

  export type DesignUncheckedCreateWithoutLineItemsInput = {
    id?: string
    userId: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: DesignCommentUncheckedCreateNestedManyWithoutDesignInput
    placements?: DesignPlacementUncheckedCreateNestedManyWithoutDesignInput
    order?: OrderUncheckedCreateNestedOneWithoutDesignInput
  }

  export type DesignCreateOrConnectWithoutLineItemsInput = {
    where: DesignWhereUniqueInput
    create: XOR<DesignCreateWithoutLineItemsInput, DesignUncheckedCreateWithoutLineItemsInput>
  }

  export type DesignUpsertWithoutLineItemsInput = {
    update: XOR<DesignUpdateWithoutLineItemsInput, DesignUncheckedUpdateWithoutLineItemsInput>
    create: XOR<DesignCreateWithoutLineItemsInput, DesignUncheckedCreateWithoutLineItemsInput>
    where?: DesignWhereInput
  }

  export type DesignUpdateToOneWithWhereWithoutLineItemsInput = {
    where?: DesignWhereInput
    data: XOR<DesignUpdateWithoutLineItemsInput, DesignUncheckedUpdateWithoutLineItemsInput>
  }

  export type DesignUpdateWithoutLineItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDesignsNestedInput
    comments?: DesignCommentUpdateManyWithoutDesignNestedInput
    placements?: DesignPlacementUpdateManyWithoutDesignNestedInput
    order?: OrderUpdateOneWithoutDesignNestedInput
  }

  export type DesignUncheckedUpdateWithoutLineItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: DesignCommentUncheckedUpdateManyWithoutDesignNestedInput
    placements?: DesignPlacementUncheckedUpdateManyWithoutDesignNestedInput
    order?: OrderUncheckedUpdateOneWithoutDesignNestedInput
  }

  export type DesignCreateWithoutOrderInput = {
    id?: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDesignsInput
    comments?: DesignCommentCreateNestedManyWithoutDesignInput
    lineItems?: DesignLineItemCreateNestedManyWithoutDesignInput
    placements?: DesignPlacementCreateNestedManyWithoutDesignInput
  }

  export type DesignUncheckedCreateWithoutOrderInput = {
    id?: string
    userId: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: DesignCommentUncheckedCreateNestedManyWithoutDesignInput
    lineItems?: DesignLineItemUncheckedCreateNestedManyWithoutDesignInput
    placements?: DesignPlacementUncheckedCreateNestedManyWithoutDesignInput
  }

  export type DesignCreateOrConnectWithoutOrderInput = {
    where: DesignWhereUniqueInput
    create: XOR<DesignCreateWithoutOrderInput, DesignUncheckedCreateWithoutOrderInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    email: string
    name?: string | null
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkUserId: string
    designs?: DesignCreateNestedManyWithoutUserInput
    DesignComment?: DesignCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    email: string
    name?: string | null
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkUserId: string
    designs?: DesignUncheckedCreateNestedManyWithoutUserInput
    DesignComment?: DesignCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type DesignUpsertWithoutOrderInput = {
    update: XOR<DesignUpdateWithoutOrderInput, DesignUncheckedUpdateWithoutOrderInput>
    create: XOR<DesignCreateWithoutOrderInput, DesignUncheckedCreateWithoutOrderInput>
    where?: DesignWhereInput
  }

  export type DesignUpdateToOneWithWhereWithoutOrderInput = {
    where?: DesignWhereInput
    data: XOR<DesignUpdateWithoutOrderInput, DesignUncheckedUpdateWithoutOrderInput>
  }

  export type DesignUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDesignsNestedInput
    comments?: DesignCommentUpdateManyWithoutDesignNestedInput
    lineItems?: DesignLineItemUpdateManyWithoutDesignNestedInput
    placements?: DesignPlacementUpdateManyWithoutDesignNestedInput
  }

  export type DesignUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: DesignCommentUncheckedUpdateManyWithoutDesignNestedInput
    lineItems?: DesignLineItemUncheckedUpdateManyWithoutDesignNestedInput
    placements?: DesignPlacementUncheckedUpdateManyWithoutDesignNestedInput
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    designs?: DesignUpdateManyWithoutUserNestedInput
    DesignComment?: DesignCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    designs?: DesignUncheckedUpdateManyWithoutUserNestedInput
    DesignComment?: DesignCommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type DesignCreateManyUserInput = {
    id?: string
    productId: string
    color?: string | null
    status?: $Enums.DesignStatus
    pricingBase: number
    pricingFees: number
    pricingTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignCommentCreateManyAuthorInput = {
    id?: string
    designId: string
    body: string
    createdAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    designId: string
    total: number
    currency?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: DesignCommentUpdateManyWithoutDesignNestedInput
    lineItems?: DesignLineItemUpdateManyWithoutDesignNestedInput
    placements?: DesignPlacementUpdateManyWithoutDesignNestedInput
    order?: OrderUpdateOneWithoutDesignNestedInput
  }

  export type DesignUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: DesignCommentUncheckedUpdateManyWithoutDesignNestedInput
    lineItems?: DesignLineItemUncheckedUpdateManyWithoutDesignNestedInput
    placements?: DesignPlacementUncheckedUpdateManyWithoutDesignNestedInput
    order?: OrderUncheckedUpdateOneWithoutDesignNestedInput
  }

  export type DesignUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDesignStatusFieldUpdateOperationsInput | $Enums.DesignStatus
    pricingBase?: IntFieldUpdateOperationsInput | number
    pricingFees?: IntFieldUpdateOperationsInput | number
    pricingTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignCommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    design?: DesignUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type DesignCommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    designId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignCommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    designId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    design?: DesignUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    designId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    designId?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignCommentCreateManyDesignInput = {
    id?: string
    body: string
    createdAt?: Date | string
    authorId?: string | null
  }

  export type DesignLineItemCreateManyDesignInput = {
    id?: string
    size: string
    qty?: number
    unitPrice: number
    surcharge?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignPlacementCreateManyDesignInput = {
    id?: string
    side: string
    areaId: string
    assetId: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DesignCommentUpdateWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutDesignCommentNestedInput
  }

  export type DesignCommentUncheckedUpdateWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DesignCommentUncheckedUpdateManyWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DesignLineItemUpdateWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    surcharge?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignLineItemUncheckedUpdateWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    surcharge?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignLineItemUncheckedUpdateManyWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    surcharge?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignPlacementUpdateWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignPlacementUncheckedUpdateWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DesignPlacementUncheckedUpdateManyWithoutDesignInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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