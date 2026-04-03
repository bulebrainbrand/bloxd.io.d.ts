import { GravityBarQteParams, PrecisionBarQteParams, ProgressBarQteParams, RhythmClickQteParams, TimedClickQteParams } from "../index";
export type QTEClientParameters = {
    type: "rhythmClick";
    parameters: RhythmClickQteParams;
} | {
    type: "percisionBar";
    parameters: PrecisionBarQteParams;
} | {
    type: "gravityBar";
    parameters: GravityBarQteParams;
} | {
    type: "timedClick";
    parameters: TimedClickQteParams;
} | {
    type: "progressBar";
    parameters: ProgressBarQteParams;
};
