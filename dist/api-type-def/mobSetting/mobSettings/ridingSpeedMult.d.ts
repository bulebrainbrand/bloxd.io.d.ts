import { MobType } from "@type";
type RidingSpeedMultDictionary = Record<MobType, number>;
export type RidingSpeedMult<K extends MobType> = RidingSpeedMultDictionary[K];
export {};
//# sourceMappingURL=ridingSpeedMult.d.ts.map