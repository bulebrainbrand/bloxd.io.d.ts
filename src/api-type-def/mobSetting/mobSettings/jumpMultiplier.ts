import { MobType } from "@type";

type JumpMultiplierDictionary = Record<MobType, number>;

export type JumpMultiplier<K extends MobType> = JumpMultiplierDictionary[K];
