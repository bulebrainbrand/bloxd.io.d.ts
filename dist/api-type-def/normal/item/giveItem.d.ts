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
/**
 * Give a player an item and a certain amount of that item.
 * Returns the amount of item added to the users inventory.
 *
 * @param {PlayerId} playerId
 * @param {ItemName} itemName
 * @param {number} [itemAmount]
 * @param {ItemAttributes} [attributes] - An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has.
 * @returns {number}
 *
 * giveItem(playerId, itemName, itemAmount, attributes)
 */
