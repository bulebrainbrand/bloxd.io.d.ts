import { MobType } from "../../../type/index";
type AttackEffectDurationDictionary = Record<MobType, number>;
export type AttackEffectDuration<K extends MobType> = AttackEffectDurationDictionary[K];
export {};
//# sourceMappingURL=attackEffectDuration.d.ts.map