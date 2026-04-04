import { Coordinate } from "@type";
/**
 * Set the item in a standard chest slot.
 *
 * @param {Coordinate} chestPos
 * @param {number} idx
 * @param {string} itemName
 * @param {number} itemAmount
 * @param {string} [attributes]
 * @returns {void}
 */
declare const setStandardChestItemSlot: (chestPos: Coordinate, idx: number, itemName: string, itemAmount?: number, playerId?: number, attributes?: any) => void;
export { setStandardChestItemSlot };
/**
 * @param {number[]} chestPos
 * @param {number} idx - 0-indexed
 * @param {ItemName} itemName - Can be 'Air', in which case itemAmount will be ignored and the slot will be cleared.
 * @param {number} [itemAmount] - -1 for infinity. Should not be set, or null, for items that are not stackable.
 * @param {PlayerId} [playerId] - The player who is interacting with the chest.
 * @param {ItemAttributes} [attributes] - An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has.
 * @returns {void}
 *
 * setStandardChestItemSlot(chestPos, idx, itemName, itemAmount, playerId, attributes)
 */
//# sourceMappingURL=setStandardChestItemSlot.d.ts.map