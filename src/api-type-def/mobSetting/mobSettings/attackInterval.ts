import { MobType } from "@type";

type AttackIntervalDictionary = Record<MobType, number>;

export type AttackInterval<K extends MobType> = AttackIntervalDictionary[K];
