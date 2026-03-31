import { Coordinate, ItemObject } from "@type";

/**
 * Get the item at a chest slot.
 * Null if empty otherwise format { name: itemName, amount: amountOfItem }
 *
 * @param {Coordinate} chestPos
 * @param {number} idx
 * @returns {ItemObject | null}
 */
declare const getStandardChestItemSlot: (
  chestPos: Coordinate,
  idx: number,
) => ItemObject | null;

export { getStandardChestItemSlot };
