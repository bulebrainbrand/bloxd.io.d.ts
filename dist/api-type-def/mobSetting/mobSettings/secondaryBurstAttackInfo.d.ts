import { MobType } from "@type";
type SecondaryBurstAttackInfoDictionary = Record<MobType, {
    burstAttackIntervals: readonly number[];
} | null>;
export type SecondaryBurstAttackInfo<K extends MobType> = SecondaryBurstAttackInfoDictionary[K];
export {};
//# sourceMappingURL=secondaryBurstAttackInfo.d.ts.map