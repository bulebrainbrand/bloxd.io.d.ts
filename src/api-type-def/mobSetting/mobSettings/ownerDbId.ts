import { MobType } from "@type";

type OwnerDbIdDictionary = Record<MobType, string | null>;

export type OwnerDbId<K extends MobType> = OwnerDbIdDictionary[K];
