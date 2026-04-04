import { ItemAttributes } from "@type";
/**
 * Set the item in a player's moonstone chest slot
 *
 * @param {PlayerId} playerId
 * @param {number} idx
 * @param {string} itemName
 * @param {number} itemAmount
 * @param {ItemAttributes} attributes
 * @returns {void}
 */
declare const setMoonstoneChestItemSlot: (playerId: number, idx: number, itemName: string, itemAmount?: number, attributes?: ItemAttributes) => void;
export { setMoonstoneChestItemSlot };
/**
 * Moonstone chests are a type of chest where a player accesses the same contents no matter the location of the moonstone chest
 *
 * @param {PlayerId} playerId
 * @param {number} idx - 0-indexed
 * @param {ItemName} itemName - Can be 'Air', in which case itemAmount will be ignored and the slot will be cleared.
 * @param {number} [itemAmount] - -1 for infinity. Should not be set, or null, for items that are not stackable.
 * @param {ItemAttributes} [metadata] - An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has.
 * @returns {void}
 *
 * setMoonstoneChestItemSlot(playerId, idx, itemName, itemAmount, metadata)
 */
//# sourceMappingURL=setMoonstoneChestItemSlot.d.ts.map