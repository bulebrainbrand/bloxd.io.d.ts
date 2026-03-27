import { AllBlockID } from "./AllBlockId";

declare const BlockIdSymbol: unique symbol;
export type BlockId = AllBlockID & { readonly [BlockIdSymbol]: "BlockId" };
