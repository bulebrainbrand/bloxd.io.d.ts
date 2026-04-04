import { MobType } from "../../../type/index";
type WalkingSpeedMultiplierDictionary = Record<MobType, number>;
export type WalkingSpeedMultiplier<K extends MobType> = WalkingSpeedMultiplierDictionary[K];
export {};
//# sourceMappingURL=walkingSpeedMultiplier.d.ts.map