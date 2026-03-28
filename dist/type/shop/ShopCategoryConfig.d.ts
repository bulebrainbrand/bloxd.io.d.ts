import { CustomTextStyling } from "..";
export type ShopCategoryConfig = Partial<{
    autoSelectCategory: boolean;
    customTitle: string;
    redDot: boolean;
    forceRemoveRedDot: boolean;
    sortPriority: number;
    description: string | CustomTextStyling;
}>;
