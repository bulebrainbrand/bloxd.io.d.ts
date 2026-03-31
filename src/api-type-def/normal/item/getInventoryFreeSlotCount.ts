import { PlayerId } from "@type";

/**
 * Get the amount of free slots in a player's inventory.
 *
 * @param {PlayerId} playerId
 * @returns {number}
 */
declare const getInventoryFreeSlotCount: (playerId: PlayerId) => number;

export { getInventoryFreeSlotCount };

/**
 * Get the amount of free slots in a player's inventory.
 *
 * @param {PlayerId} playerId
 * @returns {number} - number
 *
 * getInventoryFreeSlotCount(playerId)
 */
