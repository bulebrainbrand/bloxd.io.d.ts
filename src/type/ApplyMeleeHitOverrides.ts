import { Item } from "@type";

export type applyMeleeHitOverrides = {
  damage?: number | null;
  heldItemName?: Item | null;
  horizontalKbMultiplier?: number;
  verticalKbMultiplier?: number;
};
