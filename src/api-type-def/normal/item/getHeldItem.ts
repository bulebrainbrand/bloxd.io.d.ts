import { ItemObject, PlayerId } from "@type";

/**
 * Get the currently held item of a player
 * Returns null if no item is being held
 * If an item is held, return an object of the format {name: itemName, amount: amountOfItem}
 *
 * @param {PlayerId} playerId
 * @returns {ItemObject}
 */
declare const getHeldItem: (playerId: PlayerId) => ItemObject;

export { getHeldItem };
