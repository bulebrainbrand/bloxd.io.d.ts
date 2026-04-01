import { MobType } from "@type";
type NameDictionary = Record<MobType, string>;
export type Name<K extends MobType> = NameDictionary[K];
