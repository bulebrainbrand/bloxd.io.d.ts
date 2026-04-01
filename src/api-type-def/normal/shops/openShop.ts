// TODO: make this api

/**
 * Open the shop UI for a player
 *
 * @param {PlayerId} playerId
 * @param {boolean} [toggle] - Whether to close the shop if it's already open
 * @param {PNull<ShopCategoryKey>} [forceCategoryKey] - If set, will change the shop to this category
 * @param {boolean} [onlyIfNonEmpty] - If true, will only open the shop if the category (or shop, if no category is provided) is non-empty
 * @returns {void}
 *
 * openShop(playerId, toggle, forceCategoryKey, onlyIfNonEmpty);
 */
