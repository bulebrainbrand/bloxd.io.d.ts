import { AllBlockName } from "./AllBlockName";

declare const BlockNameSymbol: unique symbol;

export type BlockName = AllBlockName & {
  readonly [BlockNameSymbol]: "BlockName";
};
