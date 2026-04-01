import { MobType } from "../../../type/index";
type IsRideableDictionary = Record<MobType, boolean>;
export type IsRideable<K extends MobType> = IsRideableDictionary[K];
export {};
