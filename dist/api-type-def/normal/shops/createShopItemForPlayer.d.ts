import { PlayerId, ShopCategoryKey, ShopItem, ShopItemKey } from "../../../type/index";
/**
 * Create a new shop item for a specific player.
 * Will create a new category if it does not exist.
 * Will replace any overrides this player already has for the same item.
 *
 * @param {PlayerId} playerId - The player to create the item for
 * @param {ShopCategoryKey} categoryKey - The key of the category to create the item in
 * @param {ShopItemKey} itemKey - The unique key for the item
 * @param {ShopItem} item - The shop item to create (will be mutated)
 * @returns {void}
 */
declare const createShopItemForPlayer: (playerId: PlayerId, categoryKey: ShopCategoryKey, itemKey: ShopItemKey, item: ShopItem) => void;
export { createShopItemForPlayer };
