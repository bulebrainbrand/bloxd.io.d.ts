import { canOpenStandardChest } from "./canOpenStandardChest";
import { openChestForPlayer } from "./openChestForPlayer";
import { closeChestForPlayer } from "./closeChestForPlayer";
import { giveStandardChestItem } from "./giveStandardChestItem";
import { getStandardChestFreeSlotCount } from "./getStandardChestFreeSlotCount";
import { getStandardChestItemAmount } from "./getStandardChestItemAmount";
import { getStandardChestItemSlot } from "./getStandardChestItemSlot";
import { getStandardChestItems } from "./getStandardChestItems";
import { setStandardChestItemSlot } from "./setStandardChestItemSlot";

export const ChestApis = {
  canOpenStandardChest,
  openChestForPlayer,
  closeChestForPlayer,
  giveStandardChestItem,
  getStandardChestFreeSlotCount,
  getStandardChestItemAmount,
  getStandardChestItemSlot,
  getStandardChestItems,
  setStandardChestItemSlot,
} as const;
