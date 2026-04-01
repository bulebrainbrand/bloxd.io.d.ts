import { MobType } from "../../../type/index";
type TerritoryRadiusDictionary = Record<MobType, number>;
export type TerritoryRadius<K extends MobType> = TerritoryRadiusDictionary[K];
export {};
