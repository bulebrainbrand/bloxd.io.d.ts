import { ItemName, StringColor } from "../index";
import { IngameIconName } from "./IngameIconName";
export type StyledIcon = {
    icon: IngameIconName | ItemName | string;
    style?: {
        color?: StringColor;
        colour?: StringColor;
        fontSize?: string;
        opacity?: number;
    };
};
