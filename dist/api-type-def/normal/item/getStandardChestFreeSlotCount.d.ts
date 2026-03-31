/**
 * Get the amount of free slots in a standard chest
 * Returns null for non-chests
 *
 * @param {number[]} chestPos
 * @returns {number | null}
 */
declare const getStandardChestFreeSlotCount: (chestPos: [number, number, number]) => number | null;
export { getStandardChestFreeSlotCount };
