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
