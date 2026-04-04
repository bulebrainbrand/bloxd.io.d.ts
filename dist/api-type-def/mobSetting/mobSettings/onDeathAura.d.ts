import { MobType } from "@type";
type OnDeathAuraDictionary = Record<MobType, number>;
export type OnDeathAura<K extends MobType> = OnDeathAuraDictionary[K];
export {};
//# sourceMappingURL=onDeathAura.d.ts.map