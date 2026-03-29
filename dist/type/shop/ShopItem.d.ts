import { ShopItemBadgeType, ShopItemUserInput } from "../index";
import { CustomTextStyling, StringColor } from "../index";
export type ShopItem = {
    image: string;
    cost?: number;
    currency?: string;
    amount?: number;
    imageColour?: StringColor;
    canBuy?: boolean;
    isSelected?: boolean;
    buyButtonText?: string | CustomTextStyling;
    customTitle?: string | CustomTextStyling;
    description?: string | CustomTextStyling;
    onBoughtMessage?: string | CustomTextStyling;
    redDot?: boolean;
    forceRemoveRedDot?: boolean;
    badge?: {
        text: string | CustomTextStyling;
        type: ShopItemBadgeType;
    };
    userInput?: ShopItemUserInput;
    sell?: boolean;
    sortPriority?: number;
    hidden?: boolean;
};
