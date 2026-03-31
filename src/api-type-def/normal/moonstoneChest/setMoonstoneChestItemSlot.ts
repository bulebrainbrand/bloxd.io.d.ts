import { ItemAttributes } from "@type";

/**
 * Set the item in a player's moonstone chest slot
 *
 * @param {PlayerId} playerId
 * @param {number} idx
 * @param {string} itemName
 * @param {number} itemAmount
 * @param {ItemAttributes} attributes
 * @returns {void}
 */
declare const setMoonstoneChestItemSlot: (
  playerId: number,
  idx: number,
  itemName: string,
  itemAmount?: number,
  attributes?: ItemAttributes,
) => void;

export { setMoonstoneChestItemSlot };
