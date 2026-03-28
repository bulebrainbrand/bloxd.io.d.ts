import { AllItemId } from "./AllItemId";
declare const ItemIdSymbol: unique symbol;
export type ItemId = AllItemId & {
    readonly [ItemIdSymbol]: unknown;
};
export {};
