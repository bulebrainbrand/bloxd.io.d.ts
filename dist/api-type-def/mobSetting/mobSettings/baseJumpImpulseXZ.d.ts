import { MobType } from "../../../type/index";
type BaseJumpImpulseXZDictionary = Record<MobType, number>;
export type BaseJumpImpulseXZ<K extends MobType> = BaseJumpImpulseXZDictionary[K];
export {};
