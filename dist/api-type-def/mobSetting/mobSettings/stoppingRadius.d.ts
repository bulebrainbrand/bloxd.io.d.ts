import { MobType } from "@type";
type StoppingRadiusDictionary = Record<MobType, number>;
export type StoppingRadius<K extends MobType> = StoppingRadiusDictionary[K];
export {};
//# sourceMappingURL=stoppingRadius.d.ts.map