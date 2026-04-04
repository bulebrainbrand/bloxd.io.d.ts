import { MobType } from "../../../type/index";
type RunningSpeedMultiplierDictionary = Record<MobType, number>;
export type RunningSpeedMultiplier<K extends MobType> = RunningSpeedMultiplierDictionary[K];
export {};
//# sourceMappingURL=runningSpeedMultiplier.d.ts.map