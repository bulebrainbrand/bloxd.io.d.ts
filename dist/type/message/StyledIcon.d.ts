import { Icon, StringColor } from "../index";
export type StyledIcon = {
    icon: Icon;
    style?: {
        color?: StringColor;
        colour?: StringColor;
        fontSize?: string;
        opacity?: number;
    };
};
