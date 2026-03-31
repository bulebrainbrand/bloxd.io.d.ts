import { Item, PlayerId } from "../../../type/index";
/**
 * The amount of an itemName a player has.
 * Returns 0 if the player has none, and a negative number if infinite.
 *
 * @param {PlayerId} playerId
 * @param {Item} itemName
 * @returns {number}
 */
declare const getInventoryItemAmount: (playerId: PlayerId, itemName: Item) => number;
export { getInventoryItemAmount };
