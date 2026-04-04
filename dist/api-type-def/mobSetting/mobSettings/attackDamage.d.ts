import { MobType } from "../../../type/index";
type AttackDamageDictionary = Record<MobType, number>;
export type AttackDamage<K extends MobType> = AttackDamageDictionary[K];
export {};
//# sourceMappingURL=attackDamage.d.ts.map