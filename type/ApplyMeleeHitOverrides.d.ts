import { Item } from "./item";

export type applyMeleeHitOverrides = {
  damage?: number | null;
  heldItemName?: Item | null;
  horizontalKbMultiplier?: number;
  verticalKbMultiplier?: number;
};
