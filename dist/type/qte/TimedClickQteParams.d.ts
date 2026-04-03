import { CustomTextStyling, Icon } from "../index";
export type TimedClickQteParams = {
    timeWindow: number;
    icon: Icon;
    label: CustomTextStyling;
    showTimer: boolean;
    scale?: number;
    rotation?: number;
    breatheCenter?: boolean;
};
