import { MobType } from "@type";
type AttackEffectDurationDictionary = Record<MobType, number>;
export type AttackEffectDuration<K extends MobType> = AttackEffectDurationDictionary[K];
export {};
//# sourceMappingURL=attackEffectDuration.d.ts.map