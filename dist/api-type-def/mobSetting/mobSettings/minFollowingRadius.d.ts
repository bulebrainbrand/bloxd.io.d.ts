import { MobType } from "../../../type/index";
type MinFollowingRadiusDictionary = Record<MobType, number>;
export type MinFollowingRadius<K extends MobType> = MinFollowingRadiusDictionary[K];
export {};
//# sourceMappingURL=minFollowingRadius.d.ts.map