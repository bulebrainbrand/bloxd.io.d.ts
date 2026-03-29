import { EntityName, TextStyle, TranslatedText } from "./index";
export type StyledText = {
    str: string | EntityName | TranslatedText;
    style?: TextStyle;
    clickableUrl?: string;
};
