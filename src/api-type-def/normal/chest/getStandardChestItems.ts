import { Coordinate, ItemObject } from "@type";

/**
 * Get all the items from a standard chest in order. Use this instead of repetitive calls to getStandardChestItemSlot
 *
 * @param {Coordinate} chestPos
 * @returns {ItemObject | null[]}
 */
declare const getStandardChestItems: (
  chestPos: Coordinate,
) => (ItemObject | null)[];

export { getStandardChestItems };
