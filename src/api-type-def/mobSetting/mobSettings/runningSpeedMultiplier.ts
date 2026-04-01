import { MobType } from "@type";

type RunningSpeedMultiplierDictionary = Record<MobType, number>;

export type RunningSpeedMultiplier<K extends MobType> =
  RunningSpeedMultiplierDictionary[K];
