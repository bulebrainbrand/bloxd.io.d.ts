import { PlayerId } from "../../../type/index";
/**
 * Get the item at a specific index
 *
 * @param {PlayerId} playerId
 * @param {number} itemSlotIndex
 * @returns {any} - The item information at the slot
 */
declare const getItemSlot: (playerId: PlayerId, itemSlotIndex: number) => any;
export { getItemSlot };
