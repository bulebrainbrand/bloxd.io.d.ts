import { MobType } from "@type";

type AttackImpulseDictionary = Record<MobType, number>;

export type AttackImpulse<K extends MobType> = AttackImpulseDictionary[K];
