import { ItemName } from "../index";
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
