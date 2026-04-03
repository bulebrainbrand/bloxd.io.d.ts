import { CustomTextStyling, Icon } from "../index";
export type RhythmClickQteParams = {
    requiredSuccesses: number;
    shrinkDurationMs: number;
    toleranceFraction: number;
    maxMisses?: number;
    label: CustomTextStyling;
    icon?: Icon;
};
