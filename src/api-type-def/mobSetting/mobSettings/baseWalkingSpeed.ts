import { MobType } from "@type";

type BaseWalkingSpeedDictionary = Record<MobType, number>;

export type BaseWalkingSpeed<K extends MobType> = BaseWalkingSpeedDictionary[K];
