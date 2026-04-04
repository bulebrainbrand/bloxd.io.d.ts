import { MobType } from "@type";
type RunAwayRadiusDictionary = Record<MobType, number>;
export type RunAwayRadius<K extends MobType> = RunAwayRadiusDictionary[K];
export {};
//# sourceMappingURL=runAwayRadius.d.ts.map