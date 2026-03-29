import { createItemDrop } from "./createItemDrop";
const ItemApisObject = {
  createItemDrop,
} as const;

export type ItemApis = typeof ItemApisObject;
