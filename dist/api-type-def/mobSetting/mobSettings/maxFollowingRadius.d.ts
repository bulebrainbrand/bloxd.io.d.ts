import { MobType } from "../../../type/index";
type MaxFollowingRadiusDictionary = Record<MobType, number>;
export type MaxFollowingRadius<K extends MobType> = MaxFollowingRadiusDictionary[K];
export {};
