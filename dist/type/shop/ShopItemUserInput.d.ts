import { PlayerId } from "../index";
export type ShopItemUserInput = {
    type: "text";
    placeholderText?: string;
    wordCharsOnly?: boolean;
    initialValue?: string;
} | {
    type: "number";
    placeholderText?: string;
    initialValue?: string;
} | {
    type: "dropdown";
    dropdownOptions: readonly (string | {
        option: string;
        cost: number;
    })[];
    shouldResetSelectionOnOptionsChange?: boolean;
    initialValue?: string;
} | {
    type: "player";
    excludedPlayers?: PlayerId[];
} | {
    type: "color";
    initialValue?: string;
};
//# sourceMappingURL=ShopItemUserInput.d.ts.map