import { MobType } from "../../../type/index";
type OnTamedHealthMultiplierDictionary = Record<MobType, number>;
export type OnTamedHealthMultiplier<K extends MobType> = OnTamedHealthMultiplierDictionary[K];
export {};
