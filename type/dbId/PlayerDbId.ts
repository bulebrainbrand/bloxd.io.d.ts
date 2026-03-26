declare const PlayerDbIdSymbol: unique symbol;
export type PlayerDbId = string & { readonly [PlayerDbIdSymbol]: unknown };
