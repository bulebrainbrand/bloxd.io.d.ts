import { MobType } from "../../../type/index";
type SecondaryAttackDamageDictionary = Record<MobType, number>;
export type SecondaryAttackDamage<K extends MobType> = SecondaryAttackDamageDictionary[K];
export {};
