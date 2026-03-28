declare const IdSymbol: unique symbol;
export type Id = string & {
    readonly [IdSymbol]: unknown;
};
export {};
