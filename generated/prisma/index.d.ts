
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Cartao
 * 
 */
export type Cartao = $Result.DefaultSelection<Prisma.$CartaoPayload>
/**
 * Model Recarga
 * 
 */
export type Recarga = $Result.DefaultSelection<Prisma.$RecargaPayload>
/**
 * Model HistoricoPagamento
 * 
 */
export type HistoricoPagamento = $Result.DefaultSelection<Prisma.$HistoricoPagamentoPayload>
/**
 * Model LinhaOnibus
 * 
 */
export type LinhaOnibus = $Result.DefaultSelection<Prisma.$LinhaOnibusPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartao`: Exposes CRUD operations for the **Cartao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cartaos
    * const cartaos = await prisma.cartao.findMany()
    * ```
    */
  get cartao(): Prisma.CartaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recarga`: Exposes CRUD operations for the **Recarga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recargas
    * const recargas = await prisma.recarga.findMany()
    * ```
    */
  get recarga(): Prisma.RecargaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historicoPagamento`: Exposes CRUD operations for the **HistoricoPagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoricoPagamentos
    * const historicoPagamentos = await prisma.historicoPagamento.findMany()
    * ```
    */
  get historicoPagamento(): Prisma.HistoricoPagamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linhaOnibus`: Exposes CRUD operations for the **LinhaOnibus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinhaOnibuses
    * const linhaOnibuses = await prisma.linhaOnibus.findMany()
    * ```
    */
  get linhaOnibus(): Prisma.LinhaOnibusDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Usuario: 'Usuario',
    Cartao: 'Cartao',
    Recarga: 'Recarga',
    HistoricoPagamento: 'HistoricoPagamento',
    LinhaOnibus: 'LinhaOnibus'
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
      modelProps: "usuario" | "cartao" | "recarga" | "historicoPagamento" | "linhaOnibus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Cartao: {
        payload: Prisma.$CartaoPayload<ExtArgs>
        fields: Prisma.CartaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>
          }
          findFirst: {
            args: Prisma.CartaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>
          }
          findMany: {
            args: Prisma.CartaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>[]
          }
          create: {
            args: Prisma.CartaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>
          }
          createMany: {
            args: Prisma.CartaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>[]
          }
          delete: {
            args: Prisma.CartaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>
          }
          update: {
            args: Prisma.CartaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>
          }
          deleteMany: {
            args: Prisma.CartaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>[]
          }
          upsert: {
            args: Prisma.CartaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartaoPayload>
          }
          aggregate: {
            args: Prisma.CartaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartao>
          }
          groupBy: {
            args: Prisma.CartaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartaoCountArgs<ExtArgs>
            result: $Utils.Optional<CartaoCountAggregateOutputType> | number
          }
        }
      }
      Recarga: {
        payload: Prisma.$RecargaPayload<ExtArgs>
        fields: Prisma.RecargaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecargaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecargaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecargaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecargaPayload>
          }
          findFirst: {
            args: Prisma.RecargaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecargaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecargaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecargaPayload>
          }
          findMany: {
            args: Prisma.RecargaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecargaPayload>[]
          }
          create: {
            args: Prisma.RecargaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecargaPayload>
          }
          createMany: {
            args: Prisma.RecargaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecargaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecargaPayload>[]
          }
          delete: {
            args: Prisma.RecargaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecargaPayload>
          }
          update: {
            args: Prisma.RecargaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecargaPayload>
          }
          deleteMany: {
            args: Prisma.RecargaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecargaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecargaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecargaPayload>[]
          }
          upsert: {
            args: Prisma.RecargaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecargaPayload>
          }
          aggregate: {
            args: Prisma.RecargaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecarga>
          }
          groupBy: {
            args: Prisma.RecargaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecargaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecargaCountArgs<ExtArgs>
            result: $Utils.Optional<RecargaCountAggregateOutputType> | number
          }
        }
      }
      HistoricoPagamento: {
        payload: Prisma.$HistoricoPagamentoPayload<ExtArgs>
        fields: Prisma.HistoricoPagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoPagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoPagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPagamentoPayload>
          }
          findFirst: {
            args: Prisma.HistoricoPagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoPagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPagamentoPayload>
          }
          findMany: {
            args: Prisma.HistoricoPagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPagamentoPayload>[]
          }
          create: {
            args: Prisma.HistoricoPagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPagamentoPayload>
          }
          createMany: {
            args: Prisma.HistoricoPagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricoPagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPagamentoPayload>[]
          }
          delete: {
            args: Prisma.HistoricoPagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPagamentoPayload>
          }
          update: {
            args: Prisma.HistoricoPagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPagamentoPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoPagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoPagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoricoPagamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPagamentoPayload>[]
          }
          upsert: {
            args: Prisma.HistoricoPagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoPagamentoPayload>
          }
          aggregate: {
            args: Prisma.HistoricoPagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricoPagamento>
          }
          groupBy: {
            args: Prisma.HistoricoPagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoPagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoPagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoPagamentoCountAggregateOutputType> | number
          }
        }
      }
      LinhaOnibus: {
        payload: Prisma.$LinhaOnibusPayload<ExtArgs>
        fields: Prisma.LinhaOnibusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinhaOnibusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinhaOnibusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinhaOnibusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinhaOnibusPayload>
          }
          findFirst: {
            args: Prisma.LinhaOnibusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinhaOnibusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinhaOnibusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinhaOnibusPayload>
          }
          findMany: {
            args: Prisma.LinhaOnibusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinhaOnibusPayload>[]
          }
          create: {
            args: Prisma.LinhaOnibusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinhaOnibusPayload>
          }
          createMany: {
            args: Prisma.LinhaOnibusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinhaOnibusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinhaOnibusPayload>[]
          }
          delete: {
            args: Prisma.LinhaOnibusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinhaOnibusPayload>
          }
          update: {
            args: Prisma.LinhaOnibusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinhaOnibusPayload>
          }
          deleteMany: {
            args: Prisma.LinhaOnibusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinhaOnibusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinhaOnibusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinhaOnibusPayload>[]
          }
          upsert: {
            args: Prisma.LinhaOnibusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinhaOnibusPayload>
          }
          aggregate: {
            args: Prisma.LinhaOnibusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinhaOnibus>
          }
          groupBy: {
            args: Prisma.LinhaOnibusGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinhaOnibusGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinhaOnibusCountArgs<ExtArgs>
            result: $Utils.Optional<LinhaOnibusCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    usuario?: UsuarioOmit
    cartao?: CartaoOmit
    recarga?: RecargaOmit
    historicoPagamento?: HistoricoPagamentoOmit
    linhaOnibus?: LinhaOnibusOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    historicos: number
    recargas: number
    Cartao: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicos?: boolean | UsuarioCountOutputTypeCountHistoricosArgs
    recargas?: boolean | UsuarioCountOutputTypeCountRecargasArgs
    Cartao?: boolean | UsuarioCountOutputTypeCountCartaoArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountHistoricosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoPagamentoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRecargasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecargaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCartaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    cpf: string | null
    senha: string | null
    tipo: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    cpf: string | null
    senha: string | null
    tipo: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    cpf: number
    senha: number
    tipo: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    cpf?: true
    senha?: true
    tipo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    cpf?: true
    senha?: true
    tipo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    cpf?: true
    senha?: true
    tipo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    cpf: string
    senha: string
    tipo: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    senha?: boolean
    tipo?: boolean
    historicos?: boolean | Usuario$historicosArgs<ExtArgs>
    recargas?: boolean | Usuario$recargasArgs<ExtArgs>
    Cartao?: boolean | Usuario$CartaoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    senha?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    senha?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    cpf?: boolean
    senha?: boolean
    tipo?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpf" | "senha" | "tipo", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicos?: boolean | Usuario$historicosArgs<ExtArgs>
    recargas?: boolean | Usuario$recargasArgs<ExtArgs>
    Cartao?: boolean | Usuario$CartaoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      historicos: Prisma.$HistoricoPagamentoPayload<ExtArgs>[]
      recargas: Prisma.$RecargaPayload<ExtArgs>[]
      Cartao: Prisma.$CartaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cpf: string
      senha: string
      tipo: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historicos<T extends Usuario$historicosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$historicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recargas<T extends Usuario$recargasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$recargasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecargaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cartao<T extends Usuario$CartaoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$CartaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.historicos
   */
  export type Usuario$historicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoInclude<ExtArgs> | null
    where?: HistoricoPagamentoWhereInput
    orderBy?: HistoricoPagamentoOrderByWithRelationInput | HistoricoPagamentoOrderByWithRelationInput[]
    cursor?: HistoricoPagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoPagamentoScalarFieldEnum | HistoricoPagamentoScalarFieldEnum[]
  }

  /**
   * Usuario.recargas
   */
  export type Usuario$recargasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaInclude<ExtArgs> | null
    where?: RecargaWhereInput
    orderBy?: RecargaOrderByWithRelationInput | RecargaOrderByWithRelationInput[]
    cursor?: RecargaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecargaScalarFieldEnum | RecargaScalarFieldEnum[]
  }

  /**
   * Usuario.Cartao
   */
  export type Usuario$CartaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    where?: CartaoWhereInput
    orderBy?: CartaoOrderByWithRelationInput | CartaoOrderByWithRelationInput[]
    cursor?: CartaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartaoScalarFieldEnum | CartaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Cartao
   */

  export type AggregateCartao = {
    _count: CartaoCountAggregateOutputType | null
    _avg: CartaoAvgAggregateOutputType | null
    _sum: CartaoSumAggregateOutputType | null
    _min: CartaoMinAggregateOutputType | null
    _max: CartaoMaxAggregateOutputType | null
  }

  export type CartaoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CartaoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CartaoMinAggregateOutputType = {
    id: number | null
    numero: string | null
    usuarioId: number | null
  }

  export type CartaoMaxAggregateOutputType = {
    id: number | null
    numero: string | null
    usuarioId: number | null
  }

  export type CartaoCountAggregateOutputType = {
    id: number
    numero: number
    usuarioId: number
    _all: number
  }


  export type CartaoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CartaoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CartaoMinAggregateInputType = {
    id?: true
    numero?: true
    usuarioId?: true
  }

  export type CartaoMaxAggregateInputType = {
    id?: true
    numero?: true
    usuarioId?: true
  }

  export type CartaoCountAggregateInputType = {
    id?: true
    numero?: true
    usuarioId?: true
    _all?: true
  }

  export type CartaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cartao to aggregate.
     */
    where?: CartaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartaos to fetch.
     */
    orderBy?: CartaoOrderByWithRelationInput | CartaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cartaos
    **/
    _count?: true | CartaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartaoMaxAggregateInputType
  }

  export type GetCartaoAggregateType<T extends CartaoAggregateArgs> = {
        [P in keyof T & keyof AggregateCartao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartao[P]>
      : GetScalarType<T[P], AggregateCartao[P]>
  }




  export type CartaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartaoWhereInput
    orderBy?: CartaoOrderByWithAggregationInput | CartaoOrderByWithAggregationInput[]
    by: CartaoScalarFieldEnum[] | CartaoScalarFieldEnum
    having?: CartaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartaoCountAggregateInputType | true
    _avg?: CartaoAvgAggregateInputType
    _sum?: CartaoSumAggregateInputType
    _min?: CartaoMinAggregateInputType
    _max?: CartaoMaxAggregateInputType
  }

  export type CartaoGroupByOutputType = {
    id: number
    numero: string
    usuarioId: number
    _count: CartaoCountAggregateOutputType | null
    _avg: CartaoAvgAggregateOutputType | null
    _sum: CartaoSumAggregateOutputType | null
    _min: CartaoMinAggregateOutputType | null
    _max: CartaoMaxAggregateOutputType | null
  }

  type GetCartaoGroupByPayload<T extends CartaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartaoGroupByOutputType[P]>
            : GetScalarType<T[P], CartaoGroupByOutputType[P]>
        }
      >
    >


  export type CartaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartao"]>

  export type CartaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartao"]>

  export type CartaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartao"]>

  export type CartaoSelectScalar = {
    id?: boolean
    numero?: boolean
    usuarioId?: boolean
  }

  export type CartaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "usuarioId", ExtArgs["result"]["cartao"]>
  export type CartaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CartaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CartaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CartaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cartao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: string
      usuarioId: number
    }, ExtArgs["result"]["cartao"]>
    composites: {}
  }

  type CartaoGetPayload<S extends boolean | null | undefined | CartaoDefaultArgs> = $Result.GetResult<Prisma.$CartaoPayload, S>

  type CartaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartaoCountAggregateInputType | true
    }

  export interface CartaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cartao'], meta: { name: 'Cartao' } }
    /**
     * Find zero or one Cartao that matches the filter.
     * @param {CartaoFindUniqueArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartaoFindUniqueArgs>(args: SelectSubset<T, CartaoFindUniqueArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cartao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartaoFindUniqueOrThrowArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartaoFindUniqueOrThrowArgs>(args: SelectSubset<T, CartaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cartao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoFindFirstArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartaoFindFirstArgs>(args?: SelectSubset<T, CartaoFindFirstArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cartao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoFindFirstOrThrowArgs} args - Arguments to find a Cartao
     * @example
     * // Get one Cartao
     * const cartao = await prisma.cartao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartaoFindFirstOrThrowArgs>(args?: SelectSubset<T, CartaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cartaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cartaos
     * const cartaos = await prisma.cartao.findMany()
     * 
     * // Get first 10 Cartaos
     * const cartaos = await prisma.cartao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartaoWithIdOnly = await prisma.cartao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartaoFindManyArgs>(args?: SelectSubset<T, CartaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cartao.
     * @param {CartaoCreateArgs} args - Arguments to create a Cartao.
     * @example
     * // Create one Cartao
     * const Cartao = await prisma.cartao.create({
     *   data: {
     *     // ... data to create a Cartao
     *   }
     * })
     * 
     */
    create<T extends CartaoCreateArgs>(args: SelectSubset<T, CartaoCreateArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cartaos.
     * @param {CartaoCreateManyArgs} args - Arguments to create many Cartaos.
     * @example
     * // Create many Cartaos
     * const cartao = await prisma.cartao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartaoCreateManyArgs>(args?: SelectSubset<T, CartaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cartaos and returns the data saved in the database.
     * @param {CartaoCreateManyAndReturnArgs} args - Arguments to create many Cartaos.
     * @example
     * // Create many Cartaos
     * const cartao = await prisma.cartao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cartaos and only return the `id`
     * const cartaoWithIdOnly = await prisma.cartao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartaoCreateManyAndReturnArgs>(args?: SelectSubset<T, CartaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cartao.
     * @param {CartaoDeleteArgs} args - Arguments to delete one Cartao.
     * @example
     * // Delete one Cartao
     * const Cartao = await prisma.cartao.delete({
     *   where: {
     *     // ... filter to delete one Cartao
     *   }
     * })
     * 
     */
    delete<T extends CartaoDeleteArgs>(args: SelectSubset<T, CartaoDeleteArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cartao.
     * @param {CartaoUpdateArgs} args - Arguments to update one Cartao.
     * @example
     * // Update one Cartao
     * const cartao = await prisma.cartao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartaoUpdateArgs>(args: SelectSubset<T, CartaoUpdateArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cartaos.
     * @param {CartaoDeleteManyArgs} args - Arguments to filter Cartaos to delete.
     * @example
     * // Delete a few Cartaos
     * const { count } = await prisma.cartao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartaoDeleteManyArgs>(args?: SelectSubset<T, CartaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cartaos
     * const cartao = await prisma.cartao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartaoUpdateManyArgs>(args: SelectSubset<T, CartaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartaos and returns the data updated in the database.
     * @param {CartaoUpdateManyAndReturnArgs} args - Arguments to update many Cartaos.
     * @example
     * // Update many Cartaos
     * const cartao = await prisma.cartao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cartaos and only return the `id`
     * const cartaoWithIdOnly = await prisma.cartao.updateManyAndReturn({
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
    updateManyAndReturn<T extends CartaoUpdateManyAndReturnArgs>(args: SelectSubset<T, CartaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cartao.
     * @param {CartaoUpsertArgs} args - Arguments to update or create a Cartao.
     * @example
     * // Update or create a Cartao
     * const cartao = await prisma.cartao.upsert({
     *   create: {
     *     // ... data to create a Cartao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cartao we want to update
     *   }
     * })
     */
    upsert<T extends CartaoUpsertArgs>(args: SelectSubset<T, CartaoUpsertArgs<ExtArgs>>): Prisma__CartaoClient<$Result.GetResult<Prisma.$CartaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cartaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoCountArgs} args - Arguments to filter Cartaos to count.
     * @example
     * // Count the number of Cartaos
     * const count = await prisma.cartao.count({
     *   where: {
     *     // ... the filter for the Cartaos we want to count
     *   }
     * })
    **/
    count<T extends CartaoCountArgs>(
      args?: Subset<T, CartaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cartao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartaoAggregateArgs>(args: Subset<T, CartaoAggregateArgs>): Prisma.PrismaPromise<GetCartaoAggregateType<T>>

    /**
     * Group by Cartao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartaoGroupByArgs} args - Group by arguments.
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
      T extends CartaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartaoGroupByArgs['orderBy'] }
        : { orderBy?: CartaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cartao model
   */
  readonly fields: CartaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cartao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Cartao model
   */
  interface CartaoFieldRefs {
    readonly id: FieldRef<"Cartao", 'Int'>
    readonly numero: FieldRef<"Cartao", 'String'>
    readonly usuarioId: FieldRef<"Cartao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cartao findUnique
   */
  export type CartaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * Filter, which Cartao to fetch.
     */
    where: CartaoWhereUniqueInput
  }

  /**
   * Cartao findUniqueOrThrow
   */
  export type CartaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * Filter, which Cartao to fetch.
     */
    where: CartaoWhereUniqueInput
  }

  /**
   * Cartao findFirst
   */
  export type CartaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * Filter, which Cartao to fetch.
     */
    where?: CartaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartaos to fetch.
     */
    orderBy?: CartaoOrderByWithRelationInput | CartaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cartaos.
     */
    cursor?: CartaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartaos.
     */
    distinct?: CartaoScalarFieldEnum | CartaoScalarFieldEnum[]
  }

  /**
   * Cartao findFirstOrThrow
   */
  export type CartaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * Filter, which Cartao to fetch.
     */
    where?: CartaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartaos to fetch.
     */
    orderBy?: CartaoOrderByWithRelationInput | CartaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cartaos.
     */
    cursor?: CartaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartaos.
     */
    distinct?: CartaoScalarFieldEnum | CartaoScalarFieldEnum[]
  }

  /**
   * Cartao findMany
   */
  export type CartaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * Filter, which Cartaos to fetch.
     */
    where?: CartaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartaos to fetch.
     */
    orderBy?: CartaoOrderByWithRelationInput | CartaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cartaos.
     */
    cursor?: CartaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartaos.
     */
    skip?: number
    distinct?: CartaoScalarFieldEnum | CartaoScalarFieldEnum[]
  }

  /**
   * Cartao create
   */
  export type CartaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Cartao.
     */
    data: XOR<CartaoCreateInput, CartaoUncheckedCreateInput>
  }

  /**
   * Cartao createMany
   */
  export type CartaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cartaos.
     */
    data: CartaoCreateManyInput | CartaoCreateManyInput[]
  }

  /**
   * Cartao createManyAndReturn
   */
  export type CartaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * The data used to create many Cartaos.
     */
    data: CartaoCreateManyInput | CartaoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cartao update
   */
  export type CartaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Cartao.
     */
    data: XOR<CartaoUpdateInput, CartaoUncheckedUpdateInput>
    /**
     * Choose, which Cartao to update.
     */
    where: CartaoWhereUniqueInput
  }

  /**
   * Cartao updateMany
   */
  export type CartaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cartaos.
     */
    data: XOR<CartaoUpdateManyMutationInput, CartaoUncheckedUpdateManyInput>
    /**
     * Filter which Cartaos to update
     */
    where?: CartaoWhereInput
    /**
     * Limit how many Cartaos to update.
     */
    limit?: number
  }

  /**
   * Cartao updateManyAndReturn
   */
  export type CartaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * The data used to update Cartaos.
     */
    data: XOR<CartaoUpdateManyMutationInput, CartaoUncheckedUpdateManyInput>
    /**
     * Filter which Cartaos to update
     */
    where?: CartaoWhereInput
    /**
     * Limit how many Cartaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cartao upsert
   */
  export type CartaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Cartao to update in case it exists.
     */
    where: CartaoWhereUniqueInput
    /**
     * In case the Cartao found by the `where` argument doesn't exist, create a new Cartao with this data.
     */
    create: XOR<CartaoCreateInput, CartaoUncheckedCreateInput>
    /**
     * In case the Cartao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartaoUpdateInput, CartaoUncheckedUpdateInput>
  }

  /**
   * Cartao delete
   */
  export type CartaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
    /**
     * Filter which Cartao to delete.
     */
    where: CartaoWhereUniqueInput
  }

  /**
   * Cartao deleteMany
   */
  export type CartaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cartaos to delete
     */
    where?: CartaoWhereInput
    /**
     * Limit how many Cartaos to delete.
     */
    limit?: number
  }

  /**
   * Cartao without action
   */
  export type CartaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cartao
     */
    select?: CartaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cartao
     */
    omit?: CartaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartaoInclude<ExtArgs> | null
  }


  /**
   * Model Recarga
   */

  export type AggregateRecarga = {
    _count: RecargaCountAggregateOutputType | null
    _avg: RecargaAvgAggregateOutputType | null
    _sum: RecargaSumAggregateOutputType | null
    _min: RecargaMinAggregateOutputType | null
    _max: RecargaMaxAggregateOutputType | null
  }

  export type RecargaAvgAggregateOutputType = {
    id: number | null
    valor: number | null
    usuarioId: number | null
  }

  export type RecargaSumAggregateOutputType = {
    id: number | null
    valor: number | null
    usuarioId: number | null
  }

  export type RecargaMinAggregateOutputType = {
    id: number | null
    valor: number | null
    tipo: string | null
    data: Date | null
    usuarioId: number | null
  }

  export type RecargaMaxAggregateOutputType = {
    id: number | null
    valor: number | null
    tipo: string | null
    data: Date | null
    usuarioId: number | null
  }

  export type RecargaCountAggregateOutputType = {
    id: number
    valor: number
    tipo: number
    data: number
    usuarioId: number
    _all: number
  }


  export type RecargaAvgAggregateInputType = {
    id?: true
    valor?: true
    usuarioId?: true
  }

  export type RecargaSumAggregateInputType = {
    id?: true
    valor?: true
    usuarioId?: true
  }

  export type RecargaMinAggregateInputType = {
    id?: true
    valor?: true
    tipo?: true
    data?: true
    usuarioId?: true
  }

  export type RecargaMaxAggregateInputType = {
    id?: true
    valor?: true
    tipo?: true
    data?: true
    usuarioId?: true
  }

  export type RecargaCountAggregateInputType = {
    id?: true
    valor?: true
    tipo?: true
    data?: true
    usuarioId?: true
    _all?: true
  }

  export type RecargaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recarga to aggregate.
     */
    where?: RecargaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recargas to fetch.
     */
    orderBy?: RecargaOrderByWithRelationInput | RecargaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecargaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recargas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recargas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recargas
    **/
    _count?: true | RecargaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecargaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecargaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecargaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecargaMaxAggregateInputType
  }

  export type GetRecargaAggregateType<T extends RecargaAggregateArgs> = {
        [P in keyof T & keyof AggregateRecarga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecarga[P]>
      : GetScalarType<T[P], AggregateRecarga[P]>
  }




  export type RecargaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecargaWhereInput
    orderBy?: RecargaOrderByWithAggregationInput | RecargaOrderByWithAggregationInput[]
    by: RecargaScalarFieldEnum[] | RecargaScalarFieldEnum
    having?: RecargaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecargaCountAggregateInputType | true
    _avg?: RecargaAvgAggregateInputType
    _sum?: RecargaSumAggregateInputType
    _min?: RecargaMinAggregateInputType
    _max?: RecargaMaxAggregateInputType
  }

  export type RecargaGroupByOutputType = {
    id: number
    valor: number
    tipo: string
    data: Date
    usuarioId: number
    _count: RecargaCountAggregateOutputType | null
    _avg: RecargaAvgAggregateOutputType | null
    _sum: RecargaSumAggregateOutputType | null
    _min: RecargaMinAggregateOutputType | null
    _max: RecargaMaxAggregateOutputType | null
  }

  type GetRecargaGroupByPayload<T extends RecargaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecargaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecargaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecargaGroupByOutputType[P]>
            : GetScalarType<T[P], RecargaGroupByOutputType[P]>
        }
      >
    >


  export type RecargaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    tipo?: boolean
    data?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recarga"]>

  export type RecargaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    tipo?: boolean
    data?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recarga"]>

  export type RecargaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    tipo?: boolean
    data?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recarga"]>

  export type RecargaSelectScalar = {
    id?: boolean
    valor?: boolean
    tipo?: boolean
    data?: boolean
    usuarioId?: boolean
  }

  export type RecargaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valor" | "tipo" | "data" | "usuarioId", ExtArgs["result"]["recarga"]>
  export type RecargaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RecargaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RecargaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RecargaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recarga"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      valor: number
      tipo: string
      data: Date
      usuarioId: number
    }, ExtArgs["result"]["recarga"]>
    composites: {}
  }

  type RecargaGetPayload<S extends boolean | null | undefined | RecargaDefaultArgs> = $Result.GetResult<Prisma.$RecargaPayload, S>

  type RecargaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecargaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecargaCountAggregateInputType | true
    }

  export interface RecargaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recarga'], meta: { name: 'Recarga' } }
    /**
     * Find zero or one Recarga that matches the filter.
     * @param {RecargaFindUniqueArgs} args - Arguments to find a Recarga
     * @example
     * // Get one Recarga
     * const recarga = await prisma.recarga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecargaFindUniqueArgs>(args: SelectSubset<T, RecargaFindUniqueArgs<ExtArgs>>): Prisma__RecargaClient<$Result.GetResult<Prisma.$RecargaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recarga that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecargaFindUniqueOrThrowArgs} args - Arguments to find a Recarga
     * @example
     * // Get one Recarga
     * const recarga = await prisma.recarga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecargaFindUniqueOrThrowArgs>(args: SelectSubset<T, RecargaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecargaClient<$Result.GetResult<Prisma.$RecargaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recarga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecargaFindFirstArgs} args - Arguments to find a Recarga
     * @example
     * // Get one Recarga
     * const recarga = await prisma.recarga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecargaFindFirstArgs>(args?: SelectSubset<T, RecargaFindFirstArgs<ExtArgs>>): Prisma__RecargaClient<$Result.GetResult<Prisma.$RecargaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recarga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecargaFindFirstOrThrowArgs} args - Arguments to find a Recarga
     * @example
     * // Get one Recarga
     * const recarga = await prisma.recarga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecargaFindFirstOrThrowArgs>(args?: SelectSubset<T, RecargaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecargaClient<$Result.GetResult<Prisma.$RecargaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recargas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecargaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recargas
     * const recargas = await prisma.recarga.findMany()
     * 
     * // Get first 10 Recargas
     * const recargas = await prisma.recarga.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recargaWithIdOnly = await prisma.recarga.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecargaFindManyArgs>(args?: SelectSubset<T, RecargaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecargaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recarga.
     * @param {RecargaCreateArgs} args - Arguments to create a Recarga.
     * @example
     * // Create one Recarga
     * const Recarga = await prisma.recarga.create({
     *   data: {
     *     // ... data to create a Recarga
     *   }
     * })
     * 
     */
    create<T extends RecargaCreateArgs>(args: SelectSubset<T, RecargaCreateArgs<ExtArgs>>): Prisma__RecargaClient<$Result.GetResult<Prisma.$RecargaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recargas.
     * @param {RecargaCreateManyArgs} args - Arguments to create many Recargas.
     * @example
     * // Create many Recargas
     * const recarga = await prisma.recarga.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecargaCreateManyArgs>(args?: SelectSubset<T, RecargaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recargas and returns the data saved in the database.
     * @param {RecargaCreateManyAndReturnArgs} args - Arguments to create many Recargas.
     * @example
     * // Create many Recargas
     * const recarga = await prisma.recarga.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recargas and only return the `id`
     * const recargaWithIdOnly = await prisma.recarga.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecargaCreateManyAndReturnArgs>(args?: SelectSubset<T, RecargaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecargaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recarga.
     * @param {RecargaDeleteArgs} args - Arguments to delete one Recarga.
     * @example
     * // Delete one Recarga
     * const Recarga = await prisma.recarga.delete({
     *   where: {
     *     // ... filter to delete one Recarga
     *   }
     * })
     * 
     */
    delete<T extends RecargaDeleteArgs>(args: SelectSubset<T, RecargaDeleteArgs<ExtArgs>>): Prisma__RecargaClient<$Result.GetResult<Prisma.$RecargaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recarga.
     * @param {RecargaUpdateArgs} args - Arguments to update one Recarga.
     * @example
     * // Update one Recarga
     * const recarga = await prisma.recarga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecargaUpdateArgs>(args: SelectSubset<T, RecargaUpdateArgs<ExtArgs>>): Prisma__RecargaClient<$Result.GetResult<Prisma.$RecargaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recargas.
     * @param {RecargaDeleteManyArgs} args - Arguments to filter Recargas to delete.
     * @example
     * // Delete a few Recargas
     * const { count } = await prisma.recarga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecargaDeleteManyArgs>(args?: SelectSubset<T, RecargaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recargas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecargaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recargas
     * const recarga = await prisma.recarga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecargaUpdateManyArgs>(args: SelectSubset<T, RecargaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recargas and returns the data updated in the database.
     * @param {RecargaUpdateManyAndReturnArgs} args - Arguments to update many Recargas.
     * @example
     * // Update many Recargas
     * const recarga = await prisma.recarga.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recargas and only return the `id`
     * const recargaWithIdOnly = await prisma.recarga.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecargaUpdateManyAndReturnArgs>(args: SelectSubset<T, RecargaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecargaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recarga.
     * @param {RecargaUpsertArgs} args - Arguments to update or create a Recarga.
     * @example
     * // Update or create a Recarga
     * const recarga = await prisma.recarga.upsert({
     *   create: {
     *     // ... data to create a Recarga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recarga we want to update
     *   }
     * })
     */
    upsert<T extends RecargaUpsertArgs>(args: SelectSubset<T, RecargaUpsertArgs<ExtArgs>>): Prisma__RecargaClient<$Result.GetResult<Prisma.$RecargaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recargas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecargaCountArgs} args - Arguments to filter Recargas to count.
     * @example
     * // Count the number of Recargas
     * const count = await prisma.recarga.count({
     *   where: {
     *     // ... the filter for the Recargas we want to count
     *   }
     * })
    **/
    count<T extends RecargaCountArgs>(
      args?: Subset<T, RecargaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecargaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recarga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecargaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecargaAggregateArgs>(args: Subset<T, RecargaAggregateArgs>): Prisma.PrismaPromise<GetRecargaAggregateType<T>>

    /**
     * Group by Recarga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecargaGroupByArgs} args - Group by arguments.
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
      T extends RecargaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecargaGroupByArgs['orderBy'] }
        : { orderBy?: RecargaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecargaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecargaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recarga model
   */
  readonly fields: RecargaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recarga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecargaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Recarga model
   */
  interface RecargaFieldRefs {
    readonly id: FieldRef<"Recarga", 'Int'>
    readonly valor: FieldRef<"Recarga", 'Float'>
    readonly tipo: FieldRef<"Recarga", 'String'>
    readonly data: FieldRef<"Recarga", 'DateTime'>
    readonly usuarioId: FieldRef<"Recarga", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Recarga findUnique
   */
  export type RecargaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaInclude<ExtArgs> | null
    /**
     * Filter, which Recarga to fetch.
     */
    where: RecargaWhereUniqueInput
  }

  /**
   * Recarga findUniqueOrThrow
   */
  export type RecargaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaInclude<ExtArgs> | null
    /**
     * Filter, which Recarga to fetch.
     */
    where: RecargaWhereUniqueInput
  }

  /**
   * Recarga findFirst
   */
  export type RecargaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaInclude<ExtArgs> | null
    /**
     * Filter, which Recarga to fetch.
     */
    where?: RecargaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recargas to fetch.
     */
    orderBy?: RecargaOrderByWithRelationInput | RecargaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recargas.
     */
    cursor?: RecargaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recargas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recargas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recargas.
     */
    distinct?: RecargaScalarFieldEnum | RecargaScalarFieldEnum[]
  }

  /**
   * Recarga findFirstOrThrow
   */
  export type RecargaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaInclude<ExtArgs> | null
    /**
     * Filter, which Recarga to fetch.
     */
    where?: RecargaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recargas to fetch.
     */
    orderBy?: RecargaOrderByWithRelationInput | RecargaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recargas.
     */
    cursor?: RecargaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recargas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recargas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recargas.
     */
    distinct?: RecargaScalarFieldEnum | RecargaScalarFieldEnum[]
  }

  /**
   * Recarga findMany
   */
  export type RecargaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaInclude<ExtArgs> | null
    /**
     * Filter, which Recargas to fetch.
     */
    where?: RecargaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recargas to fetch.
     */
    orderBy?: RecargaOrderByWithRelationInput | RecargaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recargas.
     */
    cursor?: RecargaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recargas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recargas.
     */
    skip?: number
    distinct?: RecargaScalarFieldEnum | RecargaScalarFieldEnum[]
  }

  /**
   * Recarga create
   */
  export type RecargaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaInclude<ExtArgs> | null
    /**
     * The data needed to create a Recarga.
     */
    data: XOR<RecargaCreateInput, RecargaUncheckedCreateInput>
  }

  /**
   * Recarga createMany
   */
  export type RecargaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recargas.
     */
    data: RecargaCreateManyInput | RecargaCreateManyInput[]
  }

  /**
   * Recarga createManyAndReturn
   */
  export type RecargaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * The data used to create many Recargas.
     */
    data: RecargaCreateManyInput | RecargaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recarga update
   */
  export type RecargaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaInclude<ExtArgs> | null
    /**
     * The data needed to update a Recarga.
     */
    data: XOR<RecargaUpdateInput, RecargaUncheckedUpdateInput>
    /**
     * Choose, which Recarga to update.
     */
    where: RecargaWhereUniqueInput
  }

  /**
   * Recarga updateMany
   */
  export type RecargaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recargas.
     */
    data: XOR<RecargaUpdateManyMutationInput, RecargaUncheckedUpdateManyInput>
    /**
     * Filter which Recargas to update
     */
    where?: RecargaWhereInput
    /**
     * Limit how many Recargas to update.
     */
    limit?: number
  }

  /**
   * Recarga updateManyAndReturn
   */
  export type RecargaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * The data used to update Recargas.
     */
    data: XOR<RecargaUpdateManyMutationInput, RecargaUncheckedUpdateManyInput>
    /**
     * Filter which Recargas to update
     */
    where?: RecargaWhereInput
    /**
     * Limit how many Recargas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recarga upsert
   */
  export type RecargaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaInclude<ExtArgs> | null
    /**
     * The filter to search for the Recarga to update in case it exists.
     */
    where: RecargaWhereUniqueInput
    /**
     * In case the Recarga found by the `where` argument doesn't exist, create a new Recarga with this data.
     */
    create: XOR<RecargaCreateInput, RecargaUncheckedCreateInput>
    /**
     * In case the Recarga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecargaUpdateInput, RecargaUncheckedUpdateInput>
  }

  /**
   * Recarga delete
   */
  export type RecargaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaInclude<ExtArgs> | null
    /**
     * Filter which Recarga to delete.
     */
    where: RecargaWhereUniqueInput
  }

  /**
   * Recarga deleteMany
   */
  export type RecargaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recargas to delete
     */
    where?: RecargaWhereInput
    /**
     * Limit how many Recargas to delete.
     */
    limit?: number
  }

  /**
   * Recarga without action
   */
  export type RecargaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recarga
     */
    select?: RecargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recarga
     */
    omit?: RecargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecargaInclude<ExtArgs> | null
  }


  /**
   * Model HistoricoPagamento
   */

  export type AggregateHistoricoPagamento = {
    _count: HistoricoPagamentoCountAggregateOutputType | null
    _avg: HistoricoPagamentoAvgAggregateOutputType | null
    _sum: HistoricoPagamentoSumAggregateOutputType | null
    _min: HistoricoPagamentoMinAggregateOutputType | null
    _max: HistoricoPagamentoMaxAggregateOutputType | null
  }

  export type HistoricoPagamentoAvgAggregateOutputType = {
    id: number | null
    valor: number | null
    usuarioId: number | null
  }

  export type HistoricoPagamentoSumAggregateOutputType = {
    id: number | null
    valor: number | null
    usuarioId: number | null
  }

  export type HistoricoPagamentoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    valor: number | null
    cartao: string | null
    usuarioId: number | null
  }

  export type HistoricoPagamentoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    valor: number | null
    cartao: string | null
    usuarioId: number | null
  }

  export type HistoricoPagamentoCountAggregateOutputType = {
    id: number
    data: number
    valor: number
    cartao: number
    usuarioId: number
    _all: number
  }


  export type HistoricoPagamentoAvgAggregateInputType = {
    id?: true
    valor?: true
    usuarioId?: true
  }

  export type HistoricoPagamentoSumAggregateInputType = {
    id?: true
    valor?: true
    usuarioId?: true
  }

  export type HistoricoPagamentoMinAggregateInputType = {
    id?: true
    data?: true
    valor?: true
    cartao?: true
    usuarioId?: true
  }

  export type HistoricoPagamentoMaxAggregateInputType = {
    id?: true
    data?: true
    valor?: true
    cartao?: true
    usuarioId?: true
  }

  export type HistoricoPagamentoCountAggregateInputType = {
    id?: true
    data?: true
    valor?: true
    cartao?: true
    usuarioId?: true
    _all?: true
  }

  export type HistoricoPagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoPagamento to aggregate.
     */
    where?: HistoricoPagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoPagamentos to fetch.
     */
    orderBy?: HistoricoPagamentoOrderByWithRelationInput | HistoricoPagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoPagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoPagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoPagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoricoPagamentos
    **/
    _count?: true | HistoricoPagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoPagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoPagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoPagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoPagamentoMaxAggregateInputType
  }

  export type GetHistoricoPagamentoAggregateType<T extends HistoricoPagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricoPagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricoPagamento[P]>
      : GetScalarType<T[P], AggregateHistoricoPagamento[P]>
  }




  export type HistoricoPagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoPagamentoWhereInput
    orderBy?: HistoricoPagamentoOrderByWithAggregationInput | HistoricoPagamentoOrderByWithAggregationInput[]
    by: HistoricoPagamentoScalarFieldEnum[] | HistoricoPagamentoScalarFieldEnum
    having?: HistoricoPagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoPagamentoCountAggregateInputType | true
    _avg?: HistoricoPagamentoAvgAggregateInputType
    _sum?: HistoricoPagamentoSumAggregateInputType
    _min?: HistoricoPagamentoMinAggregateInputType
    _max?: HistoricoPagamentoMaxAggregateInputType
  }

  export type HistoricoPagamentoGroupByOutputType = {
    id: number
    data: Date
    valor: number
    cartao: string
    usuarioId: number
    _count: HistoricoPagamentoCountAggregateOutputType | null
    _avg: HistoricoPagamentoAvgAggregateOutputType | null
    _sum: HistoricoPagamentoSumAggregateOutputType | null
    _min: HistoricoPagamentoMinAggregateOutputType | null
    _max: HistoricoPagamentoMaxAggregateOutputType | null
  }

  type GetHistoricoPagamentoGroupByPayload<T extends HistoricoPagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoPagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoPagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoPagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoPagamentoGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoPagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    valor?: boolean
    cartao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoPagamento"]>

  export type HistoricoPagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    valor?: boolean
    cartao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoPagamento"]>

  export type HistoricoPagamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    valor?: boolean
    cartao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoPagamento"]>

  export type HistoricoPagamentoSelectScalar = {
    id?: boolean
    data?: boolean
    valor?: boolean
    cartao?: boolean
    usuarioId?: boolean
  }

  export type HistoricoPagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "valor" | "cartao" | "usuarioId", ExtArgs["result"]["historicoPagamento"]>
  export type HistoricoPagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type HistoricoPagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type HistoricoPagamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $HistoricoPagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoricoPagamento"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      valor: number
      cartao: string
      usuarioId: number
    }, ExtArgs["result"]["historicoPagamento"]>
    composites: {}
  }

  type HistoricoPagamentoGetPayload<S extends boolean | null | undefined | HistoricoPagamentoDefaultArgs> = $Result.GetResult<Prisma.$HistoricoPagamentoPayload, S>

  type HistoricoPagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoPagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoPagamentoCountAggregateInputType | true
    }

  export interface HistoricoPagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoricoPagamento'], meta: { name: 'HistoricoPagamento' } }
    /**
     * Find zero or one HistoricoPagamento that matches the filter.
     * @param {HistoricoPagamentoFindUniqueArgs} args - Arguments to find a HistoricoPagamento
     * @example
     * // Get one HistoricoPagamento
     * const historicoPagamento = await prisma.historicoPagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoPagamentoFindUniqueArgs>(args: SelectSubset<T, HistoricoPagamentoFindUniqueArgs<ExtArgs>>): Prisma__HistoricoPagamentoClient<$Result.GetResult<Prisma.$HistoricoPagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoricoPagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoPagamentoFindUniqueOrThrowArgs} args - Arguments to find a HistoricoPagamento
     * @example
     * // Get one HistoricoPagamento
     * const historicoPagamento = await prisma.historicoPagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoPagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoPagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoPagamentoClient<$Result.GetResult<Prisma.$HistoricoPagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoPagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoPagamentoFindFirstArgs} args - Arguments to find a HistoricoPagamento
     * @example
     * // Get one HistoricoPagamento
     * const historicoPagamento = await prisma.historicoPagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoPagamentoFindFirstArgs>(args?: SelectSubset<T, HistoricoPagamentoFindFirstArgs<ExtArgs>>): Prisma__HistoricoPagamentoClient<$Result.GetResult<Prisma.$HistoricoPagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoPagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoPagamentoFindFirstOrThrowArgs} args - Arguments to find a HistoricoPagamento
     * @example
     * // Get one HistoricoPagamento
     * const historicoPagamento = await prisma.historicoPagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoPagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoPagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoPagamentoClient<$Result.GetResult<Prisma.$HistoricoPagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoricoPagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoPagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoricoPagamentos
     * const historicoPagamentos = await prisma.historicoPagamento.findMany()
     * 
     * // Get first 10 HistoricoPagamentos
     * const historicoPagamentos = await prisma.historicoPagamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoPagamentoWithIdOnly = await prisma.historicoPagamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoPagamentoFindManyArgs>(args?: SelectSubset<T, HistoricoPagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoricoPagamento.
     * @param {HistoricoPagamentoCreateArgs} args - Arguments to create a HistoricoPagamento.
     * @example
     * // Create one HistoricoPagamento
     * const HistoricoPagamento = await prisma.historicoPagamento.create({
     *   data: {
     *     // ... data to create a HistoricoPagamento
     *   }
     * })
     * 
     */
    create<T extends HistoricoPagamentoCreateArgs>(args: SelectSubset<T, HistoricoPagamentoCreateArgs<ExtArgs>>): Prisma__HistoricoPagamentoClient<$Result.GetResult<Prisma.$HistoricoPagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoricoPagamentos.
     * @param {HistoricoPagamentoCreateManyArgs} args - Arguments to create many HistoricoPagamentos.
     * @example
     * // Create many HistoricoPagamentos
     * const historicoPagamento = await prisma.historicoPagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoPagamentoCreateManyArgs>(args?: SelectSubset<T, HistoricoPagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoricoPagamentos and returns the data saved in the database.
     * @param {HistoricoPagamentoCreateManyAndReturnArgs} args - Arguments to create many HistoricoPagamentos.
     * @example
     * // Create many HistoricoPagamentos
     * const historicoPagamento = await prisma.historicoPagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoricoPagamentos and only return the `id`
     * const historicoPagamentoWithIdOnly = await prisma.historicoPagamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricoPagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricoPagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoricoPagamento.
     * @param {HistoricoPagamentoDeleteArgs} args - Arguments to delete one HistoricoPagamento.
     * @example
     * // Delete one HistoricoPagamento
     * const HistoricoPagamento = await prisma.historicoPagamento.delete({
     *   where: {
     *     // ... filter to delete one HistoricoPagamento
     *   }
     * })
     * 
     */
    delete<T extends HistoricoPagamentoDeleteArgs>(args: SelectSubset<T, HistoricoPagamentoDeleteArgs<ExtArgs>>): Prisma__HistoricoPagamentoClient<$Result.GetResult<Prisma.$HistoricoPagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoricoPagamento.
     * @param {HistoricoPagamentoUpdateArgs} args - Arguments to update one HistoricoPagamento.
     * @example
     * // Update one HistoricoPagamento
     * const historicoPagamento = await prisma.historicoPagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoPagamentoUpdateArgs>(args: SelectSubset<T, HistoricoPagamentoUpdateArgs<ExtArgs>>): Prisma__HistoricoPagamentoClient<$Result.GetResult<Prisma.$HistoricoPagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoricoPagamentos.
     * @param {HistoricoPagamentoDeleteManyArgs} args - Arguments to filter HistoricoPagamentos to delete.
     * @example
     * // Delete a few HistoricoPagamentos
     * const { count } = await prisma.historicoPagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoPagamentoDeleteManyArgs>(args?: SelectSubset<T, HistoricoPagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoPagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoPagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoricoPagamentos
     * const historicoPagamento = await prisma.historicoPagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoPagamentoUpdateManyArgs>(args: SelectSubset<T, HistoricoPagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoPagamentos and returns the data updated in the database.
     * @param {HistoricoPagamentoUpdateManyAndReturnArgs} args - Arguments to update many HistoricoPagamentos.
     * @example
     * // Update many HistoricoPagamentos
     * const historicoPagamento = await prisma.historicoPagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoricoPagamentos and only return the `id`
     * const historicoPagamentoWithIdOnly = await prisma.historicoPagamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistoricoPagamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoricoPagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoPagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoricoPagamento.
     * @param {HistoricoPagamentoUpsertArgs} args - Arguments to update or create a HistoricoPagamento.
     * @example
     * // Update or create a HistoricoPagamento
     * const historicoPagamento = await prisma.historicoPagamento.upsert({
     *   create: {
     *     // ... data to create a HistoricoPagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoricoPagamento we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoPagamentoUpsertArgs>(args: SelectSubset<T, HistoricoPagamentoUpsertArgs<ExtArgs>>): Prisma__HistoricoPagamentoClient<$Result.GetResult<Prisma.$HistoricoPagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoricoPagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoPagamentoCountArgs} args - Arguments to filter HistoricoPagamentos to count.
     * @example
     * // Count the number of HistoricoPagamentos
     * const count = await prisma.historicoPagamento.count({
     *   where: {
     *     // ... the filter for the HistoricoPagamentos we want to count
     *   }
     * })
    **/
    count<T extends HistoricoPagamentoCountArgs>(
      args?: Subset<T, HistoricoPagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoPagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoricoPagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoPagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoricoPagamentoAggregateArgs>(args: Subset<T, HistoricoPagamentoAggregateArgs>): Prisma.PrismaPromise<GetHistoricoPagamentoAggregateType<T>>

    /**
     * Group by HistoricoPagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoPagamentoGroupByArgs} args - Group by arguments.
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
      T extends HistoricoPagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoPagamentoGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoPagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoricoPagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoricoPagamento model
   */
  readonly fields: HistoricoPagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoricoPagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoPagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistoricoPagamento model
   */
  interface HistoricoPagamentoFieldRefs {
    readonly id: FieldRef<"HistoricoPagamento", 'Int'>
    readonly data: FieldRef<"HistoricoPagamento", 'DateTime'>
    readonly valor: FieldRef<"HistoricoPagamento", 'Float'>
    readonly cartao: FieldRef<"HistoricoPagamento", 'String'>
    readonly usuarioId: FieldRef<"HistoricoPagamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HistoricoPagamento findUnique
   */
  export type HistoricoPagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoPagamento to fetch.
     */
    where: HistoricoPagamentoWhereUniqueInput
  }

  /**
   * HistoricoPagamento findUniqueOrThrow
   */
  export type HistoricoPagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoPagamento to fetch.
     */
    where: HistoricoPagamentoWhereUniqueInput
  }

  /**
   * HistoricoPagamento findFirst
   */
  export type HistoricoPagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoPagamento to fetch.
     */
    where?: HistoricoPagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoPagamentos to fetch.
     */
    orderBy?: HistoricoPagamentoOrderByWithRelationInput | HistoricoPagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoPagamentos.
     */
    cursor?: HistoricoPagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoPagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoPagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoPagamentos.
     */
    distinct?: HistoricoPagamentoScalarFieldEnum | HistoricoPagamentoScalarFieldEnum[]
  }

  /**
   * HistoricoPagamento findFirstOrThrow
   */
  export type HistoricoPagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoPagamento to fetch.
     */
    where?: HistoricoPagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoPagamentos to fetch.
     */
    orderBy?: HistoricoPagamentoOrderByWithRelationInput | HistoricoPagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoPagamentos.
     */
    cursor?: HistoricoPagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoPagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoPagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoPagamentos.
     */
    distinct?: HistoricoPagamentoScalarFieldEnum | HistoricoPagamentoScalarFieldEnum[]
  }

  /**
   * HistoricoPagamento findMany
   */
  export type HistoricoPagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoPagamentos to fetch.
     */
    where?: HistoricoPagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoPagamentos to fetch.
     */
    orderBy?: HistoricoPagamentoOrderByWithRelationInput | HistoricoPagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoricoPagamentos.
     */
    cursor?: HistoricoPagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoPagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoPagamentos.
     */
    skip?: number
    distinct?: HistoricoPagamentoScalarFieldEnum | HistoricoPagamentoScalarFieldEnum[]
  }

  /**
   * HistoricoPagamento create
   */
  export type HistoricoPagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoricoPagamento.
     */
    data: XOR<HistoricoPagamentoCreateInput, HistoricoPagamentoUncheckedCreateInput>
  }

  /**
   * HistoricoPagamento createMany
   */
  export type HistoricoPagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoricoPagamentos.
     */
    data: HistoricoPagamentoCreateManyInput | HistoricoPagamentoCreateManyInput[]
  }

  /**
   * HistoricoPagamento createManyAndReturn
   */
  export type HistoricoPagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * The data used to create many HistoricoPagamentos.
     */
    data: HistoricoPagamentoCreateManyInput | HistoricoPagamentoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoPagamento update
   */
  export type HistoricoPagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoricoPagamento.
     */
    data: XOR<HistoricoPagamentoUpdateInput, HistoricoPagamentoUncheckedUpdateInput>
    /**
     * Choose, which HistoricoPagamento to update.
     */
    where: HistoricoPagamentoWhereUniqueInput
  }

  /**
   * HistoricoPagamento updateMany
   */
  export type HistoricoPagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoricoPagamentos.
     */
    data: XOR<HistoricoPagamentoUpdateManyMutationInput, HistoricoPagamentoUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoPagamentos to update
     */
    where?: HistoricoPagamentoWhereInput
    /**
     * Limit how many HistoricoPagamentos to update.
     */
    limit?: number
  }

  /**
   * HistoricoPagamento updateManyAndReturn
   */
  export type HistoricoPagamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * The data used to update HistoricoPagamentos.
     */
    data: XOR<HistoricoPagamentoUpdateManyMutationInput, HistoricoPagamentoUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoPagamentos to update
     */
    where?: HistoricoPagamentoWhereInput
    /**
     * Limit how many HistoricoPagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoPagamento upsert
   */
  export type HistoricoPagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoricoPagamento to update in case it exists.
     */
    where: HistoricoPagamentoWhereUniqueInput
    /**
     * In case the HistoricoPagamento found by the `where` argument doesn't exist, create a new HistoricoPagamento with this data.
     */
    create: XOR<HistoricoPagamentoCreateInput, HistoricoPagamentoUncheckedCreateInput>
    /**
     * In case the HistoricoPagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoPagamentoUpdateInput, HistoricoPagamentoUncheckedUpdateInput>
  }

  /**
   * HistoricoPagamento delete
   */
  export type HistoricoPagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoInclude<ExtArgs> | null
    /**
     * Filter which HistoricoPagamento to delete.
     */
    where: HistoricoPagamentoWhereUniqueInput
  }

  /**
   * HistoricoPagamento deleteMany
   */
  export type HistoricoPagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoPagamentos to delete
     */
    where?: HistoricoPagamentoWhereInput
    /**
     * Limit how many HistoricoPagamentos to delete.
     */
    limit?: number
  }

  /**
   * HistoricoPagamento without action
   */
  export type HistoricoPagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoPagamento
     */
    select?: HistoricoPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoPagamento
     */
    omit?: HistoricoPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoPagamentoInclude<ExtArgs> | null
  }


  /**
   * Model LinhaOnibus
   */

  export type AggregateLinhaOnibus = {
    _count: LinhaOnibusCountAggregateOutputType | null
    _avg: LinhaOnibusAvgAggregateOutputType | null
    _sum: LinhaOnibusSumAggregateOutputType | null
    _min: LinhaOnibusMinAggregateOutputType | null
    _max: LinhaOnibusMaxAggregateOutputType | null
  }

  export type LinhaOnibusAvgAggregateOutputType = {
    id: number | null
  }

  export type LinhaOnibusSumAggregateOutputType = {
    id: number | null
  }

  export type LinhaOnibusMinAggregateOutputType = {
    id: number | null
    nome: string | null
    corLinha: string | null
    categoria: string | null
    abrangencia: string | null
    tipo: string | null
    pagamento: string | null
    endereco: string | null
  }

  export type LinhaOnibusMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    corLinha: string | null
    categoria: string | null
    abrangencia: string | null
    tipo: string | null
    pagamento: string | null
    endereco: string | null
  }

  export type LinhaOnibusCountAggregateOutputType = {
    id: number
    nome: number
    corLinha: number
    categoria: number
    abrangencia: number
    tipo: number
    pagamento: number
    endereco: number
    _all: number
  }


  export type LinhaOnibusAvgAggregateInputType = {
    id?: true
  }

  export type LinhaOnibusSumAggregateInputType = {
    id?: true
  }

  export type LinhaOnibusMinAggregateInputType = {
    id?: true
    nome?: true
    corLinha?: true
    categoria?: true
    abrangencia?: true
    tipo?: true
    pagamento?: true
    endereco?: true
  }

  export type LinhaOnibusMaxAggregateInputType = {
    id?: true
    nome?: true
    corLinha?: true
    categoria?: true
    abrangencia?: true
    tipo?: true
    pagamento?: true
    endereco?: true
  }

  export type LinhaOnibusCountAggregateInputType = {
    id?: true
    nome?: true
    corLinha?: true
    categoria?: true
    abrangencia?: true
    tipo?: true
    pagamento?: true
    endereco?: true
    _all?: true
  }

  export type LinhaOnibusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinhaOnibus to aggregate.
     */
    where?: LinhaOnibusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinhaOnibuses to fetch.
     */
    orderBy?: LinhaOnibusOrderByWithRelationInput | LinhaOnibusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinhaOnibusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinhaOnibuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinhaOnibuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinhaOnibuses
    **/
    _count?: true | LinhaOnibusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinhaOnibusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinhaOnibusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinhaOnibusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinhaOnibusMaxAggregateInputType
  }

  export type GetLinhaOnibusAggregateType<T extends LinhaOnibusAggregateArgs> = {
        [P in keyof T & keyof AggregateLinhaOnibus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinhaOnibus[P]>
      : GetScalarType<T[P], AggregateLinhaOnibus[P]>
  }




  export type LinhaOnibusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinhaOnibusWhereInput
    orderBy?: LinhaOnibusOrderByWithAggregationInput | LinhaOnibusOrderByWithAggregationInput[]
    by: LinhaOnibusScalarFieldEnum[] | LinhaOnibusScalarFieldEnum
    having?: LinhaOnibusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinhaOnibusCountAggregateInputType | true
    _avg?: LinhaOnibusAvgAggregateInputType
    _sum?: LinhaOnibusSumAggregateInputType
    _min?: LinhaOnibusMinAggregateInputType
    _max?: LinhaOnibusMaxAggregateInputType
  }

  export type LinhaOnibusGroupByOutputType = {
    id: number
    nome: string
    corLinha: string
    categoria: string
    abrangencia: string
    tipo: string
    pagamento: string
    endereco: string
    _count: LinhaOnibusCountAggregateOutputType | null
    _avg: LinhaOnibusAvgAggregateOutputType | null
    _sum: LinhaOnibusSumAggregateOutputType | null
    _min: LinhaOnibusMinAggregateOutputType | null
    _max: LinhaOnibusMaxAggregateOutputType | null
  }

  type GetLinhaOnibusGroupByPayload<T extends LinhaOnibusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinhaOnibusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinhaOnibusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinhaOnibusGroupByOutputType[P]>
            : GetScalarType<T[P], LinhaOnibusGroupByOutputType[P]>
        }
      >
    >


  export type LinhaOnibusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    corLinha?: boolean
    categoria?: boolean
    abrangencia?: boolean
    tipo?: boolean
    pagamento?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["linhaOnibus"]>

  export type LinhaOnibusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    corLinha?: boolean
    categoria?: boolean
    abrangencia?: boolean
    tipo?: boolean
    pagamento?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["linhaOnibus"]>

  export type LinhaOnibusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    corLinha?: boolean
    categoria?: boolean
    abrangencia?: boolean
    tipo?: boolean
    pagamento?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["linhaOnibus"]>

  export type LinhaOnibusSelectScalar = {
    id?: boolean
    nome?: boolean
    corLinha?: boolean
    categoria?: boolean
    abrangencia?: boolean
    tipo?: boolean
    pagamento?: boolean
    endereco?: boolean
  }

  export type LinhaOnibusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "corLinha" | "categoria" | "abrangencia" | "tipo" | "pagamento" | "endereco", ExtArgs["result"]["linhaOnibus"]>

  export type $LinhaOnibusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinhaOnibus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      corLinha: string
      categoria: string
      abrangencia: string
      tipo: string
      pagamento: string
      endereco: string
    }, ExtArgs["result"]["linhaOnibus"]>
    composites: {}
  }

  type LinhaOnibusGetPayload<S extends boolean | null | undefined | LinhaOnibusDefaultArgs> = $Result.GetResult<Prisma.$LinhaOnibusPayload, S>

  type LinhaOnibusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinhaOnibusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinhaOnibusCountAggregateInputType | true
    }

  export interface LinhaOnibusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinhaOnibus'], meta: { name: 'LinhaOnibus' } }
    /**
     * Find zero or one LinhaOnibus that matches the filter.
     * @param {LinhaOnibusFindUniqueArgs} args - Arguments to find a LinhaOnibus
     * @example
     * // Get one LinhaOnibus
     * const linhaOnibus = await prisma.linhaOnibus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinhaOnibusFindUniqueArgs>(args: SelectSubset<T, LinhaOnibusFindUniqueArgs<ExtArgs>>): Prisma__LinhaOnibusClient<$Result.GetResult<Prisma.$LinhaOnibusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinhaOnibus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinhaOnibusFindUniqueOrThrowArgs} args - Arguments to find a LinhaOnibus
     * @example
     * // Get one LinhaOnibus
     * const linhaOnibus = await prisma.linhaOnibus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinhaOnibusFindUniqueOrThrowArgs>(args: SelectSubset<T, LinhaOnibusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinhaOnibusClient<$Result.GetResult<Prisma.$LinhaOnibusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinhaOnibus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinhaOnibusFindFirstArgs} args - Arguments to find a LinhaOnibus
     * @example
     * // Get one LinhaOnibus
     * const linhaOnibus = await prisma.linhaOnibus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinhaOnibusFindFirstArgs>(args?: SelectSubset<T, LinhaOnibusFindFirstArgs<ExtArgs>>): Prisma__LinhaOnibusClient<$Result.GetResult<Prisma.$LinhaOnibusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinhaOnibus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinhaOnibusFindFirstOrThrowArgs} args - Arguments to find a LinhaOnibus
     * @example
     * // Get one LinhaOnibus
     * const linhaOnibus = await prisma.linhaOnibus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinhaOnibusFindFirstOrThrowArgs>(args?: SelectSubset<T, LinhaOnibusFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinhaOnibusClient<$Result.GetResult<Prisma.$LinhaOnibusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinhaOnibuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinhaOnibusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinhaOnibuses
     * const linhaOnibuses = await prisma.linhaOnibus.findMany()
     * 
     * // Get first 10 LinhaOnibuses
     * const linhaOnibuses = await prisma.linhaOnibus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linhaOnibusWithIdOnly = await prisma.linhaOnibus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinhaOnibusFindManyArgs>(args?: SelectSubset<T, LinhaOnibusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinhaOnibusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinhaOnibus.
     * @param {LinhaOnibusCreateArgs} args - Arguments to create a LinhaOnibus.
     * @example
     * // Create one LinhaOnibus
     * const LinhaOnibus = await prisma.linhaOnibus.create({
     *   data: {
     *     // ... data to create a LinhaOnibus
     *   }
     * })
     * 
     */
    create<T extends LinhaOnibusCreateArgs>(args: SelectSubset<T, LinhaOnibusCreateArgs<ExtArgs>>): Prisma__LinhaOnibusClient<$Result.GetResult<Prisma.$LinhaOnibusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinhaOnibuses.
     * @param {LinhaOnibusCreateManyArgs} args - Arguments to create many LinhaOnibuses.
     * @example
     * // Create many LinhaOnibuses
     * const linhaOnibus = await prisma.linhaOnibus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinhaOnibusCreateManyArgs>(args?: SelectSubset<T, LinhaOnibusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinhaOnibuses and returns the data saved in the database.
     * @param {LinhaOnibusCreateManyAndReturnArgs} args - Arguments to create many LinhaOnibuses.
     * @example
     * // Create many LinhaOnibuses
     * const linhaOnibus = await prisma.linhaOnibus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinhaOnibuses and only return the `id`
     * const linhaOnibusWithIdOnly = await prisma.linhaOnibus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinhaOnibusCreateManyAndReturnArgs>(args?: SelectSubset<T, LinhaOnibusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinhaOnibusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinhaOnibus.
     * @param {LinhaOnibusDeleteArgs} args - Arguments to delete one LinhaOnibus.
     * @example
     * // Delete one LinhaOnibus
     * const LinhaOnibus = await prisma.linhaOnibus.delete({
     *   where: {
     *     // ... filter to delete one LinhaOnibus
     *   }
     * })
     * 
     */
    delete<T extends LinhaOnibusDeleteArgs>(args: SelectSubset<T, LinhaOnibusDeleteArgs<ExtArgs>>): Prisma__LinhaOnibusClient<$Result.GetResult<Prisma.$LinhaOnibusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinhaOnibus.
     * @param {LinhaOnibusUpdateArgs} args - Arguments to update one LinhaOnibus.
     * @example
     * // Update one LinhaOnibus
     * const linhaOnibus = await prisma.linhaOnibus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinhaOnibusUpdateArgs>(args: SelectSubset<T, LinhaOnibusUpdateArgs<ExtArgs>>): Prisma__LinhaOnibusClient<$Result.GetResult<Prisma.$LinhaOnibusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinhaOnibuses.
     * @param {LinhaOnibusDeleteManyArgs} args - Arguments to filter LinhaOnibuses to delete.
     * @example
     * // Delete a few LinhaOnibuses
     * const { count } = await prisma.linhaOnibus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinhaOnibusDeleteManyArgs>(args?: SelectSubset<T, LinhaOnibusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinhaOnibuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinhaOnibusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinhaOnibuses
     * const linhaOnibus = await prisma.linhaOnibus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinhaOnibusUpdateManyArgs>(args: SelectSubset<T, LinhaOnibusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinhaOnibuses and returns the data updated in the database.
     * @param {LinhaOnibusUpdateManyAndReturnArgs} args - Arguments to update many LinhaOnibuses.
     * @example
     * // Update many LinhaOnibuses
     * const linhaOnibus = await prisma.linhaOnibus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinhaOnibuses and only return the `id`
     * const linhaOnibusWithIdOnly = await prisma.linhaOnibus.updateManyAndReturn({
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
    updateManyAndReturn<T extends LinhaOnibusUpdateManyAndReturnArgs>(args: SelectSubset<T, LinhaOnibusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinhaOnibusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinhaOnibus.
     * @param {LinhaOnibusUpsertArgs} args - Arguments to update or create a LinhaOnibus.
     * @example
     * // Update or create a LinhaOnibus
     * const linhaOnibus = await prisma.linhaOnibus.upsert({
     *   create: {
     *     // ... data to create a LinhaOnibus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinhaOnibus we want to update
     *   }
     * })
     */
    upsert<T extends LinhaOnibusUpsertArgs>(args: SelectSubset<T, LinhaOnibusUpsertArgs<ExtArgs>>): Prisma__LinhaOnibusClient<$Result.GetResult<Prisma.$LinhaOnibusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinhaOnibuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinhaOnibusCountArgs} args - Arguments to filter LinhaOnibuses to count.
     * @example
     * // Count the number of LinhaOnibuses
     * const count = await prisma.linhaOnibus.count({
     *   where: {
     *     // ... the filter for the LinhaOnibuses we want to count
     *   }
     * })
    **/
    count<T extends LinhaOnibusCountArgs>(
      args?: Subset<T, LinhaOnibusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinhaOnibusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinhaOnibus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinhaOnibusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinhaOnibusAggregateArgs>(args: Subset<T, LinhaOnibusAggregateArgs>): Prisma.PrismaPromise<GetLinhaOnibusAggregateType<T>>

    /**
     * Group by LinhaOnibus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinhaOnibusGroupByArgs} args - Group by arguments.
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
      T extends LinhaOnibusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinhaOnibusGroupByArgs['orderBy'] }
        : { orderBy?: LinhaOnibusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinhaOnibusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinhaOnibusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinhaOnibus model
   */
  readonly fields: LinhaOnibusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinhaOnibus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinhaOnibusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the LinhaOnibus model
   */
  interface LinhaOnibusFieldRefs {
    readonly id: FieldRef<"LinhaOnibus", 'Int'>
    readonly nome: FieldRef<"LinhaOnibus", 'String'>
    readonly corLinha: FieldRef<"LinhaOnibus", 'String'>
    readonly categoria: FieldRef<"LinhaOnibus", 'String'>
    readonly abrangencia: FieldRef<"LinhaOnibus", 'String'>
    readonly tipo: FieldRef<"LinhaOnibus", 'String'>
    readonly pagamento: FieldRef<"LinhaOnibus", 'String'>
    readonly endereco: FieldRef<"LinhaOnibus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LinhaOnibus findUnique
   */
  export type LinhaOnibusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaOnibus
     */
    select?: LinhaOnibusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinhaOnibus
     */
    omit?: LinhaOnibusOmit<ExtArgs> | null
    /**
     * Filter, which LinhaOnibus to fetch.
     */
    where: LinhaOnibusWhereUniqueInput
  }

  /**
   * LinhaOnibus findUniqueOrThrow
   */
  export type LinhaOnibusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaOnibus
     */
    select?: LinhaOnibusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinhaOnibus
     */
    omit?: LinhaOnibusOmit<ExtArgs> | null
    /**
     * Filter, which LinhaOnibus to fetch.
     */
    where: LinhaOnibusWhereUniqueInput
  }

  /**
   * LinhaOnibus findFirst
   */
  export type LinhaOnibusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaOnibus
     */
    select?: LinhaOnibusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinhaOnibus
     */
    omit?: LinhaOnibusOmit<ExtArgs> | null
    /**
     * Filter, which LinhaOnibus to fetch.
     */
    where?: LinhaOnibusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinhaOnibuses to fetch.
     */
    orderBy?: LinhaOnibusOrderByWithRelationInput | LinhaOnibusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinhaOnibuses.
     */
    cursor?: LinhaOnibusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinhaOnibuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinhaOnibuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinhaOnibuses.
     */
    distinct?: LinhaOnibusScalarFieldEnum | LinhaOnibusScalarFieldEnum[]
  }

  /**
   * LinhaOnibus findFirstOrThrow
   */
  export type LinhaOnibusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaOnibus
     */
    select?: LinhaOnibusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinhaOnibus
     */
    omit?: LinhaOnibusOmit<ExtArgs> | null
    /**
     * Filter, which LinhaOnibus to fetch.
     */
    where?: LinhaOnibusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinhaOnibuses to fetch.
     */
    orderBy?: LinhaOnibusOrderByWithRelationInput | LinhaOnibusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinhaOnibuses.
     */
    cursor?: LinhaOnibusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinhaOnibuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinhaOnibuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinhaOnibuses.
     */
    distinct?: LinhaOnibusScalarFieldEnum | LinhaOnibusScalarFieldEnum[]
  }

  /**
   * LinhaOnibus findMany
   */
  export type LinhaOnibusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaOnibus
     */
    select?: LinhaOnibusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinhaOnibus
     */
    omit?: LinhaOnibusOmit<ExtArgs> | null
    /**
     * Filter, which LinhaOnibuses to fetch.
     */
    where?: LinhaOnibusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinhaOnibuses to fetch.
     */
    orderBy?: LinhaOnibusOrderByWithRelationInput | LinhaOnibusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinhaOnibuses.
     */
    cursor?: LinhaOnibusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinhaOnibuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinhaOnibuses.
     */
    skip?: number
    distinct?: LinhaOnibusScalarFieldEnum | LinhaOnibusScalarFieldEnum[]
  }

  /**
   * LinhaOnibus create
   */
  export type LinhaOnibusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaOnibus
     */
    select?: LinhaOnibusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinhaOnibus
     */
    omit?: LinhaOnibusOmit<ExtArgs> | null
    /**
     * The data needed to create a LinhaOnibus.
     */
    data: XOR<LinhaOnibusCreateInput, LinhaOnibusUncheckedCreateInput>
  }

  /**
   * LinhaOnibus createMany
   */
  export type LinhaOnibusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinhaOnibuses.
     */
    data: LinhaOnibusCreateManyInput | LinhaOnibusCreateManyInput[]
  }

  /**
   * LinhaOnibus createManyAndReturn
   */
  export type LinhaOnibusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaOnibus
     */
    select?: LinhaOnibusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinhaOnibus
     */
    omit?: LinhaOnibusOmit<ExtArgs> | null
    /**
     * The data used to create many LinhaOnibuses.
     */
    data: LinhaOnibusCreateManyInput | LinhaOnibusCreateManyInput[]
  }

  /**
   * LinhaOnibus update
   */
  export type LinhaOnibusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaOnibus
     */
    select?: LinhaOnibusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinhaOnibus
     */
    omit?: LinhaOnibusOmit<ExtArgs> | null
    /**
     * The data needed to update a LinhaOnibus.
     */
    data: XOR<LinhaOnibusUpdateInput, LinhaOnibusUncheckedUpdateInput>
    /**
     * Choose, which LinhaOnibus to update.
     */
    where: LinhaOnibusWhereUniqueInput
  }

  /**
   * LinhaOnibus updateMany
   */
  export type LinhaOnibusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinhaOnibuses.
     */
    data: XOR<LinhaOnibusUpdateManyMutationInput, LinhaOnibusUncheckedUpdateManyInput>
    /**
     * Filter which LinhaOnibuses to update
     */
    where?: LinhaOnibusWhereInput
    /**
     * Limit how many LinhaOnibuses to update.
     */
    limit?: number
  }

  /**
   * LinhaOnibus updateManyAndReturn
   */
  export type LinhaOnibusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaOnibus
     */
    select?: LinhaOnibusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinhaOnibus
     */
    omit?: LinhaOnibusOmit<ExtArgs> | null
    /**
     * The data used to update LinhaOnibuses.
     */
    data: XOR<LinhaOnibusUpdateManyMutationInput, LinhaOnibusUncheckedUpdateManyInput>
    /**
     * Filter which LinhaOnibuses to update
     */
    where?: LinhaOnibusWhereInput
    /**
     * Limit how many LinhaOnibuses to update.
     */
    limit?: number
  }

  /**
   * LinhaOnibus upsert
   */
  export type LinhaOnibusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaOnibus
     */
    select?: LinhaOnibusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinhaOnibus
     */
    omit?: LinhaOnibusOmit<ExtArgs> | null
    /**
     * The filter to search for the LinhaOnibus to update in case it exists.
     */
    where: LinhaOnibusWhereUniqueInput
    /**
     * In case the LinhaOnibus found by the `where` argument doesn't exist, create a new LinhaOnibus with this data.
     */
    create: XOR<LinhaOnibusCreateInput, LinhaOnibusUncheckedCreateInput>
    /**
     * In case the LinhaOnibus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinhaOnibusUpdateInput, LinhaOnibusUncheckedUpdateInput>
  }

  /**
   * LinhaOnibus delete
   */
  export type LinhaOnibusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaOnibus
     */
    select?: LinhaOnibusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinhaOnibus
     */
    omit?: LinhaOnibusOmit<ExtArgs> | null
    /**
     * Filter which LinhaOnibus to delete.
     */
    where: LinhaOnibusWhereUniqueInput
  }

  /**
   * LinhaOnibus deleteMany
   */
  export type LinhaOnibusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinhaOnibuses to delete
     */
    where?: LinhaOnibusWhereInput
    /**
     * Limit how many LinhaOnibuses to delete.
     */
    limit?: number
  }

  /**
   * LinhaOnibus without action
   */
  export type LinhaOnibusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaOnibus
     */
    select?: LinhaOnibusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinhaOnibus
     */
    omit?: LinhaOnibusOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    senha: 'senha',
    tipo: 'tipo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CartaoScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    usuarioId: 'usuarioId'
  };

  export type CartaoScalarFieldEnum = (typeof CartaoScalarFieldEnum)[keyof typeof CartaoScalarFieldEnum]


  export const RecargaScalarFieldEnum: {
    id: 'id',
    valor: 'valor',
    tipo: 'tipo',
    data: 'data',
    usuarioId: 'usuarioId'
  };

  export type RecargaScalarFieldEnum = (typeof RecargaScalarFieldEnum)[keyof typeof RecargaScalarFieldEnum]


  export const HistoricoPagamentoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    valor: 'valor',
    cartao: 'cartao',
    usuarioId: 'usuarioId'
  };

  export type HistoricoPagamentoScalarFieldEnum = (typeof HistoricoPagamentoScalarFieldEnum)[keyof typeof HistoricoPagamentoScalarFieldEnum]


  export const LinhaOnibusScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    corLinha: 'corLinha',
    categoria: 'categoria',
    abrangencia: 'abrangencia',
    tipo: 'tipo',
    pagamento: 'pagamento',
    endereco: 'endereco'
  };

  export type LinhaOnibusScalarFieldEnum = (typeof LinhaOnibusScalarFieldEnum)[keyof typeof LinhaOnibusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    cpf?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipo?: StringFilter<"Usuario"> | string
    historicos?: HistoricoPagamentoListRelationFilter
    recargas?: RecargaListRelationFilter
    Cartao?: CartaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    historicos?: HistoricoPagamentoOrderByRelationAggregateInput
    recargas?: RecargaOrderByRelationAggregateInput
    Cartao?: CartaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senha?: StringFilter<"Usuario"> | string
    tipo?: StringFilter<"Usuario"> | string
    historicos?: HistoricoPagamentoListRelationFilter
    recargas?: RecargaListRelationFilter
    Cartao?: CartaoListRelationFilter
  }, "id" | "cpf">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    cpf?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    tipo?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type CartaoWhereInput = {
    AND?: CartaoWhereInput | CartaoWhereInput[]
    OR?: CartaoWhereInput[]
    NOT?: CartaoWhereInput | CartaoWhereInput[]
    id?: IntFilter<"Cartao"> | number
    numero?: StringFilter<"Cartao"> | string
    usuarioId?: IntFilter<"Cartao"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type CartaoOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type CartaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero?: string
    AND?: CartaoWhereInput | CartaoWhereInput[]
    OR?: CartaoWhereInput[]
    NOT?: CartaoWhereInput | CartaoWhereInput[]
    usuarioId?: IntFilter<"Cartao"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "numero">

  export type CartaoOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    usuarioId?: SortOrder
    _count?: CartaoCountOrderByAggregateInput
    _avg?: CartaoAvgOrderByAggregateInput
    _max?: CartaoMaxOrderByAggregateInput
    _min?: CartaoMinOrderByAggregateInput
    _sum?: CartaoSumOrderByAggregateInput
  }

  export type CartaoScalarWhereWithAggregatesInput = {
    AND?: CartaoScalarWhereWithAggregatesInput | CartaoScalarWhereWithAggregatesInput[]
    OR?: CartaoScalarWhereWithAggregatesInput[]
    NOT?: CartaoScalarWhereWithAggregatesInput | CartaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cartao"> | number
    numero?: StringWithAggregatesFilter<"Cartao"> | string
    usuarioId?: IntWithAggregatesFilter<"Cartao"> | number
  }

  export type RecargaWhereInput = {
    AND?: RecargaWhereInput | RecargaWhereInput[]
    OR?: RecargaWhereInput[]
    NOT?: RecargaWhereInput | RecargaWhereInput[]
    id?: IntFilter<"Recarga"> | number
    valor?: FloatFilter<"Recarga"> | number
    tipo?: StringFilter<"Recarga"> | string
    data?: DateTimeFilter<"Recarga"> | Date | string
    usuarioId?: IntFilter<"Recarga"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type RecargaOrderByWithRelationInput = {
    id?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type RecargaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecargaWhereInput | RecargaWhereInput[]
    OR?: RecargaWhereInput[]
    NOT?: RecargaWhereInput | RecargaWhereInput[]
    valor?: FloatFilter<"Recarga"> | number
    tipo?: StringFilter<"Recarga"> | string
    data?: DateTimeFilter<"Recarga"> | Date | string
    usuarioId?: IntFilter<"Recarga"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type RecargaOrderByWithAggregationInput = {
    id?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
    _count?: RecargaCountOrderByAggregateInput
    _avg?: RecargaAvgOrderByAggregateInput
    _max?: RecargaMaxOrderByAggregateInput
    _min?: RecargaMinOrderByAggregateInput
    _sum?: RecargaSumOrderByAggregateInput
  }

  export type RecargaScalarWhereWithAggregatesInput = {
    AND?: RecargaScalarWhereWithAggregatesInput | RecargaScalarWhereWithAggregatesInput[]
    OR?: RecargaScalarWhereWithAggregatesInput[]
    NOT?: RecargaScalarWhereWithAggregatesInput | RecargaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recarga"> | number
    valor?: FloatWithAggregatesFilter<"Recarga"> | number
    tipo?: StringWithAggregatesFilter<"Recarga"> | string
    data?: DateTimeWithAggregatesFilter<"Recarga"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Recarga"> | number
  }

  export type HistoricoPagamentoWhereInput = {
    AND?: HistoricoPagamentoWhereInput | HistoricoPagamentoWhereInput[]
    OR?: HistoricoPagamentoWhereInput[]
    NOT?: HistoricoPagamentoWhereInput | HistoricoPagamentoWhereInput[]
    id?: IntFilter<"HistoricoPagamento"> | number
    data?: DateTimeFilter<"HistoricoPagamento"> | Date | string
    valor?: FloatFilter<"HistoricoPagamento"> | number
    cartao?: StringFilter<"HistoricoPagamento"> | string
    usuarioId?: IntFilter<"HistoricoPagamento"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type HistoricoPagamentoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    cartao?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type HistoricoPagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoricoPagamentoWhereInput | HistoricoPagamentoWhereInput[]
    OR?: HistoricoPagamentoWhereInput[]
    NOT?: HistoricoPagamentoWhereInput | HistoricoPagamentoWhereInput[]
    data?: DateTimeFilter<"HistoricoPagamento"> | Date | string
    valor?: FloatFilter<"HistoricoPagamento"> | number
    cartao?: StringFilter<"HistoricoPagamento"> | string
    usuarioId?: IntFilter<"HistoricoPagamento"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type HistoricoPagamentoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    cartao?: SortOrder
    usuarioId?: SortOrder
    _count?: HistoricoPagamentoCountOrderByAggregateInput
    _avg?: HistoricoPagamentoAvgOrderByAggregateInput
    _max?: HistoricoPagamentoMaxOrderByAggregateInput
    _min?: HistoricoPagamentoMinOrderByAggregateInput
    _sum?: HistoricoPagamentoSumOrderByAggregateInput
  }

  export type HistoricoPagamentoScalarWhereWithAggregatesInput = {
    AND?: HistoricoPagamentoScalarWhereWithAggregatesInput | HistoricoPagamentoScalarWhereWithAggregatesInput[]
    OR?: HistoricoPagamentoScalarWhereWithAggregatesInput[]
    NOT?: HistoricoPagamentoScalarWhereWithAggregatesInput | HistoricoPagamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistoricoPagamento"> | number
    data?: DateTimeWithAggregatesFilter<"HistoricoPagamento"> | Date | string
    valor?: FloatWithAggregatesFilter<"HistoricoPagamento"> | number
    cartao?: StringWithAggregatesFilter<"HistoricoPagamento"> | string
    usuarioId?: IntWithAggregatesFilter<"HistoricoPagamento"> | number
  }

  export type LinhaOnibusWhereInput = {
    AND?: LinhaOnibusWhereInput | LinhaOnibusWhereInput[]
    OR?: LinhaOnibusWhereInput[]
    NOT?: LinhaOnibusWhereInput | LinhaOnibusWhereInput[]
    id?: IntFilter<"LinhaOnibus"> | number
    nome?: StringFilter<"LinhaOnibus"> | string
    corLinha?: StringFilter<"LinhaOnibus"> | string
    categoria?: StringFilter<"LinhaOnibus"> | string
    abrangencia?: StringFilter<"LinhaOnibus"> | string
    tipo?: StringFilter<"LinhaOnibus"> | string
    pagamento?: StringFilter<"LinhaOnibus"> | string
    endereco?: StringFilter<"LinhaOnibus"> | string
  }

  export type LinhaOnibusOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    corLinha?: SortOrder
    categoria?: SortOrder
    abrangencia?: SortOrder
    tipo?: SortOrder
    pagamento?: SortOrder
    endereco?: SortOrder
  }

  export type LinhaOnibusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LinhaOnibusWhereInput | LinhaOnibusWhereInput[]
    OR?: LinhaOnibusWhereInput[]
    NOT?: LinhaOnibusWhereInput | LinhaOnibusWhereInput[]
    nome?: StringFilter<"LinhaOnibus"> | string
    corLinha?: StringFilter<"LinhaOnibus"> | string
    categoria?: StringFilter<"LinhaOnibus"> | string
    abrangencia?: StringFilter<"LinhaOnibus"> | string
    tipo?: StringFilter<"LinhaOnibus"> | string
    pagamento?: StringFilter<"LinhaOnibus"> | string
    endereco?: StringFilter<"LinhaOnibus"> | string
  }, "id">

  export type LinhaOnibusOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    corLinha?: SortOrder
    categoria?: SortOrder
    abrangencia?: SortOrder
    tipo?: SortOrder
    pagamento?: SortOrder
    endereco?: SortOrder
    _count?: LinhaOnibusCountOrderByAggregateInput
    _avg?: LinhaOnibusAvgOrderByAggregateInput
    _max?: LinhaOnibusMaxOrderByAggregateInput
    _min?: LinhaOnibusMinOrderByAggregateInput
    _sum?: LinhaOnibusSumOrderByAggregateInput
  }

  export type LinhaOnibusScalarWhereWithAggregatesInput = {
    AND?: LinhaOnibusScalarWhereWithAggregatesInput | LinhaOnibusScalarWhereWithAggregatesInput[]
    OR?: LinhaOnibusScalarWhereWithAggregatesInput[]
    NOT?: LinhaOnibusScalarWhereWithAggregatesInput | LinhaOnibusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LinhaOnibus"> | number
    nome?: StringWithAggregatesFilter<"LinhaOnibus"> | string
    corLinha?: StringWithAggregatesFilter<"LinhaOnibus"> | string
    categoria?: StringWithAggregatesFilter<"LinhaOnibus"> | string
    abrangencia?: StringWithAggregatesFilter<"LinhaOnibus"> | string
    tipo?: StringWithAggregatesFilter<"LinhaOnibus"> | string
    pagamento?: StringWithAggregatesFilter<"LinhaOnibus"> | string
    endereco?: StringWithAggregatesFilter<"LinhaOnibus"> | string
  }

  export type UsuarioCreateInput = {
    cpf: string
    senha: string
    tipo: string
    historicos?: HistoricoPagamentoCreateNestedManyWithoutUsuarioInput
    recargas?: RecargaCreateNestedManyWithoutUsuarioInput
    Cartao?: CartaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    cpf: string
    senha: string
    tipo: string
    historicos?: HistoricoPagamentoUncheckedCreateNestedManyWithoutUsuarioInput
    recargas?: RecargaUncheckedCreateNestedManyWithoutUsuarioInput
    Cartao?: CartaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    historicos?: HistoricoPagamentoUpdateManyWithoutUsuarioNestedInput
    recargas?: RecargaUpdateManyWithoutUsuarioNestedInput
    Cartao?: CartaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    historicos?: HistoricoPagamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    recargas?: RecargaUncheckedUpdateManyWithoutUsuarioNestedInput
    Cartao?: CartaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    cpf: string
    senha: string
    tipo: string
  }

  export type UsuarioUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type CartaoCreateInput = {
    numero: string
    usuario: UsuarioCreateNestedOneWithoutCartaoInput
  }

  export type CartaoUncheckedCreateInput = {
    id?: number
    numero: string
    usuarioId: number
  }

  export type CartaoUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutCartaoNestedInput
  }

  export type CartaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type CartaoCreateManyInput = {
    id?: number
    numero: string
    usuarioId: number
  }

  export type CartaoUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type CartaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type RecargaCreateInput = {
    valor: number
    tipo: string
    data?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRecargasInput
  }

  export type RecargaUncheckedCreateInput = {
    id?: number
    valor: number
    tipo: string
    data?: Date | string
    usuarioId: number
  }

  export type RecargaUpdateInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRecargasNestedInput
  }

  export type RecargaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type RecargaCreateManyInput = {
    id?: number
    valor: number
    tipo: string
    data?: Date | string
    usuarioId: number
  }

  export type RecargaUpdateManyMutationInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecargaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoPagamentoCreateInput = {
    data: Date | string
    valor: number
    cartao: string
    usuario: UsuarioCreateNestedOneWithoutHistoricosInput
  }

  export type HistoricoPagamentoUncheckedCreateInput = {
    id?: number
    data: Date | string
    valor: number
    cartao: string
    usuarioId: number
  }

  export type HistoricoPagamentoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    cartao?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutHistoricosNestedInput
  }

  export type HistoricoPagamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    cartao?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoPagamentoCreateManyInput = {
    id?: number
    data: Date | string
    valor: number
    cartao: string
    usuarioId: number
  }

  export type HistoricoPagamentoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    cartao?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoPagamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    cartao?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type LinhaOnibusCreateInput = {
    nome: string
    corLinha: string
    categoria: string
    abrangencia: string
    tipo: string
    pagamento: string
    endereco: string
  }

  export type LinhaOnibusUncheckedCreateInput = {
    id?: number
    nome: string
    corLinha: string
    categoria: string
    abrangencia: string
    tipo: string
    pagamento: string
    endereco: string
  }

  export type LinhaOnibusUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    corLinha?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    abrangencia?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pagamento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type LinhaOnibusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    corLinha?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    abrangencia?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pagamento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type LinhaOnibusCreateManyInput = {
    id?: number
    nome: string
    corLinha: string
    categoria: string
    abrangencia: string
    tipo: string
    pagamento: string
    endereco: string
  }

  export type LinhaOnibusUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    corLinha?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    abrangencia?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pagamento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type LinhaOnibusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    corLinha?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    abrangencia?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    pagamento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type HistoricoPagamentoListRelationFilter = {
    every?: HistoricoPagamentoWhereInput
    some?: HistoricoPagamentoWhereInput
    none?: HistoricoPagamentoWhereInput
  }

  export type RecargaListRelationFilter = {
    every?: RecargaWhereInput
    some?: RecargaWhereInput
    none?: RecargaWhereInput
  }

  export type CartaoListRelationFilter = {
    every?: CartaoWhereInput
    some?: CartaoWhereInput
    none?: CartaoWhereInput
  }

  export type HistoricoPagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecargaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CartaoCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    usuarioId?: SortOrder
  }

  export type CartaoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CartaoMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    usuarioId?: SortOrder
  }

  export type CartaoMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    usuarioId?: SortOrder
  }

  export type CartaoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RecargaCountOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
  }

  export type RecargaAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
  }

  export type RecargaMaxOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
  }

  export type RecargaMinOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
  }

  export type RecargaSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HistoricoPagamentoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    cartao?: SortOrder
    usuarioId?: SortOrder
  }

  export type HistoricoPagamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
  }

  export type HistoricoPagamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    cartao?: SortOrder
    usuarioId?: SortOrder
  }

  export type HistoricoPagamentoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    cartao?: SortOrder
    usuarioId?: SortOrder
  }

  export type HistoricoPagamentoSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
  }

  export type LinhaOnibusCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    corLinha?: SortOrder
    categoria?: SortOrder
    abrangencia?: SortOrder
    tipo?: SortOrder
    pagamento?: SortOrder
    endereco?: SortOrder
  }

  export type LinhaOnibusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LinhaOnibusMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    corLinha?: SortOrder
    categoria?: SortOrder
    abrangencia?: SortOrder
    tipo?: SortOrder
    pagamento?: SortOrder
    endereco?: SortOrder
  }

  export type LinhaOnibusMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    corLinha?: SortOrder
    categoria?: SortOrder
    abrangencia?: SortOrder
    tipo?: SortOrder
    pagamento?: SortOrder
    endereco?: SortOrder
  }

  export type LinhaOnibusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HistoricoPagamentoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistoricoPagamentoCreateWithoutUsuarioInput, HistoricoPagamentoUncheckedCreateWithoutUsuarioInput> | HistoricoPagamentoCreateWithoutUsuarioInput[] | HistoricoPagamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistoricoPagamentoCreateOrConnectWithoutUsuarioInput | HistoricoPagamentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistoricoPagamentoCreateManyUsuarioInputEnvelope
    connect?: HistoricoPagamentoWhereUniqueInput | HistoricoPagamentoWhereUniqueInput[]
  }

  export type RecargaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RecargaCreateWithoutUsuarioInput, RecargaUncheckedCreateWithoutUsuarioInput> | RecargaCreateWithoutUsuarioInput[] | RecargaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecargaCreateOrConnectWithoutUsuarioInput | RecargaCreateOrConnectWithoutUsuarioInput[]
    createMany?: RecargaCreateManyUsuarioInputEnvelope
    connect?: RecargaWhereUniqueInput | RecargaWhereUniqueInput[]
  }

  export type CartaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CartaoCreateWithoutUsuarioInput, CartaoUncheckedCreateWithoutUsuarioInput> | CartaoCreateWithoutUsuarioInput[] | CartaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CartaoCreateOrConnectWithoutUsuarioInput | CartaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: CartaoCreateManyUsuarioInputEnvelope
    connect?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
  }

  export type HistoricoPagamentoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistoricoPagamentoCreateWithoutUsuarioInput, HistoricoPagamentoUncheckedCreateWithoutUsuarioInput> | HistoricoPagamentoCreateWithoutUsuarioInput[] | HistoricoPagamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistoricoPagamentoCreateOrConnectWithoutUsuarioInput | HistoricoPagamentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistoricoPagamentoCreateManyUsuarioInputEnvelope
    connect?: HistoricoPagamentoWhereUniqueInput | HistoricoPagamentoWhereUniqueInput[]
  }

  export type RecargaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RecargaCreateWithoutUsuarioInput, RecargaUncheckedCreateWithoutUsuarioInput> | RecargaCreateWithoutUsuarioInput[] | RecargaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecargaCreateOrConnectWithoutUsuarioInput | RecargaCreateOrConnectWithoutUsuarioInput[]
    createMany?: RecargaCreateManyUsuarioInputEnvelope
    connect?: RecargaWhereUniqueInput | RecargaWhereUniqueInput[]
  }

  export type CartaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CartaoCreateWithoutUsuarioInput, CartaoUncheckedCreateWithoutUsuarioInput> | CartaoCreateWithoutUsuarioInput[] | CartaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CartaoCreateOrConnectWithoutUsuarioInput | CartaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: CartaoCreateManyUsuarioInputEnvelope
    connect?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type HistoricoPagamentoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistoricoPagamentoCreateWithoutUsuarioInput, HistoricoPagamentoUncheckedCreateWithoutUsuarioInput> | HistoricoPagamentoCreateWithoutUsuarioInput[] | HistoricoPagamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistoricoPagamentoCreateOrConnectWithoutUsuarioInput | HistoricoPagamentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistoricoPagamentoUpsertWithWhereUniqueWithoutUsuarioInput | HistoricoPagamentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistoricoPagamentoCreateManyUsuarioInputEnvelope
    set?: HistoricoPagamentoWhereUniqueInput | HistoricoPagamentoWhereUniqueInput[]
    disconnect?: HistoricoPagamentoWhereUniqueInput | HistoricoPagamentoWhereUniqueInput[]
    delete?: HistoricoPagamentoWhereUniqueInput | HistoricoPagamentoWhereUniqueInput[]
    connect?: HistoricoPagamentoWhereUniqueInput | HistoricoPagamentoWhereUniqueInput[]
    update?: HistoricoPagamentoUpdateWithWhereUniqueWithoutUsuarioInput | HistoricoPagamentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistoricoPagamentoUpdateManyWithWhereWithoutUsuarioInput | HistoricoPagamentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistoricoPagamentoScalarWhereInput | HistoricoPagamentoScalarWhereInput[]
  }

  export type RecargaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RecargaCreateWithoutUsuarioInput, RecargaUncheckedCreateWithoutUsuarioInput> | RecargaCreateWithoutUsuarioInput[] | RecargaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecargaCreateOrConnectWithoutUsuarioInput | RecargaCreateOrConnectWithoutUsuarioInput[]
    upsert?: RecargaUpsertWithWhereUniqueWithoutUsuarioInput | RecargaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RecargaCreateManyUsuarioInputEnvelope
    set?: RecargaWhereUniqueInput | RecargaWhereUniqueInput[]
    disconnect?: RecargaWhereUniqueInput | RecargaWhereUniqueInput[]
    delete?: RecargaWhereUniqueInput | RecargaWhereUniqueInput[]
    connect?: RecargaWhereUniqueInput | RecargaWhereUniqueInput[]
    update?: RecargaUpdateWithWhereUniqueWithoutUsuarioInput | RecargaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RecargaUpdateManyWithWhereWithoutUsuarioInput | RecargaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RecargaScalarWhereInput | RecargaScalarWhereInput[]
  }

  export type CartaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CartaoCreateWithoutUsuarioInput, CartaoUncheckedCreateWithoutUsuarioInput> | CartaoCreateWithoutUsuarioInput[] | CartaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CartaoCreateOrConnectWithoutUsuarioInput | CartaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: CartaoUpsertWithWhereUniqueWithoutUsuarioInput | CartaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CartaoCreateManyUsuarioInputEnvelope
    set?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    disconnect?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    delete?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    connect?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    update?: CartaoUpdateWithWhereUniqueWithoutUsuarioInput | CartaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CartaoUpdateManyWithWhereWithoutUsuarioInput | CartaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CartaoScalarWhereInput | CartaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HistoricoPagamentoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistoricoPagamentoCreateWithoutUsuarioInput, HistoricoPagamentoUncheckedCreateWithoutUsuarioInput> | HistoricoPagamentoCreateWithoutUsuarioInput[] | HistoricoPagamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistoricoPagamentoCreateOrConnectWithoutUsuarioInput | HistoricoPagamentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistoricoPagamentoUpsertWithWhereUniqueWithoutUsuarioInput | HistoricoPagamentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistoricoPagamentoCreateManyUsuarioInputEnvelope
    set?: HistoricoPagamentoWhereUniqueInput | HistoricoPagamentoWhereUniqueInput[]
    disconnect?: HistoricoPagamentoWhereUniqueInput | HistoricoPagamentoWhereUniqueInput[]
    delete?: HistoricoPagamentoWhereUniqueInput | HistoricoPagamentoWhereUniqueInput[]
    connect?: HistoricoPagamentoWhereUniqueInput | HistoricoPagamentoWhereUniqueInput[]
    update?: HistoricoPagamentoUpdateWithWhereUniqueWithoutUsuarioInput | HistoricoPagamentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistoricoPagamentoUpdateManyWithWhereWithoutUsuarioInput | HistoricoPagamentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistoricoPagamentoScalarWhereInput | HistoricoPagamentoScalarWhereInput[]
  }

  export type RecargaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RecargaCreateWithoutUsuarioInput, RecargaUncheckedCreateWithoutUsuarioInput> | RecargaCreateWithoutUsuarioInput[] | RecargaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecargaCreateOrConnectWithoutUsuarioInput | RecargaCreateOrConnectWithoutUsuarioInput[]
    upsert?: RecargaUpsertWithWhereUniqueWithoutUsuarioInput | RecargaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RecargaCreateManyUsuarioInputEnvelope
    set?: RecargaWhereUniqueInput | RecargaWhereUniqueInput[]
    disconnect?: RecargaWhereUniqueInput | RecargaWhereUniqueInput[]
    delete?: RecargaWhereUniqueInput | RecargaWhereUniqueInput[]
    connect?: RecargaWhereUniqueInput | RecargaWhereUniqueInput[]
    update?: RecargaUpdateWithWhereUniqueWithoutUsuarioInput | RecargaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RecargaUpdateManyWithWhereWithoutUsuarioInput | RecargaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RecargaScalarWhereInput | RecargaScalarWhereInput[]
  }

  export type CartaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CartaoCreateWithoutUsuarioInput, CartaoUncheckedCreateWithoutUsuarioInput> | CartaoCreateWithoutUsuarioInput[] | CartaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CartaoCreateOrConnectWithoutUsuarioInput | CartaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: CartaoUpsertWithWhereUniqueWithoutUsuarioInput | CartaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CartaoCreateManyUsuarioInputEnvelope
    set?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    disconnect?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    delete?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    connect?: CartaoWhereUniqueInput | CartaoWhereUniqueInput[]
    update?: CartaoUpdateWithWhereUniqueWithoutUsuarioInput | CartaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CartaoUpdateManyWithWhereWithoutUsuarioInput | CartaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CartaoScalarWhereInput | CartaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCartaoInput = {
    create?: XOR<UsuarioCreateWithoutCartaoInput, UsuarioUncheckedCreateWithoutCartaoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCartaoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCartaoNestedInput = {
    create?: XOR<UsuarioCreateWithoutCartaoInput, UsuarioUncheckedCreateWithoutCartaoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCartaoInput
    upsert?: UsuarioUpsertWithoutCartaoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCartaoInput, UsuarioUpdateWithoutCartaoInput>, UsuarioUncheckedUpdateWithoutCartaoInput>
  }

  export type UsuarioCreateNestedOneWithoutRecargasInput = {
    create?: XOR<UsuarioCreateWithoutRecargasInput, UsuarioUncheckedCreateWithoutRecargasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRecargasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutRecargasNestedInput = {
    create?: XOR<UsuarioCreateWithoutRecargasInput, UsuarioUncheckedCreateWithoutRecargasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRecargasInput
    upsert?: UsuarioUpsertWithoutRecargasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRecargasInput, UsuarioUpdateWithoutRecargasInput>, UsuarioUncheckedUpdateWithoutRecargasInput>
  }

  export type UsuarioCreateNestedOneWithoutHistoricosInput = {
    create?: XOR<UsuarioCreateWithoutHistoricosInput, UsuarioUncheckedCreateWithoutHistoricosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistoricosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutHistoricosNestedInput = {
    create?: XOR<UsuarioCreateWithoutHistoricosInput, UsuarioUncheckedCreateWithoutHistoricosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistoricosInput
    upsert?: UsuarioUpsertWithoutHistoricosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutHistoricosInput, UsuarioUpdateWithoutHistoricosInput>, UsuarioUncheckedUpdateWithoutHistoricosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HistoricoPagamentoCreateWithoutUsuarioInput = {
    data: Date | string
    valor: number
    cartao: string
  }

  export type HistoricoPagamentoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    data: Date | string
    valor: number
    cartao: string
  }

  export type HistoricoPagamentoCreateOrConnectWithoutUsuarioInput = {
    where: HistoricoPagamentoWhereUniqueInput
    create: XOR<HistoricoPagamentoCreateWithoutUsuarioInput, HistoricoPagamentoUncheckedCreateWithoutUsuarioInput>
  }

  export type HistoricoPagamentoCreateManyUsuarioInputEnvelope = {
    data: HistoricoPagamentoCreateManyUsuarioInput | HistoricoPagamentoCreateManyUsuarioInput[]
  }

  export type RecargaCreateWithoutUsuarioInput = {
    valor: number
    tipo: string
    data?: Date | string
  }

  export type RecargaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    valor: number
    tipo: string
    data?: Date | string
  }

  export type RecargaCreateOrConnectWithoutUsuarioInput = {
    where: RecargaWhereUniqueInput
    create: XOR<RecargaCreateWithoutUsuarioInput, RecargaUncheckedCreateWithoutUsuarioInput>
  }

  export type RecargaCreateManyUsuarioInputEnvelope = {
    data: RecargaCreateManyUsuarioInput | RecargaCreateManyUsuarioInput[]
  }

  export type CartaoCreateWithoutUsuarioInput = {
    numero: string
  }

  export type CartaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    numero: string
  }

  export type CartaoCreateOrConnectWithoutUsuarioInput = {
    where: CartaoWhereUniqueInput
    create: XOR<CartaoCreateWithoutUsuarioInput, CartaoUncheckedCreateWithoutUsuarioInput>
  }

  export type CartaoCreateManyUsuarioInputEnvelope = {
    data: CartaoCreateManyUsuarioInput | CartaoCreateManyUsuarioInput[]
  }

  export type HistoricoPagamentoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: HistoricoPagamentoWhereUniqueInput
    update: XOR<HistoricoPagamentoUpdateWithoutUsuarioInput, HistoricoPagamentoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<HistoricoPagamentoCreateWithoutUsuarioInput, HistoricoPagamentoUncheckedCreateWithoutUsuarioInput>
  }

  export type HistoricoPagamentoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: HistoricoPagamentoWhereUniqueInput
    data: XOR<HistoricoPagamentoUpdateWithoutUsuarioInput, HistoricoPagamentoUncheckedUpdateWithoutUsuarioInput>
  }

  export type HistoricoPagamentoUpdateManyWithWhereWithoutUsuarioInput = {
    where: HistoricoPagamentoScalarWhereInput
    data: XOR<HistoricoPagamentoUpdateManyMutationInput, HistoricoPagamentoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type HistoricoPagamentoScalarWhereInput = {
    AND?: HistoricoPagamentoScalarWhereInput | HistoricoPagamentoScalarWhereInput[]
    OR?: HistoricoPagamentoScalarWhereInput[]
    NOT?: HistoricoPagamentoScalarWhereInput | HistoricoPagamentoScalarWhereInput[]
    id?: IntFilter<"HistoricoPagamento"> | number
    data?: DateTimeFilter<"HistoricoPagamento"> | Date | string
    valor?: FloatFilter<"HistoricoPagamento"> | number
    cartao?: StringFilter<"HistoricoPagamento"> | string
    usuarioId?: IntFilter<"HistoricoPagamento"> | number
  }

  export type RecargaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RecargaWhereUniqueInput
    update: XOR<RecargaUpdateWithoutUsuarioInput, RecargaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RecargaCreateWithoutUsuarioInput, RecargaUncheckedCreateWithoutUsuarioInput>
  }

  export type RecargaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RecargaWhereUniqueInput
    data: XOR<RecargaUpdateWithoutUsuarioInput, RecargaUncheckedUpdateWithoutUsuarioInput>
  }

  export type RecargaUpdateManyWithWhereWithoutUsuarioInput = {
    where: RecargaScalarWhereInput
    data: XOR<RecargaUpdateManyMutationInput, RecargaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RecargaScalarWhereInput = {
    AND?: RecargaScalarWhereInput | RecargaScalarWhereInput[]
    OR?: RecargaScalarWhereInput[]
    NOT?: RecargaScalarWhereInput | RecargaScalarWhereInput[]
    id?: IntFilter<"Recarga"> | number
    valor?: FloatFilter<"Recarga"> | number
    tipo?: StringFilter<"Recarga"> | string
    data?: DateTimeFilter<"Recarga"> | Date | string
    usuarioId?: IntFilter<"Recarga"> | number
  }

  export type CartaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CartaoWhereUniqueInput
    update: XOR<CartaoUpdateWithoutUsuarioInput, CartaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CartaoCreateWithoutUsuarioInput, CartaoUncheckedCreateWithoutUsuarioInput>
  }

  export type CartaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CartaoWhereUniqueInput
    data: XOR<CartaoUpdateWithoutUsuarioInput, CartaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CartaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: CartaoScalarWhereInput
    data: XOR<CartaoUpdateManyMutationInput, CartaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CartaoScalarWhereInput = {
    AND?: CartaoScalarWhereInput | CartaoScalarWhereInput[]
    OR?: CartaoScalarWhereInput[]
    NOT?: CartaoScalarWhereInput | CartaoScalarWhereInput[]
    id?: IntFilter<"Cartao"> | number
    numero?: StringFilter<"Cartao"> | string
    usuarioId?: IntFilter<"Cartao"> | number
  }

  export type UsuarioCreateWithoutCartaoInput = {
    cpf: string
    senha: string
    tipo: string
    historicos?: HistoricoPagamentoCreateNestedManyWithoutUsuarioInput
    recargas?: RecargaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCartaoInput = {
    id?: number
    cpf: string
    senha: string
    tipo: string
    historicos?: HistoricoPagamentoUncheckedCreateNestedManyWithoutUsuarioInput
    recargas?: RecargaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCartaoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCartaoInput, UsuarioUncheckedCreateWithoutCartaoInput>
  }

  export type UsuarioUpsertWithoutCartaoInput = {
    update: XOR<UsuarioUpdateWithoutCartaoInput, UsuarioUncheckedUpdateWithoutCartaoInput>
    create: XOR<UsuarioCreateWithoutCartaoInput, UsuarioUncheckedCreateWithoutCartaoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCartaoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCartaoInput, UsuarioUncheckedUpdateWithoutCartaoInput>
  }

  export type UsuarioUpdateWithoutCartaoInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    historicos?: HistoricoPagamentoUpdateManyWithoutUsuarioNestedInput
    recargas?: RecargaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCartaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    historicos?: HistoricoPagamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    recargas?: RecargaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutRecargasInput = {
    cpf: string
    senha: string
    tipo: string
    historicos?: HistoricoPagamentoCreateNestedManyWithoutUsuarioInput
    Cartao?: CartaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRecargasInput = {
    id?: number
    cpf: string
    senha: string
    tipo: string
    historicos?: HistoricoPagamentoUncheckedCreateNestedManyWithoutUsuarioInput
    Cartao?: CartaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRecargasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRecargasInput, UsuarioUncheckedCreateWithoutRecargasInput>
  }

  export type UsuarioUpsertWithoutRecargasInput = {
    update: XOR<UsuarioUpdateWithoutRecargasInput, UsuarioUncheckedUpdateWithoutRecargasInput>
    create: XOR<UsuarioCreateWithoutRecargasInput, UsuarioUncheckedCreateWithoutRecargasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRecargasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRecargasInput, UsuarioUncheckedUpdateWithoutRecargasInput>
  }

  export type UsuarioUpdateWithoutRecargasInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    historicos?: HistoricoPagamentoUpdateManyWithoutUsuarioNestedInput
    Cartao?: CartaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRecargasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    historicos?: HistoricoPagamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    Cartao?: CartaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutHistoricosInput = {
    cpf: string
    senha: string
    tipo: string
    recargas?: RecargaCreateNestedManyWithoutUsuarioInput
    Cartao?: CartaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutHistoricosInput = {
    id?: number
    cpf: string
    senha: string
    tipo: string
    recargas?: RecargaUncheckedCreateNestedManyWithoutUsuarioInput
    Cartao?: CartaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutHistoricosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutHistoricosInput, UsuarioUncheckedCreateWithoutHistoricosInput>
  }

  export type UsuarioUpsertWithoutHistoricosInput = {
    update: XOR<UsuarioUpdateWithoutHistoricosInput, UsuarioUncheckedUpdateWithoutHistoricosInput>
    create: XOR<UsuarioCreateWithoutHistoricosInput, UsuarioUncheckedCreateWithoutHistoricosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutHistoricosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutHistoricosInput, UsuarioUncheckedUpdateWithoutHistoricosInput>
  }

  export type UsuarioUpdateWithoutHistoricosInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    recargas?: RecargaUpdateManyWithoutUsuarioNestedInput
    Cartao?: CartaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutHistoricosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    recargas?: RecargaUncheckedUpdateManyWithoutUsuarioNestedInput
    Cartao?: CartaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type HistoricoPagamentoCreateManyUsuarioInput = {
    id?: number
    data: Date | string
    valor: number
    cartao: string
  }

  export type RecargaCreateManyUsuarioInput = {
    id?: number
    valor: number
    tipo: string
    data?: Date | string
  }

  export type CartaoCreateManyUsuarioInput = {
    id?: number
    numero: string
  }

  export type HistoricoPagamentoUpdateWithoutUsuarioInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    cartao?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoPagamentoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    cartao?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoPagamentoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    cartao?: StringFieldUpdateOperationsInput | string
  }

  export type RecargaUpdateWithoutUsuarioInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecargaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecargaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartaoUpdateWithoutUsuarioInput = {
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type CartaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type CartaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
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