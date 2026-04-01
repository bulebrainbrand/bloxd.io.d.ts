import { MobType } from "../../../type/index";
type BaseJumpImpulseYDictionary = Record<MobType, number>;
export type BaseJumpImpulseY<K extends MobType> = BaseJumpImpulseYDictionary[K];
export {};
