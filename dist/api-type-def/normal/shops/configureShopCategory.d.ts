import { ShopCategoryConfig, ShopCategoryKey } from "@type";
interface ConfigureShopCategory {
    /**
     * Set properties of a shop category.
     *
     * @param {ShopCategoryKey} categoryKey - The key of the category to configure
     * @param {ShopCategoryConfig} config - Category configuration properties
     * @returns {void}
     */
    configureShopCategory(categoryKey: ShopCategoryKey, config: ShopCategoryConfig): void;
}
export default ConfigureShopCategory;
