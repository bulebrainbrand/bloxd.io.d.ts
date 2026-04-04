import { MobType } from "@type";
type BurstAttackInfoDictionary = Record<MobType, {
    burstAttackIntervals: readonly number[];
} | null>;
export type BurstAttackInfo<K extends MobType> = BurstAttackInfoDictionary[K];
export {};
//# sourceMappingURL=burstAttackInfo.d.ts.map