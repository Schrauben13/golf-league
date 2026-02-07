
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Season
 * 
 */
export type Season = $Result.DefaultSelection<Prisma.$SeasonPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model SeasonPlayer
 * 
 */
export type SeasonPlayer = $Result.DefaultSelection<Prisma.$SeasonPlayerPayload>
/**
 * Model Round
 * 
 */
export type Round = $Result.DefaultSelection<Prisma.$RoundPayload>
/**
 * Model Score
 * 
 */
export type Score = $Result.DefaultSelection<Prisma.$ScorePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Seasons
 * const seasons = await prisma.season.findMany()
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

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Seasons
   * const seasons = await prisma.season.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.season`: Exposes CRUD operations for the **Season** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seasons
    * const seasons = await prisma.season.findMany()
    * ```
    */
  get season(): Prisma.SeasonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seasonPlayer`: Exposes CRUD operations for the **SeasonPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeasonPlayers
    * const seasonPlayers = await prisma.seasonPlayer.findMany()
    * ```
    */
  get seasonPlayer(): Prisma.SeasonPlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.round`: Exposes CRUD operations for the **Round** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rounds
    * const rounds = await prisma.round.findMany()
    * ```
    */
  get round(): Prisma.RoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.score`: Exposes CRUD operations for the **Score** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scores
    * const scores = await prisma.score.findMany()
    * ```
    */
  get score(): Prisma.ScoreDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Season: 'Season',
    Player: 'Player',
    SeasonPlayer: 'SeasonPlayer',
    Round: 'Round',
    Score: 'Score'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "season" | "player" | "seasonPlayer" | "round" | "score"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Season: {
        payload: Prisma.$SeasonPayload<ExtArgs>
        fields: Prisma.SeasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeasonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeasonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findFirst: {
            args: Prisma.SeasonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeasonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findMany: {
            args: Prisma.SeasonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          create: {
            args: Prisma.SeasonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          createMany: {
            args: Prisma.SeasonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeasonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          delete: {
            args: Prisma.SeasonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          update: {
            args: Prisma.SeasonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          deleteMany: {
            args: Prisma.SeasonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeasonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeasonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          upsert: {
            args: Prisma.SeasonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          aggregate: {
            args: Prisma.SeasonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeason>
          }
          groupBy: {
            args: Prisma.SeasonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeasonCountArgs<ExtArgs>
            result: $Utils.Optional<SeasonCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      SeasonPlayer: {
        payload: Prisma.$SeasonPlayerPayload<ExtArgs>
        fields: Prisma.SeasonPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeasonPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeasonPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPlayerPayload>
          }
          findFirst: {
            args: Prisma.SeasonPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeasonPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPlayerPayload>
          }
          findMany: {
            args: Prisma.SeasonPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPlayerPayload>[]
          }
          create: {
            args: Prisma.SeasonPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPlayerPayload>
          }
          createMany: {
            args: Prisma.SeasonPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeasonPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPlayerPayload>[]
          }
          delete: {
            args: Prisma.SeasonPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPlayerPayload>
          }
          update: {
            args: Prisma.SeasonPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPlayerPayload>
          }
          deleteMany: {
            args: Prisma.SeasonPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeasonPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeasonPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPlayerPayload>[]
          }
          upsert: {
            args: Prisma.SeasonPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPlayerPayload>
          }
          aggregate: {
            args: Prisma.SeasonPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeasonPlayer>
          }
          groupBy: {
            args: Prisma.SeasonPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeasonPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeasonPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<SeasonPlayerCountAggregateOutputType> | number
          }
        }
      }
      Round: {
        payload: Prisma.$RoundPayload<ExtArgs>
        fields: Prisma.RoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findFirst: {
            args: Prisma.RoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findMany: {
            args: Prisma.RoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          create: {
            args: Prisma.RoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          createMany: {
            args: Prisma.RoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          delete: {
            args: Prisma.RoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          update: {
            args: Prisma.RoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          deleteMany: {
            args: Prisma.RoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          upsert: {
            args: Prisma.RoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          aggregate: {
            args: Prisma.RoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRound>
          }
          groupBy: {
            args: Prisma.RoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoundCountArgs<ExtArgs>
            result: $Utils.Optional<RoundCountAggregateOutputType> | number
          }
        }
      }
      Score: {
        payload: Prisma.$ScorePayload<ExtArgs>
        fields: Prisma.ScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findFirst: {
            args: Prisma.ScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findMany: {
            args: Prisma.ScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          create: {
            args: Prisma.ScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          createMany: {
            args: Prisma.ScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          delete: {
            args: Prisma.ScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          update: {
            args: Prisma.ScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          deleteMany: {
            args: Prisma.ScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          upsert: {
            args: Prisma.ScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          aggregate: {
            args: Prisma.ScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScore>
          }
          groupBy: {
            args: Prisma.ScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreCountAggregateOutputType> | number
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
    season?: SeasonOmit
    player?: PlayerOmit
    seasonPlayer?: SeasonPlayerOmit
    round?: RoundOmit
    score?: ScoreOmit
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
   * Count Type SeasonCountOutputType
   */

  export type SeasonCountOutputType = {
    rounds: number
    players: number
  }

  export type SeasonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rounds?: boolean | SeasonCountOutputTypeCountRoundsArgs
    players?: boolean | SeasonCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonCountOutputType
     */
    select?: SeasonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
  }

  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonPlayerWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    scores: number
    seasons: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | PlayerCountOutputTypeCountScoresArgs
    seasons?: boolean | PlayerCountOutputTypeCountSeasonsArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountSeasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonPlayerWhereInput
  }


  /**
   * Count Type RoundCountOutputType
   */

  export type RoundCountOutputType = {
    scores: number
  }

  export type RoundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | RoundCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundCountOutputType
     */
    select?: RoundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Season
   */

  export type AggregateSeason = {
    _count: SeasonCountAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  export type SeasonMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeasonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeasonCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeasonMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeasonMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeasonCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeasonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Season to aggregate.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seasons
    **/
    _count?: true | SeasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonMaxAggregateInputType
  }

  export type GetSeasonAggregateType<T extends SeasonAggregateArgs> = {
        [P in keyof T & keyof AggregateSeason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeason[P]>
      : GetScalarType<T[P], AggregateSeason[P]>
  }




  export type SeasonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonWhereInput
    orderBy?: SeasonOrderByWithAggregationInput | SeasonOrderByWithAggregationInput[]
    by: SeasonScalarFieldEnum[] | SeasonScalarFieldEnum
    having?: SeasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonCountAggregateInputType | true
    _min?: SeasonMinAggregateInputType
    _max?: SeasonMaxAggregateInputType
  }

  export type SeasonGroupByOutputType = {
    id: string
    name: string
    startDate: Date | null
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SeasonCountAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  type GetSeasonGroupByPayload<T extends SeasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonGroupByOutputType[P]>
        }
      >
    >


  export type SeasonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rounds?: boolean | Season$roundsArgs<ExtArgs>
    players?: boolean | Season$playersArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeasonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["season"]>
  export type SeasonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rounds?: boolean | Season$roundsArgs<ExtArgs>
    players?: boolean | Season$playersArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeasonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SeasonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SeasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Season"
    objects: {
      rounds: Prisma.$RoundPayload<ExtArgs>[]
      players: Prisma.$SeasonPlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDate: Date | null
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["season"]>
    composites: {}
  }

  type SeasonGetPayload<S extends boolean | null | undefined | SeasonDefaultArgs> = $Result.GetResult<Prisma.$SeasonPayload, S>

  type SeasonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeasonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeasonCountAggregateInputType | true
    }

  export interface SeasonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Season'], meta: { name: 'Season' } }
    /**
     * Find zero or one Season that matches the filter.
     * @param {SeasonFindUniqueArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeasonFindUniqueArgs>(args: SelectSubset<T, SeasonFindUniqueArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Season that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeasonFindUniqueOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeasonFindUniqueOrThrowArgs>(args: SelectSubset<T, SeasonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Season that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeasonFindFirstArgs>(args?: SelectSubset<T, SeasonFindFirstArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Season that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeasonFindFirstOrThrowArgs>(args?: SelectSubset<T, SeasonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seasons
     * const seasons = await prisma.season.findMany()
     * 
     * // Get first 10 Seasons
     * const seasons = await prisma.season.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonWithIdOnly = await prisma.season.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeasonFindManyArgs>(args?: SelectSubset<T, SeasonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Season.
     * @param {SeasonCreateArgs} args - Arguments to create a Season.
     * @example
     * // Create one Season
     * const Season = await prisma.season.create({
     *   data: {
     *     // ... data to create a Season
     *   }
     * })
     * 
     */
    create<T extends SeasonCreateArgs>(args: SelectSubset<T, SeasonCreateArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seasons.
     * @param {SeasonCreateManyArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const season = await prisma.season.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeasonCreateManyArgs>(args?: SelectSubset<T, SeasonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seasons and returns the data saved in the database.
     * @param {SeasonCreateManyAndReturnArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const season = await prisma.season.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seasons and only return the `id`
     * const seasonWithIdOnly = await prisma.season.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeasonCreateManyAndReturnArgs>(args?: SelectSubset<T, SeasonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Season.
     * @param {SeasonDeleteArgs} args - Arguments to delete one Season.
     * @example
     * // Delete one Season
     * const Season = await prisma.season.delete({
     *   where: {
     *     // ... filter to delete one Season
     *   }
     * })
     * 
     */
    delete<T extends SeasonDeleteArgs>(args: SelectSubset<T, SeasonDeleteArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Season.
     * @param {SeasonUpdateArgs} args - Arguments to update one Season.
     * @example
     * // Update one Season
     * const season = await prisma.season.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeasonUpdateArgs>(args: SelectSubset<T, SeasonUpdateArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seasons.
     * @param {SeasonDeleteManyArgs} args - Arguments to filter Seasons to delete.
     * @example
     * // Delete a few Seasons
     * const { count } = await prisma.season.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeasonDeleteManyArgs>(args?: SelectSubset<T, SeasonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeasonUpdateManyArgs>(args: SelectSubset<T, SeasonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons and returns the data updated in the database.
     * @param {SeasonUpdateManyAndReturnArgs} args - Arguments to update many Seasons.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seasons and only return the `id`
     * const seasonWithIdOnly = await prisma.season.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeasonUpdateManyAndReturnArgs>(args: SelectSubset<T, SeasonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Season.
     * @param {SeasonUpsertArgs} args - Arguments to update or create a Season.
     * @example
     * // Update or create a Season
     * const season = await prisma.season.upsert({
     *   create: {
     *     // ... data to create a Season
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Season we want to update
     *   }
     * })
     */
    upsert<T extends SeasonUpsertArgs>(args: SelectSubset<T, SeasonUpsertArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonCountArgs} args - Arguments to filter Seasons to count.
     * @example
     * // Count the number of Seasons
     * const count = await prisma.season.count({
     *   where: {
     *     // ... the filter for the Seasons we want to count
     *   }
     * })
    **/
    count<T extends SeasonCountArgs>(
      args?: Subset<T, SeasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeasonAggregateArgs>(args: Subset<T, SeasonAggregateArgs>): Prisma.PrismaPromise<GetSeasonAggregateType<T>>

    /**
     * Group by Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonGroupByArgs} args - Group by arguments.
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
      T extends SeasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonGroupByArgs['orderBy'] }
        : { orderBy?: SeasonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Season model
   */
  readonly fields: SeasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Season.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeasonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rounds<T extends Season$roundsArgs<ExtArgs> = {}>(args?: Subset<T, Season$roundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    players<T extends Season$playersArgs<ExtArgs> = {}>(args?: Subset<T, Season$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Season model
   */
  interface SeasonFieldRefs {
    readonly id: FieldRef<"Season", 'String'>
    readonly name: FieldRef<"Season", 'String'>
    readonly startDate: FieldRef<"Season", 'DateTime'>
    readonly endDate: FieldRef<"Season", 'DateTime'>
    readonly createdAt: FieldRef<"Season", 'DateTime'>
    readonly updatedAt: FieldRef<"Season", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Season findUnique
   */
  export type SeasonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season findUniqueOrThrow
   */
  export type SeasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season findFirst
   */
  export type SeasonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season findFirstOrThrow
   */
  export type SeasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season findMany
   */
  export type SeasonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Seasons to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season create
   */
  export type SeasonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to create a Season.
     */
    data: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
  }

  /**
   * Season createMany
   */
  export type SeasonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seasons.
     */
    data: SeasonCreateManyInput | SeasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Season createManyAndReturn
   */
  export type SeasonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * The data used to create many Seasons.
     */
    data: SeasonCreateManyInput | SeasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Season update
   */
  export type SeasonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to update a Season.
     */
    data: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
    /**
     * Choose, which Season to update.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season updateMany
   */
  export type SeasonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to update.
     */
    limit?: number
  }

  /**
   * Season updateManyAndReturn
   */
  export type SeasonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to update.
     */
    limit?: number
  }

  /**
   * Season upsert
   */
  export type SeasonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The filter to search for the Season to update in case it exists.
     */
    where: SeasonWhereUniqueInput
    /**
     * In case the Season found by the `where` argument doesn't exist, create a new Season with this data.
     */
    create: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
    /**
     * In case the Season was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
  }

  /**
   * Season delete
   */
  export type SeasonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter which Season to delete.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season deleteMany
   */
  export type SeasonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seasons to delete
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to delete.
     */
    limit?: number
  }

  /**
   * Season.rounds
   */
  export type Season$roundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    cursor?: RoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Season.players
   */
  export type Season$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerInclude<ExtArgs> | null
    where?: SeasonPlayerWhereInput
    orderBy?: SeasonPlayerOrderByWithRelationInput | SeasonPlayerOrderByWithRelationInput[]
    cursor?: SeasonPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeasonPlayerScalarFieldEnum | SeasonPlayerScalarFieldEnum[]
  }

  /**
   * Season without action
   */
  export type SeasonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    handicapIndex: number | null
  }

  export type PlayerSumAggregateOutputType = {
    handicapIndex: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    handicapIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    handicapIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    handicapIndex: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    handicapIndex?: true
  }

  export type PlayerSumAggregateInputType = {
    handicapIndex?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    handicapIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    handicapIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    handicapIndex?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    name: string
    email: string | null
    handicapIndex: number | null
    createdAt: Date
    updatedAt: Date
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    handicapIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    scores?: boolean | Player$scoresArgs<ExtArgs>
    seasons?: boolean | Player$seasonsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    handicapIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    handicapIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    handicapIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "handicapIndex" | "createdAt" | "updatedAt", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | Player$scoresArgs<ExtArgs>
    seasons?: boolean | Player$seasonsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      scores: Prisma.$ScorePayload<ExtArgs>[]
      seasons: Prisma.$SeasonPlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      handicapIndex: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scores<T extends Player$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Player$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seasons<T extends Player$seasonsArgs<ExtArgs> = {}>(args?: Subset<T, Player$seasonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly name: FieldRef<"Player", 'String'>
    readonly email: FieldRef<"Player", 'String'>
    readonly handicapIndex: FieldRef<"Player", 'Float'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly updatedAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.scores
   */
  export type Player$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Player.seasons
   */
  export type Player$seasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerInclude<ExtArgs> | null
    where?: SeasonPlayerWhereInput
    orderBy?: SeasonPlayerOrderByWithRelationInput | SeasonPlayerOrderByWithRelationInput[]
    cursor?: SeasonPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeasonPlayerScalarFieldEnum | SeasonPlayerScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model SeasonPlayer
   */

  export type AggregateSeasonPlayer = {
    _count: SeasonPlayerCountAggregateOutputType | null
    _min: SeasonPlayerMinAggregateOutputType | null
    _max: SeasonPlayerMaxAggregateOutputType | null
  }

  export type SeasonPlayerMinAggregateOutputType = {
    id: string | null
    seasonId: string | null
    playerId: string | null
    createdAt: Date | null
  }

  export type SeasonPlayerMaxAggregateOutputType = {
    id: string | null
    seasonId: string | null
    playerId: string | null
    createdAt: Date | null
  }

  export type SeasonPlayerCountAggregateOutputType = {
    id: number
    seasonId: number
    playerId: number
    createdAt: number
    _all: number
  }


  export type SeasonPlayerMinAggregateInputType = {
    id?: true
    seasonId?: true
    playerId?: true
    createdAt?: true
  }

  export type SeasonPlayerMaxAggregateInputType = {
    id?: true
    seasonId?: true
    playerId?: true
    createdAt?: true
  }

  export type SeasonPlayerCountAggregateInputType = {
    id?: true
    seasonId?: true
    playerId?: true
    createdAt?: true
    _all?: true
  }

  export type SeasonPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeasonPlayer to aggregate.
     */
    where?: SeasonPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonPlayers to fetch.
     */
    orderBy?: SeasonPlayerOrderByWithRelationInput | SeasonPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeasonPlayers
    **/
    _count?: true | SeasonPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonPlayerMaxAggregateInputType
  }

  export type GetSeasonPlayerAggregateType<T extends SeasonPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateSeasonPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeasonPlayer[P]>
      : GetScalarType<T[P], AggregateSeasonPlayer[P]>
  }




  export type SeasonPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonPlayerWhereInput
    orderBy?: SeasonPlayerOrderByWithAggregationInput | SeasonPlayerOrderByWithAggregationInput[]
    by: SeasonPlayerScalarFieldEnum[] | SeasonPlayerScalarFieldEnum
    having?: SeasonPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonPlayerCountAggregateInputType | true
    _min?: SeasonPlayerMinAggregateInputType
    _max?: SeasonPlayerMaxAggregateInputType
  }

  export type SeasonPlayerGroupByOutputType = {
    id: string
    seasonId: string
    playerId: string
    createdAt: Date
    _count: SeasonPlayerCountAggregateOutputType | null
    _min: SeasonPlayerMinAggregateOutputType | null
    _max: SeasonPlayerMaxAggregateOutputType | null
  }

  type GetSeasonPlayerGroupByPayload<T extends SeasonPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonPlayerGroupByOutputType[P]>
        }
      >
    >


  export type SeasonPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonId?: boolean
    playerId?: boolean
    createdAt?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasonPlayer"]>

  export type SeasonPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonId?: boolean
    playerId?: boolean
    createdAt?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasonPlayer"]>

  export type SeasonPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonId?: boolean
    playerId?: boolean
    createdAt?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasonPlayer"]>

  export type SeasonPlayerSelectScalar = {
    id?: boolean
    seasonId?: boolean
    playerId?: boolean
    createdAt?: boolean
  }

  export type SeasonPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seasonId" | "playerId" | "createdAt", ExtArgs["result"]["seasonPlayer"]>
  export type SeasonPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type SeasonPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type SeasonPlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $SeasonPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeasonPlayer"
    objects: {
      season: Prisma.$SeasonPayload<ExtArgs>
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seasonId: string
      playerId: string
      createdAt: Date
    }, ExtArgs["result"]["seasonPlayer"]>
    composites: {}
  }

  type SeasonPlayerGetPayload<S extends boolean | null | undefined | SeasonPlayerDefaultArgs> = $Result.GetResult<Prisma.$SeasonPlayerPayload, S>

  type SeasonPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeasonPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeasonPlayerCountAggregateInputType | true
    }

  export interface SeasonPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeasonPlayer'], meta: { name: 'SeasonPlayer' } }
    /**
     * Find zero or one SeasonPlayer that matches the filter.
     * @param {SeasonPlayerFindUniqueArgs} args - Arguments to find a SeasonPlayer
     * @example
     * // Get one SeasonPlayer
     * const seasonPlayer = await prisma.seasonPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeasonPlayerFindUniqueArgs>(args: SelectSubset<T, SeasonPlayerFindUniqueArgs<ExtArgs>>): Prisma__SeasonPlayerClient<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeasonPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeasonPlayerFindUniqueOrThrowArgs} args - Arguments to find a SeasonPlayer
     * @example
     * // Get one SeasonPlayer
     * const seasonPlayer = await prisma.seasonPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeasonPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, SeasonPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeasonPlayerClient<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeasonPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPlayerFindFirstArgs} args - Arguments to find a SeasonPlayer
     * @example
     * // Get one SeasonPlayer
     * const seasonPlayer = await prisma.seasonPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeasonPlayerFindFirstArgs>(args?: SelectSubset<T, SeasonPlayerFindFirstArgs<ExtArgs>>): Prisma__SeasonPlayerClient<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeasonPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPlayerFindFirstOrThrowArgs} args - Arguments to find a SeasonPlayer
     * @example
     * // Get one SeasonPlayer
     * const seasonPlayer = await prisma.seasonPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeasonPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, SeasonPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeasonPlayerClient<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeasonPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeasonPlayers
     * const seasonPlayers = await prisma.seasonPlayer.findMany()
     * 
     * // Get first 10 SeasonPlayers
     * const seasonPlayers = await prisma.seasonPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonPlayerWithIdOnly = await prisma.seasonPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeasonPlayerFindManyArgs>(args?: SelectSubset<T, SeasonPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeasonPlayer.
     * @param {SeasonPlayerCreateArgs} args - Arguments to create a SeasonPlayer.
     * @example
     * // Create one SeasonPlayer
     * const SeasonPlayer = await prisma.seasonPlayer.create({
     *   data: {
     *     // ... data to create a SeasonPlayer
     *   }
     * })
     * 
     */
    create<T extends SeasonPlayerCreateArgs>(args: SelectSubset<T, SeasonPlayerCreateArgs<ExtArgs>>): Prisma__SeasonPlayerClient<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeasonPlayers.
     * @param {SeasonPlayerCreateManyArgs} args - Arguments to create many SeasonPlayers.
     * @example
     * // Create many SeasonPlayers
     * const seasonPlayer = await prisma.seasonPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeasonPlayerCreateManyArgs>(args?: SelectSubset<T, SeasonPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeasonPlayers and returns the data saved in the database.
     * @param {SeasonPlayerCreateManyAndReturnArgs} args - Arguments to create many SeasonPlayers.
     * @example
     * // Create many SeasonPlayers
     * const seasonPlayer = await prisma.seasonPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeasonPlayers and only return the `id`
     * const seasonPlayerWithIdOnly = await prisma.seasonPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeasonPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, SeasonPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeasonPlayer.
     * @param {SeasonPlayerDeleteArgs} args - Arguments to delete one SeasonPlayer.
     * @example
     * // Delete one SeasonPlayer
     * const SeasonPlayer = await prisma.seasonPlayer.delete({
     *   where: {
     *     // ... filter to delete one SeasonPlayer
     *   }
     * })
     * 
     */
    delete<T extends SeasonPlayerDeleteArgs>(args: SelectSubset<T, SeasonPlayerDeleteArgs<ExtArgs>>): Prisma__SeasonPlayerClient<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeasonPlayer.
     * @param {SeasonPlayerUpdateArgs} args - Arguments to update one SeasonPlayer.
     * @example
     * // Update one SeasonPlayer
     * const seasonPlayer = await prisma.seasonPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeasonPlayerUpdateArgs>(args: SelectSubset<T, SeasonPlayerUpdateArgs<ExtArgs>>): Prisma__SeasonPlayerClient<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeasonPlayers.
     * @param {SeasonPlayerDeleteManyArgs} args - Arguments to filter SeasonPlayers to delete.
     * @example
     * // Delete a few SeasonPlayers
     * const { count } = await prisma.seasonPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeasonPlayerDeleteManyArgs>(args?: SelectSubset<T, SeasonPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeasonPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeasonPlayers
     * const seasonPlayer = await prisma.seasonPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeasonPlayerUpdateManyArgs>(args: SelectSubset<T, SeasonPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeasonPlayers and returns the data updated in the database.
     * @param {SeasonPlayerUpdateManyAndReturnArgs} args - Arguments to update many SeasonPlayers.
     * @example
     * // Update many SeasonPlayers
     * const seasonPlayer = await prisma.seasonPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeasonPlayers and only return the `id`
     * const seasonPlayerWithIdOnly = await prisma.seasonPlayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeasonPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, SeasonPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeasonPlayer.
     * @param {SeasonPlayerUpsertArgs} args - Arguments to update or create a SeasonPlayer.
     * @example
     * // Update or create a SeasonPlayer
     * const seasonPlayer = await prisma.seasonPlayer.upsert({
     *   create: {
     *     // ... data to create a SeasonPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeasonPlayer we want to update
     *   }
     * })
     */
    upsert<T extends SeasonPlayerUpsertArgs>(args: SelectSubset<T, SeasonPlayerUpsertArgs<ExtArgs>>): Prisma__SeasonPlayerClient<$Result.GetResult<Prisma.$SeasonPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeasonPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPlayerCountArgs} args - Arguments to filter SeasonPlayers to count.
     * @example
     * // Count the number of SeasonPlayers
     * const count = await prisma.seasonPlayer.count({
     *   where: {
     *     // ... the filter for the SeasonPlayers we want to count
     *   }
     * })
    **/
    count<T extends SeasonPlayerCountArgs>(
      args?: Subset<T, SeasonPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeasonPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeasonPlayerAggregateArgs>(args: Subset<T, SeasonPlayerAggregateArgs>): Prisma.PrismaPromise<GetSeasonPlayerAggregateType<T>>

    /**
     * Group by SeasonPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPlayerGroupByArgs} args - Group by arguments.
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
      T extends SeasonPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonPlayerGroupByArgs['orderBy'] }
        : { orderBy?: SeasonPlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeasonPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeasonPlayer model
   */
  readonly fields: SeasonPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeasonPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeasonPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    season<T extends SeasonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeasonDefaultArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SeasonPlayer model
   */
  interface SeasonPlayerFieldRefs {
    readonly id: FieldRef<"SeasonPlayer", 'String'>
    readonly seasonId: FieldRef<"SeasonPlayer", 'String'>
    readonly playerId: FieldRef<"SeasonPlayer", 'String'>
    readonly createdAt: FieldRef<"SeasonPlayer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeasonPlayer findUnique
   */
  export type SeasonPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerInclude<ExtArgs> | null
    /**
     * Filter, which SeasonPlayer to fetch.
     */
    where: SeasonPlayerWhereUniqueInput
  }

  /**
   * SeasonPlayer findUniqueOrThrow
   */
  export type SeasonPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerInclude<ExtArgs> | null
    /**
     * Filter, which SeasonPlayer to fetch.
     */
    where: SeasonPlayerWhereUniqueInput
  }

  /**
   * SeasonPlayer findFirst
   */
  export type SeasonPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerInclude<ExtArgs> | null
    /**
     * Filter, which SeasonPlayer to fetch.
     */
    where?: SeasonPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonPlayers to fetch.
     */
    orderBy?: SeasonPlayerOrderByWithRelationInput | SeasonPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeasonPlayers.
     */
    cursor?: SeasonPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeasonPlayers.
     */
    distinct?: SeasonPlayerScalarFieldEnum | SeasonPlayerScalarFieldEnum[]
  }

  /**
   * SeasonPlayer findFirstOrThrow
   */
  export type SeasonPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerInclude<ExtArgs> | null
    /**
     * Filter, which SeasonPlayer to fetch.
     */
    where?: SeasonPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonPlayers to fetch.
     */
    orderBy?: SeasonPlayerOrderByWithRelationInput | SeasonPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeasonPlayers.
     */
    cursor?: SeasonPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeasonPlayers.
     */
    distinct?: SeasonPlayerScalarFieldEnum | SeasonPlayerScalarFieldEnum[]
  }

  /**
   * SeasonPlayer findMany
   */
  export type SeasonPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerInclude<ExtArgs> | null
    /**
     * Filter, which SeasonPlayers to fetch.
     */
    where?: SeasonPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonPlayers to fetch.
     */
    orderBy?: SeasonPlayerOrderByWithRelationInput | SeasonPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeasonPlayers.
     */
    cursor?: SeasonPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonPlayers.
     */
    skip?: number
    distinct?: SeasonPlayerScalarFieldEnum | SeasonPlayerScalarFieldEnum[]
  }

  /**
   * SeasonPlayer create
   */
  export type SeasonPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a SeasonPlayer.
     */
    data: XOR<SeasonPlayerCreateInput, SeasonPlayerUncheckedCreateInput>
  }

  /**
   * SeasonPlayer createMany
   */
  export type SeasonPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeasonPlayers.
     */
    data: SeasonPlayerCreateManyInput | SeasonPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeasonPlayer createManyAndReturn
   */
  export type SeasonPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many SeasonPlayers.
     */
    data: SeasonPlayerCreateManyInput | SeasonPlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeasonPlayer update
   */
  export type SeasonPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a SeasonPlayer.
     */
    data: XOR<SeasonPlayerUpdateInput, SeasonPlayerUncheckedUpdateInput>
    /**
     * Choose, which SeasonPlayer to update.
     */
    where: SeasonPlayerWhereUniqueInput
  }

  /**
   * SeasonPlayer updateMany
   */
  export type SeasonPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeasonPlayers.
     */
    data: XOR<SeasonPlayerUpdateManyMutationInput, SeasonPlayerUncheckedUpdateManyInput>
    /**
     * Filter which SeasonPlayers to update
     */
    where?: SeasonPlayerWhereInput
    /**
     * Limit how many SeasonPlayers to update.
     */
    limit?: number
  }

  /**
   * SeasonPlayer updateManyAndReturn
   */
  export type SeasonPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * The data used to update SeasonPlayers.
     */
    data: XOR<SeasonPlayerUpdateManyMutationInput, SeasonPlayerUncheckedUpdateManyInput>
    /**
     * Filter which SeasonPlayers to update
     */
    where?: SeasonPlayerWhereInput
    /**
     * Limit how many SeasonPlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeasonPlayer upsert
   */
  export type SeasonPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the SeasonPlayer to update in case it exists.
     */
    where: SeasonPlayerWhereUniqueInput
    /**
     * In case the SeasonPlayer found by the `where` argument doesn't exist, create a new SeasonPlayer with this data.
     */
    create: XOR<SeasonPlayerCreateInput, SeasonPlayerUncheckedCreateInput>
    /**
     * In case the SeasonPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonPlayerUpdateInput, SeasonPlayerUncheckedUpdateInput>
  }

  /**
   * SeasonPlayer delete
   */
  export type SeasonPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerInclude<ExtArgs> | null
    /**
     * Filter which SeasonPlayer to delete.
     */
    where: SeasonPlayerWhereUniqueInput
  }

  /**
   * SeasonPlayer deleteMany
   */
  export type SeasonPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeasonPlayers to delete
     */
    where?: SeasonPlayerWhereInput
    /**
     * Limit how many SeasonPlayers to delete.
     */
    limit?: number
  }

  /**
   * SeasonPlayer without action
   */
  export type SeasonPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPlayer
     */
    select?: SeasonPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPlayer
     */
    omit?: SeasonPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPlayerInclude<ExtArgs> | null
  }


  /**
   * Model Round
   */

  export type AggregateRound = {
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  export type RoundAvgAggregateOutputType = {
    week: number | null
  }

  export type RoundSumAggregateOutputType = {
    week: number | null
  }

  export type RoundMinAggregateOutputType = {
    id: string | null
    seasonId: string | null
    week: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundMaxAggregateOutputType = {
    id: string | null
    seasonId: string | null
    week: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundCountAggregateOutputType = {
    id: number
    seasonId: number
    week: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoundAvgAggregateInputType = {
    week?: true
  }

  export type RoundSumAggregateInputType = {
    week?: true
  }

  export type RoundMinAggregateInputType = {
    id?: true
    seasonId?: true
    week?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundMaxAggregateInputType = {
    id?: true
    seasonId?: true
    week?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundCountAggregateInputType = {
    id?: true
    seasonId?: true
    week?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Round to aggregate.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rounds
    **/
    _count?: true | RoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundMaxAggregateInputType
  }

  export type GetRoundAggregateType<T extends RoundAggregateArgs> = {
        [P in keyof T & keyof AggregateRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRound[P]>
      : GetScalarType<T[P], AggregateRound[P]>
  }




  export type RoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithAggregationInput | RoundOrderByWithAggregationInput[]
    by: RoundScalarFieldEnum[] | RoundScalarFieldEnum
    having?: RoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundCountAggregateInputType | true
    _avg?: RoundAvgAggregateInputType
    _sum?: RoundSumAggregateInputType
    _min?: RoundMinAggregateInputType
    _max?: RoundMaxAggregateInputType
  }

  export type RoundGroupByOutputType = {
    id: string
    seasonId: string
    week: number
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  type GetRoundGroupByPayload<T extends RoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundGroupByOutputType[P]>
            : GetScalarType<T[P], RoundGroupByOutputType[P]>
        }
      >
    >


  export type RoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonId?: boolean
    week?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    scores?: boolean | Round$scoresArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonId?: boolean
    week?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonId?: boolean
    week?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectScalar = {
    id?: boolean
    seasonId?: boolean
    week?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seasonId" | "week" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["round"]>
  export type RoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    scores?: boolean | Round$scoresArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }
  export type RoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
  }

  export type $RoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Round"
    objects: {
      season: Prisma.$SeasonPayload<ExtArgs>
      scores: Prisma.$ScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seasonId: string
      week: number
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["round"]>
    composites: {}
  }

  type RoundGetPayload<S extends boolean | null | undefined | RoundDefaultArgs> = $Result.GetResult<Prisma.$RoundPayload, S>

  type RoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoundCountAggregateInputType | true
    }

  export interface RoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Round'], meta: { name: 'Round' } }
    /**
     * Find zero or one Round that matches the filter.
     * @param {RoundFindUniqueArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoundFindUniqueArgs>(args: SelectSubset<T, RoundFindUniqueArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Round that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoundFindUniqueOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoundFindUniqueOrThrowArgs>(args: SelectSubset<T, RoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoundFindFirstArgs>(args?: SelectSubset<T, RoundFindFirstArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoundFindFirstOrThrowArgs>(args?: SelectSubset<T, RoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rounds
     * const rounds = await prisma.round.findMany()
     * 
     * // Get first 10 Rounds
     * const rounds = await prisma.round.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundWithIdOnly = await prisma.round.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoundFindManyArgs>(args?: SelectSubset<T, RoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Round.
     * @param {RoundCreateArgs} args - Arguments to create a Round.
     * @example
     * // Create one Round
     * const Round = await prisma.round.create({
     *   data: {
     *     // ... data to create a Round
     *   }
     * })
     * 
     */
    create<T extends RoundCreateArgs>(args: SelectSubset<T, RoundCreateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rounds.
     * @param {RoundCreateManyArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoundCreateManyArgs>(args?: SelectSubset<T, RoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rounds and returns the data saved in the database.
     * @param {RoundCreateManyAndReturnArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoundCreateManyAndReturnArgs>(args?: SelectSubset<T, RoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Round.
     * @param {RoundDeleteArgs} args - Arguments to delete one Round.
     * @example
     * // Delete one Round
     * const Round = await prisma.round.delete({
     *   where: {
     *     // ... filter to delete one Round
     *   }
     * })
     * 
     */
    delete<T extends RoundDeleteArgs>(args: SelectSubset<T, RoundDeleteArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Round.
     * @param {RoundUpdateArgs} args - Arguments to update one Round.
     * @example
     * // Update one Round
     * const round = await prisma.round.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoundUpdateArgs>(args: SelectSubset<T, RoundUpdateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rounds.
     * @param {RoundDeleteManyArgs} args - Arguments to filter Rounds to delete.
     * @example
     * // Delete a few Rounds
     * const { count } = await prisma.round.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoundDeleteManyArgs>(args?: SelectSubset<T, RoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoundUpdateManyArgs>(args: SelectSubset<T, RoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds and returns the data updated in the database.
     * @param {RoundUpdateManyAndReturnArgs} args - Arguments to update many Rounds.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoundUpdateManyAndReturnArgs>(args: SelectSubset<T, RoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Round.
     * @param {RoundUpsertArgs} args - Arguments to update or create a Round.
     * @example
     * // Update or create a Round
     * const round = await prisma.round.upsert({
     *   create: {
     *     // ... data to create a Round
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Round we want to update
     *   }
     * })
     */
    upsert<T extends RoundUpsertArgs>(args: SelectSubset<T, RoundUpsertArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundCountArgs} args - Arguments to filter Rounds to count.
     * @example
     * // Count the number of Rounds
     * const count = await prisma.round.count({
     *   where: {
     *     // ... the filter for the Rounds we want to count
     *   }
     * })
    **/
    count<T extends RoundCountArgs>(
      args?: Subset<T, RoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundAggregateArgs>(args: Subset<T, RoundAggregateArgs>): Prisma.PrismaPromise<GetRoundAggregateType<T>>

    /**
     * Group by Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundGroupByArgs} args - Group by arguments.
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
      T extends RoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundGroupByArgs['orderBy'] }
        : { orderBy?: RoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Round model
   */
  readonly fields: RoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Round.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    season<T extends SeasonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeasonDefaultArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scores<T extends Round$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Round$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Round model
   */
  interface RoundFieldRefs {
    readonly id: FieldRef<"Round", 'String'>
    readonly seasonId: FieldRef<"Round", 'String'>
    readonly week: FieldRef<"Round", 'Int'>
    readonly date: FieldRef<"Round", 'DateTime'>
    readonly createdAt: FieldRef<"Round", 'DateTime'>
    readonly updatedAt: FieldRef<"Round", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Round findUnique
   */
  export type RoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findUniqueOrThrow
   */
  export type RoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findFirst
   */
  export type RoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findFirstOrThrow
   */
  export type RoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findMany
   */
  export type RoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Rounds to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round create
   */
  export type RoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to create a Round.
     */
    data: XOR<RoundCreateInput, RoundUncheckedCreateInput>
  }

  /**
   * Round createMany
   */
  export type RoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Round createManyAndReturn
   */
  export type RoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Round update
   */
  export type RoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to update a Round.
     */
    data: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
    /**
     * Choose, which Round to update.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round updateMany
   */
  export type RoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
  }

  /**
   * Round updateManyAndReturn
   */
  export type RoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Round upsert
   */
  export type RoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The filter to search for the Round to update in case it exists.
     */
    where: RoundWhereUniqueInput
    /**
     * In case the Round found by the `where` argument doesn't exist, create a new Round with this data.
     */
    create: XOR<RoundCreateInput, RoundUncheckedCreateInput>
    /**
     * In case the Round was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
  }

  /**
   * Round delete
   */
  export type RoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter which Round to delete.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round deleteMany
   */
  export type RoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rounds to delete
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to delete.
     */
    limit?: number
  }

  /**
   * Round.scores
   */
  export type Round$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Round without action
   */
  export type RoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
  }


  /**
   * Model Score
   */

  export type AggregateScore = {
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  export type ScoreAvgAggregateOutputType = {
    gross: number | null
    net: number | null
  }

  export type ScoreSumAggregateOutputType = {
    gross: number | null
    net: number | null
  }

  export type ScoreMinAggregateOutputType = {
    id: string | null
    roundId: string | null
    playerId: string | null
    gross: number | null
    net: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScoreMaxAggregateOutputType = {
    id: string | null
    roundId: string | null
    playerId: string | null
    gross: number | null
    net: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScoreCountAggregateOutputType = {
    id: number
    roundId: number
    playerId: number
    gross: number
    net: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScoreAvgAggregateInputType = {
    gross?: true
    net?: true
  }

  export type ScoreSumAggregateInputType = {
    gross?: true
    net?: true
  }

  export type ScoreMinAggregateInputType = {
    id?: true
    roundId?: true
    playerId?: true
    gross?: true
    net?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScoreMaxAggregateInputType = {
    id?: true
    roundId?: true
    playerId?: true
    gross?: true
    net?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScoreCountAggregateInputType = {
    id?: true
    roundId?: true
    playerId?: true
    gross?: true
    net?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Score to aggregate.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scores
    **/
    _count?: true | ScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreMaxAggregateInputType
  }

  export type GetScoreAggregateType<T extends ScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScore[P]>
      : GetScalarType<T[P], AggregateScore[P]>
  }




  export type ScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithAggregationInput | ScoreOrderByWithAggregationInput[]
    by: ScoreScalarFieldEnum[] | ScoreScalarFieldEnum
    having?: ScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreCountAggregateInputType | true
    _avg?: ScoreAvgAggregateInputType
    _sum?: ScoreSumAggregateInputType
    _min?: ScoreMinAggregateInputType
    _max?: ScoreMaxAggregateInputType
  }

  export type ScoreGroupByOutputType = {
    id: string
    roundId: string
    playerId: string
    gross: number
    net: number | null
    createdAt: Date
    updatedAt: Date
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  type GetScoreGroupByPayload<T extends ScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreGroupByOutputType[P]>
        }
      >
    >


  export type ScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundId?: boolean
    playerId?: boolean
    gross?: boolean
    net?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundId?: boolean
    playerId?: boolean
    gross?: boolean
    net?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundId?: boolean
    playerId?: boolean
    gross?: boolean
    net?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectScalar = {
    id?: boolean
    roundId?: boolean
    playerId?: boolean
    gross?: boolean
    net?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roundId" | "playerId" | "gross" | "net" | "createdAt" | "updatedAt", ExtArgs["result"]["score"]>
  export type ScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type ScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type ScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $ScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Score"
    objects: {
      round: Prisma.$RoundPayload<ExtArgs>
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roundId: string
      playerId: string
      gross: number
      net: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["score"]>
    composites: {}
  }

  type ScoreGetPayload<S extends boolean | null | undefined | ScoreDefaultArgs> = $Result.GetResult<Prisma.$ScorePayload, S>

  type ScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoreCountAggregateInputType | true
    }

  export interface ScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Score'], meta: { name: 'Score' } }
    /**
     * Find zero or one Score that matches the filter.
     * @param {ScoreFindUniqueArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreFindUniqueArgs>(args: SelectSubset<T, ScoreFindUniqueArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Score that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreFindUniqueOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Score that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreFindFirstArgs>(args?: SelectSubset<T, ScoreFindFirstArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Score that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scores
     * const scores = await prisma.score.findMany()
     * 
     * // Get first 10 Scores
     * const scores = await prisma.score.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreWithIdOnly = await prisma.score.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreFindManyArgs>(args?: SelectSubset<T, ScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Score.
     * @param {ScoreCreateArgs} args - Arguments to create a Score.
     * @example
     * // Create one Score
     * const Score = await prisma.score.create({
     *   data: {
     *     // ... data to create a Score
     *   }
     * })
     * 
     */
    create<T extends ScoreCreateArgs>(args: SelectSubset<T, ScoreCreateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scores.
     * @param {ScoreCreateManyArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreCreateManyArgs>(args?: SelectSubset<T, ScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scores and returns the data saved in the database.
     * @param {ScoreCreateManyAndReturnArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Score.
     * @param {ScoreDeleteArgs} args - Arguments to delete one Score.
     * @example
     * // Delete one Score
     * const Score = await prisma.score.delete({
     *   where: {
     *     // ... filter to delete one Score
     *   }
     * })
     * 
     */
    delete<T extends ScoreDeleteArgs>(args: SelectSubset<T, ScoreDeleteArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Score.
     * @param {ScoreUpdateArgs} args - Arguments to update one Score.
     * @example
     * // Update one Score
     * const score = await prisma.score.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoreUpdateArgs>(args: SelectSubset<T, ScoreUpdateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scores.
     * @param {ScoreDeleteManyArgs} args - Arguments to filter Scores to delete.
     * @example
     * // Delete a few Scores
     * const { count } = await prisma.score.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreDeleteManyArgs>(args?: SelectSubset<T, ScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoreUpdateManyArgs>(args: SelectSubset<T, ScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores and returns the data updated in the database.
     * @param {ScoreUpdateManyAndReturnArgs} args - Arguments to update many Scores.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, ScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Score.
     * @param {ScoreUpsertArgs} args - Arguments to update or create a Score.
     * @example
     * // Update or create a Score
     * const score = await prisma.score.upsert({
     *   create: {
     *     // ... data to create a Score
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Score we want to update
     *   }
     * })
     */
    upsert<T extends ScoreUpsertArgs>(args: SelectSubset<T, ScoreUpsertArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreCountArgs} args - Arguments to filter Scores to count.
     * @example
     * // Count the number of Scores
     * const count = await prisma.score.count({
     *   where: {
     *     // ... the filter for the Scores we want to count
     *   }
     * })
    **/
    count<T extends ScoreCountArgs>(
      args?: Subset<T, ScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScoreAggregateArgs>(args: Subset<T, ScoreAggregateArgs>): Prisma.PrismaPromise<GetScoreAggregateType<T>>

    /**
     * Group by Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreGroupByArgs} args - Group by arguments.
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
      T extends ScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreGroupByArgs['orderBy'] }
        : { orderBy?: ScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Score model
   */
  readonly fields: ScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Score.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    round<T extends RoundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoundDefaultArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Score model
   */
  interface ScoreFieldRefs {
    readonly id: FieldRef<"Score", 'String'>
    readonly roundId: FieldRef<"Score", 'String'>
    readonly playerId: FieldRef<"Score", 'String'>
    readonly gross: FieldRef<"Score", 'Int'>
    readonly net: FieldRef<"Score", 'Int'>
    readonly createdAt: FieldRef<"Score", 'DateTime'>
    readonly updatedAt: FieldRef<"Score", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Score findUnique
   */
  export type ScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findUniqueOrThrow
   */
  export type ScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findFirst
   */
  export type ScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findFirstOrThrow
   */
  export type ScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findMany
   */
  export type ScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Scores to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score create
   */
  export type ScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Score.
     */
    data: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
  }

  /**
   * Score createMany
   */
  export type ScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Score createManyAndReturn
   */
  export type ScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Score update
   */
  export type ScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Score.
     */
    data: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
    /**
     * Choose, which Score to update.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score updateMany
   */
  export type ScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to update.
     */
    limit?: number
  }

  /**
   * Score updateManyAndReturn
   */
  export type ScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Score upsert
   */
  export type ScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Score to update in case it exists.
     */
    where: ScoreWhereUniqueInput
    /**
     * In case the Score found by the `where` argument doesn't exist, create a new Score with this data.
     */
    create: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
    /**
     * In case the Score was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
  }

  /**
   * Score delete
   */
  export type ScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter which Score to delete.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score deleteMany
   */
  export type ScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scores to delete
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to delete.
     */
    limit?: number
  }

  /**
   * Score without action
   */
  export type ScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
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


  export const SeasonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeasonScalarFieldEnum = (typeof SeasonScalarFieldEnum)[keyof typeof SeasonScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    handicapIndex: 'handicapIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const SeasonPlayerScalarFieldEnum: {
    id: 'id',
    seasonId: 'seasonId',
    playerId: 'playerId',
    createdAt: 'createdAt'
  };

  export type SeasonPlayerScalarFieldEnum = (typeof SeasonPlayerScalarFieldEnum)[keyof typeof SeasonPlayerScalarFieldEnum]


  export const RoundScalarFieldEnum: {
    id: 'id',
    seasonId: 'seasonId',
    week: 'week',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoundScalarFieldEnum = (typeof RoundScalarFieldEnum)[keyof typeof RoundScalarFieldEnum]


  export const ScoreScalarFieldEnum: {
    id: 'id',
    roundId: 'roundId',
    playerId: 'playerId',
    gross: 'gross',
    net: 'net',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScoreScalarFieldEnum = (typeof ScoreScalarFieldEnum)[keyof typeof ScoreScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SeasonWhereInput = {
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    id?: StringFilter<"Season"> | string
    name?: StringFilter<"Season"> | string
    startDate?: DateTimeNullableFilter<"Season"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Season"> | Date | string | null
    createdAt?: DateTimeFilter<"Season"> | Date | string
    updatedAt?: DateTimeFilter<"Season"> | Date | string
    rounds?: RoundListRelationFilter
    players?: SeasonPlayerListRelationFilter
  }

  export type SeasonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rounds?: RoundOrderByRelationAggregateInput
    players?: SeasonPlayerOrderByRelationAggregateInput
  }

  export type SeasonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    name?: StringFilter<"Season"> | string
    startDate?: DateTimeNullableFilter<"Season"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Season"> | Date | string | null
    createdAt?: DateTimeFilter<"Season"> | Date | string
    updatedAt?: DateTimeFilter<"Season"> | Date | string
    rounds?: RoundListRelationFilter
    players?: SeasonPlayerListRelationFilter
  }, "id">

  export type SeasonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeasonCountOrderByAggregateInput
    _max?: SeasonMaxOrderByAggregateInput
    _min?: SeasonMinOrderByAggregateInput
  }

  export type SeasonScalarWhereWithAggregatesInput = {
    AND?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    OR?: SeasonScalarWhereWithAggregatesInput[]
    NOT?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Season"> | string
    name?: StringWithAggregatesFilter<"Season"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"Season"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Season"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Season"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Season"> | Date | string
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    email?: StringNullableFilter<"Player"> | string | null
    handicapIndex?: FloatNullableFilter<"Player"> | number | null
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    scores?: ScoreListRelationFilter
    seasons?: SeasonPlayerListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    handicapIndex?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    scores?: ScoreOrderByRelationAggregateInput
    seasons?: SeasonPlayerOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    handicapIndex?: FloatNullableFilter<"Player"> | number | null
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    scores?: ScoreListRelationFilter
    seasons?: SeasonPlayerListRelationFilter
  }, "id" | "email">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    handicapIndex?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player"> | string
    name?: StringWithAggregatesFilter<"Player"> | string
    email?: StringNullableWithAggregatesFilter<"Player"> | string | null
    handicapIndex?: FloatNullableWithAggregatesFilter<"Player"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
  }

  export type SeasonPlayerWhereInput = {
    AND?: SeasonPlayerWhereInput | SeasonPlayerWhereInput[]
    OR?: SeasonPlayerWhereInput[]
    NOT?: SeasonPlayerWhereInput | SeasonPlayerWhereInput[]
    id?: StringFilter<"SeasonPlayer"> | string
    seasonId?: StringFilter<"SeasonPlayer"> | string
    playerId?: StringFilter<"SeasonPlayer"> | string
    createdAt?: DateTimeFilter<"SeasonPlayer"> | Date | string
    season?: XOR<SeasonScalarRelationFilter, SeasonWhereInput>
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type SeasonPlayerOrderByWithRelationInput = {
    id?: SortOrder
    seasonId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    season?: SeasonOrderByWithRelationInput
    player?: PlayerOrderByWithRelationInput
  }

  export type SeasonPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    seasonId_playerId?: SeasonPlayerSeasonIdPlayerIdCompoundUniqueInput
    AND?: SeasonPlayerWhereInput | SeasonPlayerWhereInput[]
    OR?: SeasonPlayerWhereInput[]
    NOT?: SeasonPlayerWhereInput | SeasonPlayerWhereInput[]
    seasonId?: StringFilter<"SeasonPlayer"> | string
    playerId?: StringFilter<"SeasonPlayer"> | string
    createdAt?: DateTimeFilter<"SeasonPlayer"> | Date | string
    season?: XOR<SeasonScalarRelationFilter, SeasonWhereInput>
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id" | "seasonId_playerId">

  export type SeasonPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    seasonId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
    _count?: SeasonPlayerCountOrderByAggregateInput
    _max?: SeasonPlayerMaxOrderByAggregateInput
    _min?: SeasonPlayerMinOrderByAggregateInput
  }

  export type SeasonPlayerScalarWhereWithAggregatesInput = {
    AND?: SeasonPlayerScalarWhereWithAggregatesInput | SeasonPlayerScalarWhereWithAggregatesInput[]
    OR?: SeasonPlayerScalarWhereWithAggregatesInput[]
    NOT?: SeasonPlayerScalarWhereWithAggregatesInput | SeasonPlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SeasonPlayer"> | string
    seasonId?: StringWithAggregatesFilter<"SeasonPlayer"> | string
    playerId?: StringWithAggregatesFilter<"SeasonPlayer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SeasonPlayer"> | Date | string
  }

  export type RoundWhereInput = {
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    id?: StringFilter<"Round"> | string
    seasonId?: StringFilter<"Round"> | string
    week?: IntFilter<"Round"> | number
    date?: DateTimeFilter<"Round"> | Date | string
    createdAt?: DateTimeFilter<"Round"> | Date | string
    updatedAt?: DateTimeFilter<"Round"> | Date | string
    season?: XOR<SeasonScalarRelationFilter, SeasonWhereInput>
    scores?: ScoreListRelationFilter
  }

  export type RoundOrderByWithRelationInput = {
    id?: SortOrder
    seasonId?: SortOrder
    week?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    season?: SeasonOrderByWithRelationInput
    scores?: ScoreOrderByRelationAggregateInput
  }

  export type RoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    seasonId?: StringFilter<"Round"> | string
    week?: IntFilter<"Round"> | number
    date?: DateTimeFilter<"Round"> | Date | string
    createdAt?: DateTimeFilter<"Round"> | Date | string
    updatedAt?: DateTimeFilter<"Round"> | Date | string
    season?: XOR<SeasonScalarRelationFilter, SeasonWhereInput>
    scores?: ScoreListRelationFilter
  }, "id">

  export type RoundOrderByWithAggregationInput = {
    id?: SortOrder
    seasonId?: SortOrder
    week?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoundCountOrderByAggregateInput
    _avg?: RoundAvgOrderByAggregateInput
    _max?: RoundMaxOrderByAggregateInput
    _min?: RoundMinOrderByAggregateInput
    _sum?: RoundSumOrderByAggregateInput
  }

  export type RoundScalarWhereWithAggregatesInput = {
    AND?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    OR?: RoundScalarWhereWithAggregatesInput[]
    NOT?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Round"> | string
    seasonId?: StringWithAggregatesFilter<"Round"> | string
    week?: IntWithAggregatesFilter<"Round"> | number
    date?: DateTimeWithAggregatesFilter<"Round"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Round"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Round"> | Date | string
  }

  export type ScoreWhereInput = {
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    id?: StringFilter<"Score"> | string
    roundId?: StringFilter<"Score"> | string
    playerId?: StringFilter<"Score"> | string
    gross?: IntFilter<"Score"> | number
    net?: IntNullableFilter<"Score"> | number | null
    createdAt?: DateTimeFilter<"Score"> | Date | string
    updatedAt?: DateTimeFilter<"Score"> | Date | string
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type ScoreOrderByWithRelationInput = {
    id?: SortOrder
    roundId?: SortOrder
    playerId?: SortOrder
    gross?: SortOrder
    net?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    round?: RoundOrderByWithRelationInput
    player?: PlayerOrderByWithRelationInput
  }

  export type ScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roundId_playerId?: ScoreRoundIdPlayerIdCompoundUniqueInput
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    roundId?: StringFilter<"Score"> | string
    playerId?: StringFilter<"Score"> | string
    gross?: IntFilter<"Score"> | number
    net?: IntNullableFilter<"Score"> | number | null
    createdAt?: DateTimeFilter<"Score"> | Date | string
    updatedAt?: DateTimeFilter<"Score"> | Date | string
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id" | "roundId_playerId">

  export type ScoreOrderByWithAggregationInput = {
    id?: SortOrder
    roundId?: SortOrder
    playerId?: SortOrder
    gross?: SortOrder
    net?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScoreCountOrderByAggregateInput
    _avg?: ScoreAvgOrderByAggregateInput
    _max?: ScoreMaxOrderByAggregateInput
    _min?: ScoreMinOrderByAggregateInput
    _sum?: ScoreSumOrderByAggregateInput
  }

  export type ScoreScalarWhereWithAggregatesInput = {
    AND?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    OR?: ScoreScalarWhereWithAggregatesInput[]
    NOT?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Score"> | string
    roundId?: StringWithAggregatesFilter<"Score"> | string
    playerId?: StringWithAggregatesFilter<"Score"> | string
    gross?: IntWithAggregatesFilter<"Score"> | number
    net?: IntNullableWithAggregatesFilter<"Score"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Score"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Score"> | Date | string
  }

  export type SeasonCreateInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: RoundCreateNestedManyWithoutSeasonInput
    players?: SeasonPlayerCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUncheckedCreateInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: RoundUncheckedCreateNestedManyWithoutSeasonInput
    players?: SeasonPlayerUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: RoundUpdateManyWithoutSeasonNestedInput
    players?: SeasonPlayerUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: RoundUncheckedUpdateManyWithoutSeasonNestedInput
    players?: SeasonPlayerUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonCreateManyInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeasonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateInput = {
    id?: string
    name: string
    email?: string | null
    handicapIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: ScoreCreateNestedManyWithoutPlayerInput
    seasons?: SeasonPlayerCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    handicapIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: ScoreUncheckedCreateNestedManyWithoutPlayerInput
    seasons?: SeasonPlayerUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    handicapIndex?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: ScoreUpdateManyWithoutPlayerNestedInput
    seasons?: SeasonPlayerUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    handicapIndex?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: ScoreUncheckedUpdateManyWithoutPlayerNestedInput
    seasons?: SeasonPlayerUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    handicapIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    handicapIndex?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    handicapIndex?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonPlayerCreateInput = {
    id?: string
    createdAt?: Date | string
    season: SeasonCreateNestedOneWithoutPlayersInput
    player: PlayerCreateNestedOneWithoutSeasonsInput
  }

  export type SeasonPlayerUncheckedCreateInput = {
    id?: string
    seasonId: string
    playerId: string
    createdAt?: Date | string
  }

  export type SeasonPlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: SeasonUpdateOneRequiredWithoutPlayersNestedInput
    player?: PlayerUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type SeasonPlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonPlayerCreateManyInput = {
    id?: string
    seasonId: string
    playerId: string
    createdAt?: Date | string
  }

  export type SeasonPlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonPlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundCreateInput = {
    id?: string
    week: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    season: SeasonCreateNestedOneWithoutRoundsInput
    scores?: ScoreCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateInput = {
    id?: string
    seasonId: string
    week: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: ScoreUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: SeasonUpdateOneRequiredWithoutRoundsNestedInput
    scores?: ScoreUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: ScoreUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundCreateManyInput = {
    id?: string
    seasonId: string
    week: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreCreateInput = {
    id?: string
    gross: number
    net?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    round: RoundCreateNestedOneWithoutScoresInput
    player: PlayerCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateInput = {
    id?: string
    roundId: string
    playerId: string
    gross: number
    net?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gross?: IntFieldUpdateOperationsInput | number
    net?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    round?: RoundUpdateOneRequiredWithoutScoresNestedInput
    player?: PlayerUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    gross?: IntFieldUpdateOperationsInput | number
    net?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreCreateManyInput = {
    id?: string
    roundId: string
    playerId: string
    gross: number
    net?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gross?: IntFieldUpdateOperationsInput | number
    net?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    gross?: IntFieldUpdateOperationsInput | number
    net?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type RoundListRelationFilter = {
    every?: RoundWhereInput
    some?: RoundWhereInput
    none?: RoundWhereInput
  }

  export type SeasonPlayerListRelationFilter = {
    every?: SeasonPlayerWhereInput
    some?: SeasonPlayerWhereInput
    none?: SeasonPlayerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeasonPlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeasonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeasonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeasonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ScoreListRelationFilter = {
    every?: ScoreWhereInput
    some?: ScoreWhereInput
    none?: ScoreWhereInput
  }

  export type ScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    handicapIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    handicapIndex?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    handicapIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    handicapIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    handicapIndex?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SeasonScalarRelationFilter = {
    is?: SeasonWhereInput
    isNot?: SeasonWhereInput
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type SeasonPlayerSeasonIdPlayerIdCompoundUniqueInput = {
    seasonId: string
    playerId: string
  }

  export type SeasonPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
  }

  export type SeasonPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
  }

  export type SeasonPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    playerId?: SortOrder
    createdAt?: SortOrder
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

  export type RoundCountOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    week?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundAvgOrderByAggregateInput = {
    week?: SortOrder
  }

  export type RoundMaxOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    week?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundMinOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    week?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundSumOrderByAggregateInput = {
    week?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RoundScalarRelationFilter = {
    is?: RoundWhereInput
    isNot?: RoundWhereInput
  }

  export type ScoreRoundIdPlayerIdCompoundUniqueInput = {
    roundId: string
    playerId: string
  }

  export type ScoreCountOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    playerId?: SortOrder
    gross?: SortOrder
    net?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreAvgOrderByAggregateInput = {
    gross?: SortOrder
    net?: SortOrder
  }

  export type ScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    playerId?: SortOrder
    gross?: SortOrder
    net?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreMinOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    playerId?: SortOrder
    gross?: SortOrder
    net?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreSumOrderByAggregateInput = {
    gross?: SortOrder
    net?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RoundCreateNestedManyWithoutSeasonInput = {
    create?: XOR<RoundCreateWithoutSeasonInput, RoundUncheckedCreateWithoutSeasonInput> | RoundCreateWithoutSeasonInput[] | RoundUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutSeasonInput | RoundCreateOrConnectWithoutSeasonInput[]
    createMany?: RoundCreateManySeasonInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type SeasonPlayerCreateNestedManyWithoutSeasonInput = {
    create?: XOR<SeasonPlayerCreateWithoutSeasonInput, SeasonPlayerUncheckedCreateWithoutSeasonInput> | SeasonPlayerCreateWithoutSeasonInput[] | SeasonPlayerUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: SeasonPlayerCreateOrConnectWithoutSeasonInput | SeasonPlayerCreateOrConnectWithoutSeasonInput[]
    createMany?: SeasonPlayerCreateManySeasonInputEnvelope
    connect?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
  }

  export type RoundUncheckedCreateNestedManyWithoutSeasonInput = {
    create?: XOR<RoundCreateWithoutSeasonInput, RoundUncheckedCreateWithoutSeasonInput> | RoundCreateWithoutSeasonInput[] | RoundUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutSeasonInput | RoundCreateOrConnectWithoutSeasonInput[]
    createMany?: RoundCreateManySeasonInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type SeasonPlayerUncheckedCreateNestedManyWithoutSeasonInput = {
    create?: XOR<SeasonPlayerCreateWithoutSeasonInput, SeasonPlayerUncheckedCreateWithoutSeasonInput> | SeasonPlayerCreateWithoutSeasonInput[] | SeasonPlayerUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: SeasonPlayerCreateOrConnectWithoutSeasonInput | SeasonPlayerCreateOrConnectWithoutSeasonInput[]
    createMany?: SeasonPlayerCreateManySeasonInputEnvelope
    connect?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoundUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<RoundCreateWithoutSeasonInput, RoundUncheckedCreateWithoutSeasonInput> | RoundCreateWithoutSeasonInput[] | RoundUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutSeasonInput | RoundCreateOrConnectWithoutSeasonInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutSeasonInput | RoundUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: RoundCreateManySeasonInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutSeasonInput | RoundUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutSeasonInput | RoundUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type SeasonPlayerUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<SeasonPlayerCreateWithoutSeasonInput, SeasonPlayerUncheckedCreateWithoutSeasonInput> | SeasonPlayerCreateWithoutSeasonInput[] | SeasonPlayerUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: SeasonPlayerCreateOrConnectWithoutSeasonInput | SeasonPlayerCreateOrConnectWithoutSeasonInput[]
    upsert?: SeasonPlayerUpsertWithWhereUniqueWithoutSeasonInput | SeasonPlayerUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: SeasonPlayerCreateManySeasonInputEnvelope
    set?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    disconnect?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    delete?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    connect?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    update?: SeasonPlayerUpdateWithWhereUniqueWithoutSeasonInput | SeasonPlayerUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: SeasonPlayerUpdateManyWithWhereWithoutSeasonInput | SeasonPlayerUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: SeasonPlayerScalarWhereInput | SeasonPlayerScalarWhereInput[]
  }

  export type RoundUncheckedUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<RoundCreateWithoutSeasonInput, RoundUncheckedCreateWithoutSeasonInput> | RoundCreateWithoutSeasonInput[] | RoundUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutSeasonInput | RoundCreateOrConnectWithoutSeasonInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutSeasonInput | RoundUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: RoundCreateManySeasonInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutSeasonInput | RoundUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutSeasonInput | RoundUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type SeasonPlayerUncheckedUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<SeasonPlayerCreateWithoutSeasonInput, SeasonPlayerUncheckedCreateWithoutSeasonInput> | SeasonPlayerCreateWithoutSeasonInput[] | SeasonPlayerUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: SeasonPlayerCreateOrConnectWithoutSeasonInput | SeasonPlayerCreateOrConnectWithoutSeasonInput[]
    upsert?: SeasonPlayerUpsertWithWhereUniqueWithoutSeasonInput | SeasonPlayerUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: SeasonPlayerCreateManySeasonInputEnvelope
    set?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    disconnect?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    delete?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    connect?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    update?: SeasonPlayerUpdateWithWhereUniqueWithoutSeasonInput | SeasonPlayerUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: SeasonPlayerUpdateManyWithWhereWithoutSeasonInput | SeasonPlayerUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: SeasonPlayerScalarWhereInput | SeasonPlayerScalarWhereInput[]
  }

  export type ScoreCreateNestedManyWithoutPlayerInput = {
    create?: XOR<ScoreCreateWithoutPlayerInput, ScoreUncheckedCreateWithoutPlayerInput> | ScoreCreateWithoutPlayerInput[] | ScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutPlayerInput | ScoreCreateOrConnectWithoutPlayerInput[]
    createMany?: ScoreCreateManyPlayerInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type SeasonPlayerCreateNestedManyWithoutPlayerInput = {
    create?: XOR<SeasonPlayerCreateWithoutPlayerInput, SeasonPlayerUncheckedCreateWithoutPlayerInput> | SeasonPlayerCreateWithoutPlayerInput[] | SeasonPlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SeasonPlayerCreateOrConnectWithoutPlayerInput | SeasonPlayerCreateOrConnectWithoutPlayerInput[]
    createMany?: SeasonPlayerCreateManyPlayerInputEnvelope
    connect?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<ScoreCreateWithoutPlayerInput, ScoreUncheckedCreateWithoutPlayerInput> | ScoreCreateWithoutPlayerInput[] | ScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutPlayerInput | ScoreCreateOrConnectWithoutPlayerInput[]
    createMany?: ScoreCreateManyPlayerInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type SeasonPlayerUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<SeasonPlayerCreateWithoutPlayerInput, SeasonPlayerUncheckedCreateWithoutPlayerInput> | SeasonPlayerCreateWithoutPlayerInput[] | SeasonPlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SeasonPlayerCreateOrConnectWithoutPlayerInput | SeasonPlayerCreateOrConnectWithoutPlayerInput[]
    createMany?: SeasonPlayerCreateManyPlayerInputEnvelope
    connect?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScoreUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<ScoreCreateWithoutPlayerInput, ScoreUncheckedCreateWithoutPlayerInput> | ScoreCreateWithoutPlayerInput[] | ScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutPlayerInput | ScoreCreateOrConnectWithoutPlayerInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutPlayerInput | ScoreUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: ScoreCreateManyPlayerInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutPlayerInput | ScoreUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutPlayerInput | ScoreUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type SeasonPlayerUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<SeasonPlayerCreateWithoutPlayerInput, SeasonPlayerUncheckedCreateWithoutPlayerInput> | SeasonPlayerCreateWithoutPlayerInput[] | SeasonPlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SeasonPlayerCreateOrConnectWithoutPlayerInput | SeasonPlayerCreateOrConnectWithoutPlayerInput[]
    upsert?: SeasonPlayerUpsertWithWhereUniqueWithoutPlayerInput | SeasonPlayerUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: SeasonPlayerCreateManyPlayerInputEnvelope
    set?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    disconnect?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    delete?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    connect?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    update?: SeasonPlayerUpdateWithWhereUniqueWithoutPlayerInput | SeasonPlayerUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: SeasonPlayerUpdateManyWithWhereWithoutPlayerInput | SeasonPlayerUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: SeasonPlayerScalarWhereInput | SeasonPlayerScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<ScoreCreateWithoutPlayerInput, ScoreUncheckedCreateWithoutPlayerInput> | ScoreCreateWithoutPlayerInput[] | ScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutPlayerInput | ScoreCreateOrConnectWithoutPlayerInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutPlayerInput | ScoreUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: ScoreCreateManyPlayerInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutPlayerInput | ScoreUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutPlayerInput | ScoreUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type SeasonPlayerUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<SeasonPlayerCreateWithoutPlayerInput, SeasonPlayerUncheckedCreateWithoutPlayerInput> | SeasonPlayerCreateWithoutPlayerInput[] | SeasonPlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SeasonPlayerCreateOrConnectWithoutPlayerInput | SeasonPlayerCreateOrConnectWithoutPlayerInput[]
    upsert?: SeasonPlayerUpsertWithWhereUniqueWithoutPlayerInput | SeasonPlayerUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: SeasonPlayerCreateManyPlayerInputEnvelope
    set?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    disconnect?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    delete?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    connect?: SeasonPlayerWhereUniqueInput | SeasonPlayerWhereUniqueInput[]
    update?: SeasonPlayerUpdateWithWhereUniqueWithoutPlayerInput | SeasonPlayerUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: SeasonPlayerUpdateManyWithWhereWithoutPlayerInput | SeasonPlayerUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: SeasonPlayerScalarWhereInput | SeasonPlayerScalarWhereInput[]
  }

  export type SeasonCreateNestedOneWithoutPlayersInput = {
    create?: XOR<SeasonCreateWithoutPlayersInput, SeasonUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutPlayersInput
    connect?: SeasonWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutSeasonsInput = {
    create?: XOR<PlayerCreateWithoutSeasonsInput, PlayerUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutSeasonsInput
    connect?: PlayerWhereUniqueInput
  }

  export type SeasonUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<SeasonCreateWithoutPlayersInput, SeasonUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutPlayersInput
    upsert?: SeasonUpsertWithoutPlayersInput
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutPlayersInput, SeasonUpdateWithoutPlayersInput>, SeasonUncheckedUpdateWithoutPlayersInput>
  }

  export type PlayerUpdateOneRequiredWithoutSeasonsNestedInput = {
    create?: XOR<PlayerCreateWithoutSeasonsInput, PlayerUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutSeasonsInput
    upsert?: PlayerUpsertWithoutSeasonsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutSeasonsInput, PlayerUpdateWithoutSeasonsInput>, PlayerUncheckedUpdateWithoutSeasonsInput>
  }

  export type SeasonCreateNestedOneWithoutRoundsInput = {
    create?: XOR<SeasonCreateWithoutRoundsInput, SeasonUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutRoundsInput
    connect?: SeasonWhereUniqueInput
  }

  export type ScoreCreateNestedManyWithoutRoundInput = {
    create?: XOR<ScoreCreateWithoutRoundInput, ScoreUncheckedCreateWithoutRoundInput> | ScoreCreateWithoutRoundInput[] | ScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutRoundInput | ScoreCreateOrConnectWithoutRoundInput[]
    createMany?: ScoreCreateManyRoundInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<ScoreCreateWithoutRoundInput, ScoreUncheckedCreateWithoutRoundInput> | ScoreCreateWithoutRoundInput[] | ScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutRoundInput | ScoreCreateOrConnectWithoutRoundInput[]
    createMany?: ScoreCreateManyRoundInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SeasonUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<SeasonCreateWithoutRoundsInput, SeasonUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutRoundsInput
    upsert?: SeasonUpsertWithoutRoundsInput
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutRoundsInput, SeasonUpdateWithoutRoundsInput>, SeasonUncheckedUpdateWithoutRoundsInput>
  }

  export type ScoreUpdateManyWithoutRoundNestedInput = {
    create?: XOR<ScoreCreateWithoutRoundInput, ScoreUncheckedCreateWithoutRoundInput> | ScoreCreateWithoutRoundInput[] | ScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutRoundInput | ScoreCreateOrConnectWithoutRoundInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutRoundInput | ScoreUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: ScoreCreateManyRoundInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutRoundInput | ScoreUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutRoundInput | ScoreUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<ScoreCreateWithoutRoundInput, ScoreUncheckedCreateWithoutRoundInput> | ScoreCreateWithoutRoundInput[] | ScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutRoundInput | ScoreCreateOrConnectWithoutRoundInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutRoundInput | ScoreUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: ScoreCreateManyRoundInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutRoundInput | ScoreUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutRoundInput | ScoreUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type RoundCreateNestedOneWithoutScoresInput = {
    create?: XOR<RoundCreateWithoutScoresInput, RoundUncheckedCreateWithoutScoresInput>
    connectOrCreate?: RoundCreateOrConnectWithoutScoresInput
    connect?: RoundWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutScoresInput = {
    create?: XOR<PlayerCreateWithoutScoresInput, PlayerUncheckedCreateWithoutScoresInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutScoresInput
    connect?: PlayerWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoundUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<RoundCreateWithoutScoresInput, RoundUncheckedCreateWithoutScoresInput>
    connectOrCreate?: RoundCreateOrConnectWithoutScoresInput
    upsert?: RoundUpsertWithoutScoresInput
    connect?: RoundWhereUniqueInput
    update?: XOR<XOR<RoundUpdateToOneWithWhereWithoutScoresInput, RoundUpdateWithoutScoresInput>, RoundUncheckedUpdateWithoutScoresInput>
  }

  export type PlayerUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<PlayerCreateWithoutScoresInput, PlayerUncheckedCreateWithoutScoresInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutScoresInput
    upsert?: PlayerUpsertWithoutScoresInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutScoresInput, PlayerUpdateWithoutScoresInput>, PlayerUncheckedUpdateWithoutScoresInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RoundCreateWithoutSeasonInput = {
    id?: string
    week: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: ScoreCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutSeasonInput = {
    id?: string
    week: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: ScoreUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutSeasonInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutSeasonInput, RoundUncheckedCreateWithoutSeasonInput>
  }

  export type RoundCreateManySeasonInputEnvelope = {
    data: RoundCreateManySeasonInput | RoundCreateManySeasonInput[]
    skipDuplicates?: boolean
  }

  export type SeasonPlayerCreateWithoutSeasonInput = {
    id?: string
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutSeasonsInput
  }

  export type SeasonPlayerUncheckedCreateWithoutSeasonInput = {
    id?: string
    playerId: string
    createdAt?: Date | string
  }

  export type SeasonPlayerCreateOrConnectWithoutSeasonInput = {
    where: SeasonPlayerWhereUniqueInput
    create: XOR<SeasonPlayerCreateWithoutSeasonInput, SeasonPlayerUncheckedCreateWithoutSeasonInput>
  }

  export type SeasonPlayerCreateManySeasonInputEnvelope = {
    data: SeasonPlayerCreateManySeasonInput | SeasonPlayerCreateManySeasonInput[]
    skipDuplicates?: boolean
  }

  export type RoundUpsertWithWhereUniqueWithoutSeasonInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutSeasonInput, RoundUncheckedUpdateWithoutSeasonInput>
    create: XOR<RoundCreateWithoutSeasonInput, RoundUncheckedCreateWithoutSeasonInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutSeasonInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutSeasonInput, RoundUncheckedUpdateWithoutSeasonInput>
  }

  export type RoundUpdateManyWithWhereWithoutSeasonInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutSeasonInput>
  }

  export type RoundScalarWhereInput = {
    AND?: RoundScalarWhereInput | RoundScalarWhereInput[]
    OR?: RoundScalarWhereInput[]
    NOT?: RoundScalarWhereInput | RoundScalarWhereInput[]
    id?: StringFilter<"Round"> | string
    seasonId?: StringFilter<"Round"> | string
    week?: IntFilter<"Round"> | number
    date?: DateTimeFilter<"Round"> | Date | string
    createdAt?: DateTimeFilter<"Round"> | Date | string
    updatedAt?: DateTimeFilter<"Round"> | Date | string
  }

  export type SeasonPlayerUpsertWithWhereUniqueWithoutSeasonInput = {
    where: SeasonPlayerWhereUniqueInput
    update: XOR<SeasonPlayerUpdateWithoutSeasonInput, SeasonPlayerUncheckedUpdateWithoutSeasonInput>
    create: XOR<SeasonPlayerCreateWithoutSeasonInput, SeasonPlayerUncheckedCreateWithoutSeasonInput>
  }

  export type SeasonPlayerUpdateWithWhereUniqueWithoutSeasonInput = {
    where: SeasonPlayerWhereUniqueInput
    data: XOR<SeasonPlayerUpdateWithoutSeasonInput, SeasonPlayerUncheckedUpdateWithoutSeasonInput>
  }

  export type SeasonPlayerUpdateManyWithWhereWithoutSeasonInput = {
    where: SeasonPlayerScalarWhereInput
    data: XOR<SeasonPlayerUpdateManyMutationInput, SeasonPlayerUncheckedUpdateManyWithoutSeasonInput>
  }

  export type SeasonPlayerScalarWhereInput = {
    AND?: SeasonPlayerScalarWhereInput | SeasonPlayerScalarWhereInput[]
    OR?: SeasonPlayerScalarWhereInput[]
    NOT?: SeasonPlayerScalarWhereInput | SeasonPlayerScalarWhereInput[]
    id?: StringFilter<"SeasonPlayer"> | string
    seasonId?: StringFilter<"SeasonPlayer"> | string
    playerId?: StringFilter<"SeasonPlayer"> | string
    createdAt?: DateTimeFilter<"SeasonPlayer"> | Date | string
  }

  export type ScoreCreateWithoutPlayerInput = {
    id?: string
    gross: number
    net?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    round: RoundCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateWithoutPlayerInput = {
    id?: string
    roundId: string
    gross: number
    net?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreCreateOrConnectWithoutPlayerInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutPlayerInput, ScoreUncheckedCreateWithoutPlayerInput>
  }

  export type ScoreCreateManyPlayerInputEnvelope = {
    data: ScoreCreateManyPlayerInput | ScoreCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type SeasonPlayerCreateWithoutPlayerInput = {
    id?: string
    createdAt?: Date | string
    season: SeasonCreateNestedOneWithoutPlayersInput
  }

  export type SeasonPlayerUncheckedCreateWithoutPlayerInput = {
    id?: string
    seasonId: string
    createdAt?: Date | string
  }

  export type SeasonPlayerCreateOrConnectWithoutPlayerInput = {
    where: SeasonPlayerWhereUniqueInput
    create: XOR<SeasonPlayerCreateWithoutPlayerInput, SeasonPlayerUncheckedCreateWithoutPlayerInput>
  }

  export type SeasonPlayerCreateManyPlayerInputEnvelope = {
    data: SeasonPlayerCreateManyPlayerInput | SeasonPlayerCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type ScoreUpsertWithWhereUniqueWithoutPlayerInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutPlayerInput, ScoreUncheckedUpdateWithoutPlayerInput>
    create: XOR<ScoreCreateWithoutPlayerInput, ScoreUncheckedCreateWithoutPlayerInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutPlayerInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutPlayerInput, ScoreUncheckedUpdateWithoutPlayerInput>
  }

  export type ScoreUpdateManyWithWhereWithoutPlayerInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutPlayerInput>
  }

  export type ScoreScalarWhereInput = {
    AND?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    OR?: ScoreScalarWhereInput[]
    NOT?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    id?: StringFilter<"Score"> | string
    roundId?: StringFilter<"Score"> | string
    playerId?: StringFilter<"Score"> | string
    gross?: IntFilter<"Score"> | number
    net?: IntNullableFilter<"Score"> | number | null
    createdAt?: DateTimeFilter<"Score"> | Date | string
    updatedAt?: DateTimeFilter<"Score"> | Date | string
  }

  export type SeasonPlayerUpsertWithWhereUniqueWithoutPlayerInput = {
    where: SeasonPlayerWhereUniqueInput
    update: XOR<SeasonPlayerUpdateWithoutPlayerInput, SeasonPlayerUncheckedUpdateWithoutPlayerInput>
    create: XOR<SeasonPlayerCreateWithoutPlayerInput, SeasonPlayerUncheckedCreateWithoutPlayerInput>
  }

  export type SeasonPlayerUpdateWithWhereUniqueWithoutPlayerInput = {
    where: SeasonPlayerWhereUniqueInput
    data: XOR<SeasonPlayerUpdateWithoutPlayerInput, SeasonPlayerUncheckedUpdateWithoutPlayerInput>
  }

  export type SeasonPlayerUpdateManyWithWhereWithoutPlayerInput = {
    where: SeasonPlayerScalarWhereInput
    data: XOR<SeasonPlayerUpdateManyMutationInput, SeasonPlayerUncheckedUpdateManyWithoutPlayerInput>
  }

  export type SeasonCreateWithoutPlayersInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: RoundCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: RoundUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonCreateOrConnectWithoutPlayersInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutPlayersInput, SeasonUncheckedCreateWithoutPlayersInput>
  }

  export type PlayerCreateWithoutSeasonsInput = {
    id?: string
    name: string
    email?: string | null
    handicapIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: ScoreCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutSeasonsInput = {
    id?: string
    name: string
    email?: string | null
    handicapIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: ScoreUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutSeasonsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutSeasonsInput, PlayerUncheckedCreateWithoutSeasonsInput>
  }

  export type SeasonUpsertWithoutPlayersInput = {
    update: XOR<SeasonUpdateWithoutPlayersInput, SeasonUncheckedUpdateWithoutPlayersInput>
    create: XOR<SeasonCreateWithoutPlayersInput, SeasonUncheckedCreateWithoutPlayersInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutPlayersInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutPlayersInput, SeasonUncheckedUpdateWithoutPlayersInput>
  }

  export type SeasonUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: RoundUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: RoundUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type PlayerUpsertWithoutSeasonsInput = {
    update: XOR<PlayerUpdateWithoutSeasonsInput, PlayerUncheckedUpdateWithoutSeasonsInput>
    create: XOR<PlayerCreateWithoutSeasonsInput, PlayerUncheckedCreateWithoutSeasonsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutSeasonsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutSeasonsInput, PlayerUncheckedUpdateWithoutSeasonsInput>
  }

  export type PlayerUpdateWithoutSeasonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    handicapIndex?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: ScoreUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutSeasonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    handicapIndex?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: ScoreUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type SeasonCreateWithoutRoundsInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: SeasonPlayerCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUncheckedCreateWithoutRoundsInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: SeasonPlayerUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonCreateOrConnectWithoutRoundsInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutRoundsInput, SeasonUncheckedCreateWithoutRoundsInput>
  }

  export type ScoreCreateWithoutRoundInput = {
    id?: string
    gross: number
    net?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateWithoutRoundInput = {
    id?: string
    playerId: string
    gross: number
    net?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreCreateOrConnectWithoutRoundInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutRoundInput, ScoreUncheckedCreateWithoutRoundInput>
  }

  export type ScoreCreateManyRoundInputEnvelope = {
    data: ScoreCreateManyRoundInput | ScoreCreateManyRoundInput[]
    skipDuplicates?: boolean
  }

  export type SeasonUpsertWithoutRoundsInput = {
    update: XOR<SeasonUpdateWithoutRoundsInput, SeasonUncheckedUpdateWithoutRoundsInput>
    create: XOR<SeasonCreateWithoutRoundsInput, SeasonUncheckedCreateWithoutRoundsInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutRoundsInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutRoundsInput, SeasonUncheckedUpdateWithoutRoundsInput>
  }

  export type SeasonUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: SeasonPlayerUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonUncheckedUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: SeasonPlayerUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type ScoreUpsertWithWhereUniqueWithoutRoundInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutRoundInput, ScoreUncheckedUpdateWithoutRoundInput>
    create: XOR<ScoreCreateWithoutRoundInput, ScoreUncheckedCreateWithoutRoundInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutRoundInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutRoundInput, ScoreUncheckedUpdateWithoutRoundInput>
  }

  export type ScoreUpdateManyWithWhereWithoutRoundInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutRoundInput>
  }

  export type RoundCreateWithoutScoresInput = {
    id?: string
    week: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    season: SeasonCreateNestedOneWithoutRoundsInput
  }

  export type RoundUncheckedCreateWithoutScoresInput = {
    id?: string
    seasonId: string
    week: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundCreateOrConnectWithoutScoresInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutScoresInput, RoundUncheckedCreateWithoutScoresInput>
  }

  export type PlayerCreateWithoutScoresInput = {
    id?: string
    name: string
    email?: string | null
    handicapIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    seasons?: SeasonPlayerCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutScoresInput = {
    id?: string
    name: string
    email?: string | null
    handicapIndex?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    seasons?: SeasonPlayerUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutScoresInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutScoresInput, PlayerUncheckedCreateWithoutScoresInput>
  }

  export type RoundUpsertWithoutScoresInput = {
    update: XOR<RoundUpdateWithoutScoresInput, RoundUncheckedUpdateWithoutScoresInput>
    create: XOR<RoundCreateWithoutScoresInput, RoundUncheckedCreateWithoutScoresInput>
    where?: RoundWhereInput
  }

  export type RoundUpdateToOneWithWhereWithoutScoresInput = {
    where?: RoundWhereInput
    data: XOR<RoundUpdateWithoutScoresInput, RoundUncheckedUpdateWithoutScoresInput>
  }

  export type RoundUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: SeasonUpdateOneRequiredWithoutRoundsNestedInput
  }

  export type RoundUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUpsertWithoutScoresInput = {
    update: XOR<PlayerUpdateWithoutScoresInput, PlayerUncheckedUpdateWithoutScoresInput>
    create: XOR<PlayerCreateWithoutScoresInput, PlayerUncheckedCreateWithoutScoresInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutScoresInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutScoresInput, PlayerUncheckedUpdateWithoutScoresInput>
  }

  export type PlayerUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    handicapIndex?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasons?: SeasonPlayerUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    handicapIndex?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasons?: SeasonPlayerUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type RoundCreateManySeasonInput = {
    id?: string
    week: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeasonPlayerCreateManySeasonInput = {
    id?: string
    playerId: string
    createdAt?: Date | string
  }

  export type RoundUpdateWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: ScoreUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: ScoreUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonPlayerUpdateWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type SeasonPlayerUncheckedUpdateWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonPlayerUncheckedUpdateManyWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreCreateManyPlayerInput = {
    id?: string
    roundId: string
    gross: number
    net?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeasonPlayerCreateManyPlayerInput = {
    id?: string
    seasonId: string
    createdAt?: Date | string
  }

  export type ScoreUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gross?: IntFieldUpdateOperationsInput | number
    net?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    round?: RoundUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    gross?: IntFieldUpdateOperationsInput | number
    net?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    gross?: IntFieldUpdateOperationsInput | number
    net?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonPlayerUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: SeasonUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type SeasonPlayerUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonPlayerUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreCreateManyRoundInput = {
    id?: string
    playerId: string
    gross: number
    net?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    gross?: IntFieldUpdateOperationsInput | number
    net?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    gross?: IntFieldUpdateOperationsInput | number
    net?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUncheckedUpdateManyWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    gross?: IntFieldUpdateOperationsInput | number
    net?: NullableIntFieldUpdateOperationsInput | number | null
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