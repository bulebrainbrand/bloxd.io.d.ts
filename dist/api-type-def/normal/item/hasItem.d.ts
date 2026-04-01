import { Item, PlayerId } from "../../../type/index";
/**
 * Whether a player has an item
 *
 * @param {PlayerId} playerId
 * @param {Item} itemName
 * @returns {boolean}
 */
declare const hasItem: (playerId: PlayerId, itemName: Item) => boolean;
export { hasItem };
/**
 * Whether a player has an item
 *
 * @param {PlayerId} playerId
 * @param {ItemName} itemName
 * @returns {boolean} - bool
 *
 * hasItem(playerId, itemName)
 */
