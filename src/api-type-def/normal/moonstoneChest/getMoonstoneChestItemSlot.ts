import { ItemObject } from "@type";

/**
 * Get the item in a player's moonstone chest slot. Null if empty
 *
 * @param {PlayerId} playerId
 * @param {number} idx
 * @returns {ItemObject | null}
 */
declare const getMoonstoneChestItemSlot: (
  playerId: number,
  idx: number,
) => ItemObject | null;

export { getMoonstoneChestItemSlot };
