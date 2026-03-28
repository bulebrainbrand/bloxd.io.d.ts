import { ShopCategoryKey, ShopItemKey } from "@type";

interface DeleteShopItemInterface {
  /**
   * Delete an existing shop item.
   * Throws an error if the item does not exist.
   * Will also delete all per-player overrides for the shop item.
   *
   * @param {ShopCategoryKey} categoryKey - The key of the category containing the item
   * @param {ShopItemKey} itemKey - The unique key for the item
   * @returns {void}
   */
  deleteShopItem(categoryKey: ShopCategoryKey, itemKey: ShopItemKey): void;
}

export default DeleteShopItemInterface;
