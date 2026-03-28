import { StringColor } from "../index";
export type StyledIcon = {
    icon: string;
    style?: {
        color?: StringColor;
        colour?: StringColor;
        fontSize?: string;
        opacity?: number;
    };
};
