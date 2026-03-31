import { Coordinate } from "../../../type/index";
/**
 * Get the amount of free slots in a standard chest
 * Returns null for non-chests
 *
 * @param {Coordinate} chestPos
 * @returns {number | null}
 */
declare const getStandardChestFreeSlotCount: (chestPos: Coordinate) => number | null;
export { getStandardChestFreeSlotCount };
