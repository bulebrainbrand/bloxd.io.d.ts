import { MobType } from "@type";
type BaseWalkingSpeedDictionary = Record<MobType, number>;
export type BaseWalkingSpeed<K extends MobType> = BaseWalkingSpeedDictionary[K];
export {};
//# sourceMappingURL=baseWalkingSpeed.d.ts.map