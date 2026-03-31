import { createItemDrop } from "./createItemDrop";
import { setCantPickUpItem } from "./setCantPickUpItem";
import { deleteItemDrop } from "./deleteItemDrop";
import { giveItem } from "./giveItem";
import { inventoryIsFull } from "./inventoryIsFull";
import { setItemSlot } from "./setItemSlot";
import { removeItemName } from "./removeItemName";
import { getItemSlot } from "./getItemSlot";
import { clearInventory } from "./clearInventory";
import { hasItem } from "./hasItem";
import { getInventoryItemAmount } from "./getInventoryItemAmount";
import { getSelectedInventorySlotI } from "./getSelectedInventorySlotI";
import { getHeldItem } from "./getHeldItem";
import { getInventoryFreeSlotCount } from "./getInventoryFreeSlotCount";
export const ItemApis = {
  createItemDrop,
  setCantPickUpItem,
  deleteItemDrop,
  giveItem,
  inventoryIsFull,
  setItemSlot,
  removeItemName,
  getItemSlot,
  clearInventory,
  hasItem,
  getInventoryItemAmount,
  getSelectedInventorySlotI,
  getHeldItem,
  getInventoryFreeSlotCount,
} as const;
