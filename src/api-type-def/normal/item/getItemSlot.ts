import { PlayerId } from "@type";

/**
 * Get the item at a specific index
 *
 * @param {PlayerId} playerId
 * @param {number} itemSlotIndex
 * @returns {any} - The item information at the slot
 */
declare const getItemSlot: (
  playerId: PlayerId,
  itemSlotIndex: number,
) => {
  name: string;
  amount: number;
  attributes: Record<string, unknown>;
} | null;

export { getItemSlot };
