import { ShopItemBadgeType, ShopItemUserInput } from "@type";
import { CustomTextStyling, StringColor } from "@type";

export type ShopItem = {
  image: string;
  cost?: number;
  currency?: string;
  amount?: number; // Display amount shown on the shop tile image (0 and 1 are not displayed)
  imageColour?: StringColor;
  canBuy?: boolean;
  isSelected?: boolean;
  buyButtonText?: string | CustomTextStyling;
  customTitle?: string | CustomTextStyling;
  description?: string | CustomTextStyling;
  onBoughtMessage?: string | CustomTextStyling;
  redDot?: boolean;
  forceRemoveRedDot?: boolean;
  badge?: { text: string | CustomTextStyling; type: ShopItemBadgeType };
  userInput?: ShopItemUserInput;
  sell?: boolean; // Optional, defaults to false. If true, the sign of "cost" is flipped. So a "cost" of -25 would give the player 25 currency AND be displayed as "25" (instead of -25)
  sortPriority?: number; // Descending, bigger number means closer to the top
  hidden?: boolean;
};
