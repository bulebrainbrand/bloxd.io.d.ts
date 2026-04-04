import { MobType } from "@type";
type HostilityRadiusDictionary = Record<MobType, number>;
export type HostilityRadius<K extends MobType> = HostilityRadiusDictionary[K];
export {};
//# sourceMappingURL=hostilityRadius.d.ts.map