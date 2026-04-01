import { MobType } from "../../../type/index";
type SwingArmOnAttackDictionary = Record<MobType, boolean>;
export type SwingArmOnAttack<K extends MobType> = SwingArmOnAttackDictionary[K];
export {};
