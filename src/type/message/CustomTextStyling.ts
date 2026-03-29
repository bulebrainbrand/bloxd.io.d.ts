import { EntityName, StyledIcon, StyledText, TranslatedText } from "./index";

export type CustomTextStyling = (
  | string
  | EntityName
  | TranslatedText
  | StyledIcon
  | StyledText
)[];
