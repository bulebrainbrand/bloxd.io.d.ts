import { EntityName } from "./index";
export type TranslatedText = {
    translationKey: string;
    params?: Record<string, string | number | boolean | EntityName>;
};
