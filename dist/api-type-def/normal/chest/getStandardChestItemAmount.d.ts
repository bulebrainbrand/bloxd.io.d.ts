import { Coordinate, ItemName } from "../../../type/index";
/**
 * The amount of an itemName a standard chest has.
 * Returns 0 if the standard chest has none, and a negative number if infinite.
 *
 * @param {Coordinate} chestPos
 * @param {ItemName} itemName
 * @returns {number}
 */
declare const getStandardChestItemAmount: (chestPos: Coordinate, itemName: ItemName) => number;
export { getStandardChestItemAmount };
/**
 * The amount of an itemName a standard chest has.
 * Returns 0 if the standard chest has none, and a negative number if infinite.
 *
 * @param {number[]} chestPos
 * @param {ItemName} itemName
 * @returns {number} - number
 *
 * getStandardChestItemAmount(chestPos, itemName)
 */
//# sourceMappingURL=getStandardChestItemAmount.d.ts.map