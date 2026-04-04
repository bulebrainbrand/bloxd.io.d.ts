import { MobType } from "@type";
type SwingArmOnAttackDictionary = Record<MobType, boolean>;
export type SwingArmOnAttack<K extends MobType> = SwingArmOnAttackDictionary[K];
export {};
//# sourceMappingURL=swingArmOnAttack.d.ts.map