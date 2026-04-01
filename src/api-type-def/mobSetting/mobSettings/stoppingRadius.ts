import { MobType } from "@type";

type StoppingRadiusDictionary = Record<MobType, number>;

export type StoppingRadius<K extends MobType> = StoppingRadiusDictionary[K];
