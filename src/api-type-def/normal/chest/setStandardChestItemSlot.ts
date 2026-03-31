import { Coordinate } from "@type";

/**
 * Set the item in a standard chest slot.
 *
 * @param {Coordinate} chestPos
 * @param {number} idx
 * @param {string} itemName
 * @param {number} itemAmount
 * @param {string} [attributes]
 * @returns {void}
 */
declare const setStandardChestItemSlot: (
  chestPos: Coordinate,
  idx: number,
  itemName: string,
  itemAmount?: number,
  playerId?: number,
  attributes?: any,
) => void;

export { setStandardChestItemSlot };