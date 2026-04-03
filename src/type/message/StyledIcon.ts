import { Icon, StringColor } from "@type";

export type StyledIcon = {
  icon: Icon;
  style?: {
    color?: StringColor;
    colour?: StringColor;
    fontSize?: string;
    opacity?: number;
  };
};
