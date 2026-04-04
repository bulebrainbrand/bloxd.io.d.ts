import { MobType } from "@type";
type MinFollowingRadiusDictionary = Record<MobType, number>;
export type MinFollowingRadius<K extends MobType> = MinFollowingRadiusDictionary[K];
export {};
//# sourceMappingURL=minFollowingRadius.d.ts.map