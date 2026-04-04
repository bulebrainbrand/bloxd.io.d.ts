import { MobType } from "@type";
type OnTamedHealthMultiplierDictionary = Record<MobType, number>;
export type OnTamedHealthMultiplier<K extends MobType> = OnTamedHealthMultiplierDictionary[K];
export {};
//# sourceMappingURL=onTamedHealthMultiplier.d.ts.map