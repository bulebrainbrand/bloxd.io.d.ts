import { ShopCategoryKey, ShopItem, ShopItemKey } from "@type";

/**
 * Update selected properties of an existing shop item.
 * For example, { canBuy: true } to allow players to purchase the item.
 * Throws an error if the item does not exist.
 *
 * @param {ShopCategoryKey} categoryKey - The key of the category containing the item
 * @param {ShopItemKey} itemKey - The unique key for the item
 * @param {Partial<ShopItem>} changes - Partial shop item properties to update
 * @returns {void}
 */
declare const updateShopItem: (
  categoryKey: ShopCategoryKey,
  itemKey: ShopItemKey,
  changes: Partial<ShopItem>,
) => void;

export { updateShopItem };
