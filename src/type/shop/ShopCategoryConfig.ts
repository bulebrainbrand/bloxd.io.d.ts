import { CustomTextStyling } from "..";

export type ShopCategoryConfig = Partial<{
  autoSelectCategory: boolean;
  customTitle: string; // Supports translation keys and ordinary text
  redDot: boolean;
  forceRemoveRedDot: boolean;
  sortPriority: number;
  description: string | CustomTextStyling;
}>;
