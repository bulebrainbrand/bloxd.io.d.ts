import { PlayerId } from "..";

export type ShopItemUserInput =
  | {
      type: "text";
      placeholderText?: string;
      wordCharsOnly?: boolean;
      initialValue?: string;
    } // wordCharsOnly defaults to false. If true, only allows \w character (alphanumeric and _). initialValue always takes precedence as the text input value when set.
  | { type: "number"; placeholderText?: string; initialValue?: string }
  | {
      type: "dropdown";
      dropdownOptions: readonly (string | { option: string; cost: number })[];
      shouldResetSelectionOnOptionsChange?: boolean; // Defaults to false. If true, the selection will reset to the first option when dropdownOptions changes.
      initialValue?: string;
    }
  | { type: "player"; excludedPlayers?: PlayerId[] } // Defaults to excluding the current player
  | { type: "color"; initialValue?: string };
