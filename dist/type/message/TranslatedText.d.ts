import { EntityName } from ".";
export type TranslatedText = {
    translationKey: string;
    params?: Record<string, string | number | boolean | EntityName>;
};
