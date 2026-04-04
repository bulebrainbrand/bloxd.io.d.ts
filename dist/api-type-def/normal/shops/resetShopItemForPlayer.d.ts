import { PlayerId, ShopCategoryKey, ShopItemKey } from "@type";
/**
 * Delete a specific player's overrides for a shop item.
 * Like other methods, it doesn't matter whether the overrides were created
 * using createShopItemForPlayer or by using updateShopItemForPlayer instead.
 * This method does nothing if the overrides don't exist or are defined internally by the engine.
 *
 * @param {PlayerId} playerId - The player to reset the item for
 * @param {ShopCategoryKey} categoryKey - The key of the category containing the item
 * @param {ShopItemKey} itemKey - The unique key for the item
 * @returns {void}
 */
declare const resetShopItemForPlayer: (playerId: PlayerId, categoryKey: ShopCategoryKey, itemKey: ShopItemKey) => void;
export { resetShopItemForPlayer };
/**
 * Delete a specific player's overrides for a shop item.
 * Like other methods, it doesn't matter whether the overrides were created
 * using createShopItemForPlayer or by using updateShopItemForPlayer instead.
 * This method does nothing if the overrides don't exist or are defined internally by the engine.
 *
 * @param {PlayerId} playerId - The player to reset the item for
 * @param {ShopCategoryKey} categoryKey - The key of the category containing the item
 * @param {ShopItemKey} itemKey - The unique key for the item
 * @returns {void}
 *
 * resetShopItemForPlayer(playerId, categoryKey, itemKey)
 */
//# sourceMappingURL=resetShopItemForPlayer.d.ts.map