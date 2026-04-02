export declare const ShopApis: {
    showShopTutorial: (playerId: import("../../..").PlayerId) => void;
    createShopItem: (categoryKey: import("../../..").ShopCategoryKey, itemKey: import("../../..").ShopItemKey, item: import("../../..").ShopItem) => void;
    updateShopItem: (categoryKey: import("../../..").ShopCategoryKey, itemKey: import("../../..").ShopItemKey, changes: Partial<import("../../..").ShopItem>) => void;
    deleteShopItem: (categoryKey: import("../../..").ShopCategoryKey, itemKey: import("../../..").ShopItemKey) => void;
    configureShopCategory: (categoryKey: import("../../..").ShopCategoryKey, config: import("../../..").ShopCategoryConfig) => void;
    createShopItemForPlayer: (playerId: import("../../..").PlayerId, categoryKey: import("../../..").ShopCategoryKey, itemKey: import("../../..").ShopItemKey, item: import("../../..").ShopItem) => void;
    updateShopItemForPlayer: (playerId: import("../../..").PlayerId, categoryKey: import("../../..").ShopCategoryKey, itemKey: import("../../..").ShopItemKey, changes: Partial<import("../../..").ShopItem>) => void;
    resetShopItemForPlayer: (playerId: import("../../..").PlayerId, categoryKey: import("../../..").ShopCategoryKey, itemKey: import("../../..").ShopItemKey) => void;
    configureShopCategoryForPlayer: (playerId: import("../../..").PlayerId, categoryKey: import("../../..").ShopCategoryKey, config: import("../../..").ShopCategoryConfig) => void;
    sendOverShopInfo: (playerId: import("../../..").PlayerId, info: string | import("../../..").CustomTextStyling) => void;
    openShop: (playerId: import("../../..").PlayerId, toggle?: boolean, forceCategoryKey?: import("../../..").ShopCategoryKey | null, onlyIfNonEmpty?: boolean) => void;
};
