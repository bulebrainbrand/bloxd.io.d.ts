import { MobType } from "@type";
type MaxFollowingRadiusDictionary = Record<MobType, number>;
export type MaxFollowingRadius<K extends MobType> = MaxFollowingRadiusDictionary[K];
export {};
//# sourceMappingURL=maxFollowingRadius.d.ts.map