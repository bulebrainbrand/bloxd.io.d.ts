import { canOpenStandardChest } from "./canOpenStandardChest";
import { openChestForPlayer } from "./openChestForPlayer";
import { closeChestForPlayer } from "./closeChestForPlayer";
import { giveStandardChestItem } from "./giveStandardChestItem";
import { getStandardChestFreeSlotCount } from "./getStandardChestFreeSlotCount";
import { getStandardChestItemAmount } from "./getStandardChestItemAmount";

export const ChestApis = {
  canOpenStandardChest,
  openChestForPlayer,
  closeChestForPlayer,
  giveStandardChestItem,
  getStandardChestFreeSlotCount,
  getStandardChestItemAmount,
} as const;
