import { MobType } from "@type";

type HealthRegenDictionary = Record<
  MobType,
  { amount: number; interval: number; startAfter: number } | null
>;

export type HealthRegen<K extends MobType> = HealthRegenDictionary[K];
