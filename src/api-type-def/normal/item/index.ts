import { createItemDrop } from "./createItemDrop";
import { setCantPickUpItem } from "./setCantPickUpItem";
import { deleteItemDrop } from "./deleteItemDrop";
import { giveItem } from "./giveItem";
import { inventoryIsFull } from "./inventoryIsFull";
import { setItemSlot } from "./setItemSlot";
import { removeItemName } from "./removeItemName";
import { getItemSlot } from "./getItemSlot";
export const ItemApis = {
  createItemDrop,
  setCantPickUpItem,
  deleteItemDrop,
  giveItem,
  inventoryIsFull,
  setItemSlot,
  removeItemName,
  getItemSlot,
} as const;
