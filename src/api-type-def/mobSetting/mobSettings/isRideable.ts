import { MobType } from "@type";

type IsRideableDictionary = Record<MobType, boolean>;

export type IsRideable<K extends MobType> = IsRideableDictionary[K];
