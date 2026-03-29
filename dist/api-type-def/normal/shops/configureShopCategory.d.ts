import { ShopCategoryConfig, ShopCategoryKey } from "../../../type/index";
/**
 * Set properties of a shop category.
 *
 * @param {ShopCategoryKey} categoryKey - The key of the category to configure
 * @param {ShopCategoryConfig} config - Category configuration properties
 * @returns {void}
 */
declare const configureShopCategory: (categoryKey: ShopCategoryKey, config: ShopCategoryConfig) => void;
export { configureShopCategory };
