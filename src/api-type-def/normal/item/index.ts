import { createItemDrop } from "./createItemDrop";
import { setCantPickUpItem } from "./setCantPickUpItem";
import { deleteItemDrop } from "./deleteItemDrop";
const ItemApisObject = {
  createItemDrop,
  setCantPickUpItem,
  deleteItemDrop,
} as const;

export type ItemApis = typeof ItemApisObject;
