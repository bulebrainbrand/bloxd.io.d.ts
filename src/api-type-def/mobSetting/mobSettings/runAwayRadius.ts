import { MobType } from "@type";

type RunAwayRadiusDictionary = Record<MobType, number>;

export type RunAwayRadius<K extends MobType> = RunAwayRadiusDictionary[K];
