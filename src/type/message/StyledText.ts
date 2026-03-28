import { EntityName, TextStyle, TranslatedText } from ".";

export type StyledText = {
  str: string | EntityName | TranslatedText;
  style?: TextStyle;
  clickableUrl?: string;
};
