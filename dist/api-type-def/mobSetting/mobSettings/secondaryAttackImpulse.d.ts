import { MobType } from "../../../type/index";
type SecondaryAttackImpulseDictionary = Record<MobType, number>;
export type SecondaryAttackImpulse<K extends MobType> = SecondaryAttackImpulseDictionary[K];
export {};
