import { MobType } from "../../../type/index";
type JumpCountDictionary = Record<MobType, number>;
export type JumpCount<K extends MobType> = JumpCountDictionary[K];
export {};
