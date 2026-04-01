import { MobType } from "@type";
type MaxHealthDictionary = Record<MobType, number>;
export type MaxHealth<K extends MobType> = MaxHealthDictionary[K];
