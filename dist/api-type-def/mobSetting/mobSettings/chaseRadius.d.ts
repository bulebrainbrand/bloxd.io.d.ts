import { MobType } from "../../../type/index";
type ChaseRadiusDictionary = Record<MobType, number>;
export type ChaseRadius<K extends MobType> = ChaseRadiusDictionary[K];
export {};
