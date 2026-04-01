import { MobType } from "@type";

type TerritoryRadiusDictionary = Record<MobType, number>;

export type TerritoryRadius<K extends MobType> = TerritoryRadiusDictionary[K];
