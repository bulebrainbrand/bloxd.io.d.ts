import { ShopCategoryKey, ShopItem, ShopItemKey } from "../../../type/index";
interface CreateShopItemInterface {
    /**
     * Create a new shop item under the given category.
     * Will create a new category if it does not exist.
     * If the shop item already exists then it will be replaced.
     * If any per-player overrides exist under the same categoryKey and itemKey then they will be deleted.
     *
     * @param {ShopCategoryKey} categoryKey - The key of the category to create the item in
     * @param {ShopItemKey} itemKey - The unique key for the item
     * @param {ShopItem} item - The shop item to create (will be mutated)
     * @returns {void}
     */
    createShopItem(categoryKey: ShopCategoryKey, itemKey: ShopItemKey, item: ShopItem): void;
}
export default CreateShopItemInterface;
