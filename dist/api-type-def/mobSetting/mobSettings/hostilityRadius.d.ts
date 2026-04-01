import { MobType } from "../../../type/index";
type HostilityRadiusDictionary = Record<MobType, number>;
export type HostilityRadius<K extends MobType> = HostilityRadiusDictionary[K];
export {};
