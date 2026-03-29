import { PlayerId, ShopCategoryConfig, ShopCategoryKey } from "@type";

interface ConfigureShopCategoryForPlayerInterface {
  /**
   * Configure a shop category for a specific player.
   *
   * @param {PlayerId} playerId - The player to configure the category for
   * @param {ShopCategoryKey} categoryKey - The key of the category to configure
   * @param {ShopCategoryConfig} config - Category configuration properties
   * @returns {void}
   */
  configureShopCategoryForPlayer(
    playerId: PlayerId,
    categoryKey: ShopCategoryKey,
    config: ShopCategoryConfig,
  ): void;
}

export default ConfigureShopCategoryForPlayerInterface;
