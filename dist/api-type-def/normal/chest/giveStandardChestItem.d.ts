import { Coordinate, ItemAttributes, ItemName, PlayerId } from "../../../type/index";
/**
 * Give a standard chest an item and a certain amount of that item.
 * Returns the amount of item added to the chest.
 *
 * @param {Coordinate} chestPos
 * @param {ItemName} itemName
 * @param {number} itemAmount
 * @param {PlayerId} playerId - The player who is interacting with the chest.
 * @param {ItemAttributes} attributes - An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has.
 * @returns {number}
 */
declare const giveStandardChestItem: (chestPos: Coordinate, itemName: ItemName, itemAmount?: number, playerId?: PlayerId, attributes?: ItemAttributes) => number;
export { giveStandardChestItem };
/**
 * Give a standard chest an item and a certain amount of that item.
 * Returns the amount of item added to the chest.
 *
 * @param {number[]} chestPos
 * @param {ItemName} itemName
 * @param {number} [itemAmount]
 * @param {PlayerId} [playerId] - The player who is interacting with the chest.
 * @param {ItemAttributes} [attributes] - An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has.
 * @returns {number}
 *
 * giveStandardChestItem(chestPos, itemName, itemAmount, playerId, attributes)
 */
