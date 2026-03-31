import { ItemObject } from "@type";

/**
 * Get all the items from a moonstone chest in order. Use this instead of repetitive calls to getMoonstoneChestItemSlot
 *
 * @param {PlayerId} playerId
 * @returns {ItemObject|null[]}
 */
declare const getMoonstoneChestItems: (
  playerId: number,
) => (ItemObject | null)[];

export { getMoonstoneChestItems };

/**
 * Get all the items from a moonstone chest in order. Use this instead of repetitive calls to getMoonstoneChestItemSlot
 *
 * Moonstone chests are a type of chest where a player accesses the same contents no matter the location of the moonstone chest
 *
 * @param {PlayerId} playerId
 * @returns {PNull<InvenItem>[]}
 * getMoonstoneChestItems(playerId)
 */
