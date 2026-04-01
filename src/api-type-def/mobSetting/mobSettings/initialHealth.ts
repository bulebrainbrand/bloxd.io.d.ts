import { MobType } from "@type";

type InitialHealthDictionary = Record<MobType, number>;

export type InitialHealth<K extends MobType> = InitialHealthDictionary[K];
