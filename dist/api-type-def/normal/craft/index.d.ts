export declare const CraftApis: {
    editItemCraftingRecipes: (playerId: import("../../..").PlayerId, itemName: import("../../..").ItemName, recipesForItem: import("../../..").RecipesForItem) => void;
    removeItemCraftingRecipes: (playerId: import("../../..").PlayerId, itemName: null | import("../../..").ItemName) => void;
    resetItemCraftingRecipes: (playerId: import("../../..").PlayerId, itemName: import("../../..").ItemName | null) => void;
};
