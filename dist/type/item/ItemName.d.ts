import { AllItemName } from "./AllItemName";
declare const ItemNameSymbol: unique symbol;
export type ItemName = AllItemName & {
    readonly [ItemNameSymbol]: unknown;
};
export {};
