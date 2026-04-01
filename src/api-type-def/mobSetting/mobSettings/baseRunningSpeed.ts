import { MobType } from "@type";

type BaseRunningSpeedDictionary = Record<MobType, number>;

export type BaseRunningSpeed<K extends MobType> = BaseRunningSpeedDictionary[K];
