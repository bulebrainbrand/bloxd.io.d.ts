import { MobType, PlayerDbId } from "@type";

type OwnerDbIdDictionary = Record<MobType, PlayerDbId | null>;

export type OwnerDbId<K extends MobType> = OwnerDbIdDictionary[K];
