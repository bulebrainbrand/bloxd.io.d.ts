import { ItemAttributes, ItemName, PlayerId } from "../../../type/index";
/**
 * Give a player an item and a certain amount of that item.
 *
 * @param {PlayerId} playerId
 * @param {ItemName} itemName
 * @param {number} itemAmount
 * @param {ItemAttributes} attributes
 * @returns {void}
 */
declare const giveItem: (playerId: PlayerId, itemName: ItemName, itemAmount: number, attributes: ItemAttributes) => void;
export { giveItem };
