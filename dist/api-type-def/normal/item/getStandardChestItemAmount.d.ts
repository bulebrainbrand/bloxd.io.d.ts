import { ItemName } from "../../../type/index";
/**
 * The amount of an itemName a standard chest has.
 * Returns 0 if the standard chest has none, and a negative number if infinite.
 *
 * @param {number[]} chestPos
 * @param {ItemName} itemName
 * @returns {number}
 */
declare const getStandardChestItemAmount: (chestPos: [number, number, number], itemName: ItemName) => number;
export { getStandardChestItemAmount };
