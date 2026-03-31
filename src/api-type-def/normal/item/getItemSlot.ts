import { ItemObject, PlayerId } from "@type";

/**
 * Get the item at a specific index
 *
 * @param {PlayerId} playerId
 * @param {number} itemSlotIndex
 * @returns {ItemObject | null} - The item information at the slot
 */
declare const getItemSlot: (
  playerId: PlayerId,
  itemSlotIndex: number,
) => ItemObject | null;

export { getItemSlot };

/**
 * Get the item at a specific index
 * Returns null if there is no item at that index
 * If there is an item, return an object of the format { name: string; amount: PNull<number>; attributes: ItemAttributes; }
 *
 * @param {PlayerId} playerId
 * @param {number} itemSlotIndex
 * @returns {PNull<InvenItem>}
 *
 * getItemSlot(playerId, itemSlotIndex)
 */
