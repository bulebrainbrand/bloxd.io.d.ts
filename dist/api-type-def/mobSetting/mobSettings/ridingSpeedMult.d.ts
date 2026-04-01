import { MobType } from "../../../type/index";
type RidingSpeedMultDictionary = Record<MobType, number>;
export type RidingSpeedMult<K extends MobType> = RidingSpeedMultDictionary[K];
export {};
