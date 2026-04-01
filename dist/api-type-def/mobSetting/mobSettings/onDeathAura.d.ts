import { MobType } from "../../../type/index";
type OnDeathAuraDictionary = Record<MobType, number>;
export type OnDeathAura<K extends MobType> = OnDeathAuraDictionary[K];
export {};
