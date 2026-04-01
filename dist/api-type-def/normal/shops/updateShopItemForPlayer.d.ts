import { PlayerId, ShopCategoryKey, ShopItemKey, ShopItem } from "../../../type/index";
/**
 * Update selected properties of an existing shop item for a specific player.
 * For example, { canBuy: true } to allow this player to purchase the item.
 * Throws an error if the item does not exist.
 *
 * @param {PlayerId} playerId - The player to update the item for
 * @param {ShopCategoryKey} categoryKey - The key of the category containing the item
 * @param {ShopItemKey} itemKey - The unique key for the item
 * @param {Partial<ShopItem>} changes - Partial shop item properties to update
 * @returns {void}
 */
declare const updateShopItemForPlayer: (playerId: PlayerId, categoryKey: ShopCategoryKey, itemKey: ShopItemKey, changes: Partial<ShopItem>) => void;
export { updateShopItemForPlayer };
/**
 * Update selected properties of an existing shop item for a specific player.
 * For example, { canBuy: true } to allow this player to purchase the item.
 * Throws an error if the item does not exist.
 *
 * @param {PlayerId} playerId - The player to update the item for
 * @param {ShopCategoryKey} categoryKey - The key of the category containing the item
 * @param {ShopItemKey} itemKey - The unique key for the item
 * @param {Partial<ShopItem>} changes - Partial shop item properties to update
 * @returns {void}
 *
 * updateShopItemForPlayer(playerId, categoryKey, itemKey, changes)
 */
