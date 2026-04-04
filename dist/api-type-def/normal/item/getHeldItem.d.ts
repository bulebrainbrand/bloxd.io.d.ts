import { ItemObject, PlayerId } from "@type";
/**
 * Get the currently held item of a player
 * Returns null if no item is being held
 * If an item is held, return an object of the format {name: itemName, amount: amountOfItem}
 *
 * @param {PlayerId} playerId
 * @returns {ItemObject | null}
 */
declare const getHeldItem: (playerId: PlayerId) => ItemObject | null;
export { getHeldItem };
/**
 * Get the currently held item of a player
 * Returns null if no item is being held
 * If an item is held, return an object of the format {name: itemName, amount: amountOfItem}
 *
 * @param {PlayerId} playerId
 * @returns {PNull<InvenItem>}
 *
 * getHeldItem(playerId)
 */
//# sourceMappingURL=getHeldItem.d.ts.map