import { MobType } from "../../../type/index";
type StoppingRadiusDictionary = Record<MobType, number>;
export type StoppingRadius<K extends MobType> = StoppingRadiusDictionary[K];
export {};
