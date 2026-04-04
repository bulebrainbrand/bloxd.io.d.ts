import { MobType } from "@type";
type AttackDamageDictionary = Record<MobType, number>;
export type AttackDamage<K extends MobType> = AttackDamageDictionary[K];
export {};
//# sourceMappingURL=attackDamage.d.ts.map