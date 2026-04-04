import { ItemName } from "@type";
export type RecipesForItem = {
    requires: {
        items: ItemName[];
        amt: number;
    }[];
    produces: number;
    station?: string | string[];
    onCraftedAura?: number;
    isStarterRecipe?: boolean;
}[];
//# sourceMappingURL=RecipesForItem.d.ts.map