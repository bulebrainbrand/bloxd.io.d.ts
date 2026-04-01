import { ItemObject } from "../../../type/index";
/**
 * Get the item in a player's moonstone chest slot. Null if empty
 *
 * @param {PlayerId} playerId
 * @param {number} idx
 * @returns {ItemObject | null}
 */
declare const getMoonstoneChestItemSlot: (playerId: number, idx: number) => ItemObject | null;
export { getMoonstoneChestItemSlot };
/**
 * Get the item in a player's moonstone chest slot. Null if empty
 *
 * Moonstone chests are a type of chest where a player accesses the same contents no matter the location of the moonstone chest
 *
 * @param {PlayerId} playerId
 * @param {number} idx
 * @returns {PNull<InvenItem>}
 *
 * getMoonstoneChestItemSlot(playerId, idx)
 */
