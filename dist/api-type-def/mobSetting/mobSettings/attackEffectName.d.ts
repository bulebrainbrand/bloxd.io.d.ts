import { MobType } from "@type";
type AttackEffectNameDictionary = Record<MobType, string | null>;
export type AttackEffectName<K extends MobType> = AttackEffectNameDictionary[K];
export {};
//# sourceMappingURL=attackEffectName.d.ts.map