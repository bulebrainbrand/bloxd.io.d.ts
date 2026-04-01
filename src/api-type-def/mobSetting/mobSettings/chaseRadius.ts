import { MobType } from "@type";

type ChaseRadiusDictionary = Record<MobType, number>;

export type ChaseRadius<K extends MobType> = ChaseRadiusDictionary[K];
